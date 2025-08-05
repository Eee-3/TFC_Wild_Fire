
ServerEvents.tags('item', (event) => {

    event.get('forge:gems').add('kubejs:rose_quartz',)
    event.get('forge:gems/rose_quartz').add('create:rose_quartz')

    event.get('wildfire:metal/hammers').add(
        'tfc:metal/hammer/bismuth_bronze',
        'tfc:metal/hammer/black_bronze',
        'tfc:metal/hammer/bronze',
        'tfc:metal/hammer/copper',
        'tfc:metal/hammer/wrought_iron',
        'tfc:metal/hammer/steel',
        'tfc:metal/hammer/black_steel',
        'tfc:metal/hammer/blue_steel',
        'tfc:metal/hammer/red_steel'
    )

    event.get('wildfire:graphite_mold').add(
        'createmetallurgy:graphite_ingot_mold',
        'createmetallurgy:graphite_plate_mold',
        'kubejs:graphite_mineral_prospector_head_mold',
        'kubejs:graphite_prospector_drill_head_mold',
        'kubejs:graphite_prospector_hammer_head_mold',
        'kubejs:graphite_excavator_head_mold',
        'kubejs:graphite_sledgehammer_head_mold',
        'kubejs:graphite_hammer_head_mold',
        'kubejs:graphite_chisel_head_mold',
        'kubejs:graphite_propick_head_mold',
        'kubejs:graphite_knife_blade_mold',
        'kubejs:graphite_scythe_blade_mold',
        'kubejs:graphite_saw_blade_mold',
        'kubejs:graphite_javelin_head_mold',
        'kubejs:graphite_mace_head_mold',
        'kubejs:graphite_sword_blade_mold',
        'kubejs:graphite_axe_head_mold',
        'kubejs:graphite_shovel_head_mold',
        'kubejs:graphite_pickaxe_head_mold',
        'kubejs:graphite_hoe_head_mold'
    )

    event.get('forge:powder/native_silver').add('tfc:powder/native_silver')
    event.get('forge:powder/native_copper').add('tfc:powder/native_copper')
    event.get('forge:powder/native_gold').add('tfc:powder/native_gold')
    event.get('forge:powder/uraninite').add('tfc_ie_addon:powder/uraninite')
    event.get('forge:powder/galena').add('tfc_ie_addon:powder/galena')
    event.get('forge:powder/bauxite').add('tfc_ie_addon:powder/bauxite')
    event.get('forge:powder/garnierite').add('tfc:powder/garnierite')
    event.get('forge:powder/tetrahedrite').add('tfc:powder/tetrahedrite')
    event.get('forge:powder/malachite').add('tfc:powder/malachite')
    event.get('forge:powder/bismuthinite').add('tfc:powder/bismuthinite')
    event.get('forge:powder/magnetite').add('tfc:powder/magnetite')
    event.get('forge:powder/limonite').add('tfc:powder/limonite')
    event.get('forge:powder/hematite').add('tfc:powder/hematite')
    event.get('forge:powder/sphalerite').add('tfc:powder/sphalerite')
    event.get('forge:powder/cassiterite').add('tfc:powder/cassiterite')
    event.get('forge:powder/chromium').add('tfcorewashing:chromium_powder')


})



ServerEvents.tags('fluid', (event) => {

    event.get('tconstruct:tooltips/metal').add(/tfc:metal\/.*/)
    event.get('forge:molten_materials').add(/tfc:metal\/.*/)
    event.get('forge:molten_iron').add('tfc:metal/wrought_iron')
    event.get('forge:molten_gold').add('tfc:metal/gold')
    event.get('forge:molten_copper').add('tfc:metal/copper')
    event.get('forge:molten_zinc').add('tfc:metal/zinc')
    event.get('forge:molten_brass').add('tfc:metal/brass')
    event.get('forge:molten_steel').add('tfc:metal/steel')
    event.get('forge:molten_nickel').add('tfc:metal/nickel')
    event.get('forge:molten_silver').add('tfc:metal/silver')
    event.get('forge:molten_tin').add('tfc:metal/tin')
    event.get('forge:molten_bronze').add('tfc:metal/bronze')
    event.get('forge:molten_lead').add('tfc_ie_addon:metal/lead')
    event.get('forge:molten_electrum').add('tfc_ie_addon:metal/electrum')
    event.get('forge:molten_aluminum').add('tfc_ie_addon:metal/aluminum')
    event.get('forge:molten_constantan').add('tfc_ie_addon:metal/constantan')

    event.get('tconstruct:tooltips/metal').remove(/createmetallurgy:molten_.*/)
    event.get('forge:molten_materials').remove(/createmetallurgy:molten_.*/)
    event.get('embers:ingot_tooltip').remove(/createmetallurgy:molten_.*/)
    event.get('forge:molten_iron').remove(/createmetallurgy:molten_iron/)
    event.get('forge:molten_gold').remove(/createmetallurgy:molten_gold/)
    event.get('forge:molten_copper').remove(/createmetallurgy:molten_copper/)
    event.get('forge:molten_zinc').remove(/createmetallurgy:molten_zinc/)
    event.get('forge:molten_brass').remove(/createmetallurgy:molten_brass/)
    event.get('forge:molten_nickel').remove(/createmetallurgy:molten_nickel/)
    event.get('forge:molten_silver').remove(/createmetallurgy:molten_silver/)
    event.get('forge:molten_tin').remove(/createmetallurgy:molten_tin/)
    event.get('forge:molten_electrum').remove(/createmetallurgy:molten_electrum/)
    event.get('forge:molten_bronze').remove(/createmetallurgy:molten_bronze/)
    event.get('forge:molten_constantan').remove(/createmetallurgy:molten_constantan/)
    event.get('forge:molten_aluminum').remove(/createmetallurgy:molten_aluminum/)
    event.get('forge:molten_lead').remove(/createmetallurgy:molten_lead/)
    event.get('forge:molten_steel').remove(/createmetallurgy:molten_steel/)




})



ServerEvents.tags('block', (event) => {

    event.get('create:wrench_pickup').add('kubejs:andesite_chassis')

})


