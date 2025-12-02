ServerEvents.recipes(event => {
  const { tfc, create, kubejs, immersiveengineering } = event.recipes;
  //安山合金合成
  tfc.casting(
    'kubejs:trachyandesite_alloy',
    'kubejs:rock_powder',
    TFC.fluidStackIngredient('tfc:metal/zinc', 100),
    1
  )
  //岩石粉末替换

  create.milling(
    'kubejs:rock_powder',
    "tfc:rock/loose/andesite",
  ).id("tfcorewashing:rock_powder/milling")
  kubejs.shapeless(
    "kubejs:rock_powder",
    [
      "tfc:rock/loose/andesite",
      "#forge:tools/hammers"
    ]
  ).damageIngredient("#forge:tools/hammers").id("tfcorewashing:rock_powder/hammering")


  event.shapeless('2x kubejs:wood_pellet', ['3x createdieselgenerators:wood_chip', 'tfc:daub']);//木屑颗粒
  event.shapeless('2x kubejs:charcoal_pellet', ['createdieselgenerators:wood_chip', '2x tfc:powder/charcoal', 'tfc:daub']);//木炭颗粒
  event.shapeless('2x kubejs:coal_pellet', ['kubejs:coal_powder', '2x tfc:powder/charcoal', 'tfc:daub']);//煤炭颗粒
  event.shapeless('2x kubejs:coke_pellet', ['immersiveengineering:dust_coke', '2x kubejs:coal_powder', 'tfc:daub']);//焦煤颗粒
  event.shapeless('2x kubejs:high_performance_fuel_pellet', ['immersiveengineering:dust_coke', '2x tfc:powder/graphite', 'tfc:glue']);//高性能颗粒

event.shapeless('2x kubejs:charcoal_briquette', ['8x kubejs:charcoal_pellet', 'tfc:daub']);//木屑块
event.shapeless('2x kubejs:wood_briquette', ['8x kubejs:wood_pellet', 'tfc:daub']);//木料炭块（木屑颗粒原料3倍倍增，贴合炭块为颗粒压缩形态）
event.shapeless('2x kubejs:coal_briquette', ['8x kubejs:coal_pellet', 'tfc:daub']);//煤炭块（煤炭颗粒原料8倍倍增，匹配木炭块的原料数量级）
event.shapeless('2x kubejs:coke_briquette', ['8x kubejs:coke_pellet', 'tfc:daub']);//焦煤块（焦煤颗粒原料8倍倍增）
event.shapeless('2x kubejs:high_performance_fuel_briquette', ['8x kubejs:high_performance_fuel_pellet', 'tfc:glue']);//高性能燃料块（高性能颗粒原料8倍倍增，粘结剂沿用glue）




// 金属锭锤碎成碎片配方（TFC模组适配，需锤子工具）
event.shapeless('5x kubejs:copper_fragments', ['tfc:metal/ingot/copper', '#tfc:hammers']); // 铜锭 → 5个铜碎片
event.shapeless('5x kubejs:bismuth_bronze_fragments', ['tfc:metal/ingot/bismuth_bronze', '#tfc:hammers']); // 铋青铜锭 → 5个铋青铜碎片
event.shapeless('5x kubejs:black_bronze_fragments', ['tfc:metal/ingot/black_bronze', '#tfc:hammers']); // 黑青铜锭 → 5个黑青铜碎片
event.shapeless('5x kubejs:bronze_fragments', ['tfc:metal/ingot/bronze', '#tfc:hammers']); // 青铜锭 → 5个青铜碎片
event.shapeless('5x kubejs:red_steel_fragments', ['tfc:metal/ingot/red_steel', '#tfc:hammers']); // 红钢锭 → 5个红钢碎片
event.shapeless('5x kubejs:steel_fragments', ['tfc:metal/ingot/steel', '#tfc:hammers']); // 钢锭 → 5个钢碎片
event.shapeless('5x kubejs:wrought_iron_fragments', ['tfc:metal/ingot/wrought_iron', '#tfc:hammers']); // 锻铁锭 → 5个熟铁碎片
event.shapeless('5x kubejs:black_steel_fragments', ['tfc:metal/ingot/black_steel', '#tfc:hammers']); // 黑钢锭 → 5个黑钢碎片
event.shapeless('5x kubejs:blue_steel_fragments', ['tfc:metal/ingot/blue_steel', '#tfc:hammers']); // 蓝钢锭 → 5个蓝钢碎片
event.shapeless('5x kubejs:silver_fragments', ['tfc:metal/ingot/silver', '#tfc:hammers']); // 银锭 → 5个银碎片
event.shapeless('5x kubejs:gold_fragments', ['tfc:metal/ingot/gold', '#tfc:hammers']); // 金锭 → 5个金碎片
})