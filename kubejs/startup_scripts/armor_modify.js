ItemEvents.modification(event => {

    event.modify('kubejs:cervelliere', item => {
    item.maxDamage = 290
    item.armorProtection = 2
    })

    event.modify('kubejs:leather_gamberson', item => {
    item.maxDamage = 459
    item.armorProtection = 4
    })

    event.modify('kubejs:leather_plate_greaves', item => {
    item.maxDamage = 420
    item.armorProtection = 3
    })

    event.modify('kubejs:leather_plate_boots', item => {
    item.maxDamage = 398
    item.armorProtection = 2
    })
})