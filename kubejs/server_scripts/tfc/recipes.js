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

event.shapeless('kubejs:charcoal_briquette', ['8x kubejs:wood_pellet', 'tfc:daub']);//木屑块
event.shapeless('kubejs:wood_briquette', ['8x kubejs:charcoal_pellet', 'tfc:daub']);//木料炭块（木屑颗粒原料3倍倍增，贴合炭块为颗粒压缩形态）
event.shapeless('kubejs:coal_briquette', ['8x kubejs:coal_pellet', 'tfc:daub']);//煤炭块（煤炭颗粒原料8倍倍增，匹配木炭块的原料数量级）
event.shapeless('kubejs:coke_briquette', ['8x kubejs:coke_pellet', 'tfc:daub']);//焦煤块（焦煤颗粒原料8倍倍增）
event.shapeless('kubejs:high_performance_fuel_briquette', ['8x kubejs:high_performance_fuel_pellet', 'tfc:glue']);//高性能燃料块（高性能颗粒原料8倍倍增，粘结剂沿用glue）

})