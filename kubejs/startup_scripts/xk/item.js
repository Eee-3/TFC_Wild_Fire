StartupEvents.registry('item', event => {

  event.create('rock_powder', 'tfc:mold').capacity(100)
  //岩石粉末模具
  event.create('trachyandesite_alloy', 'basic').texture('kubejs:item/create/trachyandesite_alloy')//粗安山合金
  event.create('wrought_iron_pressing_head').texture('kubejs:item/create/wrought_iron_pressing_head'); //锻铁压头
  event.create('wrought_iron_double_rod', 'basic').texture('kubejs:item/create/wrought_iron_double_rod');// 锻铁双棒
  event.create('black_steel_double_rod', 'basic').texture('kubejs:item/create/black_steel_double_rod');// 黑钢双棒
  event.create('fan_blade_blank', 'basic').texture('kubejs:item/create/fan_blade_blank');// 扇叶半成品
  event.create('fan_blade_blank_part', 'basic').texture('kubejs:item/create/fan_blade_blank_part');// 扇叶片
  event.create('whisk_stirrer_head_blank', 'basic').texture('kubejs:item/create/whisk_stirrer_head_blank');// 搅拌头半成品
  event.create('whisk_black_steel_head_blank', 'basic').texture('kubejs:item/create/whisk_black_steel_head_blank');// 黑钢搅拌头半成品
  event.create('brass_forge_door', 'basic').texture('kubejs:item/create/brass_forge_door');// 黄铜锻炉门

  event.create('material_component_wrought_iron', 'basic').texture('mkubejs:item/create/aterial_component_wrought_iron');// 锻铁零件
  event.create('material_component_steel', 'basic').texture('kubejs:item/create/material_component_steel');// 钢制零件
  event.create('material_component_black_steel', 'basic').texture('kubejs:item/create/material_component_black_steel');// 黑钢零件
  event.create('rotten_meat', 'basic').texture('kubejs:item/rotten_meat');// 注册腐烂的肉
  event.create('rotten_fish', 'basic').texture('kubejs:item/rotten_fish');// 注册腐烂的鱼
  event.create('rotten_vegetables', 'basic').texture('kubejs:item/rotten_vegetables');// 注册腐烂的蔬菜
  event.create('rotten_fruit', 'basic').texture('kubejs:item/rotten_fruit');// 注册腐烂的水果
  event.create('rot', 'basic').texture('kubejs:item/rot');// 注册腐烂物（
  event.create('burnt_food_residue', 'basic').texture('kubejs:item/burnt_food_residue');// 注册烧焦的食物残渣


  //三锭
  const ingot = [
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
  ingot.forEach(metal => {
    event.create(`triple_${metal}`, 'basic').texture(`kubejs:item/metal/triple_${metal}`);//三锭
  })
  const weapon_part = [
    "tomahawk_weapon_part",
    "throwing_knife_weapon_part",
    "dagger_weapon_part",
    "handguard_weapon_part",
    "longsword_weapon_part",
    "katana_weapon_part",
    "saber_weapon_part",
    "rapier_weapon_part",
    "battle_hammer_weapon_part",
    "warhammer_weapon_part",
    "battleaxe_weapon_part",
    "flanged_mace_weapon_part",
    "greatsword_weapon_part",
    "halberd_weapon_part",
    "glaive_weapon_part",
    "scythe_weapon_part",
    "lance_weapon_part",
    "quarterstaff_weapon_part"
  ];
  ingot.forEach(metal => {
    weapon_part.forEach(weapon_parta => {

      event.create(`${metal}_${weapon_parta}`, 'basic').texture(`kubejs:item/weapon_part/${metal}_${weapon_parta}`);
    })
  })



})

const aaaaaaaaaa = [
  "tomahawk_weapon_part",
  "throwing_knife_weapon_part",
  "dagger_weapon_part",
  "handguard_weapon_part",
  "longsword_weapon_part",
  "katana_weapon_part",
  "saber_weapon_part",
  "rapier_weapon_part",
  "battle_hammer_weapon_part",
  "warhammer_weapon_part",
  "battleaxe_weapon_part",
  "flanged_mace_weapon_part",
  "greatsword_weapon_part",
  "halberd_weapon_part",
  "glaive_weapon_part",
  "scythe_weapon_part",
  "lance_weapon_part",
  "quarterstaff_weapon_part"
];
aaaaaaaaaa.forEach(aacddeead => {
  `kubejs:${aacddeead}_${aacddeead}_weapon_part`
})