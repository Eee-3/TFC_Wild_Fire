const FluidTankBlockEntity = Java.loadClass("com.simibubi.create.content.fluids.tank.FluidTankBlockEntity")

MBDMachineEvents.onUI('mbd2:teleporter', (e) => {
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
    let playerPosition = calculatePosition(0, 0, 2)
    let tankPositions = [calculatePosition(-2, 0, 5), calculatePosition(2, 0, 5)]
    let flywheelPosition = calculatePosition(0, 5, 2)
    tankPositions.forEach((p, index) => {
    })
    /**@type {TextFieldWidget} */
    /**@type {ButtonWidget} */
    let button = root.getFirstWidgetById("activate_button")
    button.setOnPressCallback(data => {
        if (data.isRemote) return
        /**@type {TextFieldWidget} */
        let x = root.getFirstWidgetById("x_pos").setNumbersOnlyInt(-1000, 1000).currentString || 0
        let y = root.getFirstWidgetById("y_pos").setNumbersOnlyInt(-1000, 1000).currentString || 0
        let z = root.getFirstWidgetById("z_pos").setNumbersOnlyInt(-1000, 1000).currentString || 0
        let flywheel = level.getBlockEntity(flywheelPosition, "create:flywheel")
        Client.tell(flywheel)
        flywheel.ifPresent(flywheel => {

            if (Math.abs(flywheel.speed) >= rotateSpeed) {

                let player = level.getEntitiesWithin(
                    AABB.ofBlock(playerPosition))
                    .filter(entity => entity.isPlayer() && entity.vehicle != null)
                [0]
                y = Math.max(level.minBuildHeight + 64, Math.min(level.maxBuildHeight - 1, parseInt(y)))
                let d = player.blockPosition().offset(x, y, z)

                let dist = parseInt(Math.sqrt(d.distSqr(player.blockPosition())))

                /**@type {[Internal.LazyOptional<Internal.IFluidHandler>, number][]} */
                let fluidCaps = []

                // Client.tell(`Distance: ${dist.toFixed(0)}, Required: ${dist.toFixed(0)}`)
                tankPositions.forEach(tankPosition => {
                    /**@type {Internal.Optional<Internal.FluidTankBlockEntity>} */
                    let tank = level.getBlockEntity(tankPosition, "create:fluid_tank")
                    tank.ifPresent(tank => {
                        let tankBE = tank.controllerBE
                        let cap = tankBE.getCapability(ForgeCapabilities.FLUID_HANDLER)
                        fluidCaps.push([cap, 0])

                        cap.ifPresent(fluid => {
                            let res = fluid.drain(Fluid.of("create_enchantment_industry:experience", dist), "simulate")
                            Client.tell(res.amount)
                            if (res.fluid.isSame("create_enchantment_industry:experience")) {
                                Client.tell(`amount: ${res.amount}`)
                                dist -= res.amount
                                fluidCaps.push([cap, res.amount])
                            }
                        })
                    })
                })
                Client.tell(`dist: ${dist}`)
                if (player != null && dist == 0) {
                    fluidCaps.forEach(element => {
                        element[0].ifPresent(fluid => {
                            Client.tell(element[1])
                            fluid.drain(Fluid.of("create_enchantment_industry:experience", element[1]), "execute")
                        })
                    })

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

ItemEvents.rightClicked("stick", e => {
    e.player.tell(e.player.player)
})
MBDMachineEvents.onOpenUI()