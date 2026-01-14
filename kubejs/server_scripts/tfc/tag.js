ServerEvents.tags('minecraft:block', event => {//


    event.add('tfc:mineable_with_glass_saw', 'minecraft:ice');//玻璃


})
ServerEvents.tags('minecraft:item', event => {//


    event.add('curios:any', 'kubejs:rubber_hot_water_bag');//热水袋
    event.add('curios:necklace', 'kubejs:rubber_hot_water_bag');//热水袋
    event.add('curios:belt', 'kubejs:rubber_hot_water_bag');//热水袋
    event.add('curios:body', 'kubejs:rubber_hot_water_bag');//热水袋

    event.add('curios:any', 'kubejs:leather_hot_water_bag');
    event.add('curios:necklace', 'kubejs:leather_hot_water_bag');
    event.add('curios:belt', 'kubejs:leather_hot_water_bag');
    event.add('curios:body', 'kubejs:leather_hot_water_bag');
const ore=['tfc:powder/sphalerite', 'tfc:powder/native_copper', 'tfc:powder/native_gold', 'tfc:powder/hematite', 'tfc:powder/native_silver', 'tfc:powder/cassiterite', 'tfc:powder/bismuthinite', 'tfc:powder/garnierite', 'tfc:powder/malachite', 'tfc:powder/magnetite', 'tfc:powder/tetrahedrite', 'tfc:powder/limonite']

    ore.forEach(item=> {
        event.add('kubejs:ore', item);//热矿粉
    
})

})

ServerEvents.tags('minecraft:fluid', event => {//


    event.add('tfc:usable_in_pot', 'immersiveengineering:redstone_acid');//红石酸
    
})