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
  tfc.pot(

    [
      'kubejs:rubber_hot_water_bag'
    ],
    // 输入流体：100mb 水
    Fluid.of('minecraft:water', 100),
    // 熬制温度：
    200,
    // 熬制时间：
    200
  ).itemOutput(TFC.itemStackProvider.of('kubejs:rubber_hot_water_bag').addHeat(500))// 输出物品：橡胶热水袋
  tfc.pot(

    [
      'kubejs:leather_hot_water_bag'
    ],
    // 输入流体：100mb 水
    Fluid.of('minecraft:water', 100),
    // 熬制温度：
    200,
    // 熬制时间：
    200
  ).itemOutput(TFC.itemStackProvider.of('kubejs:leather_hot_water_bag').addHeat(500))// 输出物品：皮革热水袋
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
  event.shapeless('2x kubejs:charcoal_briquette', ['8x kubejs:charcoal_pellet', 'tfc:daub']);//木屑块
  event.shapeless('2x kubejs:wood_briquette', ['8x kubejs:wood_pellet', 'tfc:daub']);//木料炭块（木屑颗粒原料3倍倍增，贴合炭块为颗粒压缩形态）
  event.shapeless('2x kubejs:coal_briquette', ['8x kubejs:coal_pellet', 'tfc:daub']);//煤炭块（煤炭颗粒原料8倍倍增，匹配木炭块的原料数量级）

  event.shapeless('2x kubejs:wood_pellet', ['3x createdieselgenerators:wood_chip', '#kubejs:glue']);//木屑颗粒
  event.shapeless('2x kubejs:charcoal_pellet', ['createdieselgenerators:wood_chip', '2x tfc:powder/charcoal', '#kubejs:glue']);//木炭颗粒
  event.shapeless('2x kubejs:coal_pellet', ['kubejs:coal_powder', '2x tfc:powder/charcoal', '#kubejs:glue']);//煤炭颗粒
  event.shapeless('2x kubejs:coke_pellet', ['immersiveengineering:dust_coke', '2x kubejs:coal_powder', '#kubejs:glue']);//焦煤颗粒
  event.shapeless('2x kubejs:high_performance_fuel_pellet', ['tfc:powder/graphite', '2x immersiveengineering:dust_coke', '#kubejs:glue']);//高性能颗粒

  event.shapeless('2x kubejs:charcoal_briquette', ['8x kubejs:charcoal_pellet', '#kubejs:glue']);//木屑块
  event.shapeless('2x kubejs:wood_briquette', ['8x kubejs:wood_pellet', '#kubejs:glue']);//木料炭块（木屑颗粒原料3倍倍增，贴合炭块为颗粒压缩形态）
  event.shapeless('2x kubejs:coal_briquette', ['8x kubejs:coal_pellet', '#kubejs:glue']);//煤炭块（煤炭颗粒原料8倍倍增，匹配木炭块的原料数量级）
  event.shapeless('2x kubejs:coke_briquette', ['8x kubejs:coke_pellet', '#kubejs:glue']);//焦煤块（焦煤颗粒原料8倍倍增）
  event.shapeless('2x kubejs:high_performance_fuel_briquette', ['8x kubejs:high_performance_fuel_pellet', '#kubejs:glue']);//高性能燃料块（高性能颗粒原料8倍倍增，粘结剂沿用glue）



  event.shapeless('2x kubejs:wood_sustained_heat_pellet', ['7x kubejs:charcoal_pellet', '2x #kubejs:glue']);//木屑保温燃料块
  event.shapeless('2x kubejs:coal_sustained_heat_pellet', ['7x kubejs:coal_pellet', '2x #kubejs:glue']);//煤炭保温燃料块
  event.shapeless('2x kubejs:high_performance_fuel_sustained_heat_pellet', ['7x kubejs:high_performance_fuel_pellet', '2x #kubejs:glue']);//高性能保温燃料块

  event.shapeless('2x kubejs:wood_sustained_heat_pellet', ['7x kubejs:charcoal_pellet', '2x tfc:daub']);//木屑保温燃料块
  event.shapeless('2x kubejs:coal_sustained_heat_pellet', ['7x kubejs:coal_pellet', '2x tfc:daub']);//煤炭保温燃料块
  //event.shapeless('2x kubejs:high_performance_fuel_sustained_heat_pellet', ['7x kubejs:high_performance_fuel_pellet', '2x tfc:daub']);//高性能保温燃料块

  event.shaped('minecraft:bucket',
    ['cbc',
      ' c '],
    {
      c: TFC.ingredient.heatable('artisanal:metal/tinplate', 1200, null),
      b: '#tfc:hammers'
    }).damageIngredient({ tag: '#tfc:hammers' }, 10)//水桶
  kubejs.shapeless(
    "2x kubejs:wood_briquette",
    [
      "8x kubejs:wood_pellet",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/wood_briquette_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:charcoal_briquette",
    [
      "8x kubejs:charcoal_pellet",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/charcoal_briquette_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:coal_briquette",
    [
      "8x kubejs:coal_pellet",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/coal_briquette_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:coke_briquette",
    [
      "8x kubejs:coke_pellet",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/coke_briquette_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:high_performance_fuel_briquette",
    [
      "8x kubejs:high_performance_fuel_pellet",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/high_performance_fuel_briquette_from_super_glue")


  kubejs.shapeless(
    "2x kubejs:wood_pellet",
    [
      "3x createdieselgenerators:wood_chip",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/wood_pellet_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:charcoal_pellet",
    [
      "createdieselgenerators:wood_chip",
      "2x tfc:powder/charcoal",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/charcoal_pellet_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:coal_pellet",
    [
      "kubejs:coal_powder",
      "2x tfc:powder/charcoal",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/coal_pellet_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:coke_pellet",
    [
      "immersiveengineering:dust_coke",
      "2x tfc:powder/charcoal",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/coke_pellet_from_super_glue")
  kubejs.shapeless(
    "2x kubejs:high_performance_fuel_pellet",
    [
      "tfc:powder/graphite",
      "2x immersiveengineering:dust_coke",
      "create:super_glue"
    ]
  ).damageIngredient("create:super_glue").id("kubejs:crafting/high_performance_fuel_from_super_glue")




  /*
    // 金属锭锤碎成碎片配方（TFC模组适配，需锤子工具）
    event.shapeless('5x kubejs:copper_fragments', ['tfc:metal/ingot/copper', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 铜锭 → 5个铜碎片
    event.shapeless('5x kubejs:bismuth_bronze_fragments', ['tfc:metal/ingot/bismuth_bronze', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 铋青铜锭 → 5个铋青铜碎片
    event.shapeless('5x kubejs:black_bronze_fragments', ['tfc:metal/ingot/black_bronze', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 黑青铜锭 → 5个黑青铜碎片
    event.shapeless('5x kubejs:bronze_fragments', ['tfc:metal/ingot/bronze', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 青铜锭 → 5个青铜碎片
    event.shapeless('5x kubejs:red_steel_fragments', ['tfc:metal/ingot/red_steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 红钢锭 → 5个红钢碎片
    event.shapeless('5x kubejs:steel_fragments', ['tfc:metal/ingot/steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 钢锭 → 5个钢碎片
    event.shapeless('5x kubejs:wrought_iron_fragments', ['tfc:metal/ingot/wrought_iron', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 锻铁锭 → 5个熟铁碎片
    event.shapeless('5x kubejs:black_steel_fragments', ['tfc:metal/ingot/black_steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 黑钢锭 → 5个黑钢碎片
    event.shapeless('5x kubejs:blue_steel_fragments', ['tfc:metal/ingot/blue_steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 蓝钢锭 → 5个蓝钢碎片
    //event.shapeless('5x kubejs:silver_fragments', ['tfc:metal/ingot/silver', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 银锭 → 5个银碎片
    //event.shapeless('5x kubejs:gold_fragments', ['tfc:metal/ingot/gold', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 金锭 → 5个金碎片
    */

  event.shapeless('3x kubejs:alkalized_bauxite_raw_material', ['tfc:powder/salt', 'tfc:powder/flux', 'tfc_ie_addon:powder/bauxite']); //碱化铝土生料
  event.shapeless('3x kubejs:alkalized_bauxite_raw_material', ['tfc:powder/salt', 'tfc:powder/flux', 'kubejs:item/ore/purified_dust/bauxite']); //碱化铝土生料
  event.shapeless('4x kubejs:alkalized_bauxite_raw_material', ['tfc:powder/salt', 'tfc:powder/flux', 'kubejs:item/ore/refined_dust/bauxite']); //碱化铝土生料

  event.shapeless('kubejs:aluminum_chromium_mix_powder', ['kubejs:alumina_powder', 'kubejs:item/ore/refined_dust/chromite']); //铬铝混合粉

  event.shapeless('kubejs:unfired_corundum_brick', ['kubejs:aluminum_chromium_mix_powder', 'minecraft:clay_ball', 'tfc:ceramic/ingot_mold']).keepIngredient({ item: 'tfc:ceramic/ingot_mold' }); //未完成的刚玉砖

  event.shaped('immersiveengineering:sawblade',
    [
      ' a ',
      'aba',
      ' a '],
    {
      a: TFC.ingredient.heatable('tfc:metal/rod/wrought_iron', 1200, null),
      b: TFC.ingredient.heatable('tfc:metal/sheet/wrought_iron', 1200, null),
    })//锯子

  event.shaped('1x kubejs:corundum_brick_block',
    [
      'aba',
      'bbb',
      'aba'],
    {
      a: 'kubejs:corundum_brick',
      b: 'tfc:mortar',
    })//刚玉砖块

  event.shaped('2x create:belt_connector',
    [
      'aba',
    ],
    {
      a: 'minecraft:leather',
      b: 'tfc:wool_yarn',
    })//传送带
event.shaped('legendarysurvivaloverhaul:sewing_table',
    [
      'abc',
      'bbb'
    ],
    {
      a: '#tfc:sewing_needles',
      b: '#tfc:lumber',
      c: 'tfc:brass_mechanisms',
    })//缝纫台
    event.shaped('sns:frame_pack',
    [
      'aaa',
      'bcb',
      'bcb'
    ],
    {
      a: 'tfc:metal/rod/bronze',
      b: 'farmersdelight:rope',
      c: '#forge:leather',
    })//背包




  const rockinout = [

    { in: "granite", out: "granite" },
    { in: "diorite", out: "diorite" },
    { in: "gabbro", out: "tuff" },
    { in: "rhyolite", out: "dripstone" },
    { in: "basalt", out: "deepslate" },
    { in: "dacite", out: "limestone" }
  ];
  rockinout.forEach(rock => {

    event.shaped(`design_decor:${rock.out}_millstone`, [
      'tfc:handstone', 'kubejs:andesite_chassis', `tfc:rock/smooth/${rock.in}`
    ]);//石磨
    create.mechanical_crafting(`design_decor:${rock.out}_crushing_wheel`, [
      " aba ",
      "acdca",
      "bdedb",
      "acdca",
      " aba ",
    ], {
      a: `tfc:rock/smooth/${rock.in}`,
      b: 'tfc:metal/sheet/wrought_iron',
      c: 'vintageimprovements:andesite_sheet',
      d: '#minecraft:logs',
      e: 'design_decor:industrial_gear_large',
    }) // 粉碎轮
  })

  event.shaped('create:millstone', [
    'tfc:handstone', 'kubejs:andesite_chassis', 'tfc:rock/smooth/andesite'
  ]);//石磨
  create.mechanical_crafting('create:crushing_wheel', [
    " aba ",
    "acdca",
    "bdedb",
    "acdca",
    " aba ",
  ], {
    a: 'tfc:rock/smooth/andesite',
    b: 'tfc:metal/sheet/wrought_iron',
    c: 'vintageimprovements:andesite_sheet',
    d: '#minecraft:logs',
    e: 'design_decor:industrial_gear_large',
  }) // 粉碎轮
  create.mechanical_crafting('createdieselgenerators:pumpjack_bearing', [
    " a a ",
    "ebcbe",
    " ada ",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/double_sheet/zinc',
    c: 'create:mechanical_bearing',
    d: 'create:percision_mechanism',
    e: 'create:shaft',
  }) // 抽油机轴承
  create.mechanical_crafting('createdieselgenerators:pumpjack_head', [
    " aba",
    "cd  ",
    " aba",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/sheet/zinc',
    c: 'create:andesite_alloy_block',
    d: 'tfc:metal/rod/steel',
  }) // 抽油机驴头
  event.shaped('createdieselgenerators:diesel_engine', [
    "aba",
    "aca",
    "ded"
  ], {
    a: 'createdieselgenerators:engine_piston',
    b: 'vintageimprovements:andesite_sheet',
    c: 'minecraft:flint',
    d: 'tfc:metal/sheet/cast_iron',
    e: 'design_decor:gas_tank'
  }) // 小型柴油引擎

  create.mechanical_crafting('createdieselgenerators:large_diesel_engine', [
    " b ",
    "aca",
    "dbd",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/block/wrought_iron_slab',
    c: 'createdieselgenerators:diesel_engine',
    d: 'tfc:metal/sheet/cast_iron',
  }) // 模块柴油引擎
  create.mechanical_crafting('createdieselgenerators:huge_diesel_engine', [
    "aba c",
    "defgh",
    "aba c",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/sheet/wrought_iron',
    c: 'create:andesite_alloy_block',
    d: 'create:fluid_pipe',
    e: 'tfc:metal/block/steel',
    f: 'tfc:metal/rod/wrought_iron',
    g: 'tfc:metal/sheet/bronze',
    h: 'create:shaft',
  }) // 大型柴油引擎
  create.mechanical_crafting('moreburners:electric_burner', [
    " aaa ",
    "cbbbc",
    " ede ",
    " gfg ",
  ], {
    a: 'firmalife:reinforced_glass',
    b: 'moreburners:copper_coil',
    c: 'tfc:metal/rod/steel',
    d: 'immersiveengineering:furnace_heater',
    e: 'tfc:metal/double_sheet/wrought_iron',
    f: 'create:empty_blaze_burner',
    g: 'tfc:metal/sheet/wrought_iron',
  }) // 电磁炉
  create.mechanical_crafting('createdieselgenerators:pumpjack_crank', [
    "a a",
    "dbd",
    "cec",
    "fbf",
    "cec",
  ], {
    a: 'create:metal_girder',
    b: 'create:shaft',
    c: 'vintageimprovements:andesite_sheet',
    d: 'vintageimprovements:iron_spring',
    e: 'tfc:metal/double_sheet/zinc',
    f: 'tfc:metal/sheet/cast_iron',
  }) // 抽油机曲柄
  create.mechanical_crafting('createdieselgenerators:engine_piston', [
    "a",
    "d",
    "b",
    "c",
  ], {
    a: 'tfc:metal/sheet/wrought_iron',
    b: 'tfc:metal/rod/wrought_iron',
    c: 'create:zinc_nugget',
    d: 'tfc:brass_mechanisms',
  }) // 引擎活塞
  event.shaped('createdieselgenerators:engine_silencer',
    [
      'ca ',
      'aca',
      ' ab'
    ],
    {
      a: 'vintageimprovements:andesite_sheet',
      b: 'tfc:metal/rod/wrought_iron',
      c: '#loot:clean_cloth'
    }
  ) //引擎消嘤器
  create.mechanical_crafting('createdieselgenerators:engine_turbocharger', [
    "cba",
    "bdb",
    " b ",
  ], {
    a: 'create:fluid_pipe',
    b: 'vintageimprovements:andesite_sheet',
    c: 'tfc:metal/sheet/wrought_iron',
    d: 'create:propeller',
  }) // 引擎涡轮增压器
  event.shaped('createdieselgenerators:bulk_fermenter',
    [
      'dbd',
      'a a',
      'cbc'
    ],
    {
      a: 'tfc:metal/sheet/wrought_iron',
      b: 'vintageimprovements:andesite_sheet',
      c: 'tfc:metal/sheet/cast_iron',
      d: 'create:andesite_alloy'
    }
  ) //大型发酵储罐
  event.shaped('createdieselgenerators:basin_lid',
    [
      ' a ',
      'cbc'
    ],
    {
      a: 'minecraft:clock',
      b: 'vintageimprovements:andesite_sheet',
      c: 'tfc:metal/sheet/cast_iron'
    }
  ) //工作盆盖板
  event.shaped('createdieselgenerators:oil_barrel',
    [
      'b',
      'c',
      'b'
    ],
    {
      b: 'tfc:metal/sheet/wrought_iron',
      c: '#tfc:barrels'
    }
  ) //燃油储罐
  event.shaped('design_decor:gas_tank',
    [
      'b',
      'c'
    ],
    {
      b: 'tfc:metal/sheet/wrought_iron',
      c: '#tfc:barrels'
    }
  ) //小型铁流体储罐
  event.shaped('kubejs:peel',
    [
      'b',
      'c'
    ],
    {
      c: '#forge:rods/wooden',
      b: '#tfc:lumber'
    }
  ) //小型铁流体储罐

  function farmersdelight_cutting(outputitem, inputitem, num, tool, id) {
    let processedTool = tool; // 先定义变量接收原始tool值
    if (processedTool.startsWith('#')) { // 判断是否以#开头
      processedTool = processedTool.substring(1); // 截取从第2个字符开始的字符串，移除#
    }

    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": inputitem }],
      "result": [{ "count": num, "item": outputitem }],
      "tool": { "tag": processedTool } // 使用处理后的tool参数
    }).id(id);

    //console.log(`调用成功`);
  }



  farmersdelight_cutting(`kubejs:copper_fragments`, 'tfc:metal/ingot/copper', 5, 'tfc:hammers', `kubejs:cutting_reciped_copper_fragments`)// 铜锭 → 5个铜碎片
  farmersdelight_cutting(`kubejs:bismuth_bronze_fragments`, 'tfc:metal/ingot/bismuth_bronze', 5, 'tfc:hammers', `kubejs:cutting_reciped_bismuth_bronze_fragments`)// 铋青铜锭 → 5个铋青铜碎片
  farmersdelight_cutting(`kubejs:black_bronze_fragments`, 'tfc:metal/ingot/black_bronze', 5, 'tfc:hammers', `kubejs:cutting_reciped_black_bronze_fragments`)// 黑青铜锭 → 5个黑青铜碎片
  farmersdelight_cutting(`kubejs:bronze_fragments`, 'tfc:metal/ingot/bronze', 5, 'tfc:hammers', `kubejs:cutting_reciped_bronze_fragments`)// 青铜锭 → 5个青铜碎片
  farmersdelight_cutting(`kubejs:red_steel_fragments`, 'tfc:metal/ingot/red_steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_red_steel_fragments`)// 红钢锭 →
  farmersdelight_cutting(`kubejs:steel_fragments`, 'tfc:metal/ingot/steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_steel_fragments`)// 钢锭 → 5个钢碎片
  farmersdelight_cutting(`kubejs:wrought_iron_fragments`, 'tfc:metal/ingot/wrought_iron', 5, 'tfc:hammers', `kubejs:cutting_reciped_wrought_iron_fragments`)// 锻铁锭 → 5个熟铁碎片
  farmersdelight_cutting(`kubejs:black_steel_fragments`, 'tfc:metal/ingot/black_steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_black_steel_fragments`)// 黑钢锭 → 5个黑钢碎片
  farmersdelight_cutting(`kubejs:blue_steel_fragments`, 'tfc:metal/ingot/blue_steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_blue_steel_fragments`)// 蓝钢锭 → 5个蓝钢碎片

  // 皮毛/皮革 JS 数组
  const furAndLeatherItems = [
    'crocodile_leather',
    'lion_fur',
    'tiger_fur',
    'panther_fur',
    'sabertooth_fur',
    'cougar_fur',
    'direwolf_fur',
    'polar_bear_fur',
    'caribou_fur',
    'grizzly_bear_fur',
    'black_bear_fur',
    //'tfc:large_sheepskin_hide'
  ];
  for (var i = 0; i < furAndLeatherItems.length; i++) {
    var ore = furAndLeatherItems[i];
    // console.log("开始调用");
    farmersdelight_cutting('tfc:large_raw_hide', `textile:${ore}`, 1, 'tfcscraping:scraping_knives', `kubejs:cutting_reciped_furleather_${i}`)// 皮毛/皮革处理大生皮

    tfc.scraping(
      'tfc:large_raw_hide',
      `textile:${ore}`,
      'kubejs:item/tfc/fur/large_raw_hide',
      `kubejs:item/tfc/fur/${ore}`
    )
  }

  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:large_sheepskin_hide' }]
    , "result": [{ "item": 'tfc:large_raw_hide' },
    { "item": 'tfc:wool', "count": 3 }]
    , "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_large_sheepskin_hide`)//大羊毛
  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:medium_sheepskin_hide' }]
    , "result": [{ "item": 'tfc:medium_raw_hide' },
    { "item": 'tfc:wool', "count": 2 }]
    , "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_medium_sheepskin_hide`)//中羊毛
  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:small_sheepskin_hide' }]
    , "result": [{ "item": 'tfc:small_raw_hide' },
    { "item": 'tfc:wool', "count": 1 }]
    , "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_small_sheepskin_hide`)//小羊毛 



})