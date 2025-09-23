ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/wildfire/shaped/';

  /*  const recipes = [

        {
            output: 'createmetallurgy:sturdy_whisk',
            pattern: [
                ' A ',
                'BAB',
                'BBB',],
            key: {
                A: '#forge:ingots/steel',
                B: 'create:sturdy_sheet'
            },
            id: `${id_prefix}sturdy_whisk`
        },

    ];
*/

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

