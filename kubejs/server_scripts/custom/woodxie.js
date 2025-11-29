BlockEvents.broken(event => {
    /**
     * 
     * @param {string} blocks 方块id或方块标签
     * @param {number} count 木屑掉了数量
     * 
     */
    function sawdust(blocks, count) {
        const { block, player } = event
        if (!player.mainHandItem.hasTag('tfc:hammers')) return
        let isRecipe = false
        if (blocks.startsWith('#') && block.hasTag(blocks.slice(1))) {
            isRecipe = true
        }
        else if (block.id == blocks) {
            isRecipe = true
        }

        if (isRecipe) {
            damageItem(player.mainHandItem, 1)
            let sawdustItem = block.createEntity('item')
            sawdustItem.item = Item.of('createdieselgenerators:wood_chip', count)
            sawdustItem.x += 0.5
            sawdustItem.z += 0.5
            sawdustItem.spawn()
            block.set('air')
            event.cancel()
        }
    }

    sawdust('#minecraft:logs', 16)

})