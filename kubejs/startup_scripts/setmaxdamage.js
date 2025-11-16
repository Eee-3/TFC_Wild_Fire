ItemEvents.modification(event => {

    event.modify('artisanal:stone/flint_and/pyrite', modify => {
        modify.setMaxDamage(20)
    })

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