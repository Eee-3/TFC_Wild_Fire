const JEI_RecipeTypes = Java.loadClass('mezz.jei.api.constants.RecipeTypes')

function HideAnvilRecipe(leftitem, rightitem) {
  global.jeiRuntime.getRecipeManager().createRecipeLookup(JEI_RecipeTypes.ANVIL).get().forEach(i => {
    if (i.getLeftInputs()[0] == leftitem &&
      i.getRightInputs()[0] == rightitem &&
      i.getOutputs()[0] == leftitem) {
      global.jeiRuntime.recipeManager.hideRecipes(JEI_RecipeTypes.ANVIL, [i])
    }
  })
}

JEIEvents.removeRecipes(event => {
  const repairRecipesToHide = [
    // 木制工具
    { item: 'minecraft:wooden_sword', material: 'minecraft:oak_planks' },
    { item: 'minecraft:wooden_shovel', material: 'minecraft:oak_planks' },
    { item: 'minecraft:wooden_pickaxe', material: 'minecraft:oak_planks' },
    { item: 'minecraft:wooden_axe', material: 'minecraft:oak_planks' },
    { item: 'minecraft:wooden_hoe', material: 'minecraft:oak_planks' },

    // 石制工具
    { item: 'minecraft:stone_sword', material: 'minecraft:cobblestone' },
    { item: 'minecraft:stone_shovel', material: 'minecraft:cobblestone' },
    { item: 'minecraft:stone_pickaxe', material: 'minecraft:cobblestone' },
    { item: 'minecraft:stone_axe', material: 'minecraft:cobblestone' },
    { item: 'minecraft:stone_hoe', material: 'minecraft:cobblestone' },

    // 铁制工具
    { item: 'minecraft:iron_sword', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:iron_shovel', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:iron_pickaxe', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:iron_axe', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:iron_hoe', material: 'minecraft:iron_ingot' },
    // 铁制盔甲
    { item: 'minecraft:iron_helmet', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:iron_chestplate', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:iron_leggings', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:iron_boots', material: 'minecraft:iron_ingot' },

    // 金制工具
    { item: 'minecraft:golden_sword', material: 'minecraft:gold_ingot' },
    { item: 'minecraft:golden_shovel', material: 'minecraft:gold_ingot' },
    { item: 'minecraft:golden_pickaxe', material: 'minecraft:gold_ingot' },
    { item: 'minecraft:golden_axe', material: 'minecraft:gold_ingot' },
    { item: 'minecraft:golden_hoe', material: 'minecraft:gold_ingot' },
    // 金制盔甲
    { item: 'minecraft:golden_helmet', material: 'minecraft:gold_ingot' },
    { item: 'minecraft:golden_chestplate', material: 'minecraft:gold_ingot' },
    { item: 'minecraft:golden_leggings', material: 'minecraft:gold_ingot' },
    { item: 'minecraft:golden_boots', material: 'minecraft:gold_ingot' },

    // 钻石工具
    { item: 'minecraft:diamond_sword', material: 'minecraft:diamond' },
    { item: 'minecraft:diamond_shovel', material: 'minecraft:diamond' },
    { item: 'minecraft:diamond_pickaxe', material: 'minecraft:diamond' },
    { item: 'minecraft:diamond_axe', material: 'minecraft:diamond' },
    { item: 'minecraft:diamond_hoe', material: 'minecraft:diamond' },
    // 钻石盔甲
    { item: 'minecraft:diamond_helmet', material: 'minecraft:diamond' },
    { item: 'minecraft:diamond_chestplate', material: 'minecraft:diamond' },
    { item: 'minecraft:diamond_leggings', material: 'minecraft:diamond' },
    { item: 'minecraft:diamond_boots', material: 'minecraft:diamond' },

    // 下界合金工具
    { item: 'minecraft:netherite_sword', material: 'minecraft:netherite_ingot' },
    { item: 'minecraft:netherite_shovel', material: 'minecraft:netherite_ingot' },
    { item: 'minecraft:netherite_pickaxe', material: 'minecraft:netherite_ingot' },
    { item: 'minecraft:netherite_axe', material: 'minecraft:netherite_ingot' },
    { item: 'minecraft:netherite_hoe', material: 'minecraft:netherite_ingot' },
    // 下界合金盔甲
    { item: 'minecraft:netherite_helmet', material: 'minecraft:netherite_ingot' },
    { item: 'minecraft:netherite_chestplate', material: 'minecraft:netherite_ingot' },
    { item: 'minecraft:netherite_leggings', material: 'minecraft:netherite_ingot' },
    { item: 'minecraft:netherite_boots', material: 'minecraft:netherite_ingot' },
    
    //皮革盔甲
    { item: 'minecraft:leather_helmet', material: 'minecraft:leather' },
    { item: 'minecraft:leather_chestplate', material: 'minecraft:leather' },
    { item: 'minecraft:leather_leggings', material: 'minecraft:leather' },
    { item: 'minecraft:leather_boots', material: 'minecraft:leather' },

    //锁链盔甲
    { item: 'minecraft:chainmail_helmet', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:chainmail_chestplate', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:chainmail_leggings', material: 'minecraft:iron_ingot' },
    { item: 'minecraft:chainmail_boots', material: 'minecraft:iron_ingot' }
  ]
  repairRecipesToHide.forEach(recipe => {
    HideAnvilRecipe(recipe.item, recipe.material)
  })
})
