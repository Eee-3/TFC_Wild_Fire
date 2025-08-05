ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/wildfire/stonecutting/';

    const recipes = []

    const graphite_molds = [
        'mineral_prospector_head_mold',
        'prospector_drill_head_mold',
        'prospector_hammer_head_mold',
        'excavator_head_mold',
        'sledgehammer_head_mold',
        'hammer_head_mold',
        'chisel_head_mold',
        'propick_head_mold',
        'knife_blade_mold',
        'scythe_blade_mold',
        'saw_blade_mold',
        'javelin_head_mold',
        'mace_head_mold',
        'sword_blade_mold',
        'axe_head_mold',
        'shovel_head_mold',
        'pickaxe_head_mold',
        'hoe_head_mold'
    ]

    graphite_molds.forEach((mold) => {
        recipes.push({
            output: `kubejs:graphite_${mold}`,
            input: 'createmetallurgy:graphite_blank_mold',
            id: `${id_prefix}${mold}`
        });
    })


    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
