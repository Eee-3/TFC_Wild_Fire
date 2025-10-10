const FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability');
const Nutrient = Java.loadClass('net.dries007.tfc.common.capabilities.food.Nutrient');

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
        // player.tell(`distance:${distanceRounded}`)
        if ((maxWeight > 0 && currentWeight / maxWeight > 1 && currentWeight !== 0) && speedRounded > 0 && distanceRounded > 0) {
            let expGain = Math.round(speedRounded * Math.pow((Math.min(currentWeight, 2 * maxWeight)), 2) / (maxWeight * maxWeight) / 2 * 100) / 100
            currentExp += expGain
            player.persistentData.putDouble('endurance_exp', currentExp)
            // player.tell(`currentLevel:${currentLevel}`)
            // player.tell(`currentExp:${currentExp}`)
            // player.tell(`upExp:${upExp}`)
            if (currentExp >= upExp) {
                MoreAttributes.upgrade(player, "endurance", 1)
                currentExp = currentExp - upExp
                player.persistentData.putDouble('endurance_exp', Math.max( currentExp - upExp, 0))
                player.setStatusMessage(Component.translate("message.kubejs.endurance_upgrade", currentLevel + 1))
            }
        }
    }
    lastPos = currentPos
    // player.tell(`speed:${speedRounded}`)
})


function health_proficiency(player, currentExp) {// 生命升级函数（修改为正确获取和修改属性的方式）
    // 获取当前等级（假设使用的是属性系统）
    const healthLevel = MoreAttributes.getLevel(player, "health") || 1;
    const healthExp = currentExp;
    // 计算当前等级所需升级经验
    let upExp = 100 + 50 * healthLevel;


    // 满足升级条件时
    if (healthExp >= upExp) {
        const remainingExp = healthExp - upExp;
        player.persistentData.putDouble('health_exp', remainingExp);

        MoreAttributes.upgrade(player, "health", 1)


        // 升级反馈
        player.setStatusMessage(Component.translate("message.kubejs.health_upgrade", healthLevel))
    }
}
function strength_proficiency(player, damageDealt) {//力量升级
    // 1. 获取基础数据：力量等级、体力等级、负重比例（避免空值报错）
    const strengthLevel = MoreAttributes.getLevel(player, "strength") || 1; // 当前力量等级，默认1级
    const enduranceLevel = MoreAttributes.getLevel(player, "endurance") || 1; // 当前体力等级，默认1级
    const maxStrengthLimit = enduranceLevel + 5; // 力量等级上限：体力等级 + 5

    // 2. 先判断力量等级是否已达上限，达上限则不继续计算经验
    if (strengthLevel >= maxStrengthLimit) {
        player.setStatusMessage("message.kubejs.max_strength_upgrade")
        // 可根据需求添加“等级上限提示”，例如：player.tell("你的力量已达当前体力对应的上限，无法继续提升！");
        return;
    }

    // 3. 计算负重比例（参考体力系统逻辑，避免除以0错误）
    const maxWeight = player.getAttributeValue("more_attributes:equip_load_max") || 1; // 最大负重，默认1（避免后续除0）
    const currentWeight = player.getAttributeValue("more_attributes:equip_load_current") || 0; // 当前负重
    const weightRatio = currentWeight / maxWeight; // 负重比例（0~N，超过1代表超重）

    // 4. 计算力量经验：造成伤害 / (力量等级 × 负重比例)，负重比例为0时按0.1计算（避免除0）
    const validWeightRatio = weightRatio === 0 ? 0.1 : weightRatio; // 防止负重为0时除0
    const strengthExpGain = damageDealt / (strengthLevel * validWeightRatio); // 单次经验获取量
    const currentStrengthExp = player.persistentData.getDouble('strength_exp') || 0; // 当前力量经验，默认0
    const updatedStrengthExp = currentStrengthExp + strengthExpGain; // 更新后总经验

    // 5. 计算当前力量等级的升级所需经验（参考体力升级公式，保持成长曲线一致）
    const levelUpExp = 120 + 60 * strengthLevel; // 升级所需经验：基础120，每级额外+60（可根据需求调整）
    // 6. 处理升级逻辑：若经验达标，循环判断是否可连升（避免单次伤害过高导致多级升级）
    let remainingExp = updatedStrengthExp; // 剩余经验（初始为更新后总经验）
    while (remainingExp >= levelUpExp) {
        // 6.1 扣除当前等级所需经验，更新剩余经验
        remainingExp -= levelUpExp;

        // 6.2 升级力量等级（每次+1）
        MoreAttributes.upgrade(player, "strength", 1);
        player.setStatusMessage(Component.translate("message.kubejs.strength_upgrade", strengthLevel))
        // 6.3 升级后重新计算“新等级的升级所需经验”和“新的力量等级上限”
        const newStrengthLevel = MoreAttributes.getLevel(player, "strength");
        const newLevelUpExp = 120 + 60 * newStrengthLevel;
        const newMaxStrengthLimit = enduranceLevel + 5;

        // 6.4 若升级后力量等级达上限，终止循环（避免超上限升级）
        if (newStrengthLevel >= newMaxStrengthLimit) {
            remainingExp = 0; // 达上限后清空剩余经验（或保留，根据需求调整）
            // player.tell(`你的力量已提升至当前上限！当前力量等级: ${newStrengthLevel}，体力等级: ${enduranceLevel}`);
            break;
        }

        // 6.5 升级反馈（可根据需求保留/删除）
        // player.tell(`你的力量提升了！当前力量等级: ${newStrengthLevel}，距离下一级还需 ${newLevelUpExp} 经验`);
    }

    // 7. 保存最终剩余经验到玩家持久化数据中
    player.persistentData.putDouble('strength_exp', remainingExp);
}


ItemEvents.foodEaten(event => {//生命值吃东西加经验
    const player = event.player;
    const itemStack = event.item;
    if (!player || itemStack.isEmpty()) return;

    let food = FoodCapability.get(itemStack);
    if (!food) return;

    let foodData = food.getData();
    let item = itemStack.getItem();

    let grain = foodData.nutrient(Nutrient.GRAIN);
    let fruit = foodData.nutrient(Nutrient.FRUIT);
    let vegetables = foodData.nutrient(Nutrient.VEGETABLES);
    let protein = foodData.nutrient(Nutrient.PROTEIN);
    let dairy = foodData.nutrient(Nutrient.DAIRY);

    let vanillaFood = item.getFoodProperties ? item.getFoodProperties(itemStack, player) : null;
    let hunger = vanillaFood ? vanillaFood.getNutrition() : 0;

    let averageNutrition = (grain + fruit + vegetables + protein + dairy) / 5.0;
    let maxHealth = player.getMaxHealth();
    let expGain = (hunger + averageNutrition) * maxHealth / 10;
    player.tell(`经验 ${expGain}`);
    if (expGain > 0 && !isNaN(expGain)) {
        let currentExp = player.persistentData.getDouble('health_exp') || 0;
        currentExp += expGain;
        player.persistentData.putDouble('health_exp', currentExp);
        player.tell(`经验当前 ${currentExp}`);
        if (typeof health_proficiency === "function") {
            health_proficiency(player, currentExp);
        }
    }
});

EntityEvents.hurt(event => {
    const { source, entity, damage } = event;
    // 判断伤害来源是否为玩家（避免非玩家伤害触发）
    if (source.getPlayer() != null) {
        const player = source.player; // 获取造成伤害的玩家
        const validDamage = Math.max(damage, 0.1); // 确保伤害为正数（避免0伤害计算）
        strength_proficiency(player, validDamage); // 调用力量升级函数，传入伤害值
    }
});