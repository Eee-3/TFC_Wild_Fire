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