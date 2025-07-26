
ServerEvents.recipes((event) => {

    const recipes = [

        ({ type: 'minecraft:shapeless' }, { input: 'immersiveengineering:wirecutter' }),

        { type: 'createmetallurgy:bulk_melting' },
        { type: 'createmetallurgy:entity_melting' },
        { type: 'createmetallurgy:grinding' },
        { type: 'embers:melting' },
        { type: 'embers:mixing' },
        { type: 'aetherworks:mixing' },
        { type: 'embers:stamping' },
        { type: 'create:haunting' },
        { type: 'immersiveengineering:alloy' },
        { type: 'immersiveengineering:arc_furnace' },
        { type: 'immersiveengineering:bottling_machine' },
        { type: 'immersiveengineering:coke_oven' },
        { type: 'immersiveengineering:crusher' },
        { type: 'immersiveengineering:fermenter' },
        { type: 'immersiveengineering:mixer' },
        { type: 'immersiveengineering:refinery' },
        { type: 'immersiveengineering:sawmill' },
        { type: 'immersiveengineering:squeezer' },
        { type: 'createaddition:rolling' },

        { input: /minecraft:raw_.*/ },
        { output: /minecraft:raw_.*/ },
        { input: /minecraft:raw_.*_block/ },
        { output: /minecraft:raw_.*_block/ },
        { input: /minecraft:raw_.*_block/ },
        { output: /minecraft:raw_.*_block/ },
        { input: /create:raw_.*/ },
        { output: /create:raw_.*/ },
        { input: /create:raw_.*_block/ },
        { output: /create:raw_.*_block/ },
        { input: /immersiveengineering:raw_.*/ },
        { output: /immersiveengineering:raw_.*/ },
        { input: /immersiveengineering:raw_block_.*/ },
        { output: /immersiveengineering:raw_block_.*/ },
        { input: /minecraft:.*_ore/ },
        { output: /minecraft:.*_ore/ },
        { input: /create:.*_ore/ },
        { output: /create:.*_ore/ },
        { input: /immersiveengineering:ore_.*/ },
        { output: /immersiveengineering:ore_.*/ },
        { input: /immersiveengineering:deepslate_ore_.*/ },
        { output: /immersiveengineering:deepslate_ore_.*/ },
        { input: /create:crushed_raw_.*/ },
        { output: /create:crushed_raw_.*/ },
        { input: /createmetallurgy:raw_.*/ },
        { output: /createmetallurgy:raw_.*/ },
        { input: /createmetallurgy:tungsten_.*/ },
        { output: /createmetallurgy:tungsten_.*/ },
        { input: 'createmetallurgy:crushed_raw_wolframite' },
        { output: 'createmetallurgy:crushed_raw_wolframite' },
        { input: /createmetallurgy:.*_dust/ },
        { output: /createmetallurgy:.*_dust/ },
        { input: /createmetallurgy:obdurium_.*/ },
        { output: /createmetallurgy:obdurium_.*/ },
        { input: 'createmetallurgy:coke' },
        { output: 'createmetallurgy:coke' },
        { input: 'createmetallurgy:coke_block' },
        { output: 'createmetallurgy:coke_block' },
        { output: 'minecraft:dried_kelp' },
        { input: 'tfc:sandpaper' },
        { output: /farmersdelight:.*_cabinet/ },
        { output: 'minecraft:cake' },
        { input: 'farmersdelight:wheat_dough' },
        { output: 'farmersdelight:wheat_dough' },
        { input: 'immersiveengineering:wooden_grip' },
        { input: 'immersiveengineering:component_electronic_adv' },
        { input: /immersiveengineering:dust_(steel|uranium|silver|aluminum|lead|nickel|copper|constantan|electrum|gold|iron)/ },
        { output: /immersiveengineering:dust_(steel|uranium|silver|aluminum|lead|nickel|copper|constantan|electrum|gold|iron)/ },
        //{ input: 'immersiveengineering:empty_casing' },
        { input: /tfmg:raw_.*/ },
        { output: /tfmg:raw_.*/ },
        { input: 'tfmg:lithium_ingot' },
        { output: 'tfmg:lithium_ingot' },
        { input: 'tfmg:thermite_powder' },
        { input: 'firmalife:copper_pipe' },
        { input: /tfc:wood\/axle\/.*/ },
        { output: /tfc:wood\/axle\/.*/ },


        // {input: /vintage:.*_rod/},
        // {output: /vintage:.*_rod/},
        // {input: /vintage:.*_wire/},
        // {output: /vintage:.*_wire/},
        // {input: /vintage:.*_sheet/},
        // {output: /vintage:.*_sheet/},
        { id: /aetherworks:aetherium_anvil\/geode_.*/ },
        { id: /immersiveengineering:arcfurnace\/raw_.*/ },
        { id: /immersiveengineering:crusher\/raw_.*/ },
        { id: /immersiveengineering:arcfurnace\/ore_.*/ },
        { id: /immersiveengineering:crusher\/ore_.*/ },
        { id: 'createmetallurgy:casting_in_table/slag_casting' },
        { id: 'createmetallurgy:sequenced_assembly/industrial_crucible' },
        { id: 'createmetallurgy:crafting/content/foundry_unit' },
        { id: 'createmetallurgy:melting/obdurium/plate' },
        { id: /createmetallurgy:casting_in_table\/[a-z]+\/plate/ },
        { id: /immersiveengineering:arcfurnace\/dust_.*/ },
        { id: /embers:stamping\/(ingots|nuggets|plates)\/.*/ },
        { id: 'embers:mixing/molten_constantan' },
        { id: 'embers:mixing/molten_brass' },
        { id: 'embers:mixing/molten_bronze' },
        { id: 'embers:mixing/molten_electrum' },
        { id: /embers:lead_(sword|shovel|pickaxe|axe|hoe)/ },
        { id: /embers:silver_(sword|shovel|pickaxe|axe|hoe)/ },
        { id: /embers:dawnstone_(sword|shovel|pickaxe|axe|hoe)/ },
        { id: 'embers:gas_fuel/dwarven_gas' },
        { id: 'embers:boiling/dwarven_gas' },
        { id: 'embers:mixer_centrifuge' },
        { id: 'embers:melter' },
        { id: 'embers:stamper' },
        { id: 'embers:stamp_base' },
        { id: 'embers:geologic_separator' },
        { id: /embers:raw_[a-z]+_stamp/ },
        { id: /embers:[a-z]+_stamp/ },
        { id: /createmetallurgy:melting\/tungsten\/.*/ },
        { id: /createmetallurgy:casting_in_table\/tungsten\/.*/ },
        { id: 'createmetallurgy:casting_in_basin/tungsten/block' },
        { id: 'createmetallurgy:alloying/obdurium' },
        { id: 'createmetallurgy:alloying/void_steel' },
        { id: 'createmetallurgy:alloying/invar' },
        { id: /createmetallurgy:melting\/.*\/nugget/ },
        { id: /createmetallurgy:casting_in_table\/.*\/nugget/ },
        { id: 'createmetallurgy:graphite_nugget_mold_stonecutting' },
        { id: 'createmetallurgy:casting_in_basin/andesite_alloy_from_iron' },
        { id: 'createmetallurgy:casting_in_basin/iron/block' },
        { id: 'createmetallurgy:graphite_gear_mold_stonecutting' },
        { id: 'createmetallurgy:crafting/materials/graphite' },
        { id: 'createmetallurgy:mixing/refractory_mortar' },
        { id: 'createmetallurgy:crafting/materials/sandpaper_belt' },
        { id: 'createmetallurgy:crafting/content/mechanical_belt_grinder' },
        { id: /createmetallurgy:casting_in_basin\/.*\/block/ },
        { id: 'createmetallurgy:casting_in_basin/andesite_alloy_from_zinc' },
        { id: /createaddition:charging\/.*/ },
        { id: /createaddition:crafting\/capacitor_(1|2)/ },
        { id: /createaddition:crafting\/modular_accumulator_.*/ },
        { id: 'createaddition:mechanical_crafting/electric_motor' },
        { id: 'createaddition:mechanical_crafting/alternator' },
        { id: 'createaddition:crafting/portable_energy_interface' },
        { id: 'createaddition:anvil/electrum' },
        { id: 'createaddition:crafting/barbed_wire' },
        { id: 'createaddition:crafting/rolling_mill' },
        { id: 'createaddition:crafting/gold_spool' },
        { id: 'createaddition:mixing/bioethanol' },
        { id: 'createaddition:mixing/biomass_from_sticks' },
        { id: 'createaddition:mixing/biomass_from_honeycomb' },
        { id: 'createaddition:compacting/cake_base' },
        { id: 'createaddition:filling/honey_cake' },
        { id: 'createaddition:filling/chocolate_cake' },
        { id: 'farmersdelight:pie_crust' },
        { id: 'createaddition:smoking/cake_base_baked' },
        { id: 'createaddition:crafting/large_connector_electrum' },
        { id: 'createaddition:compat/immersiveengineering/constantan' },
        { id: 'createaddition:mixing/electrum' },
        { id: 'createaddition:crafting/electrum_amulet' },
        { id: 'createaddition:pressing/zinc_ingot' },
        { id: /createaddition:compat\/immersiveengineering\/.*/ },
        { id: /farmersdelight:cutting\/.*_sign/ },
        { id: /farmersdelight:cutting\/.*_trapdoor/ },
        { id: /farmersdelight:cutting\/.*_door/ },
        { id: 'create:industrial_iron_block_from_iron_ingots_stonecutting' },
        { id: 'create:compacting/ice' },

        { id: 'tfmg:compacting/cast_iron' },
        { id: 'tfmg:crafting/kinetics/cast_iron_ingot_from_decompacting' },
        { id: 'tfmg:crafting/kinetics/cast_iron_ingot_from_compacting' },
        { id: 'tfmg:casting/slag_block' },
        //{ id: 'tfmg:crushing/slag_block' },
        { id: /tfmg:crafting\/kinetics\/.*_(sword|shovel|pickaxe|axe|hoe)/ },
        { id: /tfmg:crafting\/kinetics\/steel_(helmet|chestplate|leggings|boots)/ },
        //{ id: /tfmg:casting\/.*/ },
        { id: 'tfmg:smelting/fireclay_brick' },
        { id: 'tfmg:crafting/kinetics/casting_basin' },
        { id: 'tfmg:hot_blast/hot_air' },
        { id: 'tfmg:crafting/kinetics/fireclay' },
        { id: 'tfmg:smelting/fireproof_brick' },
        { id: 'tfmg:crafting/kinetics/fireproof_bricks' },
        { id: 'tfmg:crafting/kinetics/fireproof_brick_reinforcement' },
        { id: 'tfmg:crafting/kinetics/blast_stove' },
        { id: 'tfmg:crafting/kinetics/blast_furnace_output' },
        { id: 'tfmg:crafting/kinetics/blast_furnace_hatch' },
        { id: 'tfmg:crafting/kinetics/firebox' },
        { id: 'tfmg:crafting/kinetics/blast_furnace_reinforcement' },
        { id: 'tfmg:crafting/kinetics/rusted_blast_furnace_reinforcement' },
        { id: 'tfmg:compacting/cast_iron_ingot' },
        { id: 'tfmg:pressing/cast_iron_ingot' },
        { id: 'tfmg:crushing/sulfur' },
        { id: 'tfmg:stonecutting/rebar' },
        { id: 'tfmg:crushing/limestone' },
        { id: /tfmg:crafting\/kinetics\/.*_pipe/ },
        { id: /tfmg:crafting\/kinetics\/.*_mechanical_pump/ },
        { id: /tfmg:crafting\/kinetics\/.*_pipe_horizontal/ },
        { id: /tfmg:crafting\/kinetics\/.*_pipe_vertical/ },
        { id: /tfmg:crafting\/kinetics\/.*_smart_fluid_pipe/ },
        { id: /tfmg:crafting\/kinetics\/.*_fluid_pump/ },
        { id: /tfmg:crafting\/kinetics\/.*_fluid_valve/ },
        { id: 'tfmg:compacting/synthetic_leather' },
        { id: 'tfmg:pressing/synthetic_leather' },
        { id: 'tfmg:coking/coal' },
        { id: 'tfmg:crushing/lignite' },
        { id: 'tfmg:crafting/kinetics/aluminum_fluid_tank' },
        { id: 'tfmg:filling/hardened_planks' },
        { id: 'tfmg:crafting/kinetics/unfinished_resistorfrom_slime' },
        { id: 'tfmg:crafting/kinetics/lithium_blade' },
        { id: 'create:mechanical_crafting/advanced_potato_cannon' },
        { id: 'create:mechanical_crafting/flamethrower' },
        { id: 'create:mechanical_crafting/quad_potato_cannon' },
        { id: 'tfmg:mixing/asphalt_mixture' },
        { id: 'tfmg:mixing/concrete_mixture' },
        { id: 'tfmg:sequenced_assembly/heavy_plate' },
        { id: 'tfmg:smelting/unfinished_insulator' },
        { id: 'tfmg:unfired_insulator_from_clay_stonecutting' },
        { id: 'tfmg:crafting/kinetics/glass_insulator_segment' },
        { id: 'tfmg:item_application/coated_circuit_board' },
        { id: /tfmg:compacting\/.*_ingot/ },
        { id: 'tfmg:crafting/kinetics/cast_iron_chemical_vat' },
        { id: 'tfmg:mixing/constantan' },
        { id: 'tfmg:mixing/thermite' },
        { id: /tfmg:crafting\/kinetics\/.*_grenade/ },
        { id: 'tfmg:crafting/kinetics/polarizer' },
        { id: 'tfmg:polarizing/magnet' },

        { id: /vintage:pressing\/.*/ },
        { id: /vintage:craft\/.*_rod/ },
        { id: /vintage:craft\/.*_wire/ },
        { id: /vintage:coiling\/.*/ },
        { id: 'vintage:crushing/basalt_recycling' },
        { id: 'vintage:craft/vanadium_block_to_ingots' },
        { id: 'vintage:craft/vanadium_ingots_to_block' },
        { id: 'vintage:pressurizing/sulfur_trioxide' },
        { id: 'vintage:pressurizing/sulfur_dioxide' },
        { id: 'vintage:pressurizing/sulfuric_acid' },
        { id: 'vintage:pressurizing/sulfur_trioxide_alt' },
        { id: 'vintage:crushing/scoria' },
        { id: 'vintage:craft/sulfur_block_to_items' },
        { id: 'vintage:craft/sulfur_items_to_block' },
        { id: 'vintage:milling/sulfur' },
        { id: 'vintage:crushing/scoria_recycling' },
        { id: 'vintage:crushing/basalt' },
        { id: 'vintage:mechanical_crafting/helve_hammer' },
        { id: 'vintage:stonecutting/v_shaped_curving_head' },
        { id: 'vintage:stonecutting/w_shaped_curving_head' },
        { id: 'vintage:turning/concave_curving_head' },
        { id: 'vintage:craft/vanadium_nuggets_to_ingot' },
        { id: 'vintage:craft/vanadium_ingot_to_nuggets' },
        { id: 'vintage:sequenced_assembly/redstone_module' },
        { id: /create:pressing\/compat\/immersiveengineering\/plate_[a-z]+/ },
        { id: /create:pressing\/.*_ingot/ },
        { id: 'create:crafting/kinetics/mechanical_harvester' },
        { id: 'immersiveengineering:crusher/ingot_iron' },
        { id: /tfc_metal_items:metal_press\/ingots\/.*/ },
        { id: /tfc_metal_items:metal_press\/sheets\/.*/ },
        { id: 'tfc_ie_addon:metalpress/plate_wrought_iron' },
        { id: /tfc_ie_addon:metalpress\/.*_block/ },
        { id: /tfc_ie_addon:metalpress\/rod_.*/ },
        { id: /tfc_ie_addon:metalpress\/sheet_.*/ },
        { id: /immersiveengineering:metalpress\/.*/ },
        { id: /embers:[a-z]+_plate_hammering/ },
        { id: 'minecraft:dried_kelp_block' },
        { id: 'createmetallurgy:casting_in_basin/brass_casing' },
        { id: /createmetallurgy:casting_in_table\/[a-z]+\/rod/ },
        { id: 'createmetallurgy:graphite_rod_mold_stonecutting' },
        { id: 'embers:grandhammer' },
        { id: 'create:crafting/kinetics/fluid_tank' },
        { id: 'create:crafting/kinetics/steam_engine' },
        { id: 'create:compacting/blaze_cake' },
        { id: 'create:filling/blaze_cake' },
        { id: 'create:crafting/kinetics/steam_whistle' },
        { id: 'create:crafting/kinetics/fluid_pipe_vertical' },
        { id: 'create:crafting/kinetics/fluid_pipe' },
        { id: 'create:crafting/kinetics/fluid_valve' },
        { id: 'create:crafting/kinetics/smart_fluid_pipe' },
        { id: 'create:crafting/kinetics/mechanical_pump' },
        { id: 'create:crafting/materials/electron_tube' },
        { id: 'create:crafting/kinetics/water_wheel' },
        { id: 'immersiveengineering:crafting/waterwheel_segment' },
        { id: 'immersiveengineering:crafting/watermill' },
        { id: 'immersiveengineering:crafting/windmill_blade' },
        { id: 'immersiveengineering:crafting/windmill_sail' },
        { id: 'immersiveengineering:crafting/windmill' },
        { id: 'immersiveengineering:crafting/dynamo' },
        { id: 'immersiveengineering:crafting/thermoelectric_generator' },
        { id: 'vintage:curving/diamond' },
        { id: /tfc:crafting\/wood\/.*_sluice/ },
        { id: /tfc_ie_addon:sawmill\/birch\/.*/ },
        { id: /tfcorewashing:ores\/[a-z]+\/.*_hammer/ },
        { id: /tfcorewashing:chunks\/quern\/.*/ },
        { id: /tfcorewashing:ores\/.*\/.*_pressing/ },
        { id: /tfcorewashing:crafting\/uncompress_dust\/.*/ },
        { id: 'create:crafting/materials/andesite_alloy' },
        { id: 'create:crafting/materials/andesite_alloy_from_zinc' },
        { id: 'create:mixing/andesite_alloy_from_zinc' },
        { id: 'create:mixing/andesite_alloy' },
        { id: 'tfcorewashing:tfc/heating/powder/bauxite' },
        { id: 'tfc_ie_addon:heating/ore/small_bauxite' },
        { id: 'tfcorewashing:tfc/heating/powder/uraninite' },
        { id: 'tfc_ie_addon:heating/ore/small_uraninite' },
        { id: 'tfcorewashing:tfc/heating/pellet/uraninite' },
        { id: 'tfcorewashing:tfc/heating/briquet/uraninite' },
        { id: 'tfcorewashing:tfc/heating/pellet/bauxite' },
        { id: 'tfcorewashing:tfc/heating/briquet/bauxite' },
        { id: /tfcorewashing:crafting\/powders\/hammering\/.*/ },
        { id: 'tfc:crafting/vanilla/black_dye_from_coke' },
        { id: 'tfcorewashing:ores/sulfur/sulfur_crusher' },
        { id: 'tfcorewashing:rocky_chunks/splashing/sulfur_rocky_chunk_splashing' },
        { id: 'tfcorewashing:chunks/crusher/chunks_sulfur_crusher' },
        { id: 'tfcorewashing:dirt_dusts/splashing/sulfur_dirt_dust_splashing' },
        { id: 'tfcorewashing:crafting/dirt_dust/sulfur' },
        { id: 'tfcorewashing:ores/graphite/graphite_crusher' },
        { id: 'tfcorewashing:rocky_chunks/splashing/graphite_rocky_chunk_splashing' },
        { id: 'tfcorewashing:chunks/crusher/chunks_graphite_crusher' },
        { id: 'tfcorewashing:dirt_dusts/splashing/graphite_dirt_dust_splashing' },
        { id: 'tfcorewashing:crafting/dirt_dust/graphite' },
        { id: 'tfc:crafting/sandpaper' },
        { id: 'treetap:water_from_crying_obsidian' },
        { id: 'embers:hearth_coil' },
        { id: 'immersiveengineering:crafting/paper_from_sawdust' },
        { id: 'embers:bin' },
        { id: 'tfc:leather_knapping/saddle' },
        { id: 'minecraft:leather' },
        { id: 'untamedwilds:items/leather_from_snake_skin' },
        { id: 'farmersdelight:basket' },
        { id: /create:crushing\/.*_horse_armor/ },
        { id: /farmersdelight:cutting\/leather_.*/ },
        { id: 'tfc_ie_addon:barrel/treated_wood' },
        { id: 'immersiveengineering:smelting/ingot_hop_graphite_from_blasting' },
        { id: 'minecraft:hopper' },
        { id: 'minecraft:comparator' },
        { id: 'minecraft:repeater' },
        { id: 'createmetallurgy:graphite_plate_mold_stonecutting' },
        { id: 'create:splashing/sand' },
        { id: 'create:milling/sandstone' },
        { id: 'create:crushing/gravel' },
        { id: 'create:pressing/path' },
        { id: 'create:pressing/sugar_cane' },
        { id: 'createmetallurgy:compacting/tuff_from_slag' },
        { id: 'create:compacting/granite_from_flint' },
        { id: 'create:compacting/diorite_from_flint' },
        { id: 'create:compacting/andesite_from_flint' },
        { id: 'immersiveengineering:blastfurnace/steel_block' },
        { id: 'immersiveengineering:blastfurnace/steel' },
        { id: 'immersiveengineering:crafting/blastfurnace_preheater' },
        { id: 'immersiveengineering:crafting/redstone_acid' },
        { id: 'tfc_ie_addon:barrel/redstone_acid' },
        { id: 'create_factory_logistics:empty_ingredient_key' },
        { id: 'farmersdelight:lead_from_straw' },
        { id: 'create:crafting/appliances/chain_from_zinc' },
        { id: 'minecraft:chain' },
        { id: 'create:crafting/kinetics/encased_chain_drive_from_zinc' },
        { id: 'create:crafting/kinetics/encased_chain_drive' },
        { id: /create:cutting\/compat\/immersiveengineering\/wire_.*/ },
        { id: 'uppers:upper' },
        { id: 'minecraft:furnace_minecart' },
        { id: 'minecraft:blast_furnace' },
        { id: 'create:crafting/kinetics/furnace_minecart_from_contraption_cart' },
        { id: 'sophisticatedbackpacks:smelting_upgrade' },
        { id: 'sophisticatedbackpacks:blasting_upgrade' },
        { id: 'sophisticatedbackpacks:smoking_upgrade' },
        { id: 'sophisticatedbackpacks:blasting_upgrade_from_smelting_upgrade' },
        { id: 'sophisticatedbackpacks:smoking_upgrade_from_smelting_upgrade' },
        { id: 'sophisticatedbackpacks:auto_smoking_upgrade_from_auto_smelting_upgrade' },
        { id: 'sophisticatedbackpacks:auto_smoking_upgrade' },
        { id: 'sophisticatedbackpacks:auto_blasting_upgrade_from_auto_smelting_upgrade' },
        { id: 'sophisticatedbackpacks:auto_blasting_upgrade' },
        { id: 'sophisticatedbackpacks:auto_smelting_upgrade' },
        { id: 'sophisticatedbackpacks:alchemy_upgrade' },
        { id: 'sophisticatedbackpacks:advanced_alchemy_upgrade' },
        { id: 'sophisticatedbackpacks:battery_upgrade' },
        { id: 'sophisticatedbackpacks:tank_upgrade' },
        { id: 'sophisticatedbackpacks:pump_upgrade' },
        { id: 'sophisticatedbackpacks:advanced_pump_upgrade' },
        { id: 'sophisticatedbackpacks:xp_pump_upgrade' },
        { id: 'sophisticatedbackpacks:everlasting_upgrade' },
        { id: 'sophisticatedbackpacks:stack_upgrade_omega_tier' },
        { id: 'sophisticatedbackpacks:feeding_upgrade' },
        { id: 'sophisticatedbackpacks:advanced_feeding_upgrade' },
        { id: 'sophisticatedbackpacks:inception_upgrade' },
        { id: 'sophisticatedbackpacks:iron_backpack' },
        { id: 'sophisticatedbackpacks:stack_upgrade_starter_tier' },
        { id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter' },
        { id: 'create:crafting/materials/red_sand_paper' },
        { id: 'create:smoking/bread' },
        { id: 'create:campfire_cooking/bread' },
        { id: 'create:crafting/appliances/slime_ball' },
        { id: 'create:crafting/appliances/dough' },
        { id: 'create:mixing/dough_by_mixing' },
        { id: 'create:splashing/wheat_flour' },
        { id: 'create:smelting/bread' },
        { id: 'immersiveengineering:cloche/wheat' },
        { id: 'minecraft:farmersdelight.dough' },
        { id: 'tfc_metal_items:seq_pressing/sheets/pig_iron' },
        { id: 'farmersdelight:book_from_canvas' },
        { id: 'create:milling/charcoal' },
        { id: 'immersiveengineering:crafting/torch' },
        { id: 'untamedwilds:blocks/torches_from_blubber' },
        { id: 'tfc_ie_addon:crafting/ersatz_leather_firmalife' },
        { id: 'immersiveengineering:crafting/ersatz_leather' },
        { id: 'create:mixing/brass_ingot' },
        { id: 'alekiships:crafting/cannon' },
        { id: 'untamedwilds:items/food_soup_turtle' },
        { id: 'untamedwilds:turtle_soup' },
        { id: 'vintage:turning/convex_curving_head' },
        { id: 'immersiveengineering:crafting/fluid_pump' },
        { id: 'immersiveengineering:crafting/fluid_placer' },
        { id: 'create:milling/saddle' },
        { id: /elevatorid:elevator_.*/ },
        { id: 'create:sequenced_assembly/track' },
        { id: 'tfc_ie_addon:anvil/drillhead_steel' },
        { id: 'tfc_ie_addon:anvil/drillhead_red_steel' },
        { id: 'tfc_ie_addon:anvil/drillhead_blue_steel' },
        { id: 'tfc_ie_addon:anvil/drillhead_black_steel' },
        { id: 'minecraft:observer' },
        { id: 'create:crafting/kinetics/rose_quartz_lamp' },
        { id: 'minecraft:minecart' },
        { id: 'minecraft:activator_rail' },
        { id: 'minecraft:detector_rail' },
        { id: 'minecraft:powered_rail' },
        { id: 'minecraft:cauldron' },
        { id: 'create:compacting/chocolate' },
        { id: 'create:mixing/chocolate_melting' },
        { id: 'create:milling/wool' },
        { id: 'create:crushing/wool' },
        { id: 'create:splashing/wool' },
        { id: 'minecraft:cookie' },
        { id: /createdeco:.*_nugget_from_.*_ingot/ },
        { id: /createdeco:.*_ingot/ },
        { id: /createdeco:pressing\/.*_sheet/ },
        { id: /createdeco:pressing\/coins\/.*/ },
        { id: 'createdeco:white_shipping_container' },
        { id: 'createdeco:orange_shipping_container' },
        { id: 'createdeco:magenta_shipping_container' },
        { id: 'createdeco:light_blue_shipping_container' },
        { id: 'createdeco:yellow_shipping_container' },
        { id: 'createdeco:lime_shipping_container' },
        { id: 'createdeco:pink_shipping_container' },
        { id: 'createdeco:gray_shipping_container' },
        { id: 'createdeco:light_gray_shipping_container' },
        { id: 'createdeco:cyan_shipping_container' },
        { id: 'createdeco:purple_shipping_container' },
        { id: 'createdeco:blue_shipping_container' },
        { id: 'createdeco:brown_shipping_container' },
        { id: 'createdeco:green_shipping_container' },
        { id: 'createdeco:red_shipping_container' },
        { id: 'createdeco:black_shipping_container' },
        { id: 'vintage:centrifugation/ender_eye' },
        { id: 'create:crushing/gilded_blackstone' },
        { id: 'constructionwand:core_destruction' },
        { id: 'minecraft:charcoal' },
        { id: 'immersiveengineering:crafting/crate' },
        { id: 'immersiveengineering:crafting/wooden_barrel' },
        { id: 'immersiveengineering:crafting/coke_to_coal_coke' },
        { id: 'create:crushing/compat/immersiveengineering/coke_block' },
        { id: 'create:crushing/compat/immersiveengineering/coal_coke' },
        { id: 'immersiveengineering:crafting/coal_coke_to_coke' },
        { id: 'immersiveengineering:crafting/coke_to_slab' },
        { id: 'immersiveengineering:crafting/coke_from_slab' },
        { id: 'minecraft:glass' },
        { id: 'minecraft:piston' },
        { id: 'embers:sticky_piston_adhesive' },
        { id: 'immersiveengineering:crafting/minecart_woodencrate' },
        { id: 'immersiveengineering:crafting/minecart_woodenbarrel' },
        { id: 'immersiveengineering:crafting/reinforced_crate' },
        { id: 'immersiveengineering:crafting/capacitor_mv' },
        { id: 'immersiveengineering:crafting/capacitor_lv' },
        { id: 'immersiveengineering:crafting/capacitor_hv' },
        { id: 'immersiveengineering:crafting/tesla_coil' },
        { id: 'immersiveengineering:crafting/railgun' },
        { id: 'immersiveengineering:crafting/concrete' },
        { id: 'create:mechanical_crafting/simple_large_engine' },
        { id: /immersiveengineering:crafting\/connector_.*/ },
        { id: 'immersiveengineering:crafting/blastbrick_to_slab' },
        { id: 'immersiveengineering:crafting/blastbrick_from_slab' },
        { id: 'immersiveengineering:crafting/blastbrick_reinforced_from_slab' },
        { id: 'immersiveengineering:crafting/blastbrick_reinforced_to_slab' },
        { id: 'immersiveengineering:crafting/redstone_breaker' },
        { id: 'immersiveengineering:crafting/transformer' },
        { id: 'immersiveengineering:crafting/transformer_hv' },
        { id: 'immersiveengineering:crafting/powerpack' },
        { id: 'immersiveengineering:crafting/toolupgrade_powerpack_antenna' },
        { id: 'immersiveengineering:crafting/toolupgrade_shield_shock' },
        { id: 'immersiveengineering:crafting/gunpart_drum' },
        { id: 'immersiveengineering:crafting/gunpart_hammer' },
        { id: 'immersiveengineering:crafting/speedloader' },
        { id: 'tfc_ie_addon:anvil/gunpart_barrel' },
        { id: 'immersiveengineering:crafting/wooden_grip' },
        { id: 'immersiveengineering:crafting/minecart_reinforcedcrate' },
        { id: 'immersiveengineering:crafting/minecart_metalbarrel' },
        { id: 'immersiveengineering:crafting/metal_barrel' },
        { id: 'immersiveengineering:crafting/toolupgrade_revolver_magazine' },
        { id: 'immersiveengineering:crafting/toolupgrade_railgun_scope' },
        { id: 'immersiveengineering:blueprint/component_electronic_adv' },
        { id: 'immersiveengineering:blueprint/component_electronic' },
        { id: 'immersiveengineering:crafting/toolupgrade_powerpack_induction' },
        { id: 'immersiveengineering:crafting/current_transformer' },
        { id: 'immersiveengineering:crafting/electromagnet' },
        { id: 'immersiveengineering:crafting/coil_lv' },
        { id: 'immersiveengineering:crafting/charging_station' },
        { id: 'immersiveengineering:crafting/toolupgrade_shield_magnet' },
        { id: 'immersiveengineering:crafting/turntable' },
        { id: 'immersiveengineering:crafting/coil_mv' },
        { id: 'immersiveengineering:crafting/generator' },
        { id: 'immersiveengineering:crafting/coil_hv' },
        { id: /immersiveengineering:crafting\/wirecoil_.*/ },
        { id: 'immersiveengineering:crafting/firework' },
        { id: /immersiveengineering:blueprint\/bullet_.*/ },
        { id: 'tfc_ie_addon:anvil/empty_casing' },
        { id: 'immersiveengineering:crafting/empty_shell' },
        { id: 'tfc_ie_addon:crafting/blueprint_special_bullet' },
        { id: 'immersiveengineering:crafting/blueprint_bullets' },
        { id: 'immersiveengineering:bottling/empty_shell' },
        { id: /immersiveengineering:crafting\/toolupgrade_.*/ },
        { id: 'tfc_ie_addon:anvil/toolupgrade_revolver_bayonet' },
        { id: /immersiveengineering:smelting\/nugget_.*/ },
        { id: 'immersiveengineering:crafting/rockcutter' },
        { id: 'immersiveengineering:bottling/grindingdisk' },
        { id: 'immersiveengineering:crafting/survey_tools' },
        { id: 'immersiveengineering:cloche/hemp' },
        { id: 'immersiveengineering:crafting/fluorescent_tube' },
        { id: 'immersiveengineering:crafting/voltmeter' },
        { id: 'immersiveengineering:squeezer/hemp_seeds' },
        { id: 'immersiveengineering:blueprint/electron_tube' },
        { id: 'immersiveengineering:crafting/logic_unit' },
        { id: 'immersiveengineering:blueprint/circuit_board' },
        { id: 'tfc_ie_addon:heating/slag' },
        { id: 'immersiveengineering:fertilizer/slag' },
        { id: 'immersiveengineering:crafting/toolbox' },
        { id: 'immersiveengineering:crusher/slag' },
        { id: 'immersiveengineering:crafting/gunpowder_barrel' },
        { id: 'immersiveengineering:crafting/string' },
        { id: 'immersiveengineering:blueprint/mold_bullet_casing' },
        { id: 'immersiveengineering:blueprint/mold_packing_4' },
        { id: 'immersiveengineering:blueprint/mold_packing_9' },
        { id: 'immersiveengineering:blueprint/mold_unpacking' },
        { id: 'immersiveengineering:blueprint/mold_plate' },
        { id: 'tfc_ie_addon:blueprint/mold_block' },
        { id: 'tfc_ie_addon:blueprint/mold_sheet' },
        { id: 'farmersdelight:integration/immersiveengineering/metalpress/pumpkin' },
        { id: 'create:crushing/compat/immersiveengineering/slag' },
        { id: 'immersiveengineering:crafting/sample_drill' },
        { id: 'immersiveengineering:crafting/alloybrick_from_slab' },
        { id: 'immersiveengineering:crafting/alloybrick_to_slab' },
        { id: 'immersiveengineering:crafting/breaker_switch' },
        { id: 'immersiveengineering:crafting/fluid_pipe' },
        { id: 'immersiveengineering:crafting/circuit_table' },
        { id: 'immersiveengineering:crafting/electric_lantern' },
        { id: 'immersiveengineering:crafting/radiator' },
        { id: /immersiveengineering:crafting\/conveyor_.*/ },
        { id: 'immersiveengineering:alloysmelter/insulating_glass' },
        { id: 'immersiveengineering:blastfurnace/fuel_charcoal' },
        { id: 'immersiveengineering:blastfurnace/fuel_coke_block' },
        { id: 'immersiveengineering:blastfurnace/fuel_coke' },
        { id: 'immersiveengineering:crafting/fiberboard' },
        { id: 'immersiveengineering:blueprint/graphite_electrode' },
        { id: /tfc:crafting\/wood\/.*_lumber_log/ },
        { id: /tfc:crafting\/wood\/.*_support/ },
        { id: 'minecraft:fire_charge' },
        { id: 'tfc:crafting/vanilla/fire_charge' },
        { id: 'firmalife:crafting/sweeper' },
        { id: 'firmalife:crafting/picker' },
        { id: 'firmalife:heating/copper_pipe' },
        { id: 'firmalife:heating/oxidized_copper_pipe' },
        { id: /tfc:crafting\/wood\/.*_gear_box/ },
        { id: /tfc:crafting\/windmill_/ },
        { id: 'tfc:barrel/dye/bleach_windmill_blades' },
        { id: 'tfc:crafting/rustic_windmill_blade' },
        { id: 'tfc:crafting/lattice_windmill_blade' },
        { id: 'tfc:crafting/trip_hammer' },
        { id: 'tfc:anvil/steel_pump' },
        { id: 'tfc:crafting/steel_pump' },
        { id: 'minecraft:bamboo_chest_raft' },
        { id: /create:.*_glass_pane/ },
        { id: 'functionalstorage:ender_drawer' },
        { id: 'minecraft:andesite' },
        { id: 'minecraft:diorite' },
        { id: 'minecraft:granite' },
        { id: 'create:milling/granite' },
        { id: 'create:splashing/red_sand' },
        { id: 'create:crushing/diorite_recycling' },
        { id: 'create:crushing/diorite' },
        { id: 'create:milling/andesite' },
        { id: 'create:milling/cobblestone' },
        { id: /tfc:crafting\/rock\/.*_cobble_to_loose_rocks/ },
        { id: /embers:alchemy\/.*_crystal_seed/ },
        { id: 'create:crushing/tuff' },
        { id: 'create:crushing/prismarine_crystals' },
        { id: 'createdeco:industrial_iron_block' },
        { id: 'embers:alchemy/tyrfing' },
        { id: 'embers:ashen_brick' },
        { id: 'createaddition:filling/treated_wood_planks' },
        






































































        //{id: ''}
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });

});

