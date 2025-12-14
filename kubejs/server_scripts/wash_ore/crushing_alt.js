ServerEvents.recipes(event => {
        event.custom({ "type": "create:crushing", "ingredients": [{ "item": `tfc:ore/graphite` }], 
            "results": [{ "count": 5, "item": `kubejs:item/ore/rocky_chunks/graphite` }, 
            { "chance": 0.3, "count": 3, "item": `kubejs:item/ore/dirty_pile/graphite` }, 
            { "chance": 0.15, "count": 2, "item": `kubejs:item/ore/dirty_pile/graphite` }], 
        "processingTime": 400 })

        event.custom({ "type": "create:crushing", "ingredients": [{ "item": `tfc:ore/cryolite` }], 
            "results": [{ "count": 5, "item": `kubejs:item/ore/rocky_chunks/cryolite` }, 
            { "chance": 0.3, "count": 3, "item": `kubejs:item/ore/dirty_pile/cryolite` }, 
            { "chance": 0.15, "count": 2, "item": `kubejs:item/ore/dirty_pile/cryolite` }], 
        "processingTime": 400 })

        event.custom({ "type": "create:crushing", "ingredients": [{ "item": `tfc:ore/sulfur` }], 
            "results": [{ "count": 5, "item": `kubejs:item/ore/rocky_chunks/sulfur` }, 
            { "chance": 0.3, "count": 3, "item": `kubejs:item/ore/dirty_pile/sulfur` }, 
            { "chance": 0.15, "count": 2, "item": `kubejs:item/ore/dirty_pile/sulfur` }], 
        "processingTime": 400 })

        event.custom({ "type": "create:crushing", "ingredients": [{ "item": `tfc:ore/cinnabar` }], 
            "results": [{ "count": 5, "item": `kubejs:item/ore/rocky_chunks/cinnabar` }, 
            { "chance": 0.3, "count": 3, "item": `kubejs:item/ore/dirty_pile/cinnabar` }, 
            { "chance": 0.15, "count": 2, "item": `kubejs:item/ore/dirty_pile/cinnabar` }], 
        "processingTime": 400 })

        event.custom({ "type": "create:crushing", "ingredients": [{ "item": `tfc:ore/lignite` }], 
            "results": [{ "count": 4, "item": `kubejs:coal_powder` },
            { "chance": 0.15, "count": 2, "item": `kubejs:coal_powder` }], 
        "processingTime": 400 })

        event.custom({ "type": "create:crushing", "ingredients": [{ "item": `tfc:ore/bituminous_coal` }], 
            "results": [{ "count": 4, "item": `kubejs:coal_powder` },
            { "chance": 0.15, "count": 2, "item": `kubejs:coal_powder` }], 
        "processingTime": 400 })

        event.custom({ "type": "create:milling", "ingredients": [{ "item": `tfc:ore/lignite` }], 
            "results": [{ "count": 4, "item": `kubejs:coal_powder` },
            { "chance": 0.1, "count": 1, "item": `kubejs:coal_powder` }], 
        "processingTime": 400 })

        event.custom({ "type": "create:milling", "ingredients": [{ "item": `tfc:ore/bituminous_coal` }], 
            "results": [{ "count": 4, "item": `kubejs:coal_powder` },
            { "chance": 0.1, "count": 1, "item": `kubejs:coal_powder` }], 
        "processingTime": 400 })

        event.shapeless(`6x kubejs:item/ore/rocky_chunks/graphite`,
            [`tfc:ore/graphite`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)
        .id(`kubejs:wash_ore/recipedeore/hammers/small/graphite`)//
        event.shapeless(`6x kubejs:item/ore/rocky_chunks/cryolite`,
            [`tfc:ore/cryolite`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)
        .id(`kubejs:wash_ore/recipedeore/hammers/small/cryolite`)//
        event.shapeless(`6x kubejs:item/ore/rocky_chunks/sulfur`,
            [`tfc:ore/sulfur`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)
        .id(`kubejs:wash_ore/recipedeore/hammers/small/sulfur`)//
        event.shapeless(`6x kubejs:item/ore/rocky_chunks/cinnabar`,
            [`tfc:ore/cinnabar`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)
        .id(`kubejs:wash_ore/recipedeore/hammers/small/cinnabar`)//
        event.shapeless(`kubejs:item/ore/dirty_dust/graphite`,
            `4x kubejs:item/ore/dirty_pile/graphite`).id(`kubejs:wash_ore/recipedeoreshapeless/1/dirty_pile/powder/graphite`)
        event.shapeless(`kubejs:item/ore/dirty_dust/cryolite`,
            `4x kubejs:item/ore/dirty_pile/cryolite`).id(`kubejs:wash_ore/recipedeoreshapeless/1/dirty_pile/powder/cryolite`)
        event.shapeless(`kubejs:item/ore/dirty_dust/sulfur`,
            `4x kubejs:item/ore/dirty_pile/sulfur`).id(`kubejs:wash_ore/recipedeoreshapeless/1/dirty_pile/powder/sulfur`)
        event.shapeless(`kubejs:item/ore/dirty_dust/cinnabar`,
            `4x kubejs:item/ore/dirty_pile/cinnabar`).id(`kubejs:wash_ore/recipedeoreshapeless/1/dirty_pile/powder/cinnabar`)
})