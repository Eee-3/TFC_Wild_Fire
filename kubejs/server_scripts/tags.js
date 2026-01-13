// priority: 0


ServerEvents.tags("item", event => {
    event.add('forge:tools/hammers', '#tfc:hammers')

    const metals = [
        'bismuth_bronze',
        'black_bronze',
        'bronze',
        'copper',
        'wrought_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel',
        'cast_iron',
        'gold',
        'rose_gold',
        'brass',
        'bismuth',
        'silver',
        'sterling_silver',
        'nickel',
        'chromium',
        'zinc',
        'stainless_steel'
    ];
    const metalsinf = [
        'black_steel',
        'blue_steel',
        'red_steel'
    ];
    metalsinf.forEach(metal => {
        event.add('kubejs:inf_tongs', `kubejs:${metal}_tong`)
        event.add('kubejs:tongs', `kubejs:${metal}_tong`)
        event.add('kubejs:hot_items', `tfc:bucket/metal/${metal}`)
    }
    )
    metals.forEach(metal => {
        event.add('kubejs:tongs', `kubejs:${metal}_tong`)
        event.add('kubejs:hot_items', `tfc:bucket/metal/${metal}`)
    }
    )

    event.add('tfcscraping:quarter_scraping','butcher:boneskinningknife')
    event.add('tfc:usable_on_tool_rack','butcher:boneskinningknife')
    event.add('tfc:sharp_tools','butcher:boneskinningknife' )

    event.add('kubejs:tongs', 'create:extendo_grip')//机械臂

    event.add('kubejs:wild_mushroom', 'kubejs:wild_red_mushroom')//机械臂
    event.add('kubejs:wild_mushroom', 'kubejs:wild_brown_mushroom')//机械臂

    event.add('firmalife:oven_fuel', 'kubejs:wood_briquette')
    event.add('firmalife:smoking_fuel', 'kubejs:wood_briquette')
    event.add('tfc:firepit_fuel', 'kubejs:wood_briquette')

    event.add('kubejs:peel',
        [
            "kubejs:peel",
            "kubejs:cast_iron_peel",
            "kubejs:stainless_steel_peel"
        ])
    event.add('firmalife:usable_on_oven',
        [
            "kubejs:peel",
            "kubejs:cast_iron_peel",
            "kubejs:stainless_steel_peel"
        ])
    event.add('kubejs:glue',
        [
            "tfc:glue",
            "minecraft:slime_ball"
        ])




    // 将手套加入进饰品tag
    event.add('kubejs:tongs', 'kubejs:wooden_tong')
    event.add('curios:hands', 'kubejs:glove')
    // 熔岩桶和熔融桶是烫的物品
    event.add('kubejs:hot_items',
        [
            'minecraft:lava_bucket',
            "firmalife:bucket/metal/chromium",
            "firmalife:bucket/metal/stainless_steel",
            "tfc_ie_addon:bucket/metal/electrum",
            "tfc_ie_addon:bucket/metal/constantan",
            "tfc_ie_addon:bucket/metal/aluminum",
            "tfc_ie_addon:bucket/metal/lead",
            "tfc_ie_addon:bucket/metal/uranium",
            "tfc:bucket/metal/bismuth",
            "tfc:bucket/metal/bismuth_bronze",
            "tfc:bucket/metal/black_bronze",
            "tfc:bucket/metal/bronze",
            "tfc:bucket/metal/brass",
            "tfc:bucket/metal/copper",
            "tfc:bucket/metal/gold",
            "tfc:bucket/metal/nickel",
            "tfc:bucket/metal/rose_gold",
            "tfc:bucket/metal/silver",
            "tfc:bucket/metal/tin",
            "tfc:bucket/metal/zinc",
            "tfc:bucket/metal/sterling_silver",
            "tfc:bucket/metal/weak_blue_steel",
            "tfc:bucket/metal/red_steel",
            "tfc:bucket/metal/weak_steel",
            "tfc:bucket/metal/blue_steel",
            "tfc:bucket/metal/black_steel",
            "tfc:bucket/metal/steel",
            "tfc:bucket/metal/pig_iron",
            "tfc:bucket/metal/cast_iron",
            "tfc:bucket/metal/wrought_iron",
            "tfc:bucket/metal/weak_red_steel",
            "tfc:bucket/metal/high_carbon_steel",
            "tfc:bucket/metal/high_carbon_black_steel",
            "tfc:bucket/metal/high_carbon_blue_steel",
            "tfc:bucket/metal/high_carbon_red_steel",
            "tfc:bucket/metal/unknown",
            "kubejs:molten_corundum_bucket",
            "kubejs:molten_glass_bucket",
            "survivorsaquaculture:bucket/metal/neptunian_steel",
            "survivorsaquaculture:bucket/metal/neptunium"
        ])

    // 灼热的物品
    event.add('kubejs:hot_items',
        [
            "minecraft:magma_block",
            "alexscaves:primal_magma",
            "tfc:rock/magma/basalt",
            "tfc:rock/magma/granite",
            "tfc:rock/magma/diorite",
            "tfc:rock/magma/rhyolite",
            "tfc:rock/magma/andesite",
            "tfc:rock/magma/dacite",
            "alexscaves:volcanic_core",
            "scguns:vehement_coal_block",
            "scguns:vehement_coal"
        ])

    // 三锭
    event.add('kubejs:triple_ingot',
        [
            "kubejs:triple_copper",
            "kubejs:triple_bismuth_bronze",
            "kubejs:triple_black_bronze",
            "kubejs:triple_bronze",
            "kubejs:triple_black_steel",
            "kubejs:triple_blue_steel",
            "kubejs:triple_red_steel",
            "kubejs:triple_steel",
            "kubejs:triple_wrought_iron"
        ])

    //打火tag
    event.add('kubejs:flint',
        [
            "minecraft:flint_and_steel",
            "artisanal:stone/flint_and/pyrite",
            "artisanal:stone/flint_and/cut_pyrite",
            "artisanal:metal/flint_and/black_steel",
            "artisanal:metal/flint_and/blue_steel",
            "artisanal:metal/flint_and/red_steel",
            "createdieselgenerators:lighter"
        ])

    //磁力物品
    event.add('alexscaves:ferromagnetic_items',
        [
            "tfc:metal/shovel/wrought_iron",
            "tfc:metal/pickaxe/wrought_iron",
            "tfc:metal/axe/wrought_iron",
            "tfc:metal/hoe/wrought_iron",
            "tfc:metal/sword/wrought_iron",
            "tfc:metal/propick/wrought_iron",
            "tfc:metal/chisel/wrought_iron",
            "tfc:metal/hammer/wrought_iron",
            "tfc:metal/saw/wrought_iron",
            "tfc:metal/knife/wrought_iron",
            "tfc:metal/scythe/wrought_iron",
            "tfc:metal/javelin/wrought_iron",
            "tfc:metal/mace/wrought_iron",
            "tfc:metal/shears/wrought_iron",
            "tfc:metal/shield/wrought_iron",
            "tfc_hammer_time:metal/excavator/wrought_iron",
            "tfc_hammer_time:metal/sledgehammer/wrought_iron",
            "precisionprospecting:metal/prospector_hammer/wrought_iron",
            "precisionprospecting:metal/prospector_drill/wrought_iron",
            "precisionprospecting:metal/mineral_prospector/wrought_iron",
            "kubejs:wrought_iron_dagger",
            "kubejs:wrought_iron_parrying_dagger",
            "kubejs:wrought_iron_longsword",
            "kubejs:wrought_iron_katana",
            "kubejs:wrought_iron_saber",
            "kubejs:wrought_iron_rapier",
            "kubejs:wrought_iron_greatsword",
            "kubejs:wrought_iron_battle_hammer",
            "kubejs:wrought_iron_warhammer",
            "kubejs:wrought_iron_halberd",
            "kubejs:wrought_iron_pike",
            "kubejs:wrought_iron_lance",
            "kubejs:wrought_iron_throwing_knife",
            "kubejs:wrought_iron_tomahawk",
            "kubejs:wrought_iron_javelin",
            "kubejs:wrought_iron_boomerang",
            "kubejs:wrought_iron_battleaxe",
            "kubejs:wrought_iron_flanged_mace",
            "kubejs:wrought_iron_glaive",
            "kubejs:wrought_iron_quarterstaff",
            "kubejs:wrought_iron_scythe",
            "kubejs:wrought_iron_spear",
            "tfc:metal/shovel/steel",
            "tfc:metal/pickaxe/steel",
            "tfc:metal/axe/steel",
            "tfc:metal/hoe/steel",
            "tfc:metal/sword/steel",
            "tfc:metal/propick/steel",
            "tfc:metal/chisel/steel",
            "tfc:metal/hammer/steel",
            "tfc:metal/saw/steel",
            "tfc:metal/knife/steel",
            "tfc:metal/scythe/steel",
            "tfc:metal/javelin/steel",
            "tfc:metal/mace/steel",
            "tfc:metal/shears/steel",
            "tfc:metal/shield/steel",
            "tfc_hammer_time:metal/excavator/steel",
            "tfc_hammer_time:metal/sledgehammer/steel",
            "precisionprospecting:metal/prospector_hammer/steel",
            "precisionprospecting:metal/prospector_drill/steel",
            "precisionprospecting:metal/mineral_prospector/steel",
            "kubejs:steel_dagger",
            "kubejs:steel_parrying_dagger",
            "kubejs:steel_longsword",
            "kubejs:steel_katana",
            "kubejs:steel_saber",
            "kubejs:steel_rapier",
            "kubejs:steel_greatsword",
            "kubejs:steel_battle_hammer",
            "kubejs:steel_warhammer",
            "kubejs:steel_halberd",
            "kubejs:steel_pike",
            "kubejs:steel_lance",
            "kubejs:steel_throwing_knife",
            "kubejs:steel_tomahawk",
            "kubejs:steel_javelin",
            "kubejs:steel_boomerang",
            "kubejs:steel_battleaxe",
            "kubejs:steel_flanged_mace",
            "kubejs:steel_glaive",
            "kubejs:steel_quarterstaff",
            "kubejs:steel_scythe",
            "kubejs:steel_spear",
            "tfc:metal/shovel/black_steel",
            "tfc:metal/pickaxe/black_steel",
            "tfc:metal/axe/black_steel",
            "tfc:metal/hoe/black_steel",
            "tfc:metal/sword/black_steel",
            "tfc:metal/propick/black_steel",
            "tfc:metal/chisel/black_steel",
            "tfc:metal/hammer/black_steel",
            "tfc:metal/saw/black_steel",
            "tfc:metal/knife/black_steel",
            "tfc:metal/scythe/black_steel",
            "tfc:metal/javelin/black_steel",
            "tfc:metal/mace/black_steel",
            "tfc:metal/shears/black_steel",
            "tfc:metal/shield/black_steel",
            "tfc_hammer_time:metal/excavator/black_steel",
            "tfc_hammer_time:metal/sledgehammer/black_steel",
            "precisionprospecting:metal/prospector_hammer/black_steel",
            "precisionprospecting:metal/prospector_drill/black_steel",
            "precisionprospecting:metal/mineral_prospector/black_steel",
            "kubejs:black_steel_dagger",
            "kubejs:black_steel_parrying_dagger",
            "kubejs:black_steel_longsword",
            "kubejs:black_steel_katana",
            "kubejs:black_steel_saber",
            "kubejs:black_steel_rapier",
            "kubejs:black_steel_greatsword",
            "kubejs:black_steel_battle_hammer",
            "kubejs:black_steel_warhammer",
            "kubejs:black_steel_halberd",
            "kubejs:black_steel_pike",
            "kubejs:black_steel_lance",
            "kubejs:black_steel_throwing_knife",
            "kubejs:black_steel_tomahawk",
            "kubejs:black_steel_javelin",
            "kubejs:black_steel_boomerang",
            "kubejs:black_steel_battleaxe",
            "kubejs:black_steel_flanged_mace",
            "kubejs:black_steel_glaive",
            "kubejs:black_steel_quarterstaff",
            "kubejs:black_steel_scythe",
            "kubejs:black_steel_spear",
            "tfc:metal/shovel/blue_steel",
            "tfc:metal/pickaxe/blue_steel",
            "tfc:metal/axe/blue_steel",
            "tfc:metal/hoe/blue_steel",
            "tfc:metal/sword/blue_steel",
            "tfc:metal/propick/blue_steel",
            "tfc:metal/chisel/blue_steel",
            "tfc:metal/hammer/blue_steel",
            "tfc:metal/saw/blue_steel",
            "tfc:metal/knife/blue_steel",
            "tfc:metal/scythe/blue_steel",
            "tfc:metal/javelin/blue_steel",
            "tfc:metal/mace/blue_steel",
            "tfc:metal/shears/blue_steel",
            "tfc:metal/shield/blue_steel",
            "tfc_hammer_time:metal/excavator/blue_steel",
            "tfc_hammer_time:metal/sledgehammer/blue_steel",
            "precisionprospecting:metal/prospector_hammer/blue_steel",
            "precisionprospecting:metal/prospector_drill/blue_steel",
            "precisionprospecting:metal/mineral_prospector/blue_steel",
            "kubejs:blue_steel_dagger",
            "kubejs:blue_steel_parrying_dagger",
            "kubejs:blue_steel_longsword",
            "kubejs:blue_steel_katana",
            "kubejs:blue_steel_saber",
            "kubejs:blue_steel_rapier",
            "kubejs:blue_steel_greatsword",
            "kubejs:blue_steel_battle_hammer",
            "kubejs:blue_steel_warhammer",
            "kubejs:blue_steel_halberd",
            "kubejs:blue_steel_pike",
            "kubejs:blue_steel_lance",
            "kubejs:blue_steel_throwing_knife",
            "kubejs:blue_steel_tomahawk",
            "kubejs:blue_steel_javelin",
            "kubejs:blue_steel_boomerang",
            "kubejs:blue_steel_battleaxe",
            "kubejs:blue_steel_flanged_mace",
            "kubejs:blue_steel_glaive",
            "kubejs:blue_steel_quarterstaff",
            "kubejs:blue_steel_scythe",
            "kubejs:blue_steel_spear",
            "tfc:metal/shovel/red_steel",
            "tfc:metal/pickaxe/red_steel",
            "tfc:metal/axe/red_steel",
            "tfc:metal/hoe/red_steel",
            "tfc:metal/sword/red_steel",
            "tfc:metal/propick/red_steel",
            "tfc:metal/chisel/red_steel",
            "tfc:metal/hammer/red_steel",
            "tfc:metal/saw/red_steel",
            "tfc:metal/knife/red_steel",
            "tfc:metal/scythe/red_steel",
            "tfc:metal/javelin/red_steel",
            "tfc:metal/mace/red_steel",
            "tfc:metal/shears/red_steel",
            "tfc:metal/shield/red_steel",
            "tfc_hammer_time:metal/excavator/red_steel",
            "tfc_hammer_time:metal/sledgehammer/red_steel",
            "precisionprospecting:metal/prospector_hammer/red_steel",
            "precisionprospecting:metal/prospector_drill/red_steel",
            "precisionprospecting:metal/mineral_prospector/red_steel",
            "kubejs:red_steel_dagger",
            "kubejs:red_steel_parrying_dagger",
            "kubejs:red_steel_longsword",
            "kubejs:red_steel_katana",
            "kubejs:red_steel_saber",
            "kubejs:red_steel_rapier",
            "kubejs:red_steel_greatsword",
            "kubejs:red_steel_battle_hammer",
            "kubejs:red_steel_warhammer",
            "kubejs:red_steel_halberd",
            "kubejs:red_steel_pike",
            "kubejs:red_steel_lance",
            "kubejs:red_steel_throwing_knife",
            "kubejs:red_steel_tomahawk",
            "kubejs:red_steel_javelin",
            "kubejs:red_steel_boomerang",
            "kubejs:red_steel_battleaxe",
            "kubejs:red_steel_flanged_mace",
            "kubejs:red_steel_glaive",
            "kubejs:red_steel_quarterstaff",
            "kubejs:red_steel_scythe",
            "kubejs:red_steel_spear"
        ])
    
})

ServerEvents.tags("item", event => {
    //删除tag
    event.remove('sns:allowed_in_ore_sack', [
        "tfc:ore/rich_cassiterite",
        "tfc:ore/rich_native_silver",
        "tfc:ore/rich_hematite",
        "tfc:ore/rich_native_gold",
        "tfc:ore/rich_native_copper",
        "tfc_ie_addon:ore/rich_uraninite",
        "tfc_ie_addon:ore/rich_galena",
        "tfc_ie_addon:ore/rich_bauxite",
        "firmalife:ore/rich_chromite",
        "tfc:ore/rich_bismuthinite",
        "tfc:ore/rich_garnierite",
        "tfc:ore/rich_malachite",
        "tfc:ore/rich_magnetite",
        "tfc:ore/rich_limonite",
        "tfc:ore/rich_sphalerite",
        "tfc:ore/rich_tetrahedrite",
    ])
})
const registerAsticorCartsItemTags = (event) => {

    global.ASTICOR_CARTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerAsticorCartsBlockTags = (event) => {

    global.ASTICOR_CARTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}