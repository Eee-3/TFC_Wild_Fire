ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/farmersdelight/cutting/';

    const recipes = [
        {
            ingredients: [{ item: 'create:rose_quartz_block' }],
            result: [
                { item: 'create:rose_quartz', count: 3 },
                { item: 'create:rose_quartz', count: 1, chance: 0.5 },
            ],
            tool: { tag: 'wildfire:metal/hammers' },
            id: `${id_prefix}rose_quartz`
        },

    ];

    const woods = [
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
            ingredients: [{ item: `tfc:wood/log/${wood}` }],
            result: [
                { item: `tfc:wood/stripped_log/${wood}` },
                { item: 'farmersdelight:tree_bark', count: 4 },
            ],
            tool: { tag: 'minecraft:axes' },
            id: `${id_prefix}stripped_log/${wood}_log`
        });
        recipes.push({
            ingredients: [{ item: `tfc:wood/wood/${wood}` }],
            result: [
                { item: `tfc:wood/stripped_wood/${wood}` },
                { item: 'farmersdelight:tree_bark', count: 4 },
            ],
            tool: { tag: 'minecraft:axes' },
            id: `${id_prefix}stripped_log/${wood}_wood`
        });

        //stripped > support
        recipes.push({
            ingredients: [{ item: `tfc:wood/stripped_log/${wood}` }],
            tool: { tag: 'minecraft:axes' },
            result: [
                { item: `tfc:wood/support/${wood}`, count: 2 },
            ],
            id: `${id_prefix}support/${wood}_log`
        });
        recipes.push({
            ingredients: [{ item: `tfc:wood/stripped_wood/${wood}` }],
            tool: { tag: 'minecraft:axes' },
            result: [
                { item: `tfc:wood/support/${wood}`, count: 2 },
            ],
            id: `${id_prefix}support/${wood}_wood`
        });

        //support > lumber
        recipes.push({
            ingredients: [{ item: `tfc:wood/support/${wood}` }],
            tool: { tag: 'tfc:saws' },
            result: [
                { item: `tfc:wood/lumber/${wood}`, count: 2 },
            ],
            id: `${id_prefix}lumber/${wood}`
        });
    })








    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
