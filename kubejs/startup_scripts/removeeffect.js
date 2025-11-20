ForgeEvents.onEvent("org.create_power.events.InventoryEffectRenderEvent", event => {
    event.getEffectList().removeIf(effect => {
        return true

    })
})