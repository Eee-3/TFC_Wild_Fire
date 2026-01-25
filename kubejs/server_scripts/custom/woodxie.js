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
            sawdustItem.y += 0.5
            sawdustItem.spawn()
            block.set('air')
            event.cancel()
        }
    }

    sawdust('#minecraft:logs', 16)

})
BlockEvents.broken(event => {//冰块
    /**
     * 
     * @param {string} blocks 方块id或方块标签
     * @param {number} count 掉落物品数量
     */
    function sawdust(blocks, count) {
        const { block, player } = event
        // 核心修改：校验主手物品ID是否为tfc:gem_saw（而非标签）
        // 增加空值校验：避免无玩家/主手无物品时报错
        if (!player || player.mainHandItem.isEmpty() || player.mainHandItem.id !== "tfc:gem_saw") return
        
        let isRecipe = false
        // 方块匹配逻辑保持不变（支持ID/标签）
        if (blocks.startsWith('#') && block.hasTag(blocks.slice(1))) {
            isRecipe = true
        }
        else if (block.id === blocks) {
            isRecipe = true
        }

        if (isRecipe) {
            // 优化：仅当工具可耐久消耗时才掉耐久（避免无限耐久报错）
            if (player.mainHandItem.getMaxDamage() > 0) {
                damageItem(player.mainHandItem, 1)
            }
            // 创建掉落的冰块物品实体
            let sawdustItem = block.createEntity('item')
            sawdustItem.item = Item.of("minecraft:ice", count)
            sawdustItem.x += 0.5
            sawdustItem.z += 0.5
            sawdustItem.y += 0.5
            sawdustItem.spawn()
            // 移除原冰块方块，取消默认掉落逻辑
            block.set('air')
            event.cancel()
        }
    }

    // 调用：破坏冰块时掉落1个冰块（仅手持tfc:gem_saw时触发）
    sawdust("minecraft:ice", 1)
})
