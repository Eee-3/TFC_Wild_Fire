
PlayerEvents.tick(event => {
    const { player } = event;
    const distan = player.persistentData.getDouble('distanceRd')//调用速度
    const maxWeight = player.getAttributeValue("more_attributes:equip_load_max");  // 获取属性值
    const nowWeight = player.getAttributeValue("more_attributes:equip_load_current");  // 修复调用对象

    // 超重时增加经验
    let nowexp = player.persistentData.getDouble('endurance_exp') || 0;
    if (maxWeight > 0 && nowWeight / maxWeight > 1 && nowWeight !== 0) {
        const expGain = distan * nowWeight / maxWeight;
        nowexp += expGain;
        player.persistentData.putDouble('endurance_exp', nowexp);

//player.tell(` ${player.persistentData.getDouble('endurance_exp')}`);
        endurance_proficiency(player, nowexp);  // 传递当前经验
     
    }

}
);

// 体力升级函数（修改为正确获取和修改属性的方式）
function endurance_proficiency(player, currentExp) {
    // 获取当前等级（假设使用的是属性系统）
    const enduranceLevel = MoreAttributes.getLevel(player,"more_attributes:endurance") || 1;
    const enduranceExp = currentExp;

    // 计算当前等级所需升级经验
    let upExp = 10;
    for (let i = 1; i <= enduranceLevel; i++) {
        upExp *= 1.2;
    }

    // 满足升级条件时
    if (enduranceExp >= upExp) {
        const remainingExp = enduranceExp - upExp;
        player.persistentData.putDouble('endurance_exp', remainingExp);

        MoreAttributes.upgrade(player, "more_attributes:endurance_level")


        // 升级反馈
        player.tell(`你感觉你的体力上升了！当前等级: `);
    }
}


