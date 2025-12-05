TFCEvents.data(event => {
  //敲制
  event.knappingType(
    'tfc:ore/diamond', 2, 1, 'minecraft:block.copper.step', false, false, true, 'tfc:ore/diamond', 'kubejs:diamond'
  )//钻石
  event.knappingType(
    'kubejs:obsidian_shards', 2, 1, 'minecraft:block.copper.step', false, false, true, "minecraft:obsidian", 'kubejs:obsidian'
  )//黑曜石
  event.knappingType(
    'minecraft:flint', 2, 1, 'minecraft:block.copper.step', false, false, true, 'minecraft:flint', 'kubejs:flint'
  )//燧石
  event.knappingType(
    'minecraft:bone', 3, 3, 'minecraft:block.copper.step', false, false, true, 'minecraft:bone', 'kubejs:bone'
  )//骨头


})
ServerEvents.tags('minecraft:item', event => {//可以敲的标签

  event.add('tfc:any_knapping', 'tfc:ore/diamond');//钻石
  event.add('tfc:any_knapping', 'kubejs:obsidian_shards');//黑曜石
  event.add('tfc:any_knapping', 'minecraft:flint');//燧石
  event.add('tfc:any_knapping', 'minecraft:bone');//骨头

})
ServerEvents.recipes(event => {
  event.recipes.tfc.knapping(
    'kubejs:bone_skinningknife_blade',
    'kubejs:bone',
    [
      'xxx',
      'xxx',
      'xxx',
      'xxx',
      '  x'
    ]
  ).outsideSlotRequired(false)
  event.recipes.tfc.knapping(
    'kubejs:bone_skinningknife_blade',
    'kubejs:bone',
    [
      'xxx',
      'xxx',
      'xxx',
      'xxx',
      'x  '
    ]
  ).outsideSlotRequired(false)
  event.recipes.tfc.knapping(
    'kubejs:bone_butchersknife_blade',
    'kubejs:bone',
    [
      'x ',
      'xx',
      'xx',
      'xx',
      'x '
    ]
  ).outsideSlotRequired(false)
  event.recipes.tfc.knapping(
    'kubejs:bone_butchersknife_blade',
    'kubejs:bone',
    [
      ' x',
      'xx',
      'xx',
      'xx',
      ' x'
    ]
  ).outsideSlotRequired(false)
  event.recipes.tfc.knapping(
    'kubejs:bone_fish_hook',
    'kubejs:bone',
    [
      '  x',
      'x x',
      'xxx'
    ]
  ).outsideSlotRequired(false)
  event.recipes.tfc.knapping(
    'kubejs:bone_fish_hook',
    'kubejs:bone',
    [
      'x  ',
      'x x',
      'xxx'
    ]
  ).outsideSlotRequired(false)















  const toolPartConfigs = [
    // 1. 斧头头部（2种对称图案，单产出）
    {
      partName: "axe_head", // 部件名称（拼接材质后生成最终物品ID）
      outputCount: 1,       // 产出数量
      patterns: [           // 支持的敲制图案（两种对称样式）
        [" X   ", "XXXX ", "XXXXX", "XXXX ", " X   "],
        ["   X ", " XXXX", "XXXXX", " XXXX", "   X "]
      ]
    },
    // 2. 标枪头部（2种对称图案，单产出）
    {
      partName: "javelin_head",
      outputCount: 1,
      patterns: [
        ["XXX  ", "XXXX ", "XXXXX", " XXX ", "  X  "],
        ["  XXX", " XXXX", "XXXXX", " XXX ", "  X  "]
      ]
    },
    // 3. 锤子头部（1种图案，单产出）
    {
      partName: "hammer_head",
      outputCount: 1,
      patterns: [
        ["XXXXX", "XXXXX", "  X  "]
      ]
    },
    // 4. 锄头头部（4种组合图案+2种简化图案，区分多产出/单产出）
    {
      partName: "hoe_head",
      outputCount: 2, // 完整图案（5行）产出2个
      patterns: [
        ["XXXXX", "XX   ", "     ", "XXXXX", "XX   "],
        ["XXXXX", "   XX", "     ", "XXXXX", "   XX"],
        ["XXXXX", "XX   ", "     ", "XXXXX", "   XX"],
        ["XXXXX", "   XX", "     ", "XXXXX", "XX   "]
      ],
      // 简化图案（2行）单独配置（产出1个）
      simplePatterns: [
        ["XXXXX", "XX   "],
        ["XXXXX", "   XX"]
      ],
      simpleOutputCount: 1
    },
    // 5. 铲子头部（1种图案，单产出）
    {
      partName: "shovel_head",
      outputCount: 1,
      patterns: [
        ["XXX", "XXX", "XXX", "XXX", " X "]
      ]
    },
    // 6. 刀身（3种对称图案+2种简化图案，区分多产出/单产出）
    {
      partName: "knife_blade",
      outputCount: 2, // 完整图案（5行）产出2个
      patterns: [
        [
          "X  X ",
          "XX XX",
          "XX XX",
          "XX XX",
          "XX XX"],
        [
          " X  X",
          "XX XX",
          "XX XX",
          "XX XX",
          "XX XX"],
        [
          "X   X",
          "XX XX",
          "XX XX",
          "XX XX",
          "XX XX"],
        [
          " X X ",
          "XX XX",
          "XX XX",
          "XX XX",
          "XX XX"]
      ],
      // 简化图案（5行短版）单独配置（产出1个）
      simplePatterns: [
        ["X ", "XX", "XX", "XX", "XX"],
        [" X", "XX", "XX", "XX", "XX"]
      ],
      simpleOutputCount: 1
    }
  ];
  //钻石
  const diamondConfig = {
    material: "diamond",          // 材质名称（用于拼接物品ID和敲制类型）
    ingredient: Item.of("tfc:ore/diamond") // 原料：TFC钻石矿石
  };

  toolPartConfigs.forEach(part => {
    const baseResult = `kubejs:${diamondConfig.material}_${part.partName}`;

    // 注册完整图案配方（多产出/单产出）
    part.patterns.forEach(pattern => {
      const result = part.outputCount > 1 ? `${part.outputCount}x ${baseResult}` : baseResult;
      event.recipes.tfc.knapping(result, `kubejs:${diamondConfig.material}`, pattern)
        .ingredient(diamondConfig.ingredient)
        .outsideSlotRequired(false);
    });

    // 若有简化图案，注册简化配方（单产出）
    if (part.simplePatterns && part.simpleOutputCount) {
      part.simplePatterns.forEach(simplePattern => {
        event.recipes.tfc.knapping(baseResult, `kubejs:${diamondConfig.material}`, simplePattern)
          .ingredient(diamondConfig.ingredient)
          .outsideSlotRequired(false);
      });
    }
  });

  //黑曜石
  const obsidianConfig = {
    material: "obsidian",          // 材质名称（与钻石配置对称）
    ingredient: Item.of("kubejs:obsidian_shards") // 原料：黑曜石碎片
  };

  // 复用工具部件配置，仅替换材质和原料（保证配方逻辑完全一致）
  toolPartConfigs.forEach(part => {
    const baseResult = `kubejs:${obsidianConfig.material}_${part.partName}`;

    // 注册完整图案配方（与钻石相同的产出数量）
    part.patterns.forEach(pattern => {
      const result = part.outputCount > 1 ? `${part.outputCount}x ${baseResult}` : baseResult;
      event.recipes.tfc.knapping(result, `kubejs:${obsidianConfig.material}`, pattern)
        .ingredient(obsidianConfig.ingredient)
        .outsideSlotRequired(false);
    });

    // 注册简化图案配方（与钻石对称）
    if (part.simplePatterns && part.simpleOutputCount) {
      part.simplePatterns.forEach(simplePattern => {
        event.recipes.tfc.knapping(baseResult, `kubejs:${obsidianConfig.material}`, simplePattern)
          .ingredient(obsidianConfig.ingredient)
          .outsideSlotRequired(false);
      });
    }
  });
  //燧石
  const flintConfig = {
    material: "flint",            // 燧石材质名称（用于拼接物品ID）
    ingredient: Item.of("minecraft:flint") // 原料：原版燧石
  };

  // 复用工具部件配置，仅替换为燧石的材质和原料
  toolPartConfigs.forEach(part => {
    const baseResult = `kubejs:${flintConfig.material}_${part.partName}`;

    // 注册完整图案配方（产出数量与钻石/黑曜石一致）
    part.patterns.forEach(pattern => {
      const result = part.outputCount > 1 ? `${part.outputCount}x ${baseResult}` : baseResult;
      event.recipes.tfc.knapping(result, `kubejs:${flintConfig.material}`, pattern)
        .ingredient(flintConfig.ingredient)
        .outsideSlotRequired(false);
    });

    // 注册简化图案配方（与其他材质对称）
    if (part.simplePatterns && part.simpleOutputCount) {
      part.simplePatterns.forEach(simplePattern => {
        event.recipes.tfc.knapping(baseResult, `kubejs:${flintConfig.material}`, simplePattern)
          .ingredient(flintConfig.ingredient)
          .outsideSlotRequired(false);
      });
    }
  })
})