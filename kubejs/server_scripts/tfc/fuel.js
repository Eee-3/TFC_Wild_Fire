TFCEvents.data(event => {
    /*
    第一个论点：物品成分，即燃料所适用的物品
第二个参数：一个数字，燃料燃烧的温度°C
第三个论元：一个数字，燃料燃烧的刻数
第四个论点：一个数字，即燃料的纯度，可以不指定一个数值null*/
    // 一、燃料颗粒类
    // 木料颗粒：低温、短时长、低纯度
    event.fuel('kubejs:wood_pellet', 600, 20*30, 0.7);
    // 木炭颗粒：中低温、中等时长、中低纯度
    event.fuel('kubejs:charcoal_pellet', 1200, 20*30, 0.8);
    // 煤炭颗粒：中温、较长时长、中纯度
    event.fuel('kubejs:coal_pellet', 1400, 20*60, 0.85);
    // 焦煤颗粒：高温、长时长、高纯度
    event.fuel('kubejs:coke_pellet', 1500, 20*100, 0.95);
    // 高性能燃料颗粒：超高温、超长时长、超高纯度
    event.fuel('kubejs:high_performance_fuel_pellet', 2200, 20*120, 0.98);

    // 二、燃料炭块（压块）类（属性优于对应颗粒）
    // 木料炭块
    event.fuel('kubejs:wood_briquette', 600, 20*30*9/2, 0.72);
    // 木炭块
    event.fuel('kubejs:charcoal_briquette', 1250, 20*30*9/2, 0.82);
    // 煤炭块
    event.fuel('kubejs:coal_briquette', 1350, 20*60*9/2, 0.88);
    // 焦煤块
    event.fuel('kubejs:coke_briquette', 1600, 20*100*9/2, 0.96);
    // 高性能燃料块
    event.fuel('kubejs:high_performance_fuel_briquette', 2500, 20*120*9/2, 0.99);
});