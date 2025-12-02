ItemEvents.armorTierRegistry(event => {
  event.add('fuck', tier => {
    tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 5, 3, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 15
    tier.equipSound = 'minecraft:item.armor.equip_leather'
    tier.repairIngredient = 'kubejs:leather_plate'
    tier.toughness = 0 // diamond has 2, netherite 3
    tier.knockbackResistance = 0
  })
  event.add('brass', tier => {
    tier.durabilityMultiplier = 5 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [1, 3, 1, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 10
    tier.equipSound = 'minecraft:item.armor.equip_leather'
    tier.repairIngredient = 'tfc:metal/sheet/brass'
    tier.toughness = 0 // diamond has 2, netherite 3
    tier.knockbackResistance = 0
  })
})