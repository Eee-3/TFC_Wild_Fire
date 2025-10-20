ForgeEvents.onEvent(Java.loadClass("net.minecraftforge.client.event.RenderGuiOverlayEvent$Pre"),/**@param {Internal.RenderGuiOverlayEvent$Pre} event*/ event => {
    if (event.getOverlay().id().getPath() == "health_overhaul") {
        event.setCanceled(true)
    }
})