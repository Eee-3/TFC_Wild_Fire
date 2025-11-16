JEIEvents.removeRecipes(event => {
event.remove('minecraft:crafting','jeihide:brass_forge_door')})
JEIEvents.hideItems(event => {
    
    const items = [

        /createmetallurgy:raw_.*/,
        /createmetallurgy:tungsten_.*/,
        /createmetallurgy:.*_dust/,
        /createmetallurgy:obdurium_.*/,
        /createmetallurgy:.*_light_bulb/,
        /createmetallurgy:molten_.*_bucket/,
        'createmetallurgy:wolframite_ore',
        'createmetallurgy:graphite_nugget_mold',
        'createmetallurgy:graphite_plate_mold',
        'createmetallurgy:foundry_unit',
        'createmetallurgy:industrial_crucible',
        'createmetallurgy:graphite_gear_mold',
        'createmetallurgy:graphite_rod_mold',
        'createmetallurgy:crushed_raw_wolframite',
        'createmetallurgy:slag',
        'createmetallurgy:coke_block',
        'createmetallurgy:coke',
        'createmetallurgy:graphite',
        'createmetallurgy:refractory_mortar',
        'createmetallurgy:sandpaper_belt',
        'createmetallurgy:mechanical_belt_grinder',


        //'ae2:facade',

    ];

    items.forEach((item) => {
        event.hide(item);
    })
})

JEIEvents.hideFluids(event => {
    const fluids = [

        'createmetallurgy:molten_iron',
        'createmetallurgy:molten_gold',
        'createmetallurgy:molten_copper',
        'createmetallurgy:molten_zinc',
        'createmetallurgy:molten_brass',
        'createmetallurgy:molten_steel',
        'createmetallurgy:molten_aluminum',
        'createmetallurgy:molten_lead',
        'createmetallurgy:molten_nickel',
        'createmetallurgy:molten_osmium',
        'createmetallurgy:molten_silver',
        'createmetallurgy:molten_tin',
        'createmetallurgy:molten_invar',
        'createmetallurgy:molten_electrum',
        'createmetallurgy:molten_bronze',
        'createmetallurgy:molten_constantan',
        'createmetallurgy:molten_void_steel',
        'createmetallurgy:molten_slag',
        'createmetallurgy:molten_tungsten',
        'createmetallurgy:molten_obdurium',
        'createmetallurgy:molten_netherite'


    ]
    fluids.forEach((fluid) => {
        event.hide(fluid);
    })
})



