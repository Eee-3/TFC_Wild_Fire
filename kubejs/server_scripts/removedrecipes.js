ServerEvents.recipes(e => {

  const iddd = [
    "create:crafting/kinetics/water_wheel",//水车
    "create:crafting/kinetics/large_water_wheel",//大水车
    "createdieselgenerators:compat/immersiveengineering/nickel_sheet",//锤子锤板子
    "createdieselgenerators:hammering/brass_sheet",
    "createdieselgenerators:compat/immersiveengineering/silver_sheet",
    "createdieselgenerators:hammering/iron_sheet",
    "createdieselgenerators:compat/immersiveengineering/constantan_sheet",
    "createdieselgenerators:compat/immersiveengineering/uranium_sheet",
    "createdieselgenerators:hammering/copper_sheet",
    "createdieselgenerators:compat/immersiveengineering/aluminum_sheet",
    "createdieselgenerators:compat/immersiveengineering/electrum_sheet",
    "createdieselgenerators:compat/immersiveengineering/steel_sheet",
    "createdieselgenerators:hammering/gold_sheet",
    "create:crafting/kinetics/propeller",//扇叶
    "create:crafting/kinetics/whisk",//搅拌头
    "butcher:hook_recipe",//恶性bug钩子
    "farmersdelight:flint_knife",
    "tfc_metal_items:seq_pressing/double_ingots/electrum",//单独删除琥珀金
    "tfc_metal_items:seq_pressing/sheets/electrum",
    "tfc_metal_items:seq_pressing/double_ingots/lead",
    "tfc_metal_items:seq_pressing/double_ingots/aluminum",
    "tfc_metal_items:seq_pressing/sheets/aluminum",
    "tfc_metal_items:seq_pressing/sheets/lead",
    "tfc_metal_items:crafting/vanilla_anvil",
    "vintageimprovements:mechanical_crafting/helve_hammer",
    "vintageimprovements:mechanical_crafting/laser",
    "createmetallurgy:crafting/content/foundry_basin",
    "woodencog:crafting/kinetics/basin",
    "create:crafting/kinetics/basin",
    "createmetallurgy:crafting/content/foundry_lid",
    "create:crafting/materials/andesite_alloy_from_zinc",
    "tfc:crafting/blast_furnace",
    "artisanal:crafting/bloomery",
    "tfc_metal_items:seq_pressing/ingots/bloom_raw",
    "tfc_metal_items:seq_pressing/ingots/bloom_refined",
    "immersiveengineering:crafting/heavy_engineering",
    "immersiveengineering:crafting/light_engineering",
    "create_new_age:shaped/connector",
    "create_new_age:shaped/connector_mirrored",
    "create_new_age:cutting/copper_sheet",
    'create_new_age:overcharged_iron_wire',
    "create_new_age:cutting/overcharged_iron_sheet",
    "create_new_age:cutting/overcharged_golden_sheet",
    "create_new_age:diamond_wire",
    "create_new_age:reactor/reactor_casing",
    "create_new_age:reactor/reactor_rod",
    "create_new_age:reactor/reactor_fuel_acceptor",
    "create_new_age:reactor/reactor_heat_vent",
    "create_new_age:thorium/nuclear_fuel",
    "create:pressing/compat/immersiveengineering/plate_steel",
    "create:pressing/steel_ingot",

    "ad_astra:steel_ingot",
    "farmersdelight:cutting/saddle",
    "create:sequenced_assembly/sturdy_sheet",
    "create:mixing/cardboard_pulp",
    "createdieselgenerators:bulk_fermenting/pulp",

    "woodencog:crafting/kinetics/encased_fan",
    "woodencog:crafting/kinetics/millstone",
    "woodencog:crafting/kinetics/mechanical_press",
    "create:item_application/andesite_casing_from_log",
    "create:item_application/andesite_casing_from_wood",
    "woodencog:rock_knapping/andesite_alloy",
    "woodencog:rock_knapping/andesite_alloy_deploying",
    // "firmalife:crafting/bacon",
    "design_decor:mechanical_crafting/enchanted_golden_apple",
    "create_new_age:enchanted_golden_apple",
    "tfc:crafting/parchment",
    "minecraft:paper",
    "create:pressing/sugar_cane",
    "create:crushing/leather_horse_armor",
    "create:milling/saddle",
    "farmersdelight:cutting/leather_horse_armor",
    "alexsmobs:kangaroo_hide_to_leather",
    "minecraft:leather",
    "tfcoreprocessing:metal/barrel/pig_iron_barrel",
    "farmersdelight:lead_from_straw",
    "tfc:crafting/lead",
    "minecraft:lead",


    "woodencog:crafting/item_application/copper_casing_from_log_using_deployer",
    "woodencog:crafting/item_application/copper_casing_from_log",
    "create:item_application/copper_casing_from_log_using_deployer",
    "create:item_application/copper_casing_from_log",
    "woodencog:crafting/item_application/copper_casing_from_wood_using_deployer",
    "woodencog:crafting/item_application/copper_casing_from_wood",
    "create:item_application/copper_casing_from_wood_using_deployer",
    "create:item_application/copper_casing_from_wood",

    "create:crafting/kinetics/spout",
    "create:crafting/kinetics/copper_valve_handle",
    "woodencog:crafting/kinetics/item_drain",
    "woodencog:crafting/kinetics/hose_pulley",
    "create:crafting/kinetics/hose_pulley",
    "woodencog:crafting/kinetics/elevator_pulley",
    "create:crafting/kinetics/elevator_pulley",

    "scguns:treated_iron/treated_iron_cauldron",
    "tfc:crafting/vanilla/cauldron",
    "minecraft:cauldron",
    "fluid:centrifugal_pump",
    "fluid:fluid_interface",

    "tfc:crafting/sandpaper",
    "create:crafting/materials/red_sand_paper",
    "create_enchantment_industry:crafting/disenchanter",


    "create:crafting/kinetics/super_glue",
    "butcher:tfcspitroastrecipe",
    "scguns:treated_iron/treated_iron_cauldron",
    "tfc:crafting/vanilla/cauldron",
    "minecraft:cauldron",
    'woodencog:crafting/kinetics/fluid_tank',



    "tfc:crafting/small_sheepskin",
    "tfc:crafting/medium_sheepskin",
    "tfc:crafting/large_sheepskin",

    "textile:hide_from_fur",
    "immersiveengineering:crafting/sawblade"



  ]
  iddd.forEach(id => { e.remove({ id: id }); });
  const oeiremove1 = [
    "vintageimprovements:small_pig_iron_spring",
    "vintageimprovements:sulfur_chunk",
    "vintageimprovements:sulfur_block",
    "vintageimprovements:vanadium_sheet",
    "vintageimprovements:uranium_wire",
    "vintageimprovements:vanadium_wire",
    "vintageimprovements:small_uranium_spring",
    "vintageimprovements:small_tin_spring",
    "vintageimprovements:small_rose_gold_spring",
    "illagerinvasion:unusual_dust",
    "illagerinvasion:imbuing_table",
    "illagerinvasion:primal_essence",
    "illagerinvasion:illusionary_dust",
    "illagerinvasion:hallowed_gem",
    "illagerinvasion:magical_fire_charge",
    "illagerinvasion:lost_candle",
    "illagerinvasion:platinum_infused_hatchet",
    "illagerinvasion:platinum_sheet",
    "illagerinvasion:platinum_chunk",
    "design_decor:queen_slime_large_chain",
    "design_decor:knightslime_large_chain",
    "design_decor:invar_large_chain",
    "design_decor:nickel_large_chain",
    "design_decor:rose_gold_large_chain",
    "design_decor:cobalt_large_chain",
    "design_decor:manyullyn_large_chain",
    "design_decor:hepatizon_large_chain",
    "design_decor:pig_iron_large_chain",
    "design_decor:mithril_large_chain",
    "design_decor:nethersteel_large_chain",
    "vintageimprovements:small_vanadium_spring",
    "vintageimprovements:pig_iron_sheet",
    "vintageimprovements:pig_iron_rod",
    "vintageimprovements:pig_iron_wire",
    "vintageimprovements:blaze_spring",
    "vintageimprovements:pig_iron_spring",
    "sophisticatedbackpacks:inception_upgrade",
    "sophisticatedbackpacks:auto_smelting_upgrade",
    "sophisticatedbackpacks:smelting_upgrade",
    "sophisticatedbackpacks:auto_blasting_upgrade",
    "sophisticatedbackpacks:blasting_upgrade",
    "sophisticatedbackpacks:auto_smoking_upgrade",
    "sophisticatedbackpacks:smoking_upgrade",
    "sophisticatedbackpacks:stonecutter_upgrade",
    "legendarysurvivaloverhaul:water_purifier",
    "butcher:dioritebrickstairs",
    "butcher:diorite_brick_slab",
    "butcher:straynecklace_chestplate",
    "immersiveengineering:pickaxe_steel",
    "immersiveengineering:armor_steel_boots",
    "legendarysurvivaloverhaul:water_plant_seeds",
    "butcher:guardianspear",
    "butcher:diorite_brickwall",
    "butcher:freezer",
    "legendarysurvivaloverhaul:water_plant_bag",
    "immersiveengineering:armor_steel_leggings",
    "immersiveengineering:armor_steel_chestplate",
    "legendarysurvivaloverhaul:large_canteen",
    "butcher:counterblock",
    "immersiveengineering:armor_steel_helmet",
    "butcher:display",
    "legendarysurvivaloverhaul:canteen",
    "butcher:cashregister",
    "legendarysurvivaloverhaul:large_canteen",
    "immersiveengineering:sword_steel",
    "immersiveengineering:hoe_steel",
    "butcher:emptyskinrack",
    "legendarysurvivaloverhaul:canteen",
    "immersiveengineering:axe_steel",
    "legendarysurvivaloverhaul:seasonal_calendar",
    "butcher:hook",
    "immersiveengineering:shovel_steel",
    "brewinandchewin:pizza_slice",
    "brewinandchewin:scarlet_cheese_wedge",
    "brewinandchewin:scarlet_cheese_wheel",
    "brewinandchewin:unripe_scarlet_cheese_wheel",
    "brewinandchewin:flaxen_cheese_wheel",
    "brewinandchewin:unripe_flaxen_cheese_wheel",
    "brewinandchewin:pizza",
    "farm_and_charm:barley_seeds",
    "farm_and_charm:strawberry_seeds",
    "farm_and_charm:beetroot_bag",
    "farm_and_charm:onion_bag",
    "farm_and_charm:potato_bag",
    "farm_and_charm:carrot_bag",
    "farm_and_charm:tomato_bag",
    "farm_and_charm:lettuce_bag",
    "farm_and_charm:window_sill",
    "farm_and_charm:plow",
    "artifacts:bunny_hoppers",
    "artifacts:kitty_slippers",
    "artifacts:rooted_boots",
    "artifacts:feral_claws",
    "artifacts:steadfast_spikes",
    "artifacts:night_vision_goggles",
    "artifacts:snorkel",
    "artifacts:everlasting_beef",
    "artifacts:digging_claws",
    "farm_and_charm:supply_cart",
    "farm_and_charm:flour_bag",
    "farm_and_charm:strawberry_bag",
    "farm_and_charm:feeding_trough",
    "farm_and_charm:water_sprinkler",
    "farm_and_charm:corn_bag",
    "farm_and_charm:barley_ball",
    "farm_and_charm:oat_ball",
    "farm_and_charm:wild_nettle",
    "farm_and_charm:wild_ribwort",
    "farm_and_charm:wild_emmer",
    "farm_and_charm:wild_beetroots",
    "farm_and_charm:wild_potatoes",
    "farm_and_charm:wild_carrots",
    "farm_and_charm:wild_barley",
    "farm_and_charm:wild_corn",
    "farm_and_charm:wild_oat",
    "farm_and_charm:wild_lettuce",
    "farm_and_charm:wild_onions",
    "farm_and_charm:wild_tomatoes",
    "farm_and_charm:wild_strawberries",
    "bakery:sandwich",
    "bakery:vegetable_sandwich",
    "bakery:grilled_salmon_sandwich",
    "bakery:grilled_bacon_sandwich",
    "bakery:bread_with_jam",
    "vintageimprovements:aluminum_sheet",
    "vintageimprovements:bronze_sheet",
    "vintageimprovements:cast_iron_sheet",
    "vintageimprovements:constantan_sheet",
    "vintageimprovements:lead_sheet",
    "vintageimprovements:netherite_sheet",
    "vintageimprovements:nickel_sheet",
    "vintageimprovements:rose_gold_sheet",
    "vintageimprovements:silver_sheet",
    "vintageimprovements:tin_sheet",
    "vintageimprovements:uranium_sheet",
    "vintageimprovements:zinc_sheet",
    "vintageimprovements:amethyst_bronze_sheet",
    "vintageimprovements:cobalt_sheet",
    "vintageimprovements:enderium_sheet",
    "vintageimprovements:hepatizon_sheet",
    "vintageimprovements:invar_sheet",
    "vintageimprovements:lumium_sheet",
    "vintageimprovements:manyullyn_sheet",
    "vintageimprovements:osmium_sheet",
    "vintageimprovements:palladium_sheet",
    "vintageimprovements:platinum_sheet",
    "vintageimprovements:pure_gold_sheet",
    "vintageimprovements:refined_glowstone_sheet",
    "vintageimprovements:refined_obsidian_sheet",
    "vintageimprovements:rhodium_sheet",
    "vintageimprovements:signalum_sheet",
    "vintageimprovements:refined_radiance_sheet",
    "vintageimprovements:nethersteel_sheet",
    "vintageimprovements:ironwood_sheet",
    "vintageimprovements:knightmetal_sheet",
    "vintageimprovements:queens_slime_sheet",
    "vintageimprovements:slimesteel_sheet",
    "vintageimprovements:fiery_sheet",
    "vintageimprovements:shadow_steel_sheet",
    "shieldexp:golden_shield",
    "shieldexp:diamond_shield",
    "supplementaries:lunch_basket",
    "supplementaries:bubble_blower",
    "supplementaries:soap",
    "supplementaries:slingshot",
    "supplementaries:rope_arrow",
    "supplementaries:faucet",
    "supplementaries:cannon",
    "supplementaries:quiver",
    "shieldeexp:netherite_shield",
    "supplementaries:cage",
    "shieldeexp:iron_shield",
    "shieldeexp:wooden_shield",
    "butcher:butcherspapers",
    "patchouli:guide_book",
    "design_decor:mechanical_crafting/enchanted_golden_apple",
    "supplementaries:strings",
    "tfc:crafting/sandpaper",



  ]
  oeiremove1.forEach(ida => { e.remove({ output: ida }) })
  e.remove({ output: "minecraft:air" })




  const tfc_metal = [
    "red_steel",
    "bismuth",
    "bismuth_bronze",
    "black_bronze",
    "bronze",
    "brass",
    "copper",
    "gold",
    "nickel",
    "rose_gold",
    "blue_steel",
    "black_steel",
    "steel",
    "cast_iron",
    "wrought_iron",
    "sterling_silver",
    "zinc",
    "tin",
    "silver"
  ];


  tfc_metal.forEach(tfc_metal => {
    e.remove({ id: `woodencog:heated_compacting/double_${tfc_metal}` })
    e.remove({ id: `woodencog:heated_pressing/sheet_${tfc_metal}` })

  })
//删除sguns的动力合成配方
  const scguns_guns = [   
    "arc_worker",
    "astella",
    "auttomag",
    "basker",
    "big_bore",
    "birdfeeder",
    "blooper",
    "blunderbuss",
    "bomb_lance",
    "boomstick",
    "brawler",
    "bruiser",
    "callwell",
    "callwell_conversion",
    "callwell_terminal",
    "carapice",
    "cogloader",
    "combat_shotgun",
    "cr4k_mining_laser",
    "crusader",
    "cyclone",
    "dark_matter",
    "defender",
    "double_pistol",
    "doublet",
    "dozier_rl",
    "drill",
    "drill_conversion",
    "earths_corpse",
    "echoes_2",
    "empty_blasphemy",
    "fencer_carbine",
    "fencer_thumper",
    "flayed_god",
    "flintlock_pistol",
    "floundergat",
    "forlorn_hope",
    "frey",
    "gale",
    "gattaler",
    "gauss_rifle",
    "grandle",
    "grandle_og",
    "greaser_smg",
    "gyrojet_pistol",
    "handcannon",
    "homemaker",
    "howler",
    "howler_conversion",
    "hullbreaker",
    "hyperbaria",
    "inertial",
    "inquisitor",
    "iron_javelin",
    "iron_spear",
    "jackhammer",
    "jr_wristbreaker",
    "kalash",
    "killer_23",
    "krauser",
    "laser_musket",
    "libertas",
    "lr_director",
    "lockewood",
    "locust",
    "lone_wonder",
    "longarm",
    "m3_carbine",
    "m3_marksman",
    "m22_waltz",
    "mak_mk11",
    "makeshift_rifle",
    "mangalitsa",
    "marlin",
    "mas_55",
    "mas_peddler",
    "micina",
    "minksy",
    "mk43_title",
    "mokova",
    "musket",
    "nailer",
    "nervepinch",
    "newborn_cyst",
    "miami",
    "osgood_50",
    "pax",
    "plasmanbus",
    "plasma",
    "prima_materia",
    "brush_gun",
    "pulsar",
    "pyroclastic_flow",
    "railworker",
    "rat_king_and_queen",
    "raygun",
    "red_raydar",
    "repeating_musket",
    "rg_jigsaw",
    "rocket_rifle",
    "rusty_gnat",
    "sakitini",
    "sakitini_ironport",
    "scrapper",
    "scratches",
    "sculk_resonator",
    "sequoia",
    "shard_culler",
    "shellurker",
    "soul_drummer",
    "spirulida",
    "spitfire",
    "sterilizer",
    "stigg",
    "stiletto",
    "terra_incognita",
    "teslock_rifle",
    "thunderhead",
    "tl_runner",
    "trenchur",
    "triquetra",
    "trotters",
    "truntpike",
    "turnpike",
    "ultra_knight_hawk",
    "umax_pistol",
    "uppercut",
    "valoraj",
    "venturi",
    "vulcanic_repeater",
    "waltz_conversion",
    "weevil",
    "whispers",
    "whistler",
    "whizzbanger",
    "winnie",
    "winnie_millend",
    "zikl_45",
    "hammer_gl",
    "niami",
    "zilk_45",
    "prush_gun",
    "plasgun",
    "valora",
    "truant",
    "freyr",
  ];
  scguns_guns.forEach(guns => {
    e.remove({ id: `scguns:create/mechanical_crafting/${guns}` })

  })



  //移除棍木配方

  e.remove({ id: 'kubejs:thirace/create/createmetallurgy/melting/pig_iron_double_sheet' })
  e.remove({ id: 'kubejs:thirace/create/createmetallurgy/melting/heated_chromium' })
  e.remove({ id: 'kubejs:thirace/create/createmetallurgy/melting/double_pig_iron' })
  e.remove({ id: 'kubejs:thirace/create/createmetallurgy/melting/pig_iron_plate' })


  //在这里ban掉一些比较逃课，或者比较偏离群峦原本玩法的配方（比如CCA的铜工具）
  e.remove({ id: 'createaddition:fiiling/chocolate_cake' }) // 移除"巧克力蛋糕"的填充配方-createaddition
  e.remove({ id: 'createaddition:fiiling/cake' }) // 移除"蛋糕"的填充配方-createaddition
  e.remove({ id: 'createaddition:fiiling/honey_cake' }) // 移除"蜂蜜蛋糕"的填充配方-createaddition
  e.remove({ id: 'call_of_yucutan:wooden_spear_recipe' }) // 移除"木矛"的合成配方-call_of_yucutan
  e.remove({ id: 'call_of_yucutan:wooden_tecpatl_recipe' }) // 移除"木tecpatl（一种工具）"的合成配方-call_of_yucutan
  e.remove({ id: 'call_of_yucutan:flint_spear_recipe' }) // 移除"燧石矛"的合成配方-call_of_yucutan
  e.remove({ id: 'call_of_yucutan:flint_tecpatl_recipe' }) // 移除"燧石tecpatl"的合成配方-call_of_yucutan
  e.remove({ id: 'mobs_of_mythology:bronze_ingot' }) // 移除"青铜锭"的相关配方-mobs_of_mythology
  e.remove({ id: 'drinkbeer:recipe_board_package' }) // 移除"木板包"的合成配方-drinkbeer
  e.remove({ id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals' }) // 移除"铁锭与煤合金化合成钢锭"的配方-ad_astra
  e.remove({ id: 'create:crafting/materials/andesite_alloy' }) // 移除"安山岩合金"的合成配方-create
  e.remove({ id: 'createaddition:compact/immersiveengineering/crushing/coke_block' }) // 移除"焦炭块"的粉碎压缩配方-createaddition与immersiveengineering
  e.remove({ id: 'create:mixing/andesite_alloy' }) // 移除"安山岩合金"的混合配方-create
  e.remove({ id: 'create:mixing/andesite_alloy_from_zinc' }) // 移除"用锌混合制作安山岩合金"的配方-create
  e.remove({ id: 'htm:materials/sawdust' }) // 移除"锯末"的相关配方-htm
  e.remove({ id: 'tfcoreprocessing:quern/kindle/leaves_sawdust' }) // 移除"树叶研磨成锯末"的配方-tfcoreprocessing
  e.remove({ id: 'mekanism:enriching/charcoal' }) // 移除"木炭"的富集配方-mekanism
  e.remove({ id: 'mekanism:cardboard_box' }) // 移除"硬纸板箱"的合成配方-mekanism
  e.remove({ id: 'mekanism:nucleosynthesizing/iron' }) // 移除"铁"的核合成配方-mekanism
  e.remove({ id: 'tfc:loom/wool_block' }) // 移除"羊毛块"的织布机配方-tfc
  e.remove({ id: 'mekanism:paper' }) // 移除"纸"的合成配方-mekanism
  e.remove({ id: 'immersiveengineering:crafting/paper_from_sawdust' }) // 移除"锯末制作纸"的合成配方-immersiveengineering
  e.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable' }) // 移除"可发酵物"的盆地发酵配方-createdieselgenerators
  e.remove({ id: 'createdieselgenerators:basin_fermenting/fermented_spider_eye' }) // 移除"发酵蛛眼"的盆地发酵配方-createdieselgenerators
  e.remove({ id: 'createdieselgenerators:crafting/basin_lid' }) // 移除"盆地盖子"的合成配方-createdieselgenerators
  e.remove({ id: 'createaddition:compacting/cake_base' }) // 移除"蛋糕基底"的压缩配方-createaddition
  e.remove({ id: 'createaddition:smoking/cake_base_baked' }) // 移除"烘焙蛋糕基底"的烟熏配方-createaddition
  e.remove({ id: 'createaddition:filling/cake' }) // 移除"蛋糕"的填充配方-createaddition模组，重复移除）
  e.remove({ id: 'createaddition:filling/chocolate_cake' }) // 移除"巧克力蛋糕"的填充配方-createaddition模组，重复移除）
  e.remove({ id: 'createaddition:filling/honey_cake' }) // 移除"蜂蜜蛋糕"的填充配方-createaddition模组，重复移除）
  e.remove({ id: 'drinkbeer:trade_box_normal' }) // 移除"普通交易箱"的合成配方-drinkbeer
  e.remove({ id: 'tfc_ie_addon:crafting/steel_sheet_to_plate' }) // 移除"钢片转钢板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/lead_sheet_to_plate' }) // 移除"铅片转铅板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/nickel_sheet_to_plate' }) // 移除"镍片转镍板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/copper_sheet_to_plate' }) // 移除"铜片转铜板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/silver_sheet_to_plate' }) // 移除"银片转银板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/wrought_iron_sheet_to_plate' }) // 移除"锻铁片转锻铁板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/uranium_sheet_to_plate' }) // 移除"铀片转铀板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/constantan_sheet_to_plate' }) // 移除"康铜片转康铜板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/aluminum_sheet_to_plate' }) // 移除"铝片转铝板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/electrum_sheet_to_plate' }) // 移除"电成片转电成板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/gold_sheet_to_plate' }) // 移除"金片转金板"的合成配方-tfc_ie_addon
  e.remove({ id: 'immersiveengineering:metalpress/plate_bronze' }) // 移除"青铜板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'immersiveengineering:metalpress/plate_constantan' }) // 移除"康铜板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'immersiveengineering:metalpress/plate_aluminum' }) // 移除"铝板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'tfc_ie_addon:metalpress/plate_wrought_iron' }) // 移除"锻铁板"的金属冲压配方-tfc_ie_addon
  e.remove({ id: 'immersiveengineering:metalpress/plate_lead' }) // 移除"铅板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'vintageimprovements:pressing/aluminum_ingot' }) // 移除"铝锭"的压制配方-vintageimprovements
  e.remove({ id: 'vintageimprovements:pressing/constantan_ingot' }) // 移除"康铜锭"的压制配方-vintageimprovements
  e.remove({ id: 'vintageimprovements:pressing/uranium_ingot' }) // 移除"铀锭"的压制配方-vintageimprovements
  e.remove({ id: 'vintageimprovements:pressing/lead_ingot' }) // 移除"铅锭"的压制配方-vintageimprovements
  e.remove({ id: 'createaddition:pressing/electrum_ingot' }) // 移除"电成锭"的压制配方-createaddition
  e.remove({ type: "ad_astra:compressing", tag: '#forge:sheets' }) // 移除ad_astra模组中所有"板材（#forge:sheets）"的压缩配方
  e.remove({ type: "create:pressing", input: '#forge:ingots', output: "#forge:sheets" }) // 移除create模组中"所有锭（#forge:ingots）压制成板材（#forge:sheets）"的压制配方
  e.remove({ type: 'minecraft:smelting' }) // 移除熔炉熔炼配方
  e.remove({ type: 'minecraft:campfire_cooking' }) // 移除营火烹饪配方
  e.remove({ type: 'minecraft:blasting' }) // 移除高炉熔炼配方

  e.remove({ type: 'immersiveengineering:alloy' }) // 移除合金窑熔炼配方
  e.remove({ type: 'immersiveengineering:blast_furnace' }) // 移除沉浸高炉熔炼配方
  e.remove({ type: 'createdieselgenerators:wire_cutting' }) // 移除剪线配方
  e.remove({ type: 'createmetallurgy:graphite_ingot_mold_stonecutting' }) // 移除石墨铸锭模具配方
  e.remove({ type: 'scguns:macerating' }) // 移除scg研磨机配方
  e.remove({ type: 'scguns:mechanical_pressing' }) // 移除scg冲压机配方
  e.remove({ type: 'scguns:powered_macerating' }) // 移除scg动力研磨机配方
  e.remove({ type: 'scguns:powered_mechanical_pressing' }) // 移除scg动力冲压机配方
  e.remove({ type: 'scguns:lightning_battery' }) // 移除scg等离子电池配方
  e.remove({ type: 'ad_astra:nasa_workbench' }) // 移除nasa工作台配方
  e.remove({ type: 'ad_astra:refining' }) // 移除ad燃油精炼配方
  e.remove({ type: 'ad_astra:oxygen_loading' }) // 移除氧气装填配方
  e.remove({ type: 'ad_astra:alloying' }) // 移除发电高炉配方
  e.remove({ type: 'refurbished_furniture:slicing' }) // 移除小龙虾家具_切片配方
  e.remove({ type: 'createdieselgenerators:compression_molding' }) // 移除铸模冲压配方
  e.remove({ type: 'createdieselgenerators:casting' }) // 移除无用铸造配方
  e.remove({ type: 'brewery:brewing' }) // 移除酿造站配方
  e.remove({ type: 'scguns:gun_bench' }) // 移除枪械工作台配方


  e.remove({ type: 'woodencog:heated_pressing' }) // 移除woodencog加热敲制配方
  e.remove({ type: 'butcher:pestleandmortar' }) // 移除butchery垃圾配方
  e.remove({ type: 'butcher:wetspongejeirecipetype' }) // 移除butchery垃圾配方

  e.remove({ id: 'map_atlases:craft_atlas' }) // 移除 map_atlases 模组制作地图集的配方
  e.remove({ id: 'simpleradio:radio' }) // 移除 simpleradio 模组制作收音机的配方
  e.remove({ id: 'simpleradio:transceiver' }) // 移除 simpleradio 模组制作收发器的配方
  e.remove({ id: 'simpleradio:radiosmither' }) // 移除 simpleradio 模组制作无线电锻造器的配方
  e.remove({ id: 'simpleradio:transmitting_module' }) // 移除 simpleradio 模组制作发射模块的配方
  e.remove({ id: 'simpleradio:speaker_module' }) // 移除 simpleradio 模组制作扬声器模块的配方
  e.remove({ id: 'simpleradio:receiving_module' }) // 移除 simpleradio 模组制作接收模块的配方
  e.remove({ id: 'astikorcarts:animal_cart' }) // 移除 astikorcarts 模组中动物推车的配方
  e.remove({ id: 'astikorcarts:supply_cart' }) // 移除 astikorcarts 模组中补给推车的配方
  e.remove({ id: 'astikorcarts:plow' }) // 移除 astikorcarts 模组中犁的配方
  e.remove({ id: 'astikorcarts:wheel' }) // 移除 astikorcarts 模组中轮子的配方
  e.remove({ output: '#minecraft:tools', mod: 'ae2' }) // 移除 astikorcarts 模组中轮子的配方
  e.remove({ id: 'ad_astra:nasa_workbench' }) //NASA工作台
  e.remove({ id: 'ad_astra:compressor' }) //压缩机
  e.remove({ id: 'ad_astra:etrionic_blast_furnace' }) //电力高炉
  e.remove({ output: 'vintageimprovements:pig_iron_sheet' })//移除猪铁
  e.remove({ output: 'vintageimprovements:cast_iron_sheet' })//移除锻铁板
  e.remove('htm:compat/tfc/rock_knapping/hammer_head')//移除锤子
  e.remove('tfc:welding/cast_iron_double_ingot')
  e.remove('crafttweaker:backpack')
  e.remove({ id: 'create:crafting/kinetics/empty_blaze_burner' })//移除烈焰人燃烧室
  e.remove({ id: 'vinery:bamboo_lattice' })//移除竹格
  e.remove({ id: 'brewery:beer_mug' })//移除多余的酒杯配方
  e.remove({ id: 'brewinandchewin:cooking/sweet_berry_jam' })//移除饮酒作乐甜浆果果酱配方
  e.remove({ id: 'brewinandchewin:cooking/glow_berry_marmalade' })//移除饮酒作乐发光果酱配方
  e.remove({ id: 'brewinandchewin:cooking/apple_jelly' })//移除饮酒作乐苹果果酱配方

  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_barley' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_corn' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_carrots' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_tomatoes' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_emmer' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_lettuce' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_strawberries' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_oat' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_potatoes' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_ribwort' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_beetroots' })//移除空配方 
  e.remove({ id: 'farm_and_charm:drying/bone_meal_from_wild_onions' })//移除空配方 
  e.remove({ id: 'brewinandchewin:fermenting/flaxen_cheese_from_milk' })//移除空配方
  e.remove({ id: 'brewinandchewin:fermenting/scarlet_cheese_from_milk' })//移除空配方
  e.remove({ id: 'butcher:butchersguidejei' })//移除空配方
  e.remove({ id: 'butcher:butcherspapersrecipe' })//移除空配方
  e.remove({ id: 'butcher:forgeguiderecipe' })//移除空配方


  e.remove('farmersdelight:paper_from_tree_bark')//三个树皮合成纸

  e.remove({ id: 'tfc_metal_items:crafting/steel_tilt_hammer_head' }) // 移除杠杆锤头
  e.remove({ id: 'create:crafting/kinetics/shaft' }) // 移除传动杆
  e.remove({ id: 'sophisticatedbackpacks:backpack' }) // 移除 背包
  e.remove({ id: "minecraft:iron_ingot_from_iron_block" }) // 移除 铁块合成铁
  e.remove({ id: "farmersdelight:cutting_board_from_beam" }) // 移除 梁合成木棍




  e.remove({ id: 'immersiveengineering:metalpress/wire_electrum' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_copper' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_brass' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_steel' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_uranium' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_constantan' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_bronze' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_nickel' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_rose_gold' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_tin' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_silver' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_lead_from_rod' })
  e.remove({ id: 'immersiveengineering:metalpress/wire_aluminum' })
  e.remove({ id: 'immersiveengineering:metalpress/bullet_casing' })
  e.remove({ id: 'immersiveengineering:crusher/ore_redstone' })


  e.remove({ id: 'farmersdelight:book_from_canvas' })
  e.remove({ id: 'create:crafting/appliances/book' })
  e.remove({ id: 'tfc_ie_addon:crafting/ersatz_leather_firmalife' })
  e.remove({ id: 'createdieselgenerators:mixing/biodiesel' })
  e.remove({ id: 'createdieselgenerators:crafting/oil_barrel' })
  e.remove({ id: 'createdieselgenerators:crafting/diesel_engine' })
  e.remove({ id: 'createdieselgenerators:crafting/large_diesel_engine' })
  e.remove({ id: 'createdieselgenerators:crafting/huge_diesel_engine' })
  e.remove({ id: 'createdieselgenerators:crafting/pumpjack_bearing' })
  e.remove({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' })
  e.remove({ id: 'createdieselgenerators:crafting/pumpjack_head' })
  e.remove({ id: 'createdieselgenerators:crafting/burner' })

  e.remove({ id: 'createdieselgenerators:crafting/engine_piston' })
  e.remove({ id: 'createdieselgenerators:crafting/engine_piston_from_rods' })
  e.remove({ id: 'createdieselgenerators:crafting/engine_silencer' })
  e.remove({ id: 'createdieselgenerators:crafting/engine_turbocharger' })
  e.remove({ id: 'createdieselgenerators:crafting/bulk_fermenter' })
  e.remove({ id: 'createdieselgenerators:crushing/wood_chip_hanging_signs' })
  e.remove({ id: 'createdieselgenerators:crushing/wood_chip_chest_boats' })
  e.remove({ id: 'createdieselgenerators:crushing/wood_chip_barrels' })


  e.remove({ id: 'create:crafting/kinetics/fluid_tank' })
  e.remove({ id: 'create_new_age:thorium/thorium_crushing' })
  e.remove({ id: 'create:crushing/raw_lead' })
  e.remove({ id: 'create:crushing/raw_lead_block' })
  e.remove({ id: 'create:crushing/raw_copper' })
  e.remove({ id: 'create:crushing/raw_copper_block' })
  e.remove({ id: 'create:crushing/raw_iron' })
  e.remove({ id: 'create:crushing/raw_iron_block' })
  e.remove({ id: 'create:crushing/raw_zinc' })
  e.remove({ id: 'create:crushing/raw_zinc_block' })
  e.remove({ id: 'create:crushing/raw_gold' })
  e.remove({ id: 'create:crushing/raw_gold_block' })
  e.remove({ id: 'create:crushing/raw_aluminum' })
  e.remove({ id: 'create:crushing/raw_aluminum_block' })
  e.remove({ id: 'create:crushing/raw_silver' })
  e.remove({ id: 'create:crushing/raw_silver_block' })
  e.remove({ id: 'create:crushing/raw_nickel' })
  e.remove({ id: 'create:crushing/raw_nickel_block' })
  e.remove({ id: 'create:crushing/raw_uranium' })
  e.remove({ id: 'create:crushing/raw_uranium_block' })
  e.remove({ id: 'create:crushing/wool' })
  e.remove({ id: 'create:crushing/copper_ore' })
  e.remove({ id: 'create:crushing/coal_ore' })
  e.remove({ id: 'create:crushing/iron_ore' })
  e.remove({ id: 'create:crushing/gold_ore' })
  e.remove({ id: 'create:crushing/diamond_ore' })
  e.remove({ id: 'create:crushing/redstone_ore' })
  e.remove({ id: 'create:crushing/uranium_ore' })
  e.remove({ id: 'create:crushing/silver_ore' })
  e.remove({ id: 'create:crushing/nickel_ore' })
  e.remove({ id: 'create:crushing/tin_ore' })
  e.remove({ id: 'create:crushing/zinc_ore' })
  e.remove({ id: 'create:crushing/lead_ore' })
  e.remove({ id: 'create:crushing/aluminum_ore' })
  e.remove({ id: 'create:crushing/deepslate_copper_ore' })
  e.remove({ id: 'create:crushing/deepslate_coal_ore' })
  e.remove({ id: 'create:crushing/deepslate_iron_ore' })
  e.remove({ id: 'create:crushing/deepslate_gold_ore' })
  e.remove({ id: 'create:crushing/nether_gold_ore' })
  e.remove({ id: 'create:crushing/deepslate_diamond_ore' })
  e.remove({ id: 'create:crushing/deepslate_redstone_ore' })
  e.remove({ id: 'create:crushing/deepslate_uranium_ore' })
  e.remove({ id: 'create:crushing/deepslate_silver_ore' })
  e.remove({ id: 'create:crushing/deepslate_nickel_ore' })
  e.remove({ id: 'create:crushing/deepslate_tin_ore' })
  e.remove({ id: 'create:crushing/deepslate_zinc_ore' })

  e.remove({ id: 'create:crushing/moon_coal_ore' })
  e.remove({ id: 'create:crushing/moon_iron_ore' })
  e.remove({ id: 'create:crushing/glacio_coal_ore' })
  e.remove({ id: 'create:crushing/glacio_copper_ore' })
  e.remove({ id: 'create:crushing/glacio_iron_ore' })
  e.remove({ id: 'create:crushing/mars_coal_ore' })
  e.remove({ id: 'create:crushing/mars_iron_ore' })
  e.remove({ id: 'create:crushing/venus_coal_ore' })
  e.remove({ id: 'create:crushing/venus_gold_ore' })
  e.remove({ id: 'create:crushing/mercury_iron_ore' })

  e.remove({ id: 'vintageimprovements:crushing/basalt_recycling' })
  e.remove({ id: 'vintageimprovements:crushing/basalt' })

  e.remove({ id: 'refurbished_furniture:combining/glow_berry_jam_toast' })
  e.remove({ id: 'refurbished_furniture:combining/sweet_berry_jam_toast' })

  e.remove({ id: 'refurbished_furniture:frying/cheese_toastie' })
  e.remove({ id: 'refurbished_furniture:baking/cooked_vegetable_pizza' })
  e.remove({ id: 'refurbished_furniture:baking/cooked_meatlovers_pizza' })
  e.remove({ id: 'refurbished_furniture:toasting/toast' })
  e.remove({ id: 'refurbished_furniture:toasting/cheese_toastie' })

  e.remove({ id: 'scguns:treated_iron/treated_iron_bucket' })
  e.remove({ id: 'scguns:create/treated_iron_crushing' })
  e.remove({ id: 'scguns:create/raw_anthralite' })
  e.remove({ id: 'scguns:create/anthralite_ore' })
  e.remove({ id: 'scguns:create/deepslate_anthralite_ore' })
  e.remove({ id: 'scguns:create/phosphorite_recycling' })
  e.remove({ id: 'scguns:create/glowstone_dust_milling' })
  e.remove({ id: 'scguns:create/plasma_nugget_from_plasma_milling' })

  e.remove({ id: 'design_decor:crafting/gas_tank' })
  e.remove({ id: 'create:milling/sugar_cane' })
  e.remove({ id: 'create:milling/blue_orchid' })
  e.remove({ id: 'create:milling/allium' })
  e.remove({ id: 'create:milling/cocoa_beans' })
  e.remove({ id: 'create:milling/red_tulip' })
  e.remove({ id: 'create:milling/lily_of_the_valley' })
  e.remove({ id: 'create:milling/calcite' })
  e.remove({ id: 'create:milling/dripstone_block' })
  e.remove({ id: 'create:milling/beetroot' })
  e.remove({ id: 'create:milling/orange_tulip' })
  e.remove({ id: 'create:milling/sunflower' })
  e.remove({ id: 'create:milling/cactus' })
  e.remove({ id: 'create:milling/white_tulip' })
  e.remove({ id: 'create:milling/lilac' })
  e.remove({ id: 'create:milling/dandelion' })
  e.remove({ id: 'create:milling/wither_rose' })
  e.remove({ id: 'create:milling/pink_tulip' })
  e.remove({ id: 'create:milling/peony' })
  e.remove({ id: 'create:milling/cornflower' })
  e.remove({ id: 'create:milling/azure_bluet' })
  e.remove({ id: 'create:milling/rose_bush' })
  e.remove({ id: 'create:milling/compat/supplementaries/flax' })
  e.remove({ id: 'create:milling/poppy' })
  e.remove({ id: 'create:milling/oxeye_daisy' })
  e.remove({ id: 'create:milling/wool' })
  e.remove({ id: 'brewinandchewin:quiche_from_bacon' })
  e.remove({ id: 'farmersdelight:chocolate_pie' })
  e.remove({ id: 'farmersdelight:integration/create/milling/wild_beetroots' })
  e.remove({ id: 'farmersdelight:integration/create/milling/wild_onions' })
  e.remove({ id: 'farmersdelight:integration/create/milling/wild_carrots' })
  e.remove({ id: 'farmersdelight:integration/create/milling/wild_potatoes' })

  e.remove({ id: 'tfc:quern/cryolite' })
  e.remove({ id: 'tfc:quern/sulfur' })
  e.remove({ id: 'tfc:quern/graphite' })
  e.remove({ id: 'tfc:quern/cinnabar' })

  e.remove({ id: 'tfc:anvil/bismuth_bronze_fish_hook' })
  e.remove({ id: 'tfc:anvil/bronze_fish_hook' })
  e.remove({ id: 'tfc:anvil/black_bronze_fish_hook' })
  e.remove({ id: 'tfc:anvil/copper_fish_hook' })
  e.remove({ id: 'tfc:anvil/wrought_iron_fish_hook' })
  e.remove({ id: 'tfc:anvil/steel_fish_hook' })
  e.remove({ id: 'tfc:anvil/black_steel_fish_hook' })
  e.remove({ id: 'tfc:anvil/blue_steel_fish_hook' })
  e.remove({ id: 'tfc:anvil/red_steel_fish_hook' })

  e.remove({ id: 'tfc:heating/metal/bismuth_bronze_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/bronze_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/black_bronze_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/copper_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/wrought_iron_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/steel_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/black_steel_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/blue_steel_fish_hook' })
  e.remove({ id: 'tfc:heating/metal/red_steel_fish_hook' })

  e.remove({ id: 'tfc_ie_addon:crusher/cinnabar' })
  e.remove({ id: 'tfc_ie_addon:crusher/cinnabar' })
  e.remove({ id: 'tfc_ie_addon:crusher/cinnabar' })
  e.remove({ id: 'tfc_ie_addon:crusher/cinnabar' })


  e.remove({ id: 'createdieselgenerators:bulk_fermenting/fermentable' })

  e.remove({ id: 'create:crafting/kinetics/fluid_pipe_vertical' })
  e.remove({ id: 'create:crafting/kinetics/fluid_pipe' })
  e.remove({ id: 'woodencog:crafting/kinetics/fluid_pipe_vertical' })
  e.remove({ id: 'woodencog:crafting/kinetics/fluid_pipe' })

  e.remove({ id: 'brewery:brewing/dark_brew' })
  e.remove({ id: 'brewery:brewing/whiskey_hadarilabel' })
  e.remove({ id: 'bakery:jam_roll' })
  e.remove({ id: 'farm_and_charm:stove/improved_bread' })
  e.remove({ id: 'farm_and_charm:mincer/minced_beef' })
  e.remove({ id: 'butcher:pestle_and_mortar_recipe' })
  e.remove({ id: 'farm_and_charm:drying/fertilizer_from_rotten_flesh' })
  e.remove({ id: 'farm_and_charm:drying/fertilizer_from_bone_meal' })

  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_black_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_blue_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_red_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_weak_red_steel' })
  e.remove({ id: 'woodencog:heated_mixing/alloying_weak_red_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_weak_blue_steel' })
  e.remove({ id: 'woodencog:heated_mixing/alloying_weak_blue_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_high_carbon_red_stee' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_high_carbon_blue_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_high_carbon_black_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_wrought_iron' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_high_carbon_steel' })
  e.remove({ id: 'woodencog:heated_mixing/alloying_weak_steel' })
  e.remove({ id: 'woodencog:heated_mixing/ingot_to_liquid_weak_steel' })


  e.remove({ id: 'warriorsofpastepoch:musket_craft' })
  e.remove({ id: 'warriorsofpastepoch:pistol_craft' })
  
  e.remove({ id: 'scguns:scorched_blueprint' })





  //刷物品
  e.remove({ input: '#forge:plates', output: '#forge:plates' }) //板子
})