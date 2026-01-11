StartupEvents.init(event => {
    let Config=Java.loadClass("org.create_power.Config");
    // 原范围: FROSTBITE(0, 10), COLD(10, 16), NORMAL(16, 24), HOT(24, 30), HEAT_STROKE(30, 40)
   // console.log(`开始温度`);
    // 霜冻：非常寒冷，可能导致冻伤
    Config.setTemperatureEnum("frostbite", 0, 5)
    
    // 寒冷：需要保暖的温度
    Config.setTemperatureEnum("cold", 5, 15)

    // 正常：舒适的温度范围
    Config.setTemperatureEnum("normal", 15, 30)

    // 炎热：需要降温的温度
    Config.setTemperatureEnum("hot", 30, 40)

    // 中暑：危险的高温
    Config.setTemperatureEnum("heat_stroke", 40, 99)
})