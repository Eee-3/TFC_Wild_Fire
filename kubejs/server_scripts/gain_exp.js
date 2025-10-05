const FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability');
const Nutrient = Java.loadClass('net.dries007.tfc.common.capabilities.food.Nutrient');
function endurance_proficiency(player, currentExp) {// 体力升级函数（修改为正确获取和修改属性的方式）
    // 获取当前等级（假设使用的是属性系统）
    const enduranceLevel = MoreAttributes.getLevel(player, "endurance") || 1;
    const enduranceExp = currentExp;
    //player.tell(`等级 ${enduranceLevel}`);
    // 计算当前等级所需升级经验
    let upExp = 100 + 50 * enduranceLevel;


    // 满足升级条件时
    if (enduranceExp >= upExp) {
        const remainingExp = enduranceExp - upExp;
        player.persistentData.putDouble('endurance_exp', remainingExp);

        MoreAttributes.upgrade(player, "endurance", 1)


        // 升级反馈
        //player.tell(`你感觉你的体力上升了！当前等级: `);
    }
}
function health_proficiency(player, currentExp) {// 生命升级函数（修改为正确获取和修改属性的方式）
    // 获取当前等级（假设使用的是属性系统）
    const enduranceLevel = MoreAttributes.getLevel(player, "health") || 1;
    const enduranceExp = currentExp;
    //player.tell(`等级 ${enduranceLevel}`);
    // 计算当前等级所需升级经验
    let upExp = 100 + 50 * enduranceLevel;


    // 满足升级条件时
    if (enduranceExp >= upExp) {
        const remainingExp = enduranceExp - upExp;
        player.persistentData.putDouble('health_exp', remainingExp);

        MoreAttributes.upgrade(player, "health", 1)


        // 升级反馈
        player.tell(`你感觉你的生命上升了！当前等级: `);
    }
}
function strength_proficiency(player, damageDealt) {//力量升级
    // 1. 获取基础数据：力量等级、体力等级、负重比例（避免空值报错）
    const strengthLevel = MoreAttributes.getLevel(player, "strength") || 1; // 当前力量等级，默认1级
    const enduranceLevel = MoreAttributes.getLevel(player, "endurance") || 1; // 当前体力等级，默认1级
    const maxStrengthLimit = enduranceLevel + 5; // 力量等级上限：体力等级 + 5

    // 2. 先判断力量等级是否已达上限，达上限则不继续计算经验
    if (strengthLevel >= maxStrengthLimit) {
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
 player.tell(`所需 ${levelUpExp}`);
    // 6. 处理升级逻辑：若经验达标，循环判断是否可连升（避免单次伤害过高导致多级升级）
    let remainingExp = updatedStrengthExp; // 剩余经验（初始为更新后总经验）
    while (remainingExp >= levelUpExp) {
        // 6.1 扣除当前等级所需经验，更新剩余经验
        remainingExp -= levelUpExp;

        // 6.2 升级力量等级（每次+1）
        MoreAttributes.upgrade(player, "strength", 1);

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

PlayerEvents.tick(event => {// 超重时增加经验
    const { player } = event;
    const distan = player.persistentData.getDouble('distanceRd')//调用速度
    const maxWeight = player.getAttributeValue("more_attributes:equip_load_max");  // 获取属性值
    const nowWeight = player.getAttributeValue("more_attributes:equip_load_current");  // 修复调用对象


    let nowexp = player.persistentData.getDouble('endurance_exp') || 0;
    if ((maxWeight > 0 && nowWeight / maxWeight > 1 && nowWeight !== 0) && distan < 200) {

        const expGain = distan * (Math.min(nowWeight, 2 * maxWeight)) * (Math.min(nowWeight, 2 * maxWeight)) / (maxWeight * maxWeight) / 4;
        nowexp += expGain;
        player.persistentData.putDouble('endurance_exp', nowexp);

        //player.tell(` ${player.persistentData.getDouble('endurance_exp')}`);
        endurance_proficiency(player, nowexp);  // 传递当前经验

    }

}
);

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
    if (source.isPlayer() && !entity.isPlayer()) {
        const player = source.player; // 获取造成伤害的玩家
       player.tell(`你造成了伤害 `);
        const validDamage = Math.max(damage, 0.1); // 确保伤害为正数（避免0伤害计算）
        strength_proficiency(player, validDamage); // 调用力量升级函数，传入伤害值
    }
});