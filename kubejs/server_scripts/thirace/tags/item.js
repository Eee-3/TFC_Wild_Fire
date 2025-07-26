
ServerEvents.tags('item', (event) => {
    /* event.get('forge:dusts').add('kubejs:quartz_dust')
    event.get('forge:dusts/quartz').add('kubejs:quartz_dust') */

    event.get('forge:gems').add('kubejs:rose_quartz',)
    event.get('forge:gems/rose_quartz').add('create:rose_quartz')

    event.get('wildfire:metal/hammers').add(
        'tfc:metal/hammer/bismuth_bronze',
        'tfc:metal/hammer/black_bronze',
        'tfc:metal/hammer/bronze',
        'tfc:metal/hammer/copper',
        'tfc:metal/hammer/wrought_iron',
        'tfc:metal/hammer/steel',
        'tfc:metal/hammer/black_steel',
        'tfc:metal/hammer/blue_steel',
        'tfc:metal/hammer/red_steel'
    )
})