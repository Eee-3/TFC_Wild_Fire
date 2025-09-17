ServerEvents.recipes(e => {
  const { tfc, create, kubejs, immersiveengineering } = e.recipes;
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
  tfc.welding(
        'minecraft:brick',
        'tfc:rock/cobble/dacite',
        'minecraft:clay'
    )//风扇


 

})