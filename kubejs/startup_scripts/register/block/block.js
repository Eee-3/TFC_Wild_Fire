StartupEvents.registry("block", event => {
        event.create("kubejs:andesite_chassis", "basic")
                .noValidSpawns(false) // 上面是否生成怪物
                .hardness(0.3) // 硬度


})//安山齿轮机箱
StartupEvents.registry('block', event => {
        event.create('unfired_crucible_mold') // 未烧制的坩埚模具
        event.create('corundum_brick_block').tag("tfc:blast_furnace_insulation").tag("tfc:bloomery_insulation")// 刚玉砖块
        event.create('crucible_mold') // 坩埚模具
        event.create('dried_sinew')
                .material('wood')
                .hardness(0.5)
                .box(0, 0, 0, 16, 1, 16)
                .noCollision()

        event.create('sinew')
                .material('wood')
                .hardness(0.5)
                .box(0, 0, 0, 16, 1, 16)
                .noCollision()
                .blockEntity(info => {
                        info.serverTick(24001, 24000, entity => {
                                entity.getBlock().set('kubejs:dried_sinew')
                        })
                })
})