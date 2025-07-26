ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/shapeless/';

    const recipes = [
        //compression integration
        {
            output: 'tfc_ie_addon:mineral/quartz_block',
            inputs: '4x tfc_ie_addon:mineral/quartz_shard',
            id: `${id_prefix}quartz_block`
        },
        {
            output: '4x tfc_ie_addon:mineral/quartz_shard',
            inputs: 'tfc_ie_addon:mineral/quartz_block',
            id: `${id_prefix}quartz_shard`
        },
    ];
    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
