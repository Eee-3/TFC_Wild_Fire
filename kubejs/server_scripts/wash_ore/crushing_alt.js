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
})