TFCEvents.registerItemStackModifier(event => {

    event.withInput('kubejs:welding_repair_percentage15', (output, input) => {
        if (input.id == output.id) {
            let { damageValue, maxDamage } = input
            let damage = Math.max(0, damageValue - maxDamage * 0.15)
            output.setDamageValue(damage)
            return output
        }
        return input
    })
    event.withInput('kubejs:welding_repair_percentage10', (output, input) => {
        if (input.id == output.id) {
            let { damageValue, maxDamage } = input
            let damage = Math.max(0, damageValue - maxDamage * 0.1)
            output.setDamageValue(damage)
            return output
        }
        return input
    })
    event.withInput('kubejs:welding_repair_percentage7.5', (output, input) => {
        if (input.id == output.id) {
            let { damageValue, maxDamage } = input
            let damage = Math.max(0, damageValue - maxDamage * 0.075)
            output.setDamageValue(damage)
            return output
        }
        return input
    })
    event.withInput('kubejs:welding_repair_percentage5', (output, input) => {
        if (input.id == output.id) {
            let { damageValue, maxDamage } = input
            let damage = Math.max(0, damageValue - maxDamage * 0.05)
            output.setDamageValue(damage)
            return output
        }
        return input
    })
    event.withInput('kubejs:welding_repair_percentage4', (output, input) => {
        if (input.id == output.id) {
            let { damageValue, maxDamage } = input
            let damage = Math.max(0, damageValue - maxDamage * 0.04)
            output.setDamageValue(damage)
            return output
        }
        return input
    })
     event.withInput('kubejs:welding_repair_percentage2', (output, input) => {
        if (input.id == output.id) {
            let { damageValue, maxDamage } = input
            let damage = Math.max(0, damageValue - maxDamage * 0.02)
            output.setDamageValue(damage)
            return output
        }
        return input
    })
    event.withInput('kubejs:welding_repair_value', (output, input) => {
        if (input.id == output.id) {
            output.setDamageValue(Math.max(0, input.damageValue - 400))
            return output
        }
        return input
    })
})