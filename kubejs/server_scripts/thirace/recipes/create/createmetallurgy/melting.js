
//TFC Ceramic
ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/create/createmetallurgy/melting/';

    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/ingot/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/dust/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/plate/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/wire/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/rod/})

    event.remove({ type: 'createmetallurgy:melting' })


    const recipes = [
        {
            ingredients: [{ item: 'immersiveengineering:stick_aluminum' }],
            heatRequirement: 'heated',
            processingTime: 30,
            results: [{ amount: 50, fluid: 'tfc_ie_addon:metal/aluminum' }],
            id: `${id_prefix}aluminum_rod`
        },

        

    ];


    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////


    const tfc_pellets = [
        { name: 'garnierite', fluid: 'nickel', type: 'superheated' },
        { name: 'magnetite', fluid: 'cast_iron', type: 'superheated' },
        { name: 'limonite', fluid: 'cast_iron', type: 'superheated' },
        { name: 'hematite', fluid: 'cast_iron', type: 'superheated' },
        { name: 'tetrahedrite', fluid: 'copper', type: 'heated' },
        { name: 'malachite', fluid: 'copper', type: 'heated' },
        { name: 'bismuthinite', fluid: 'bismuth', type: 'heated' },
        { name: 'sphalerite', fluid: 'zinc', type: 'heated' },
        { name: 'cassiterite', fluid: 'tin', type: 'heated' },
        { name: 'copper', fluid: 'copper', type: 'heated' },
        { name: 'gold', fluid: 'gold', type: 'heated' },
        { name: 'silver', fluid: 'silver', type: 'heated' },
    ]

    tfc_pellets.forEach((pellet) => {
        if (pellet.type == 'heated')
            recipes.push({
                ingredients: { item: `tfcorewashing:pellet_${pellet.name}` },
                heatRequirement: 'heated',
                processingTime: 20,
                results: { amount: 20, fluid: `tfc:metal/${pellet.fluid}` },
                id: `${id_prefix}heated_${pellet.name}_pellets`
            })
        if (pellet.type == 'superheated')
            recipes.push({
                ingredients: { item: `tfcorewashing:pellet_${pellet.name}` },
                heatRequirement: 'superheated',
                processingTime: 20,
                results: { amount: 20, fluid: `tfc:metal/${pellet.fluid}` },
                id: `${id_prefix}superheated_${pellet.name}_pellets`
            })
    });

    const ie_pellets = [
        { name: 'galena', fluid: 'lead', type: 'heated' },
        { name: 'uraninite', fluid: 'uranium', type: 'superheated' },
        //{ name: 'bauxite', fluid: 'aluminum', type: 'superheated' }
    ]

    ie_pellets.forEach((pellet) => {
        if (pellet.type == 'heated')
            recipes.push({
                ingredients: { item: `tfcorewashing:pellet_${pellet.name}` },
                heatRequirement: 'heated',
                processingTime: 20,
                results: { amount: 20, fluid: `tfc_ie_addon:metal/${pellet.fluid}` },
                id: `${id_prefix}heated_${pellet.name}_pellets`
            })
        if (pellet.type == 'superheated')
            recipes.push({
                ingredients: { item: `tfcorewashing:pellet_${pellet.name}` },
                heatRequirement: 'superheated',
                processingTime: 20,
                results: { amount: 20, fluid: `tfc_ie_addon:metal/${pellet.fluid}` },
                id: `${id_prefix}superheated_${pellet.name}_pellets`
            })
    });

    
    
    

    const tfccore_pellets = [
        { name: 'chromium', fluid: 'chromium', type: 'heated' },
    ]
    tfccore_pellets.forEach((pellet) => {
        if (pellet.type == 'heated')
            recipes.push({
                ingredients: { item: `tfcorewashing:pellet_${pellet.name}` },
                heatRequirement: 'heated',
                processingTime: 20,
                results: { amount: 20, fluid: `firmalife:metal/${pellet.fluid}` },
                id: `${id_prefix}heated_${pellet.name}_pellets`
            })
    });

    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////

    const tfc_briquets = [
        { name: 'garnierite', fluid: 'nickel', type: 'superheated' },
        { name: 'magnetite', fluid: 'cast_iron', type: 'superheated' },
        { name: 'limonite', fluid: 'cast_iron', type: 'superheated' },
        { name: 'hematite', fluid: 'cast_iron', type: 'superheated' },
        { name: 'tetrahedrite', fluid: 'copper', type: 'heated' },
        { name: 'malachite', fluid: 'copper', type: 'heated' },
        { name: 'bismuthinite', fluid: 'bismuth', type: 'heated' },
        { name: 'sphalerite', fluid: 'zinc', type: 'heated' },
        { name: 'cassiterite', fluid: 'tin', type: 'heated' },
        { name: 'copper', fluid: 'copper', type: 'heated' },
        { name: 'gold', fluid: 'gold', type: 'heated' },
        { name: 'silver', fluid: 'silver', type: 'heated' },
    ]

    tfc_briquets.forEach((briquet) => {
        if (briquet.type == 'heated')
            recipes.push({
                ingredients: { item: `tfcorewashing:briquet_${briquet.name}` },
                heatRequirement: 'heated',
                processingTime: 20,
                results: { amount: 80, fluid: `tfc:metal/${briquet.fluid}` },
                id: `${id_prefix}heated_${briquet.name}_briquets`
            })
        if (briquet.type == 'superheated')
            recipes.push({
                ingredients: { item: `tfcorewashing:briquet_${briquet.name}` },
                heatRequirement: 'superheated',
                processingTime: 20,
                results: { amount: 80, fluid: `tfc:metal/${briquet.fluid}` },
                id: `${id_prefix}superheated_${briquet.name}_briquets`
            })
    });

    const ie_briquets = [
        { name: 'galena', fluid: 'lead', type: 'heated' },
        { name: 'uraninite', fluid: 'uranium', type: 'superheated' },
        //{ name: 'bauxite', fluid: 'aluminum', type: 'superheated' }
    ]

    ie_briquets.forEach((briquet) => {
        if (briquet.type == 'heated')
            recipes.push({
                ingredients: { item: `tfcorewashing:briquet_${briquet.name}` },
                heatRequirement: 'heated',
                processingTime: 20,
                results: { amount: 80, fluid: `tfc_ie_addon:metal/${briquet.fluid}` },
                id: `${id_prefix}heated_${briquet.name}_briquets`
            })
        if (briquet.type == 'superheated')
            recipes.push({
                ingredients: { item: `tfcorewashing:briquet_${briquet.name}` },
                heatRequirement: 'superheated',
                processingTime: 20,
                results: { amount: 80, fluid: `tfc_ie_addon:metal/${briquet.fluid}` },
                id: `${id_prefix}superheated_${briquet.name}_briquets`
            })
    });

    const tfccore_briquets = [
        { name: 'chromium', fluid: 'chromium', type: 'heated' },
    ]
    tfccore_briquets.forEach((briquet) => {
        if (briquet.type == 'heated')
            recipes.push({
                ingredients: { item: `tfcorewashing:briquet_${briquet.name}` },
                heatRequirement: 'heated',
                processingTime: 20,
                results: { amount: 80, fluid: `firmalife:metal/${briquet.fluid}` },
                id: `${id_prefix}heated_${briquet.name}_briquets`
            })
    });




    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////



    const tfc_metal_heated = [
        'bismuth_bronze',
        'bismuth',
        'black_bronze',
        'bronze',
        'brass',
        'copper',
        'gold',
        'rose_gold',
        'silver',
        'sterling_silver',
        'zinc',
        'tin'
    ]

    tfc_metal_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        });
        recipes.push({
            ingredients: [{ tag: `forge:rods/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 30,
            results: [{ amount: 50, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}_rod`
        });
        recipes.push({
            ingredients: [{ tag: `forge:plates/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
        recipes.push({
            ingredients: [{ tag: `forge:double_sheets/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}_double_sheet`
        });
    });







    const ie_metal_heated = [
        'aluminum',
        'lead',
        'constantan',
        'electrum',
        'uranium'
    ]

    ie_metal_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc_ie_addon:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc_ie_addon:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        });
        recipes.push({
            ingredients: [{ tag: `forge:plates/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc_ie_addon:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
    });





    const fl_metal_heated = [
        'chromium',
    ]

    fl_metal_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        });
        recipes.push({
            ingredients: [{ tag: `forge:rods/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 30,
            results: [{ amount: 50, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_rod`
        });
        recipes.push({
            ingredients: [{ tag: `forge:plates/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
        recipes.push({
            ingredients: [{ tag: `forge:double_sheets/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_double_sheet`
        });
    });


    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////



    const tfc_metal_superheated = [
        { item: 'weak_steel', type: '1' },
        { item: 'high_carbon_red_steel', type: '1' },
        { item: 'high_carbon_blue_steel', type: '1' },
        { item: 'high_carbon_black_steel', type: '1' },
        { item: 'high_carbon_steel', type: '1' },
        { item: 'weak_red_steel', type: '1' },
        { item: 'weak_blue_steel', type: '1' },

        { item: 'nickel', type: '2' },
        { item: 'wrought_iron', type: '2' },
        { item: 'cast_iron', type: '2' },
        { item: 'steel', type: '2' },
        { item: 'black_steel', type: '2' },
        { item: 'blue_steel', type: '2' },
        { item: 'red_steel', type: '2' },

        { item: 'pig_iron', type: '2' }, 
    ]

    tfc_metal_superheated.forEach((heated) => {
        if (heated.type == '1', '2')
            recipes.push({
                ingredients: [{ tag: `forge:ingots/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 60,
                results: [{ amount: 100, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}`
            })
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:double_ingots/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 120,
                results: [{ amount: 200, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}double_${heated.item}`
            })
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:rods/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 30,
                results: [{ amount: 50, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}_rod`
            });
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:plates/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 120,
                results: [{ amount: 200, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}_plate`
            });
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:double_sheets/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 240,
                results: [{ amount: 400, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}_double_sheet`
            });
    });








    const fl_metal_superheated = [
        'stainless_steel'
    ]

    fl_metal_superheated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:rods/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 30,
            results: [{ amount: 50, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_rod`
        });
        recipes.push({
            ingredients: [{ tag: `forge:plates/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
        recipes.push({
            ingredients: [{ tag: `forge:double_sheets/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_double_sheet`
        });
    });


    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////



    const tfc_powders = [
        { dust: 'garnierite', fluid: 'nickel', type: 'superheated' },
        { dust: 'magnetite', fluid: 'cast_iron', type: 'superheated' },
        { dust: 'limonite', fluid: 'cast_iron', type: 'superheated' },
        { dust: 'hematite', fluid: 'cast_iron', type: 'superheated' },
        { dust: 'tetrahedrite', fluid: 'copper', type: 'heated' },
        { dust: 'malachite', fluid: 'copper', type: 'heated' },
        { dust: 'bismuthinite', fluid: 'bismuth', type: 'heated' },
        { dust: 'sphalerite', fluid: 'zinc', type: 'heated' },
        { dust: 'cassiterite', fluid: 'tin', type: 'heated' },
        { dust: 'native_copper', fluid: 'copper', type: 'heated' },
        { dust: 'native_gold', fluid: 'gold', type: 'heated' },
        { dust: 'native_silver', fluid: 'silver', type: 'heated' },
    ]

    tfc_powders.forEach((powder) => {
        if (powder.type == 'heated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'heated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc:metal/${powder.fluid}` }],
                id: `${id_prefix}heated_${powder.dust}`
            })
        if (powder.type == 'superheated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'superheated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc:metal/${powder.fluid}` }],
                id: `${id_prefix}superheated_${powder.dust}`
            })
    });




    const ie_powders = [
        { dust: 'galena', fluid: 'lead', type: 'heated' },
        { dust: 'uraninite', fluid: 'uranium', type: 'superheated' },
        //{ dust: 'bauxite', fluid: 'aluminum', type: 'superheated' }
    ]
    ie_powders.forEach((powder) => {
        if (powder.type == 'heated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'heated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc_ie_addon:metal/${powder.fluid}` }],
                id: `${id_prefix}heated_${powder.dust}`
            })
        if (powder.type == 'superheated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'superheated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc_ie_addon:metal/${powder.fluid}` }],
                id: `${id_prefix}superheated_${powder.dust}`
            })
    });





    const tfccore_powders = [
        { dust: 'chromium', fluid: 'chromium', type: 'heated' },
    ]
    tfccore_powders.forEach((powder) => {
        if (powder.type == 'heated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'heated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `firmalife:metal/${powder.fluid}` }],
                id: `${id_prefix}heated_${powder.dust}`
            })
    });




    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////


    recipes.forEach((recipe) => {
        recipe.type = 'createmetallurgy:melting';
        event.custom(recipe).id(recipe.id);
    });
});





/* const mods = [
    'tfc',
    'firmalife',
    'immersiveengineering',
    'tfc_ie_addon'
 
  ]
 
  const heateds = [
    'tfc:metal/ingot/bismuth_bronze', 
    'tfc:metal/ingot/black_bronze', 
    'tfc:metal/ingot/bronze', 
    'tfc:metal/ingot/brass', 
    'tfc:metal/ingot/copper', 
    'tfc:metal/ingot/gold', 
    'tfc:metal/ingot/rose_gold', 
    'tfc:metal/ingot/silver', 
    'tfc:metal/ingot/sterling_silver',
    'tfc:metal/ingot/zinc', 
    'tfc:metal/ingot/tin',
    'immersiveengineering:ingot_aluminum', 
    'immersiveengineering:ingot_lead', 
    'immersiveengineering:ingot_constantan', 
    'immersiveengineering:ingot_electrum', 
    'immersiveengineering:ingot_uranium', 
    'firmalife:metal/ingot/chromium', 
 
 
    'tfc:metal/double_ingot/bismuth_bronze', 
    'tfc:metal/double_ingot/black_bronze', 
    'tfc:metal/double_ingot/bronze', 
    'tfc:metal/double_ingot/brass', 
    'tfc:metal/double_ingot/copper', 
    'tfc:metal/double_ingot/gold', 
    'tfc:metal/double_ingot/rose_gold', 
    'tfc:metal/double_ingot/silver', 
    'tfc:metal/double_ingot/sterling_silver',
    'tfc:metal/double_ingot/zinc', 
    'tfc:metal/double_ingot/tin',
    'tfc_ie_addon:metal/double_ingot/aluminum', 
    'tfc_ie_addon:metal/double_ingot/lead', 
    'tfc_ie_addon:metal/double_ingot/constantan', 
    'tfc_ie_addon:metal/double_ingot/electrum', 
    'tfc_ie_addon:metal/double_ingot/uranium', 
    'firmalife:metal/double_ingot/chromium', 
 
]
 
  const superheateds = [
    'tfc:metal/ingot/nickel', 
    'tfc:metal/ingot/wrought_iron', 
    'tfc:metal/ingot/cast_iron', 
    'tfc:metal/ingot/pig_iron', 
    'tfc:metal/ingot/steel', 
    'tfc:metal/ingot/black_steel', 
    'tfc:metal/ingot/blue_steel', 
    'tfc:metal/ingot/red_steel', 
    'tfc:metal/ingot/weak_steel',
    'firmalife:metal/ingot/stainless_steel', 
    'tfc:metal/ingot/high_carbon_red_steel', 
    'tfc:metal/ingot/high_carbon_blue_steel', 
    'tfc:metal/ingot/high_carbon_black_steel', 
    'tfc:metal/ingot/high_carbon_steel', 
    'tfc:metal/ingot/weak_red_steel', 
    'tfc:metal/ingot/weak_blue_steel',
 
    'tfc:metal/double_ingot/nickel', 
    'tfc:metal/double_ingot/wrought_iron', 
    'tfc:metal/double_ingot/cast_iron', 
    'tfc:metal/double_ingot/steel', 
    'tfc:metal/double_ingot/black_steel', 
    'tfc:metal/double_ingot/blue_steel', 
    'tfc:metal/double_ingot/red_steel', 
    'firmalife:metal/double_ingot/stainless_steel'
] */

