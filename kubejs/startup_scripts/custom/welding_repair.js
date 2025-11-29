TFCEvents.registerItemStackModifier(event => {
    event.withInput('kubejs:welding_repair_percentage', (output, input) => {
        if(input.id == output.id){
            let {damageValue, maxDamage} = input
            let damage = Math.max(0, damageValue - maxDamage*0.2)
            output.setDamageValue(damage)
            return output
        }
        return input
    })

    event.withInput('kubejs:welding_repair_value', (output, input) => {
        if(input.id == output.id){
            output.setDamageValue(Math.max(0, input.damageValue - 400))
            return output
        }
        return input
    })
})