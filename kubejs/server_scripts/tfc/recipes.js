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



  event.shaped('immersiveengineering:sawblade',
    [
      ' a ',
      'aba',
      ' a '],
    {
      a: TFC.ingredient.heatable('tfc:metal/rod/wrought_iron', 1200, null),
      b: TFC.ingredient.heatable('tfc:metal/sheet/wrought_iron', 1200, null),
    })//锯子



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
  create.mechanical_crafting('createdieselgenerators:burner', [
    "  e  ",
    "facaf",
    "gdbdg",
  ], {
    a: 'create:shaft',
    b: 'create:fluid_valve',
    c: 'create:fluid_pipe',
    d: 'tfc:metal/sheet/wrought_iron',
    e: 'minecraft:flint',
    f: 'tfc:metal/rod/wrought_iron',
    g: 'tfc:metal/sheet/cast_iron',
  }) // 可控燃烧室
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



})