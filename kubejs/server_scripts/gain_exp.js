const FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability');
const Nutrient = Java.loadClass('net.dries007.tfc.common.capabilities.food.Nutrient');

PlayerEvents.tick(event => {
    const { player } = event;
    const distan = player.persistentData.getDouble('distanceRd')//调用速度
    const maxWeight = player.getAttributeValue("more_attributes:equip_load_max");  // 获取属性值
    const nowWeight = player.getAttributeValue("more_attributes:equip_load_current");  // 修复调用对象

    // 超重时增加经验
    let nowexp = player.persistentData.getDouble('endurance_exp') || 0;
    if ((maxWeight > 0 && nowWeight / maxWeight > 1 && nowWeight !== 0)&&distan<200) {
        
        const expGain = distan * (Math.min(nowWeight, 2 * maxWeight))*(Math.min(nowWeight, 2 * maxWeight)) / (maxWeight*maxWeight) / 4;
        nowexp += expGain;
        player.persistentData.putDouble('endurance_exp', nowexp);

//player.tell(` ${player.persistentData.getDouble('endurance_exp')}`);
        endurance_proficiency(player, nowexp);  // 传递当前经验
     
    }

}
);

ItemEvents.foodEaten(event => {
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
    let expGain = (hunger + averageNutrition) * maxHealth / 2000;

    if (expGain > 0 && !isNaN(expGain)) {
        let currentExp = player.persistentData.getDouble('endurance_exp') || 0;
        currentExp += expGain;
        player.persistentData.putDouble('endurance_exp', currentExp);

        if (typeof endurance_proficiency === "function") {
            endurance_proficiency(player, currentExp);
        }
    }
});

// 体力升级函数（修改为正确获取和修改属性的方式）
function endurance_proficiency(player, currentExp) {
    // 获取当前等级（假设使用的是属性系统）
    const enduranceLevel = MoreAttributes.getLevel(player,"more_attributes:endurance") || 1;
    const enduranceExp = currentExp;

    // 计算当前等级所需升级经验
    let upExp = 100+50*enduranceLevel;
   

    // 满足升级条件时
    if (enduranceExp >= upExp) {
        const remainingExp = enduranceExp - upExp;
        player.persistentData.putDouble('endurance_exp', remainingExp);

        MoreAttributes.upgrade(player, "more_attributes:endurance_level")


        // 升级反馈
        player.tell(`你感觉你的体力上升了！当前等级: `);
    }
}