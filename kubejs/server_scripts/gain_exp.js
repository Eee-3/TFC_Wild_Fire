
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

// 玩家进食获得经验的代码
ItemEvents.foodEaten(event => {
    const { player, item } = event;
    
    const tfcData = player.data.get('tfc:player_data');
    
    if (!tfcData) {
        return;
    }

    const foodLevel = player.getFoodLevel(); // 获取TFC饱食度
    const averageNutrition = tfcData.getAverageNutrition(); // 获取平均营养值
    player.tell(`饱食度: ${foodLevel}, 平均营养: ${averageNutrition}`);
    const maxHealth = player.getMaxHealth(); // 获取最大血量
    
    // 计算经验获得量
    const expGain = (foodLevel + averageNutrition) * maxHealth / 2000;
    
    if (expGain > 0 && !isNaN(expGain)) {
        let currentExp = player.persistentData.getDouble('endurance_exp') || 0;
        currentExp += expGain;
        
        player.persistentData.putDouble('endurance_exp', currentExp);
        
        const enduranceLevel = MoreAttributes.getLevel(player, "more_attributes:endurance") || 1;
        let upExp = 100 + 50 * enduranceLevel;
        
        if (currentExp >= upExp) {
            const remainingExp = currentExp - upExp;
            player.persistentData.putDouble('endurance_exp', remainingExp);
            MoreAttributes.upgrade(player, "more_attributes:endurance_level")
            player.tell(`§b你感觉你的体力上升了！当前等级: ${enduranceLevel + 1}`);
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


