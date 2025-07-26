ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/create/sequenced_assembly/';

    const recipes = [

/*         {
            results: { item: 'create:rose_quartz_block' },
            input: 'tfc_ie_addon:mineral/quartz_shard',
            transitionalItem: 'tfc_ie_addon:mineral/quartz_shard',
            loops: 10,
            sequence: [
                {
                    type: 'create:filling',
                    ingredients: [
                        { item: 'tfc_ie_addon:mineral/quartz_shard' },
                        { fluid: 'immersiveengineering:redstone_acid', amount: 100 }
                    ],
                    results: { item: 'tfc_ie_addon:mineral/quartz_shard', count: 1 }
                },
            ],
            id: `${id_prefix}rose_quartz_block`
        }, */
    ];



    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        recipe.ingredient = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.transitionalItem = Item.of(recipe.transitionalItem).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
