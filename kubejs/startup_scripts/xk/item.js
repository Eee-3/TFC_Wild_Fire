StartupEvents.registry('item', event => {

    event.create('rock_powder', 'tfc:mold').capacity(100)
    //岩石粉末模具
    event.create('trachyandesite_alloy', 'basic').texture('kubejs:item/create/trachyandesite_alloy')//粗安山合金
    event.create('wildfire:wrought__iron_pressing_head').texture('wildfire:item/create/wrought_iron_pressing_head'); //锻铁压头
    event.create('wrought_iron_double_rod', 'basic').texture('kubejs:item/create/wrought_iron_double_rod');// 锻铁双棒
    event.create('fan_blade_blank', 'basic').texture('kubejs:item/create/fan_blade_blank');// 扇叶半成品
    event.create('stirrer_head_blank', 'basic').texture('kubejs:item/create/stirrer_head_blank');// 搅拌头半成品

    //三锭
    const ingot=[
        "copper",
        "bismuth_bronze",
        "black_bronze",
        "bronze",
        "black_steel",
        "blue_steel",
        "red_steel",
        "steel",
        "wrought_iron"
    ]
    ingot.forEach(metal=>{
        event.create(`triple_${metal}`, 'basic').texture(`kubejs:item/metal/triple_${metal}`);//三锭
    })
    




})