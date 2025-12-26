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
    // 熔岩桶和熔融桶是热的物品
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
            "tfc:bucket/metal/unknown"
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