StartupEvents.registry('item', event => {
    
    event.create('kubejs:healing_paste', 'heal_item')
        .texture('kubejs:item/healing_paste')
        .useDuration(itemstack => 30)
        .useAnimation("bow")
        .finishUsing((itemstack, level, entity) => {
            let effects = entity.potionEffects
            effects.add('minecraft:regeneration', 6, 1, false, false)
        })
    event.create('kubejs:weak_bandage', 'heal_item')
        .texture('kubejs:item/weak_bandage')
        .useDuration(itemstack => 30)
        .useAnimation("bow")
        .finishUsing((itemstack, level, entity) => {
            let effects = entity.potionEffects
            effects.add('minecraft:regeneration', 10, 0, false, false)
        })
})
