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
  tfc.anvil(//搅拌头半成品
    'kubejs:stirrer_head_blank',
    'kubejs:wrought_iron_double_rod',
    [
      'draw_any',
      'draw_any'
    ]
  ).tier(3).bonus(true).id("kubejs:stirrer_head_blank/anvil")

  tfc.anvil(//黑钢搅拌头半成品
    'kubejs:black_steel_head_blank',
    'kubejs:black_steel_double_rod',
    [
      'draw_any',
      'draw_any'
    ]
  ).tier(5).bonus(true).id("kubejs:stirrer_head_blank/anvil")
  tfc.anvil(
    '2x kubejs:fan_blade_blank_part',
    'tfc:metal/ingot/wrought_iron',
    [
      'hit_any',
      'hit_any'
    ]
  ).tier(3).bonus(true).id("kubejs:fan_blade_blank_part/anvil")//扇叶叶片
  e.shapeless('kubejs:fan_blade_blank', ['4x kubejs:fan_blade_blank_part'])//风扇合成

  
tfc.anvil(// 锻铁零件的铁砧配方
    '2x kubejs:material_component_wrought_iron',  
    'tfc:metal/ingot/wrought_iron',              
    [
        'hit_any',                              
        'hit_any'                                
    ]
).tier(3).bonus(true).id("kubejs:material_component_wrought_iron/anvil"); 


tfc.anvil(// 钢制零件的铁砧配方
    '2x kubejs:material_component_steel',        
    'tfc:metal/ingot/steel',                     
    [
        'hit_any',                               
        'hit_any'                                
    ]
).tier(4).bonus(true).id("kubejs:material_component_steel/anvil");  


tfc.anvil(// 黑钢零件的铁砧配方
    '2x kubejs:material_component_black_steel',  
    'tfc:metal/ingot/black_steel',               
    [
        'hit_any',                               
        'hit_any'                                
    ]
).tier(5).bonus(true).id("kubejs:material_component_black_steel/anvil");  



  tfc.welding(//双棒焊接
    'kubejs:wrought_iron_double_rod',
    'tfc:metal/rod/wrought_iron',
    'tfc:metal/rod/wrought_iron',
    3
  )
  tfc.welding(//风扇焊接
    'create:propeller',
    'kubejs:fan_blade_blank',
    'create:andesite_alloy',
    3
  )
  tfc.welding(//搅拌头焊接
    'create:whisk',
    'kubejs:whisk_stirrer_head_blank',
    'tfc:metal/sheet/wrought_iron',
    3
  )
  tfc.welding(//黑钢搅拌头焊接
    'createmetallurgy:sturdy_whisk',
    'kubejs:whisk_black_steel_head_blank',
    'tfc:metal/sheet/black_steel',
    4
  )



})