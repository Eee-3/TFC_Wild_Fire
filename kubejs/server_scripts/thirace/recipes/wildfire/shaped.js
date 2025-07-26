ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/shaped/';

    const recipes = [

/*         {
            output: 'minecraft:stonecutter',
            pattern: [
                ' A ',
                ' B ',
                '   ',],
            key: {
                A: Item.of('immersiveengineering:sawblade', '{Damage:0}'),
                B: 'create:andesite_casing'
            },
            id: `${id_prefix}stonecutter`
        }, */

    ];

/*     const woods = [
        'acacia',
        'ash',
        'aspen',
        'birch',
        'blackwood',
        'chestnut',
        'douglas_fir',
        'hickory',
        'kapok',
        'mangrove',
        'maple',
        'oak',
        'palm',
        'pine',
        'rosewood',
        'sequoia',
        'spruce',
        'sycamore',
        'white_cedar',
        'willow'
    ]

    woods.forEach((wood) => {
        recipes.push({
            output: `tfc:wood/boat/${wood}`,
            pattern: [
                'ABA',
                'AAA',
                '   ',],
            key: {
                A: `tfc:wood/lumber/${wood}`,
                B: '#forge:slimeballs'
            },
            id: `${id_prefix}boat/${wood}`
        })
    }); */




    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});








