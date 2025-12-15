StartupEvents.registry('item', event => {
    const metalhot = [
        { metal: 'bismuth_bronze', damaged: 700 },
        { metal: 'black_bronze', damaged: 700 },
        { metal: 'bronze', damaged: 700 },
        { metal: 'copper', damaged: 600 },
        { metal: 'wrought_iron', damaged: 1500 },
        { metal: 'steel', damaged: 2000 },
        { metal: 'cast_iron', damaged: 1000 },
        { metal: 'gold', damaged: 400 },
        { metal: 'rose_gold', damaged: 400 },

        { metal: 'brass', damaged: 700 },
        { metal: 'bismuth', damaged: 300 },
        { metal: 'silver', damaged: 400 },
        { metal: 'sterling_silver', damaged: 450 },
        { metal: 'nickel', damaged: 600 },
        { metal: 'chromium', damaged: 500 },
        { metal: 'zinc', damaged: 400 },
        { metal: 'stainless_steel', damaged: 1450 }

    ];
    const metalinf = [
        { metal: 'black_steel', damaged: 1500 },
        { metal: 'blue_steel', damaged: 1550 },
        { metal: 'red_steel', damaged: 1600 },


    ]
    event.create('glove').maxDamage(200).texture(`kubejs:item/hot/glove`).tag('tfc:usable_on_tool_rack')
    event.create('peel').maxDamage(300).texture(`kubejs:item/hot/peel`).tag('tfc:usable_on_tool_rack')
    event.create('cast_iron_peel').maxDamage(1000).texture(`kubejs:item/hot/cast_iron_peel`).tag('tfc:usable_on_tool_rack')
    event.create('stainless_steel_peel').maxDamage(2200).texture(`kubejs:item/hot/steel_peel`).tag('tfc:usable_on_tool_rack')
    event.create('wooden_tong').maxDamage(60).texture(`kubejs:item/hot/wooden_tong`).tag('tfc:usable_on_tool_rack')
    metalhot.forEach(metal => {
        event.create(`${metal.metal}_tong`).maxDamage(metal.damaged).texture(`kubejs:item/hot/tongs/${metal.metal}`).tag('tfc:usable_on_tool_rack')
        event.create(`${metal.metal}_tong_part`).texture(`kubejs:item/hot/tongpart/${metal.metal}`)
    }

    )
    metalinf.forEach(metal => {
        event.create(`${metal.metal}_tong`).texture(`kubejs:item/hot/tongs/${metal.metal}`).maxStackSize(1).tag('tfc:usable_on_tool_rack')
        event.create(`${metal.metal}_tong_part`).texture(`kubejs:item/hot/tongpart/${metal.metal}`).maxStackSize(1)
    }

    )



})