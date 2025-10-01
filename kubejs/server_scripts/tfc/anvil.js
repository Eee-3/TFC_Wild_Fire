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
    'kubejs:whisk_stirrer_head_blank',
    'kubejs:wrought_iron_double_rod',
    [
      'draw_any',
      'draw_any'
    ]
  ).tier(3).bonus(true).id("kubejs:whisk_stirrer_head_blank/anvil")

  tfc.anvil(//黑钢搅拌头半成品
    'kubejs:whisk_black_steel_head_blank',
    'kubejs:black_steel_double_rod',
    [
      'draw_any',
      'draw_any'
    ]
  ).tier(5).bonus(true).id("kubejs:whisk_black_steel_stirrer_head_blank/anvil")
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

ServerEvents.recipes(a => {
    const { tfc, create,kubejs,anvil} = a.recipes;
    const weapon = [
        {name:"copper", number:1},
        {name:"red_steel",number:6},
        {name:"black_bronze",number:2},
        {name:"bronze",number:2},
        {name:"bismuth_bronze",number:2},
        {name:"wrought_iron",number:3},
        {name:"steel",number:4},
        {name:"black_steel",number:5},
        {name:"blue_steel",number:6}

    ];
   const weapon_part = [
        {mod:"kubejs:",weaponname:"greatsword_weapon_part",metalnumber:"triple_",a1:"hit_third_last",a2:"draw_second_last",a3:"upset_last"},//大剑(三锭)
        {mod:"kubejs:",weaponname:"battle_hammer_weapon_part",metalnumber:"triple_",a1:"shrink_third_last",a2:"hit_second_last",a3:"hit_any"},//战锤(三锭)
        {mod:"kubejs:",weaponname:"battleaxe_weapon_part",metalnumber:"triple_",a1:"hit_third_last",a2:"draw_last",a3:"upset_any"},//战斧(三锭)
        {mod:"tfc:metal/",weaponname:"lance_weapon_part",metalnumber:"double_sheet/",a1:"draw_third_last",a2:"draw_last",a3:"hit_second_last"},//骑枪（双板）
        {mod:"tfc:metal/",weaponname:"halberd_weapon_partt",metalnumber:"double_sheet/",a1:"shrink_second_last",a2:"bend_last",a3:"upset_any"},//战戟（双板）
        {mod:"tfc:metal/",weaponname:"scythe_weapon_part",metalnumber:"double_sheet/",a1:"bend_last",a2:"draw_second_last",a3:"draw_any"},//镰刀（双板）
        {mod:"tfc:metal/",weaponname:"tomahawk_weapon_part",metalnumber:"ingot/",a1:"upset_last",a2:"hit_any",a3:"draw_second_last"},//印第安投斧(单锭)
        {mod:"tfc:metal/",weaponname:"throwing_knife_weapon_part",metalnumber:"ingot/",a1:"draw_second_last",a2:"draw_last",a3:"hit_any"},//飞刀（单锭）
        {mod:"tfc:metal/",weaponname:"dagger_weapon_part",metalnumber:"ingot/",a1:"hit_last",a2:"hit_third_last",a3:"hit_any"},//匕首刀（单锭）
        {mod:"tfc:metal/",weaponname:"handguard_weapon_part",metalnumber:"rod/",a1:"hit_any",a2:"draw_second_last",a3:"bend_last"},//护手(棒子)
        {mod:"tfc:metal/",weaponname:"longsword_weapon_part",metalnumber:"double_ingot/",a1:"punch_last",a2:"draw_any",a3:"upset_third_last"},//长刀（双锭）
        {mod:"tfc:metal/",weaponname:"katana_weapon_part",metalnumber:"double_ingot/",a1:"draw_not_last",a2:"upset_third_last",a3:"shrink_second_last"},//太刀（双锭）
        {mod:"tfc:metal/",weaponname:"saber_weapon_part",metalnumber:"double_ingot/",a1:"shrink_not_last",a2:"punch_last",a3:"hit_any"},//军刀（双锭）
        {mod:"tfc:metal/",weaponname:"rapier_weapon_part",metalnumber:"double_ingot/",a1:"upset_third_last",a2:"shrink_last",a3:"shrink_any"},//迅捷剑（双锭）
        {mod:"kubejs:",weaponname:"warhammer_weapon_part",metalnumber:"triple_",a1:"upset_last",a2:"upset_second_last",a3:"shrink_any"},//战锤(三锭)
        {mod:"kubejs:",weaponname:"flanged_mace_weapon_part",metalnumber:"triple_",a1:"hit_last",a2:"shrink_not_last",a3:"upset_any"},//钉锤（三锭）
        {mod:"kubejs:",weaponname:"glaive_weapon_part",metalnumber:"triple_",a1:"hit_last",a2:"draw_any",a3:"bend_not_last"},//长柄刀（三锭）
        {mod:"tfc:metal/",weaponname:"quarterstaff_weapon_part",metalnumber:"ingot/",a1:"draw_any",a2:"shrink_last",a3:"hit_any"}//矛(单锭)
    ];

    weapon_part.forEach(abd =>{
     weapon.forEach(abc => {
        tfc.anvil(
            `kubejs:${abc.name}_${abd.weaponname}`,
            `${abd.mod}${abd.metalnumber}${abc.name}`,//double_sheet(双板)sheet(单板)ingot(单锭)double_ingot(双锭)triple(三锭)
        [
            `${abd.a1}`,
            `${abd.a2}`,
            `${abd.a3}`
        ]        ).bonus(false).tier(abc.number)
         })
    })
})
