MBDMachineEvents.onUI('mbd2:small_teleporter', (e) => {
    let event = e.event
    const { root, machine } = event
    const { pos, frontFacing, level } = machine
    let rotateSpeed = 128
    let front = frontFacing.get()
    function calculatePosition(x, y, z) {
        let offset = new BlockPos(x, y, z)
        if (front == Direction.EAST)
            offset = offset.rotate("clockwise_90")
        else if (front == Direction.NORTH)
            offset = offset.rotate("clockwise_180")
        else if (front == Direction.WEST)
            offset = offset.rotate("counter_clockwise_90")
        return pos.offset(offset)
    }
    let playerPosition = calculatePosition(0, 0, 3)
    let tankPosition = calculatePosition(0, -1, 3)
    let flywheelPosition = calculatePosition(0, 2, 3)
    /**@type {TextFieldWidget} */
    /**@type {ButtonWidget} */
    let button = root.getFirstWidgetById("activate_button")
    button.setOnPressCallback(data => {
        if (data.isRemote) return
        /**@type {TextFieldWidget} */
        let x = root.getFirstWidgetById("x_pos").setNumbersOnlyInt(-1000, 1000).currentString || 0
        let y = root.getFirstWidgetById("y_pos").setNumbersOnlyInt(-1000, 1000).currentString || 0
        let z = root.getFirstWidgetById("z_pos").setNumbersOnlyInt(-1000, 1000).currentString || 0
        let tank = level.getBlockEntity(tankPosition, "create:fluid_tank")
        let flywheel = level.getBlockEntity(flywheelPosition, "create:flywheel")
        flywheel.ifPresent(flywheel => {
            tank.ifPresent(tank => {
                tank.getCapability(ForgeCapabilities.FLUID_HANDLER).ifPresent(fluid => {
                    if (Math.abs(flywheel.speed) >= rotateSpeed) {
                        let player = level.getEntitiesWithin(
                            AABB.ofBlock(playerPosition))
                            .filter(entity => entity.isPlayer() && entity.vehicle != null)
                        [0]

                        y = Math.max(level.minBuildHeight + 64, Math.min(level.maxBuildHeight - 1, parseInt(y)))
                        let d = player.blockPosition().offset(x, y, z)

                        let dist = parseInt(Math.sqrt(d.distSqr(player.blockPosition())))
                        player.tell(`Distance: ${dist.toFixed(0)}, Required: ${dist.toFixed(0)}`)
                        let res = fluid.drain(Fluid.of("create_enchantment_industry:experience", dist), "simulate")
                        if (player != null && res.amount == dist) {

                            fluid.drain(Fluid.of("create_enchantment_industry:experience", dist), "execute")

                            /**@type {Internal.Player} */
                            let p = player
                            p.sendData("close_screen", {})
                            while (level.getBlock(d).getBlockState().solid)
                                d = d.above()
                            while (!level.getBlock(d.below()).getBlockState().solid && d.y > level.minBuildHeight)
                                d = d.below()
                            Utils.server.scheduleInTicks(20, () => {
                                if (player.vehicle != null) {
                                    player.unRide()
                                    player.teleportTo(d.x, d.y, d.z)
                                }
                            })
                        }

                    }
                })
            })

        })
    })
})

ItemEvents.rightClicked("stick", e => {
    e.player.tell(e.player.player)
})
MBDMachineEvents.onOpenUI()