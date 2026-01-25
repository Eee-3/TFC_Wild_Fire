StartupEvents.registry("block", event => {
        event.create("kubejs:andesite_chassis", "basic")
                .noValidSpawns(false) // 上面是否生成怪物
                .hardness(0.3) // 硬度


})//安山齿轮机箱
StartupEvents.registry('block', event => {
        event.create('unfired_crucible_mold') // 未硬化的坩埚模具
        event.create('corundum_brick_block').tag("tfc:blast_furnace_insulation").tag("tfc:bloomery_insulation")// 刚玉砖块
        event.create('crucible_mold') // 坩埚模具
        event.create('kubejs:tfc/dried_sinew')
                .material('wood')
                .hardness(0.5)
                .box(0, 0, 0, 16, 1, 16)
                .noCollision()


        event.create('kubejs:wild_brown_mushroom')
                .material('moss')
                .soundType('crop')
                .hardness('0.5')
                .box(4, 0, 4, 12, 6, 12)
                .noCollision()
                .notSolid()
                .renderType('cutout_mipped')
                .model("kubejs:block/wild_crop/wild_brown_mushroom")
                .tagBlock('tfc:mineable_with_sharp_tool')

        event.create('kubejs:wild_red_mushroom')
                .material('moss')
                .soundType('crop')
                .hardness('0.5')
                .box(4, 0, 4, 12, 6, 12)
                .noCollision()
                .notSolid()
                .renderType('cutout_mipped')
                .model("kubejs:block/wild_crop/wild_red_mushroom")
                .tagBlock('tfc:mineable_with_sharp_tool')

        event.create('kubejs:tfc/sinew')
                .material('wood')
                .hardness(0.5)
                .box(0, 0, 0, 16, 1, 16)
                .noCollision()
                .blockEntity(info => {
                        info.serverTick(24001, 24000, entity => {
                                entity.getBlock().set('kubejs:tfc/dried_sinew')
                        })
                })
})
const $CrucibleBlock = Java.loadClass('net.dries007.tfc.common.blocks.devices.CrucibleBlock')
const $ExtendedProperties = Java.loadClass('net.dries007.tfc.common.blocks.ExtendedProperties')
const $TFCBlockEntities = Java.loadClass('net.dries007.tfc.common.blockentities.TFCBlockEntities')
const $CrucibleBlockEntity = Java.loadClass('net.dries007.tfc.common.blockentities.CrucibleBlockEntity')
const $TooltipBlockItem = Java.loadClass('net.dries007.tfc.common.items.TooltipBlockItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('block', event => {
        event.createCustom("kubejs:crucible", () => new $CrucibleBlock(
                $ExtendedProperties
                        .of()
                        .strength(3.0)
                        .sound(SoundType.METAL)
                        .blockEntity($TFCBlockEntities.CRUCIBLE)
                        .serverTicks((level, pos, state, entity) =>
                                $CrucibleBlockEntity.serverTick(level, pos, state, entity)
                        )
        ))
})

StartupEvents.registry('item', event => {
        event.createCustom("kubejs:crucible", () => new $TooltipBlockItem(
                Block.id('kubejs:crucible').getBlockState().block,
                new $ItemProperties()
        ))
})
const deposit = [
        'andesite',
        'basalt',
        'chalk',
        'chert',
        'claystone',
        'conglomerate',
        'dacite',
        'diorite',
        'dolomite',
        'gabbro',
        'gneiss',
        'granite',
        'limestone',
        'marble',
        'phyllite',
        'quartzite',
        'rhyolite',
        'schist',
        'shale',
        'slate'
];
deposit.forEach(deposit => {
        StartupEvents.registry("block", event => {
                event.create(`kubejs:deposit/gem_gravel/${deposit}`, "basic")
                .model(`kubejs:block/deposit/gem_gravel/${deposit}`)
                .tagBlock('forge:gravel')
        })
})