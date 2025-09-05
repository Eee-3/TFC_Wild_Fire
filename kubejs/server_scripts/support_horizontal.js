ServerEvents.blockLootTables(event =>{
    event.addBlock("kubejs:copper_support_horizontal", loot=>{
        loot.addPool(pool=>{
            pool.addItem("kubejs:copper_support")
        })
    })
    event.addBlock("kubejs:steel_support_horizontal", loot=>{
        loot.addPool(pool=>{
            pool.addItem("kubejs:steel_support")
        })
    })
})