ItemEvents.entityInteracted('create:empty_blaze_burner', event => {
    if (event.target.type == 'minecraft:blaze') {
        event.cancel()
    }
})

BlockEvents.rightClicked('create:empty_blaze_burner', event => {
    if (event.block.id == 'minecraft:spawner') {
        event.cancel()
    }
})

/* BlockEvents.rightClicked('minecraft:flint_and_steel', event => {
    if (event.block.id == 'minecraft:obsidian') {
        event.cancel()
    }
})
 */
MoreJSEvents.villagerTrades((event) => {
    event.removeVanillaTrades();
    event.removeModdedTrades();
});



// 空条件会移除所有的配方（不推荐）：
//event.remove({})

// 移除所有输出为石镐的配方：
//event.remove({ output: 'minecraft:stone_pickaxe' })

// 移除所有输出包含羊毛标签的配方：
//event.remove({ output: '#minecraft:wool' })

// 移除所有输入包含红石粉标签的配方：
//event.remove({ input: '#forge:dusts/redstone' })

// 移除所有来自 Farmer's Delight 模组的配方：
//event.remove({ mod: 'farmersdelight' })

// 移除所有篝火烹饪配方：
//event.remove({ type: 'minecraft:campfire_cooking' })

// 移除所有获得石头的配方，除了冶炼配方：
//event.remove({ not: { type: 'minecraft:smelting' }, output: 'stone' })

// 移除所有输出为烤鸡并且在篝火上烹饪的配方：
//event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

// 移除所有输出为铁锭的熔炉或高炉配方：
//event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])

// 根据 ID 移除一个配方。例如：data/minecraft/recipes/glowstone.json：
// 注意：配方 ID 和输出不同！
//event.remove({ id: 'minecraft:glowstone' })

