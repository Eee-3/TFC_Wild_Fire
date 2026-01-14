// 导入所需的Java类（游戏模组相关的能力和工具类）
// 热能力类：用于获取物品的温度属性
let HeatCapability = Java.loadClass("net.dries007.tfc.common.capabilities.heat.HeatCapability")
// 温度工具类：可能用于处理温度相关的计算逻辑
let TemperatureUtil = Java.loadClass("sfiomn.legendarysurvivaloverhaul.api.temperature.TemperatureUtil")
// 能力工具类：用于获取玩家的温度能力组件
let CapabilityUtil = Java.loadClass("sfiomn.legendarysurvivaloverhaul.util.CapabilityUtil")

// 注册物品食用事件：当玩家食用食物时触发
ItemEvents.foodEaten(event => {
    // 解构事件对象，获取玩家的持久化数据和被食用的物品
    let { player: { persistentData }, item } = event
    
    // 从玩家持久化数据中获取当前"食物温度"值（初始可能为0）
    let foodTemperature = persistentData.getFloat("foodTemperature")
    
    // 更新食物温度：在原有基础上增加 物品温度 × 0.01
    // 这里通过HeatCapability获取食物本身的温度属性，乘以系数后累加到玩家的食物温度中
    persistentData.putFloat("foodTemperature", foodTemperature + HeatCapability.getTemperature(item) * 0.01)
})

// 注册玩家tick事件：每游戏刻（约0.05秒）触发一次，用于处理持续逻辑
PlayerEvents.tick(event => {
    // 解构事件对象，获取玩家及其持久化数据
    let { player, player: { persistentData } } = event
    
    // 从持久化数据中获取当前的食物温度和玩家体温
    let foodTemperature = persistentData.getFloat("foodTemperature")
    let Temperature = persistentData.getFloat("Temperature")
    
    // 体温自然衰减：每次tick减少当前体温的0.03%（模拟热量自然流失）
   /// Temperature -= Temperature * 0.0003
    
    // 计算本次tick可从食物中获取的热量（食物温度 × 0.001）
    let amount = foodTemperature * 0.001
    
    // 如果玩家体温低于10，就将食物热量添加到体温中（食物加热效果）
    if (Temperature < 8) {
        Temperature += amount
    }
    
    // 如果玩家的温度等级（可能是另一种温度计量方式）低于10：
    // 1. 增加玩家的 exhaustion（饥饿消耗速度）
    // 2. 轻微提升体温（可能是模拟寒冷环境下的生理反应）
    if (CapabilityUtil.getTempCapability(player).getTemperatureLevel() < 12) {
        player.foodData.addExhaustion(0.02)
      ///  Temperature += 0.005
    }
    
    // 更新食物温度：减去本次消耗的热量，且不低于0（防止负值）
    persistentData.putFloat("foodTemperature", Math.max(foodTemperature - amount, 0))
    // 更新玩家体温：确保体温不低于0
    persistentData.putFloat("Temperature", Math.max(Temperature, 0))
    
    // 将玩家体温值应用到"寒冷抗性"属性上（通过加法方式）
    // 这里用Math.max确保抗性值不为负
    player.modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "Temperature", Math.max(Temperature, 0), "addition")
})