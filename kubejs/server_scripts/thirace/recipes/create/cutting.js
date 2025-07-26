ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/create/cutting/';

    event.remove({ id: 'create:rose_quartz_block_from_rose_quartz_stonecutting' })
   
    const recipes = [
        {
            ingredients: 'create:rose_quartz_block',
            processingTime: 40,
            results: { item: 'create:rose_quartz', count: 8 },
            id: `${id_prefix}rose_quartz`
        },
    ]


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
        //log > stripped
        recipes.push({
            ingredients: `tfc:wood/log/${wood}`,
            processingTime: 40,
            results: [
                { item: `tfc:wood/stripped_log/${wood}` },
                { item: 'farmersdelight:tree_bark', count: 4 },
            ],
            id: `${id_prefix}stripped_log/${wood}`
        });
        recipes.push({
            ingredients: `tfc:wood/wood/${wood}`,
            processingTime: 40,
            results: [
                { item: `tfc:wood/stripped_wood/${wood}` },
                { item: 'farmersdelight:tree_bark', count: 4 },
            ],
            id: `${id_prefix}wood/${wood}`
        });

        //stripped > support
        recipes.push({
            ingredients: `tfc:wood/stripped_log/${wood}`,
            processingTime: 40,
            results: [
                { item: `tfc:wood/support/${wood}`, count: 3 },
            ],
            id: `${id_prefix}support/${wood}_log`
        });
        recipes.push({
            ingredients: `tfc:wood/stripped_wood/${wood}`,
            processingTime: 40,
            results: [
                { item: `tfc:wood/support/${wood}`, count: 3 },
            ],
            id: `${id_prefix}support/${wood}_wood`
        });

        //support > lumber
        recipes.push({
            ingredients: `tfc:wood/support/${wood}`,
            processingTime: 40,
            results: [
                { item: `tfc:wood/lumber/${wood}`, count: 4 },
            ],
            id: `${id_prefix}lumber/${wood}`
        });
    })



    recipes.forEach((recipe) => {
        recipe.type = 'create:cutting';
        event.custom(recipe).id(recipe.id);
    })
});
