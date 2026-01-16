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
    event.create('kubejs:healing_paste')
        .texture('kubejs:item/healing_paste')
        .useDuration(itemstack => 30)
        .use((level, player, hand) => true)
        .useAnimation("bow")
        .finishUsing((itemstack, level, entity) => {
            const effects = entity.potionEffects
            effects.add('minecraft:regeneration', 40 * 20)
            itemstack.shrink(1)
            return itemstack
        })

    // 简易绷带
    event.create('kubejs:weak_bandage')
        .texture('kubejs:item/weak_bandage')
        .useDuration(itemstack => 30)
        .use((level, player, hand) => true)
        .useAnimation("bow")
        .finishUsing((itemstack, level, entity) => {
            const effects = entity.potionEffects
            effects.add('majruszsdifficulty:glass_regeneration', 20 * 20)
            effects.add('majruszsdifficulty:bleeding_immunity', 1 * 20)
            itemstack.shrink(1)
            return itemstack
        })
})