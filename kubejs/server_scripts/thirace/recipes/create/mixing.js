ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/create/mixing/';

    const recipes = [
        {
            results: [{ fluid: 'immersiveengineering:redstone_acid', amount: 1000 }],
            ingredients: [
                { item: 'minecraft:redstone' },
                { fluid: 'vintageimprovements:sulfuric_acid', amount: 500 }
            ],
            id: `${id_prefix}redstone_acid`
        },



    ]



    const colors = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink'
    ]

    colors.forEach((color) => {
        recipes.push({
            results: [{ fluid: `tfc:${color}_dye`, amount: 1000 }],
            ingredients: [
                { item: `minecraft:${color}_dye` },
                { fluid: 'minecraft:water', amount: 1000 }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}color/${color}_dye`
        })
    });

    colors.forEach((color) => {
        recipes.push({
            results: [{ item: `minecraft:${color}_concrete_powder` }],
            ingredients: [
                { item: `tfc:aggregate` },
                { fluid: `tfc:${color}_dye`, amount: 25 }
            ],
            id: `${id_prefix}color/${color}_concrete_powder`
        })
    });

        colors.forEach((color) => {
        recipes.push({
            results: [{ item: `minecraft:${color}_carpet` }],
            ingredients: [
                { item: `minecraft:white_carpet` },
                { fluid: `tfc:${color}_dye`, amount: 25 }
            ],
            id: `${id_prefix}color/${color}_carpet`
        })
    });

            colors.forEach((color) => {
        recipes.push({
            results: [{ item: `tfc:ceramic/unfired_large_vessel/${color}` }],
            ingredients: [
                { item: `tfc:ceramic/unfired_large_vessel` },
                { fluid: `tfc:${color}_dye`, amount: 25 }
            ],
            id: `${id_prefix}color/${color}_large_vessel`
        })
    });

        colors.forEach((color) => {
        recipes.push({
            results: [{ item: `tfc:candle/${color}` }],
            ingredients: [
                { item: `tfc:candle` },
                { fluid: `tfc:${color}_dye`, amount: 25 }
            ],
            id: `${id_prefix}color/${color}_candle`
        })
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
