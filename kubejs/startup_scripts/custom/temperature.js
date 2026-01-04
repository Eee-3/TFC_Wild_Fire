ForgeEvents.onEvent("org.create_power.events.TemperatureEnumEvent", /** @param {Internal.TemperatureEnumEvent} event */ event => {
    // 调整为更合理的温度范围（摄氏度）
    // 原范围: FROSTBITE(0, 10), COLD(10, 16), NORMAL(16, 24), HOT(24, 30), HEAT_STROKE(30, 40)
    console.log(`开始温度`);
    // 霜冻：非常寒冷，可能导致冻伤
    event.setTemperatureEnum("frostbite", -100, -80)
    
    // 寒冷：需要保暖的温度
    event.setTemperatureEnum("cold", -50, -10)
    
    // 正常：舒适的温度范围
    event.setTemperatureEnum("normal", -10, 25)
    
    // 炎热：需要降温的温度
    event.setTemperatureEnum("hot", 25, 35)
    
    // 中暑：危险的高温
    event.setTemperatureEnum("heat_stroke", 35, 45)
})