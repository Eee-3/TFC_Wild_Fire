

ServerEvents.recipes((event) => {

    const recipes = [
        { type: 'createmetallurgy:bulk_melting' },
        { type: 'createmetallurgy:entity_melting' },
        { type: 'createmetallurgy:grinding' },
        { input: /createmetallurgy:raw_.*/ },
        { output: /createmetallurgy:raw_.*/ },
        { input: /createmetallurgy:tungsten_.*/ },
        { output: /createmetallurgy:tungsten_.*/ },
        { input: 'createmetallurgy:crushed_raw_wolframite' },
        { output: 'createmetallurgy:crushed_raw_wolframite' },
        { input: /createmetallurgy:.*_dust/ },
        { output: /createmetallurgy:.*_dust/ },
        { input: /createmetallurgy:obdurium_.*/ },
        { output: /createmetallurgy:obdurium_.*/ },
        { input: 'createmetallurgy:coke' },
        { output: 'createmetallurgy:coke' },
        { input: 'createmetallurgy:coke_block' },
        { output: 'createmetallurgy:coke_block' },
        { id: 'createmetallurgy:casting_in_table/slag_casting' },
        { id: 'createmetallurgy:sequenced_assembly/industrial_crucible' },
        { id: 'createmetallurgy:crafting/content/foundry_unit' },
        { id: 'createmetallurgy:melting/obdurium/plate' },
        { id: /createmetallurgy:casting_in_table\/[a-z]+\/plate/ },
        { id: /createmetallurgy:melting\/tungsten\/.*/ },
        { id: /createmetallurgy:casting_in_table\/tungsten\/.*/ },
        { id: 'createmetallurgy:casting_in_basin/tungsten/block' },
        { id: 'createmetallurgy:alloying/obdurium' },
        { id: 'createmetallurgy:alloying/void_steel' },
        { id: 'createmetallurgy:alloying/invar' },
        { id: /createmetallurgy:melting\/.*\/nugget/ },
        { id: /createmetallurgy:casting_in_table\/.*\/nugget/ },
        { id: 'createmetallurgy:graphite_nugget_mold_stonecutting' },
        { id: 'createmetallurgy:casting_in_basin/andesite_alloy_from_iron' },
        { id: 'createmetallurgy:casting_in_basin/iron/block' },
        { id: 'createmetallurgy:graphite_gear_mold_stonecutting' },
        { id: 'createmetallurgy:crafting/materials/graphite' },
        { id: 'createmetallurgy:mixing/refractory_mortar' },
        { id: 'createmetallurgy:crafting/materials/sandpaper_belt' },
        { id: 'createmetallurgy:crafting/content/mechanical_belt_grinder' },
        { id: /createmetallurgy:casting_in_basin\/.*\/block/ },
        { id: 'createmetallurgy:casting_in_basin/andesite_alloy_from_zinc' },
        { id: 'createmetallurgy:casting_in_basin/brass_casing' },
        { id: /createmetallurgy:casting_in_table\/[a-z]+\/rod/ },
        { id: 'createmetallurgy:graphite_rod_mold_stonecutting' },
        { id: 'createmetallurgy:graphite_plate_mold_stonecutting' },
        { id: 'createmetallurgy:compacting/tuff_from_slag' },
        
        { id: /vintageimprovements:craft\/.*_rod/ },



        //{id: ''}
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });

});

