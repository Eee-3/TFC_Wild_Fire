BlockEvents.placed(event => {
    const {block, level} = event
    if(block.id != 'kubejs:wild_brown_mushroom') return
    let isSolidBelow = block.down.blockState.isFaceSturdy(level, block.down.pos, Direction.up)
    if(!isSolidBelow) event.cancel()
        
}
)
BlockEvents.placed(event => {
    const {block, level} = event
    if(block.hastag('kubejs:wild_mushroom')) return
    let isSolidBelow = block.down.blockState.isFaceSturdy(level, block.down.pos, Direction.up)
    if(!isSolidBelow) event.cancel()
        
}
)