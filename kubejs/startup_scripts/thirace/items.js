Platform.mods.kubejs.name = 'Wildfire'
StartupEvents.registry('item', (event) => {
    const items = [
        'graphite_mineral_prospector_head_mold',
        'graphite_prospector_drill_head_mold',
        'graphite_prospector_hammer_head_mold',
        'graphite_excavator_head_mold',
        'graphite_sledgehammer_head_mold',
        //'graphite_heart_mold', 
        'graphite_hammer_head_mold',
        'graphite_chisel_head_mold',
        'graphite_propick_head_mold',
        'graphite_knife_blade_mold',
        'graphite_scythe_blade_mold',
        //'graphite_bell_mold', 
        'graphite_saw_blade_mold',
        'graphite_javelin_head_mold',
        'graphite_mace_head_mold',
        'graphite_sword_blade_mold',
        'graphite_axe_head_mold',
        'graphite_shovel_head_mold',
        'graphite_pickaxe_head_mold',
        'graphite_hoe_head_mold',


    ];


    items.forEach((item) => {
        event.create(item).texture(`kubejs:item/graphite_mold/${item}`);
    })
});





