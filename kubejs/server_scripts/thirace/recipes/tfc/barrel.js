
//region barrel_instant
ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/tfc/barrel_instant/';

    event.remove({ id: 'tfc_ie_addon:barrel/redstone_acid' })
    event.remove({ id: 'create:crafting/materials/rose_quartz' })

    const recipes = [
        {
            input_item: { ingredient: { tag: 'forge:dusts/redstone' } },
            input_fluid: { ingredient: 'minecraft:water', amount: 100 },
            output_fluid: { fluid: 'immersiveengineering:redstone_acid', amount: 100 },
            id: `${id_prefix}redstone_acid`
        },


    ]


    recipes.forEach((recipe) => {
        recipe.type = 'tfc:barrel_instant';
        event.custom(recipe).id(recipe.id);
    })
});


//region barrel_sealed
ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/tfc/barrel_sealed/';

    const recipes = [
        {
            input_item: { ingredient: { item: 'tfc_ie_addon:mineral/quartz_shard' } },
            input_fluid: { ingredient: 'immersiveengineering:redstone_acid', amount: 1000 },
            output_item: { item: 'create:rose_quartz_block' },
            duration: 190000,
            id: `${id_prefix}rose_quartz_block`
        },




    ]

    recipes.forEach((recipe) => {
        recipe.type = 'tfc:barrel_sealed';
        event.custom(recipe).id(recipe.id);
    })
})

