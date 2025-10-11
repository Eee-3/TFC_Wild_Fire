MafuyuEvents.modifyVariedModel(event => {
    if (event.getItemStack().nbt.contains("tank") && event.getItemStack().id.includes('kubejs:rock_powder')) {
        event.setModelPath("kubejs:rock_powder_blank")
        
    } 

})