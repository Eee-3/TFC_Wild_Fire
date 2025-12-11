
ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:create/reciped/';
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
    ).id(`${id_prefix}water_wheel`)//小水车
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
    ).id(`${id_prefix}large_water_wheel`)//大水车

    const gem = ['amethyst', 'diamond', 'emerald', 'lapis_lazuli', 'opal', 'pyrite', 'ruby', 'sapphire', 'topaz']
    gem.forEach(gem =>
        event.custom(
            { "type": "create:sandpaper_polishing", "ingredients": [{ "item": `tfc:ore/${gem}` }], "results": [{ "item": `tfc:gem/${gem}` }] }
        ))
    event.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "heatRequirement":"heated",
            "processingTime": 800,
            "ingredients": [
                { "fluid": "tfc:limewater", "amount": 100 }, { "item": "kubejs:bauxite_clinker" }],
            "results": [{ "item": "kubejs:alumina_powder" }]
        })
})