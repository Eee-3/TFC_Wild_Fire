// priority: 0


ServerEvents.tags("item", event => {
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

    // 将手套加入进饰品tag
    event.add('curios:hands', 'kubejs:glove')
    // 熔岩桶是热的物品
    event.add('kubejs:hot_items', 'minecraft:lava_bucket')

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