
ItemEvents.rightClicked(event => {
    const { player, item } = event;
    if (item.id == 'kubejs:warm_warmer') {
       item.shrink(1)
        player.give(Item.of(TFC.ingredient.heatable('kubejs:heating_warmer', 60, null), 1));

    }
});