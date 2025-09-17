
ServerEvents.recipes(event => {
    event.shaped('create:water_wheel',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'tfc_ie_addon:treated_wood_lumber',
            B: 'create:shaft'
        }
    )//小水车
        event.shaped('create:large_water_wheel',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'immersiveengineering:treated_wood_horizontal',
            B: 'create:water_wheel'
        }
    )//小水车



})