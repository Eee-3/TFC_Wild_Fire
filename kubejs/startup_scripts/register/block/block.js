StartupEvents.registry("block", event => {
        event.create("kubejs:andesite_chassis", "basic")
                .noValidSpawns(false) // 上面是否生成怪物
                .hardness(0.3) // 硬度


})//安山齿轮机箱
StartupEvents.registry('block', event => {
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