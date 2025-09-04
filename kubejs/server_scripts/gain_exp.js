let lastPos = null;
let nowexp = 0;

PlayerEvents.tick(event => {
    const { player } = event;
    const currentPos = {
        x: player.getX(),
        y: player.getY(),
        z: player.getZ()
    };
   // player.tell('Hello, world!');
    // 检查玩家是否移动
    if (lastPos != null && (currentPos.x !== lastPos.x || currentPos.y !== lastPos.y || currentPos.z !== lastPos.z)) {
        const maxWeight = player.getAttributeValue("more_attributes:equip_load_max");  // 获取属性值
        if (maxWeight) { player.tell(`获取属性成功`) }
        const nowWeight = player.getAttributeValue("more_attributes:equip_load");  // 修复调用对象

        // 超重时增加经验
        if (maxWeight > 0 && nowWeight / maxWeight > 1 && nowWeight !== 0) {
            const expGain = lastPos.distanceTo(currentPos) * nowWeight / maxWeight;
            nowexp += expGain;
            player.persistentData.putDouble('endurance_exp', nowexp);


            endurance_proficiency(player, nowexp);  // 传递当前经验
            player.sendMessage('啊啊啊啊啊啊啊啊啊啊啊');
        }

        // 更新位置
        lastPos = currentPos
    }
});

// 体力升级函数（修改为正确获取和修改属性的方式）
function endurance_proficiency(player, currentExp) {
    // 获取当前等级（假设使用的是属性系统）
    const enduranceLevel = player.getAttributeValue("more_attributes:endurance_level") || 1;
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

        // 升级属性（假设这样修改属性值）
        const currentValue = player.getAttributeValue("more_attributes:endurance_level");
        player.setAttribute("more_attributes:endurance_level", currentValue + 1);

        // 升级反馈
        player.tell(`你感觉你的体力上升了！当前等级: ${currentValue + 1}`);
    }
}


