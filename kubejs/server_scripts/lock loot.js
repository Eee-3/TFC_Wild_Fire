const ironLockPick = [
  "minecraft:iron_sword",
]
const diamondLockPick = [
  "minecraft:diamond_sword",
]
const netheriteLockPick = [
  "minecraft:netherite_sword",
]
const copperLockPick = [
  "kubejs:bismuth_bronze_lockpick",
  "kubejs:black_bronze_lockpick",
  "kubejs:bronze_lockpick",
  "kubejs:copper_lockpick",
]
const mediumLockPick = [
  "kubejs:cast_iron_lockpick",
  "kubejs:wrought_iron_lockpick",
  "kubejs:steel_lockpick",
]
const advancedLockPick = [
  "kubejs:black_steel_lockpick",
  "kubejs:homemade_lockpick",
]
const crowbar = [
  "kubejs:wrought_iron_crowbar",
  "kubejs:black_steel_crowbar",
  "kubejs:steel_crowbar",
]
const key = [
  "kubejs:brass_simple_key",
  "kubejs:gold_simple_key",
  "kubejs:bismuth_bronze_simple_key",
  "kubejs:black_bronze_simple_key",
  "kubejs:bronze_simple_key",
  "kubejs:copper_simple_key",
]
const originalKey = [
  "kubejs:old_key",
]
const allLockPick = ironLockPick.concat(diamondLockPick).concat(netheriteLockPick).concat(copperLockPick).concat(mediumLockPick).concat(advancedLockPick).concat(crowbar).concat(key).concat(originalKey)
const lockPickConfigs = {
  "iron": { reduceValue: [1, 10], durabilityCost: 3 },
  "diamond": { reduceValue: [5, 15], durabilityCost: 2 },
  "netherite": { reduceValue: [10, 20], durabilityCost: 1 },
  "copper": { reduceValue: [3, 15], durabilityCost: 2 },
  "medium": { reduceValue: [5, 20], durabilityCost: 2 },
  "advanced": { reduceValue: [10, 29], durabilityCost: 2 },
  "crowbar": { reduceValue: [50, 139], durabilityCost: 1 },
  "key": { reduceValue: [131, 170], durabilityCost: 1 },
  "originalKey": { reduceValue: [131, 170], durabilityCost: 1 }
}
BlockEvents.rightClicked(e => {
  const { player, block } = e
  const isLoot = block.entityData?.LootTable
  // const item = player.getMainHandItem().id
  // let value = block.getEntity().persistentData.getInt("Lock")
  // if(item === "minecraft:stick"){
  //   player.tell(`lockValue:${value}`)
  // }
  if (isLoot) {
    let chestData = block.getEntity().persistentData
    let lockValue = chestData.getInt("Lock")
    const lockPick = player.getMainHandItem().id
    // 初始化锁值
    if (!lockValue) {
      lockValue = randomInt(50, 100)
      chestData.putInt("Lock", lockValue)
    }
    //进行开锁
    if (lockValue != 114514) {
      //无钥匙
      if (!allLockPick.includes(lockPick)) {
        player.setStatusMessage(Component.translate("message.kubejs.no_lockpick"))
        block.level.playSound(null, block.x, block.y, block.z, "minecraft:block.iron_trapdoor.close", "blocks",2.0, 1.2)
        player.sendData("kubejs_player_playsound", {soundEvent: "minecraft:block.chain.break", volume: 1.0, pitch: 0.8})
        e.cancel()
      }
      //开锁参数
      let reduceValue, durabilityCost, config
      if (ironLockPick.includes(lockPick)) config = lockPickConfigs.iron
      else if (diamondLockPick.includes(lockPick)) config = lockPickConfigs.diamond
      else if (netheriteLockPick.includes(lockPick)) config = lockPickConfigs.netherite
      else if (copperLockPick.includes(lockPick)) config = lockPickConfigs.copper
      else if (mediumLockPick.includes(lockPick)) config = lockPickConfigs.medium
      else if (advancedLockPick.includes(lockPick)) config = lockPickConfigs.advanced
      else if (crowbar.includes(lockPick)) config = lockPickConfigs.crowbar
      else if (key.includes(lockPick)) config = lockPickConfigs.key
      else if (originalKey.includes(lockPick)) config = lockPickConfigs.originalKey
      if (config) {
        reduceValue = randomInt(config.reduceValue[0], config.reduceValue[1])
        durabilityCost = config.durabilityCost
        // player.tell(`reduceValue:${reduceValue}, lockValue:${lockValue}`)
      }
      // 开锁成功
      if (lockValue - reduceValue <= 0) {
        chestData.putInt("Lock", 114514)
        player.setStatusMessage(Component.translate("message.kubejs.lockpick_success"))
        block.level.playSound(null, block.x, block.y, block.z, "minecraft:block.note_block.bell", "blocks", 2.0, 1.2)
        return
      }
      // 开锁失败
      else {
        player.setStatusMessage(Component.translate("message.kubejs.lockpick_failure"))
        lockValue -= reduceValue
        player.damageHeldItem("main_hand", durabilityCost)
        chestData.putInt("Lock", lockValue)
        block.level.playSound(null, block.x, block.y, block.z, "minecraft:block.iron_trapdoor.close", "blocks",2.0, 1.2)
        e.cancel()
      }
    }
  }
})