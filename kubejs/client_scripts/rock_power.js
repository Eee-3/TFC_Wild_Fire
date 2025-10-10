MafuyuEvents.modifyVariedModel(event => {
    const getnbt = event.getItemStack().nbt.contains()
    if (getnbt != "null") {
        return
    } else {
        if (getnbt == "tank") {
            event.setmode("kubejs:item/create/rock_powder_blank")
        }

    }
})