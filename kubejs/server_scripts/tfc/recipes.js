ServerEvents.recipes(e => {
  const { tfc, create, kubejs, immersiveengineering } = e.recipes;
  //安山合金合成
  tfc.casting(
    'kubejs:trachyandesite_alloy',
    'kubejs:rock_powder',
    TFC.fluidStackIngredient('tfc:metal/zinc', 100),
    1
  )
  //岩石粉末替换
  e.replaceOutput({id: "tfcorewashing:rock_powder/crushing"}, "tfcorewashing:rock_powder", "kubejs:rock_powder")
  e.replaceInput({id: "tfcorewashing:rock_powder/splashing"}, "tfcorewashing:rock_powder", "kubejs:rock_powder")
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

  


})