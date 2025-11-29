ItemEvents.modification(event => {



    const itema = [
        { name: 'tfc_hammer_time:metal/sledgehammer/copper', num: 1200 },//挖矿锤
        { name: 'tfc_hammer_time:metal/sledgehammer/bismuth_bronze', num: 2400 },
        { name: 'tfc_hammer_time:metal/sledgehammer/black_bronze', num: 3000 },
        { name: 'tfc_hammer_time:metal/sledgehammer/black_bronze', num: 2600 },
        { name: 'tfc_hammer_time:metal/sledgehammer/wrought_iron', num: 4500 },
        { name: 'tfc_hammer_time:metal/sledgehammer/steel', num: 6600 },
        { name: 'tfc_hammer_time:metal/sledgehammer/black_steel', num: 9000 },
        { name: 'tfc_hammer_time:metal/sledgehammer/red_steel', num: 15000 },
        { name: 'tfc_hammer_time:metal/sledgehammer/blue_steel', num: 15000 },

        { name: 'butcher:skinning_knife', num: 2000 },
        { name: 'butcher:butchers_knife', num: 2000 },
        { name: 'butcher:boneskinningknife', num: 50 }



    ]
    itema.forEach(itema => {
        event.modify(itema.name, modify => { modify.setMaxDamage(itema.num) })
    })




    event.modify('artisanal:stone/flint_and/pyrite', modify => {
        modify.setMaxDamage(20)
    })//黄铁打火石
    event.modify('create:extendo_grip', modify => {
        modify.setMaxDamage(800)
    })//黄铁打火石
    event.modify('create:super_glue', modify => {
        modify.setMaxDamage(500)
    })//强力胶
    event.modify('bsa:bone/fishing_rod', modify => {
        modify.setMaxDamage(50)
    })//骨头吊杆
    const attack = [
        { name: 'tfc:metal/hoe/bismuth_bronze', att: 2 },
        { name: 'tfc:metal/hoe/black_bronze', att: 2 },
        { name: 'tfc:metal/hoe/bronze', att: 2 },
        { name: 'tfc:metal/hoe/copper', att: 2 },
        { name: 'tfc:metal/hoe/wrought_iron', att: 3 },
        { name: 'tfc:metal/hoe/steel', att: 4 },
        { name: 'tfc:metal/hoe/black_steel', att: 4 },
        { name: 'tfc:metal/hoe/red_steel', att: 5 },
        { name: 'tfc:metal/hoe/blue_steel', att: 5 }

    ]
    attack.forEach(att =>
        event.modify(att.name, modification => {
            modification.setAttackDamage(att.att);
        })
    )
    const attack2 = [
        { name: 'kubejs:copper_greatsword', att: 6 },

    ]

    attack2.forEach(att =>
        event.modify(att.name, modification => {
            modification.setAttackDamage(att.att);
        })
    )

}

)