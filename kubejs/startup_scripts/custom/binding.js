TFCEvents.registerItemStackModifier(event => {
    event.withInventory('kubejs:binding_bonus', (output, input, inventory) => {
        let binding_level = 0
        let forging_bonus = 0
        if (input.hasNBT()) {
            if (input.nbt.contains("tfc:forging_bonus")) {
                forging_bonus = input.nbt.getInt("tfc:forging_bonus")
            }
        }
        let { maxDamage } = output
        inventory.forEach(stack => {
            if (stack.hasTag('kubejs:low_binding')) binding_level = 1
            else if (stack.hasTag('kubejs:medium_binding')) binding_level = 2
            else if (stack.hasTag('kubejs:advanced_binding')) binding_level = 3
        })
        if (binding_level == 1) {
            output.setDamageValue(maxDamage * 0.15)
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`)
        }
        else if (binding_level == 2) {
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`)
        }
        else if (binding_level == 3) {
            output.orCreateTag.merge(`{"tfc:forging_bonus":${(forging_bonus + 1).toFixed(0)}}`)
        }
        else {
            output.setDamageValue(maxDamage * 0.3)
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`)
        }
        return output
    })
})