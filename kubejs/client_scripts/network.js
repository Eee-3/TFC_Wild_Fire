NetworkEvents.dataReceived("close_screen", e => {
    Client.setScreen(null)
})
NetworkEvents.dataReceived("kubejs_player_playsound", e => {
    e.player.playSound(e.data.get("soundEvent").getAsString())
})