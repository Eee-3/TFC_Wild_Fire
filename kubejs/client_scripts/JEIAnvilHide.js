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
    { item: 'tfc:stone/knife/igneous_extrusive', material: 'minecraft:cobblestone' },
    { item: 'tfc:stone/hoe/igneous_extrusive', material: 'minecraft:cobblestone' },
    { item: 'tfc:stone/hammer/igneous_extrusive', material: 'minecraft:cobblestone' },
    { item: 'tfc:stone/axe/igneous_extrusive', material: 'minecraft:cobblestone' },
    { item: 'tfc:stone/shovel/igneous_extrusive', material: 'minecraft:cobblestone' },


    // 铁制工具
    { item: 'tfc:metal/sword/wrought_iron', material: 'minecraft:iron_ingot' },
    { item: 'tfc:metal/shovel/wrought_iron', material: 'minecraft:iron_ingot' },
    { item: 'tfc:metal/pickaxe/wrought_iron', material: 'minecraft:iron_ingot' },
    { item: 'tfc:metal/axe/wrought_iron', material: 'minecraft:iron_ingot' },
    { item: 'tfc:metal/hoe/wrought_iron', material: 'minecraft:iron_ingot' },
    
    { item: 'tfc:metal/sword/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/shovel/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/pickaxe/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/axe/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/hoe/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/helmet/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/chestplate/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/greaves/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'tfc:metal/boots/wrought_iron', material: 'tfc:metal/ingot/wrought_iron' },
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
    
    { item: 'tfc:metal/sword/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/shovel/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/pickaxe/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/axe/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/hoe/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/helmet/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/chestplate/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/greaves/copper', material: 'tfc:metal/ingot/gold' },
    { item: 'tfc:metal/boots/copper', material: 'tfc:metal/ingot/gold' },
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
    
    { item: 'tfc:metal/sword/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/shovel/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/pickaxe/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/axe/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/hoe/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/helmet/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/chestplate/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/greaves/steel', material: 'tfc:gem/diamond' },
    { item: 'tfc:metal/boots/steel', material: 'tfc:gem/diamond' },

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
    { item: 'minecraft:chainmail_boots', material: 'minecraft:iron_ingot' },
    
    { item: 'minecraft:chainmail_helmet', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'minecraft:chainmail_chestplate', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'minecraft:chainmail_leggings', material: 'tfc:metal/ingot/wrought_iron' },
    { item: 'minecraft:chainmail_boots', material: 'tfc:metal/ingot/wrought_iron' }
  ]
  repairRecipesToHide.forEach(recipe => {
    HideAnvilRecipe(recipe.item, recipe.material)
  })
})
