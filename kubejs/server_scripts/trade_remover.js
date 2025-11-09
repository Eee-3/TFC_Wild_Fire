// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
MoreJSEvents.villagerTrades((event) => {
    /*
     * Will remove all vanilla trades. You can also just remove them for specific professions.
     */
    event.removeVanillaTrades();

    /*
     * Will remove all mod trades. You can also just remove them for specific professions.
     */
    event.removeModdedTrades();
});