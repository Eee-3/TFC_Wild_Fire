TFCEvents.registerItemStackModifier(event => {
    event.withInput('kubejs:welding_repair', (output, input) => {
        if(input.id == output.id){
            let {damageValue, maxDamage} = input
            let damage = Math.max(0, damageValue-maxDamage*0.2)
            output.setDamageValue(damage)
            return output
        }
        return input
    })
})