StartupEvents.registry('item', event => {

    event.create('bone_fishing_rod', 'tfc:fishing_rod')
        .fishingStrength(1)
        .smallBait()
        .maxDamage(50)
        .texture('kubejs:item/tfc/bone_fishing_rod')//骨头鱼竿

    event.create("iron_needle", "basic").texture('kubejs:item/tfc/iron_needle').maxDamage(2000).tag('tfc:sewing_needles');//铁针
    event.create("steel_needle", "basic").texture('kubejs:item/tfc/steel_needle').maxDamage(12000).tag('tfc:sewing_needles');//钢针


})