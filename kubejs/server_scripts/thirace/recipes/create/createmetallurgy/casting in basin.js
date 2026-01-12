
//TFC Ceramic
ServerEvents.recipes((event) => {

  const id_prefix = "kubejs:thirace/create/createmetallurgy/casting_in_basin/";
  event.remove({ type: "createmetallurgy:casting_in_basin" })

  const recipes = [
    /*{
      ingredients: [
        { item: "immersiveengineering:treated_wood_horizontal" },
        { amount: 100, fluid: "tfc:metal/brass", nbt: {} }
      ],
      mold_consumed: true,
      processingTime: 70,
      result: { item: "create:brass_casing" },
      id: `${id_prefix}brass_casing`
    }, */
    {
      ingredients: [
        { amount: 1000, fluid: "kubejs:molten_glass", nbt: {} }
      ],
      mold_consumed: true,
      processingTime: 180,
      result: { item: "minecraft:glass" },
      id: `${id_prefix}glass_foundry`
    },

,
    {
      ingredients: [
        { item: 'kubejs:crucible_mold' },
        { amount: 1000, fluid: 'kubejs:molten_corundum', nbt: {} }
      ],
      mold_consumed: true,
      processingTime: 640,
      result: { item:'tfc:crucible' },
      id: `${id_prefix}molten_corundum_crucible`
    }
  ];

  const molds_0 = [
    { block: "bismuth", type: "1" },
    { block: "bismuth_bronze", type: "1" },
    { block: "black_bronze", type: "1" },
    { block: "bronze", type: "1" },
    { block: "brass", type: "1" },
    { block: "copper", type: "1" },
    { block: "gold", type: "1" },
    { block: "nickel", type: "1" },
    { block: "rose_gold", type: "1" },
    { block: "silver", type: "1" },
    { block: "tin", type: "1" },
    { block: "zinc", type: "1" },
    { block: "sterling_silver", type: "1" },
    { block: "wrought_iron", type: "1" },
    { block: "cast_iron", type: "1" },
    { block: "steel", type: "1" },
    { block: "black_steel", type: "1" },
    { block: "blue_steel", type: "1" },
    { block: "red_steel", type: "1" },
  ]
  molds_0.forEach((metal) => {
    if (metal.type == "1")
      recipes.push({
        ingredients: [
          { tag: "minecraft:planks" },
          { amount: 100, fluid: `tfc:metal/${metal.block}`, nbt: {} }
        ],
        mold_consumed: true,
        processingTime: 60,
        result: { item: `tfc:metal/block/${metal.block}` },
        id: `${id_prefix}block/${metal.block}`
      });
  });


  recipes.forEach((recipe) => {
    recipe.type = "createmetallurgy:casting_in_basin";
    event.custom(recipe).id(recipe.id);
  });
});


