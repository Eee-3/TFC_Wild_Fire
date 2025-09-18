ServerEvents.recipes(e => {
  const { tfc, create, kubejs, immersiveengineering } = e.recipes;
  const metal = [
    { name: "copper", number: 1 },
    { name: "bismuth_bronze", number: 2 },
    { name: "black_bronze", number: 2 },
    { name: "bronze", number: 2 },
    { name: "black_steel", number: 5 },
    { name: "blue_steel", number: 6 },
    { name: "red_steel", number: 6 },
    { name: "steel", number: 4 },
    { name: "wrought_iron", number: 3 }
  ];

  metal.forEach(item => {
    tfc.welding(
      `kubejs:triple_${item.name}`,       // 输出
      `tfc:metal/double_ingot/${item.name}`,
      `tfc:metal/ingot/${item.name}`,
      item.number // 砧等级 0是石头 1铜 2铜合金 3锻铁 4钢 5黑钢 6红蓝钢
    );
  });
 

  tfc.anvil(
    'create:andesite_alloy',
    'kubejs:trachyandesite_alloy',
    [
      'hit_any',
    ]
  ).tier(1).bonus(true).id("tfc:andesite_alloy/anvil")//粗安山合金合成安山合金
  tfc.anvil(
    'vintageimprovements:andesite_sheet',
    'create:andesite_alloy',
    [
      'hit_any',
    ]
  ).tier(1).bonus(true).id("tfc:andesite_alloy_sheet/anvil")//安山合金板
  tfc.anvil(
    '4x create:shaft',
    'create:andesite_alloy',
    [
      'draw_any',
      'draw_any'
    ]
  ).tier(1).bonus(true).id("tfc:andesite_alloy_shaft/anvil")//传动杆
  tfc.anvil(
    'kubejs:stirrer_head_blank',
    'kubejs:wrought_iron_double_rod',
    [
      'draw_any',
      'draw_any'
    ]
  ).tier(3).bonus(true).id("kubejs:stirrer_head_blank/anvil")//搅拌头半成品
  tfc.anvil(
    'kubejs:fan_blade_blank',
    'kubejs:wrought_iron_double_rod',
    [
      'draw_any',
      'draw_any'
    ]
  ).tier(3).bonus(true).id("kubejs:fan_blade_blank/anvil")//扇叶半成品

  tfc.welding(
    'kubejs:wrought_iron_double_rod',
    'tfc:metal/rod/wrought_iron',
    'tfc:metal/rod/wrought_iron',
    3
  )//双棒焊接
  tfc.welding(
    'create:propeller',
    'kubejs:stirrer_head_blank',
    'create:andesite_alloy',
    3
  )//风扇焊接
  tfc.welding(
    'create:whisk',
    'kubejs:fan_blade_blank',
    'create:andesite_alloy',
    3
  )//搅拌头焊接




})