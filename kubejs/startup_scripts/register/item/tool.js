StartupEvents.registry('item', event => {

    event.create('bone_fishing_rod', 'tfc:fishing_rod')
        .fishingStrength(1)
        .smallBait()
        .maxDamage(50)
        .texture('kubejs:item/tfc/bone_fishing_rod')//骨头鱼竿

    event.create("iron_needle", "basic").texture('kubejs:item/tfc/iron_needle').maxDamage(2000).tag('tfc:sewing_needles');//铁针
    event.create("steel_needle", "basic").texture('kubejs:item/tfc/steel_needle').maxDamage(12000).tag('tfc:sewing_needles');//钢针


})

StartupEvents.registry('item', event => {
    
    // 治疗膏
    event.create('kubejs:healing_paste', 'heal_item')
        .texture('kubejs:item/healing_paste') // 绑定物品纹理，路径为kubejs的item目录下的healing_paste纹理
        .useDuration(itemstack => 30) // 设置物品使用时长为30游戏刻（1.5秒，20游戏刻=1现实秒）
        .useAnimation("bow") // 设置使用动画为“拉弓”动画（和使用弓/食用食物的动画一致）
        .finishUsing((itemstack, level, entity) => { // 物品使用完成后的回调逻辑
            const effects = entity.potionEffects // 获取使用物品的实体的药水效果管理器
            effects.add('minecraft:regeneration', 120 * 20) // 添加生命恢复效果，持续120秒（120*20游戏刻）
        })

    // 简易绷带
    event.create('kubejs:weak_bandage', 'heal_item')
        .texture('kubejs:item/weak_bandage') // 绑定简易绷带的纹理
        .useDuration(itemstack => 30) // 同样设置30游戏刻的使用时长
        .useAnimation("bow") // 同样使用拉弓的使用动画
        .finishUsing((itemstack, level, entity) => { // 使用完成后的回调
            const effects = entity.potionEffects
            effects.add('minecraft:regeneration', 120 * 20) // 同样添加120秒的生命恢复效果(目前未正常生效)
        })
})
