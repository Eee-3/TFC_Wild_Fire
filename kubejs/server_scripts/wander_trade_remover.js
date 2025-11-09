// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
MoreJSEvents.wandererTrades((event) => {
    event.removeVanillaTrades(1);
    event.removeVanillaTrades(2);
    event.removeModdedTrades(1);
    event.removeModdedTrades(2);
});