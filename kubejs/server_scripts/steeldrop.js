const $ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity")
ServerEvents.tick(e => {
    e.server.entities.forEach(entity => {
        if (entity instanceof $ItemEntity) {
            /**@type {Internal.ItemEntity} */
            let itemEntity = entity
            if (itemEntity.item.is("tfc:metal/rod/steel")) {
                if (entity.onGround() && entity.yOld != entity.y) {
                    entity.playSound("tfc:block.anvil.hit")
               
                }
            }
        }
    })
})