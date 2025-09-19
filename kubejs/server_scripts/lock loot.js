BlockEvents.rightClicked(event => {
  //判断是否是战利品箱
  const isLoot = event.block.entityData?.LootTable
  if (isLoot) {
    let chestData = event.block.getEntity().persistentData
    let lockValue = chestData.getInt('Lock')
    const lockPick = event.player.getMainHandItem()

    // 锁初始化，为未上锁的箱子设置随机锁值
    if (!lockValue) {
      //如果容器没有锁值，则随机生成数值，数值越大表示锁越难开
      lockValue = Math.floor(Math.random() * 100 + 50)  // 初始锁值范围
      chestData.putInt('Lock', lockValue)
    }

    // 开锁流程，仅在箱子未解锁时执行
    if (lockValue != 1) {
      // 检查玩家是否持有正确的开锁工具
      let unlockValue, successThreshold, durabilityCost

      // 根据钥匙类型设置开锁参数
      if (lockPick.id == 'minecraft:iron_sword') {
        unlockValue = Math.floor(Math.random() * 10 + 1) //铁开锁工具：每次减1-10
        successThreshold = 10 // 需减到≤10
        durabilityCost = 3 // 每次尝试耐久的消耗
      } else if (lockPick.id == 'minecraft:diamond_sword') {
        unlockValue = Math.floor(Math.random() * 15 + 5) // 钻石开锁工具：每次减5-15
        successThreshold = 5 // 需减到≤5
        durabilityCost = 2 // 每次尝试耐久的消耗
      } else if (lockPick.id == 'minecraft:netherite_sword') {
        unlockValue = Math.floor(Math.random() * 20 + 10) // 下界开锁工具：每次减10-20
        successThreshold = 3 //需减到≤3
        durabilityCost = 1 // 每次尝试耐久的消耗
      } else if ([
        'kubejs:bismuth_bronze_lockpick',
        'kubejs:black_bronze_lockpick',
        'kubejs:bronze_lockpick',
        'kubejs:copper_lockpick'
      ].includes(lockPick.id)) {
        unlockValue = Math.floor(Math.random() * 30 + 3) // 铜开锁工具：每次减3-15
        successThreshold = 10 //需减到≤10
        durabilityCost = 2 // 每次尝试耐久的消耗
      } else if ([
        'kubejs:cast_iron_lockpick',
        'kubejs:wrought_iron_lockpick',
        'kubejs:steel_lockpick'
      ].includes(lockPick.id)) {
        unlockValue = Math.floor(Math.random() * 35 + 10) // 中级开锁工具：每次减5-20
        successThreshold = 10 //需减到≤10
        durabilityCost = 2 // 每次尝试耐久的消耗
      } else if ([
        'kubejs:black_steel_lockpick',
        'kubejs:homemade_lockpick'
      ].includes(lockPick.id)) {
        unlockValue = Math.floor(Math.random() * 50 + 10) // 高级开锁工具：每次减10-29
        successThreshold = 10 //需减到≤10
        durabilityCost = 2 // 每次尝试耐久的消耗
      } else if ([
        'kubejs:wrought_iron_crowbar',
        'kubejs:black_steel_crowbar',
        'kubejs:steel_crowbar'
      ].includes(lockPick.id)) {
        unlockValue = Math.floor(Math.random() * 50 + 90) // 撬棍、每次减50~139
        successThreshold = 10 //需减到≤10
        durabilityCost = 1 // 每次尝试耐久的消耗
      } else if ([
        'kubejs:brass_simple_key',
        'kubejs:gold_simple_key',
        'kubejs:bismuth_bronze_simple_key',
        'kubejs:black_bronze_simple_key',
        'kubejs:bronze_simple_key',
        'kubejs:copper_simple_key'
      ].includes(lockPick.id)) {
        unlockValue = Math.floor(Math.random() * 70 + 80) // 钥匙、每次减131~170
        successThreshold = 10 //需减到≤10
        durabilityCost = 1 // 每次尝试耐久的消耗
      } else if ([
        'kubejs:old_key'
      ].includes(lockPick.id)) {
        unlockValue = Math.floor(Math.random() * 40 + 101) // 原装钥匙、每次减131~170
        successThreshold = 10 //需减到≤10
        durabilityCost = 1 // 每次尝试耐久的消耗
      }



      // 无钥匙/错误工具处理
      if (lockValue > 1 && ![
        'minecraft:iron_sword',
        'minecraft:diamond_sword',
        'minecraft:netherite_sword',
        'kubejs:bismuth_bronze_lockpick',
        'kubejs:black_bronze_lockpick',
        'kubejs:bronze_lockpick',
        'kubejs:copper_lockpick',
        'kubejs:cast_iron_lockpick',
        'kubejs:wrought_iron_lockpick',
        'kubejs:steel_lockpick',
        'kubejs:black_steel_lockpick',
        'kubejs:homemade_lockpick',
        'kubejs:wrought_iron_crowbar',
        'kubejs:black_steel_crowbar',
        'kubejs:steel_crowbar',
        'kubejs:old_key',
        'kubejs:brass_simple_key',
        'kubejs:gold_simple_key',
        'kubejs:bismuth_bronze_simple_key',
        'kubejs:black_bronze_simple_key',
        'kubejs:bronze_simple_key',
        'kubejs:copper_simple_key'

      ].includes(lockPick.id)) {
        event.player.setStatusMessage('§d这个容器已上锁，你需要一把§a[开锁工具]§d才能打开它')
        event.level.playSound(null, event.block.pos.x, event.block.pos.y, event.block.pos.z,
          'minecraft:block.iron_trapdoor.close', 2.0, 1.2, 'players')
        event.player.playSound('minecraft:block.chain.break', 1.0, 0.8)
        event.cancel()
      }

      // 有效开锁尝试处理
      else if ([
        'minecraft:iron_sword',
        'minecraft:diamond_sword',
        'minecraft:netherite_sword',
        'kubejs:bismuth_bronze_lockpick',
        'kubejs:black_bronze_lockpick',
        'kubejs:bronze_lockpick',
        'kubejs:copper_lockpick',
        'kubejs:cast_iron_lockpick',
        'kubejs:wrought_iron_lockpick',
        'kubejs:steel_lockpick',
        'kubejs:black_steel_lockpick',
        'kubejs:homemade_lockpick',
        'kubejs:wrought_iron_crowbar',
        'kubejs:black_steel_crowbar',
        'kubejs:steel_crowbar',
        'kubejs:old_key',
        'kubejs:brass_simple_key',
        'kubejs:gold_simple_key',
        'kubejs:bismuth_bronze_simple_key',
        'kubejs:black_bronze_simple_key',
        'kubejs:bronze_simple_key',
        'kubejs:copper_simple_key'

      ].includes(lockPick.id)) {
        // 开锁成功
        if (lockValue - unlockValue <= successThreshold) {
          chestData.putInt('Lock', 1) // 完全解锁
          event.player.setStatusMessage("§6开锁成功！")
          event.level.playSound(null, event.block.pos.x, event.block.pos.y, event.block.pos.z,
            'minecraft:block.note_block.bell', 2.0, 1.2, 'players')
          return // 允许打开容器
        }
        // 开锁失败
        else {
          event.player.setStatusMessage("§7再试试吧…")
          lockValue = lockValue - unlockValue // 降低锁值
          event.player.damageHeldItem('main_hand', durabilityCost) // 消耗耐久
          chestData.putInt('Lock', lockValue) // 更新锁值
          event.player.playSound('minecraft:block.iron_trapdoor.open', 1.0, 0.8)
          event.cancel() // 阻止打开容器
        }
      }
    }
  }
})