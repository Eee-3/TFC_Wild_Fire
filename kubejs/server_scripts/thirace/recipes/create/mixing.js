ServerEvents.recipes((event) => {

    const id_prefix = 'tfcreate:create/mixing/';

    const recipes = [
        {
            results: [{ fluid: 'immersiveengineering:redstone_acid', amount: 1000 }],
            ingredients: [
                { item: 'minecraft:redstone' },
                { fluid: 'minecraft:water', amount: 1000 }
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

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
