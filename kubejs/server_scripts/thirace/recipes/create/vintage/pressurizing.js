ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/create/vintage/pressurizing/';

    const recipes = [
        {
            ingredients: [
                { fluid: 'immersiveengineering:redstone_acid', amount: 1000 },
                { item: 'tfc_ie_addon:mineral/quartz_shard' }
            ],
            results: [{ item: 'create:rose_quartz_block' }],
            secondaryFluidOutput: 0,
            processingTime: 400,
            heatRequirement: 'heated',

            id: `${id_prefix}dust_hop_graphite`
        },

    ];

    recipes.forEach((recipe) => {
        recipe.type = 'vintageimprovements:pressurizing';
        event.custom(recipe).id(recipe.id);
    });
});
