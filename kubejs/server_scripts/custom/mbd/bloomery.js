const ItemSlotCapabilityTrait = Java.loadClass("com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTrait")
const FluidTankCapabilityTrait = Java.loadClass("com.lowdragmc.mbd2.common.trait.fluid.FluidTankCapabilityTrait")
const ItemStackInventory = Java.loadClass("net.dries007.tfc.common.recipes.inventory.ItemStackInventory")
const HeatingRecipe = Java.loadClass("net.dries007.tfc.common.recipes.HeatingRecipe")
const mbd2$FluidStack = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidStack")


MBDMachineEvents.onStructureFormed("mbd2:bloomery", e => {
    let event = e.event
    const { machine } = event
    const { customData } = machine
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let inputTrait = machine.getTraitByName("item_input_slot")
    /**@type {Internal.FluidTankCapabilityTrait} */
    let inputFluidTrait = machine.getTraitByName("fluid_tank")

    let storage = inputTrait.storage
    let fluidStorage = inputFluidTrait.storages[0]

    storage.setFilter((stack) =>
        HeatingRecipe.getRecipe(stack) != null &&
        HeatingRecipe.getRecipe(stack).displayOutputFluid.fluid.isSame("tfc:metal/cast_iron"))
    storage.setOnContentsChanged(() => {
        if (customData.getInt("heat_time") == 0) return
        let flag = false

        let amount = 0
        let fluidSnapshot = fluidStorage.createSnapshot()
        //检查可加热物品是否足够
        for (let i = 0; i < storage.getSlots(); i++) {
            let stackInSlot = storage.getStackInSlot(i)
            if (!stackInSlot.isEmpty()) {
                let recipe = HeatingRecipe.getRecipe(stackInSlot)
                let result = recipe.assembleFluid(new ItemStackInventory(stackInSlot))
                
                amount += result.amount
                if (amount >= fluidStorage.capacity) {
                    flag = true
                    break
                }
            }
        }
        if (!flag) {
            //中断加热过程
            customData.putInt("heat_time", 0)
        }
        fluidStorage.restoreFromSnapshot(fluidSnapshot)
    })
})

MBDMachineEvents.onRightClick('mbd2:bloomery', (e) => {
    let event = e.event
    const { machine, player, heldItem } = event
    const { customData } = machine
    if (customData.getInt("heat_time") > 0)
        return
    // if (!heldItem.is("minecraft:flint_and_steel")) //触发条件
    //     return
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let inputTrait = machine.getTraitByName("item_input_slot")
    /**@type {Internal.FluidTankCapabilityTrait} */
    let inputFluidTrait = machine.getTraitByName("fluid_tank")

    let storage = inputTrait.storage
    let fluidStorage = inputFluidTrait.storages[0]
    let fluidSnapshot = fluidStorage.createSnapshot()
    let flag = false
    let amount = 0
    //检查可加热物品是否足够
    for (let i = 0; i < storage.getSlots(); i++) {
        let stackInSlot = storage.getStackInSlot(i)
        if (!stackInSlot.isEmpty()) {
            let recipe = HeatingRecipe.getRecipe(stackInSlot)

            let result = recipe.assembleFluid(new ItemStackInventory(stackInSlot))

            amount += result.amount
            if (amount >= fluidStorage.capacity) {
                flag = true
                break
            }
        }
    }
    //启动加热过程
    if (flag) {
        customData.putInt("heat_time", 40)
        player.playSound("minecraft:block.fire.ambient")
    }
    fluidStorage.restoreFromSnapshot(fluidSnapshot)
    player.swing()
})

MBDMachineEvents.onTick("mbd2:bloomery", e => {
    let event = e.event
    const { machine } = event
    const { customData } = machine
    if (customData.getInt("heat_time") > 0) {
        //加热完成
        if (customData.getInt("heat_time") == 1) {
            /**@type {Internal.ItemSlotCapabilityTrait} */
            let inputTrait = machine.getTraitByName("item_input_slot")
            /**@type {Internal.FluidTankCapabilityTrait} */
            let inputFluidTrait = machine.getTraitByName("fluid_tank")

            let fluidStorage = inputFluidTrait.storages[0]
            let storage = inputTrait.storage

            //全部销毁
            for (let i = 0; i < storage.getSlots(); i++) {
                storage.setStackInSlot(i, Item.empty)
            }
            //填充铸铁液
            machine.getCapability(ForgeCapabilities.FLUID_HANDLER).ifPresent(handler => {
                handler.fill(Fluid.of("tfc:metal/cast_iron", fluidStorage.capacity), "execute")
            })

        }
        customData.putInt("heat_time", customData.getInt("heat_time") - 1)
    }
})