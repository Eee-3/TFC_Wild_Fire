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
    
    // 治疗膏 - 添加再生2级效果，持续60秒
    event.create('kubejs:healing_paste', 'heal_item')
        .texture('kubejs:item/healing_paste')
        .useAnimation('bow')
        .useDuration(itemstack => 30)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            if (!level.isClientSide()) {
                entity.potionEffects.add(
                    'minecraft:regeneration',
                    60 * 20,   // 60秒
                    1,         // 等级2（比0高一级）
                    false,
                    true
                )
                
                itemstack.shrink(1)
            }
            return itemstack
        })

    // 简易绷带 - 添加再生1级效果，持续30秒
    event.create('kubejs:weak_bandage', 'heal_item')
        .texture('kubejs:item/weak_bandage')
        .useAnimation('bow')
        .useDuration(itemstack => 30)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            if (!level.isClientSide()) {
                entity.potionEffects.add(
                    'minecraft:regeneration',
                    30 * 20,   // 30秒
                    0,         // 等级1
                    false,
                    true
                )
                
                itemstack.shrink(1)
            }
            return itemstack
        })
})