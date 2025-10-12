const FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability');
const Nutrient = Java.loadClass('net.dries007.tfc.common.capabilities.food.Nutrient');

/*
技巧:撬锁时获得
耐性:受到伤害获得耐性[受到数值越高的伤害单次加成越高、反之越低（例如受到10颗心的伤害+100经验、1颗心为2）]、死亡时清零
集中:开锁成功和使用远程武器造成伤害获得
敏捷:负重越少增加的经验越多负重100%后每多1%-2%获得经验最低为0，进行跳跃时增加
*/

//体力/敏捷经验获取
PlayerEvents.tick(e => {
    const { player } = e
    const currentPos = {x: player.getX(), y: player.getY(), z: player.getZ()}//当前位置
    const speed = player.getAttributeValue("minecraft:generic.movement_speed")//当前速度
    const speedRounded = Math.round(speed * 100) / 100//当前速度保留两位小数
    const maxWeight = player.getAttributeValue("more_attributes:equip_load_max")//最大载重
    const currentWeight = player.getAttributeValue("more_attributes:equip_load_current")//当前载重
    let currentLevel = Math.max(MoreAttributes.getLevel(player, "endurance"), 10)//当前等级
    let currentExp = player.persistentData.getDouble('endurance_exp')//当前经验
    let upExp = 100 + 50 * currentLevel//升级所需经验

    if (lastPos && !player.isFallFlying()) {
        const distance = Math.sqrt(Math.pow((currentPos.x - lastPos.x), 2) + Math.pow((currentPos.z - lastPos.z), 2))
        let distanceRounded = Math.round(distance * 100) / 100;
        if ((maxWeight > 0 && currentWeight / maxWeight > 1 && currentWeight !== 0) && speedRounded > 0 && distanceRounded > 0) {
            let expGain = Math.round(speedRounded * Math.pow((Math.min(currentWeight, 2 * maxWeight)), 2) / (maxWeight * maxWeight) / 2 * 100) / 100
            currentExp += expGain
            player.persistentData.putDouble('endurance_exp', currentExp)
            // player.tell(`currentLevel:${currentLevel}; expGain ${expGain}; currentExp:${currentExp}; upExp:${upExp}`)
            if (currentExp >= upExp) {
                MoreAttributes.upgrade(player, "endurance", 1)
                player.persistentData.putDouble('endurance_exp', 0)
                player.setStatusMessage(Component.translate("message.kubejs.endurance_upgrade", currentLevel + 1))
            }
        }
    }
    lastPos = currentPos
})

//生命经验获取
ItemEvents.foodEaten(e => {
    const {player, item} = e
    let foodData; try {foodData = FoodCapability.get(item).getData()} catch (error) {return}//如果item没有foodCapability则不计算
    let nutrition = [foodData.nutrient(Nutrient.GRAIN), foodData.nutrient(Nutrient.FRUIT), foodData.nutrient(Nutrient.VEGETABLES), foodData.nutrient(Nutrient.PROTEIN), foodData.nutrient(Nutrient.DAIRY)]//获取item的营养值
    if(!nutrition || nutrition.every(n => n === 0)) {return}//如果营养值全为0则不计算
    let avgNutrition = nutrition.reduce((a, b) => a + b, 0) / nutrition.length//计算营养值平均值
    let foodProperties = item.getItem().foodProperties//获取item的foodProperties
    let saturation = Math.round(foodProperties.getSaturationModifier() * foodProperties.nutrition * 2 * 10) / 10//计算item的饱食值
    let expGain = (saturation + avgNutrition) * player.getMaxHealth() / 10//计算经验值
    const healthLevel = MoreAttributes.getLevel(player, "health") || 10//当前等级
    let currentExp = player.persistentData.getDouble('health_exp')//当前经验
    let upExp = 100 + 50 * healthLevel//升级所需经验
    currentExp += expGain
    player.persistentData.putDouble('health_exp', currentExp)
    // player.tell(`saturation ${saturation}; nutrition ${nutrition}; avgNutrition ${avgNutrition}; expGain ${expGain}; currentExp ${currentExp}, upExp:${upExp}`)
    if (currentExp >= upExp) {
        MoreAttributes.upgrade(player, "health", 1)
        player.persistentData.putDouble('health_exp', currentExp - upExp)
        player.setStatusMessage(Component.translate("message.kubejs.health_upgrade", healthLevel + 1))
    }
})

//力量经验获取
EntityEvents.hurt(e => {
    const { source, damage } = e
    if (source.getPlayer() != null) {
        const player = source.player //获取玩家
        const currentLevel = MoreAttributes.getLevel(player, "strength") || 10//当前力量等级
        const enduranceLevel = MoreAttributes.getLevel(player, "endurance") || 10//当前体力等级
        const maxStrengthLimit = enduranceLevel + 5 //力量等级上限
        if (currentLevel >= maxStrengthLimit) {
            return
        }
        const maxWeight = player.getAttributeValue("more_attributes:equip_load_max")//最大载重
        const currentWeight = player.getAttributeValue("more_attributes:equip_load_current")//当前载重
        let expGain;
        if (currentWeight <= maxWeight) {
            expGain = damage / currentLevel;
        } else if (currentWeight <= 2 * maxWeight) {
            expGain = damage * (currentWeight / maxWeight) / currentLevel;
        } else {
            expGain = 2 * damage / currentLevel;
        }//计算经验值
        let currentExp = player.persistentData.getDouble('strength_exp')//当前经验
        const upExp = 120 + 50 * currentLevel//升级所需经验
        currentExp += expGain
        player.persistentData.putDouble('strength_exp', currentExp)
        // player.tell(`currentLevel:${currentLevel}; damage ${damage}; expGain ${expGain}; currentExp ${currentExp}, upExp:${upExp}`)
        if (currentExp >= upExp) {
            MoreAttributes.upgrade(player, "strength", 1)
            player.persistentData.putDouble('strength_exp', 0);
            player.setStatusMessage(Component.translate("message.kubejs.strength_upgrade", currentLevel + 1))
        }
    }
})

//耐性经验获取
//集中经验获取