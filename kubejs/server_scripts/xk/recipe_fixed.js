//基础修改
ServerEvents.recipes(event => {
    const create = event.recipes.create
   
    
      //灵魂火
    create.haunting(Item.of('minecraft:blaze_rod'),'createaddition:electrum_rod')//烈焰棒
    create.mixing("minecraft:soul_sand",['#forge:sand','minecraft:rotten_flesh'])//灵魂沙



     //搅拌
    create.compacting('minecraft:glass',['#forge:sand','tfc:powder/flux']).heated()//玻璃
    create.compacting(Item.of('minecraft:netherite_ingot'),['ad_astra:ostrum_ingot','tfc:metal/ingot/unknown','tfc:metal/ingot/gold']).superheated()//下界合金锭
    create.mixing(Item.of('minecraft:ancient_debris').withChance(0.1),['ad_astra:infernal_spire_block','tfc:metal/ingot/unknown']).superheated()//下界合金碎片（金星
    create.mixing(Item.of('minecraft:ancient_debris').withChance(0.1),['ad_astra:infernal_spire_block',Fluid.of('tfc:metal/unknown',100)]).superheated()//下界合金碎片（金星
  
    //辊压

    

    //石磨
    create.milling('2x tfc:olive_paste','tfc:food/olive') // 橄榄 => 2个橄榄糊
    create.milling('4x tfc:powder/sulfur','tfc:ore/sulfur') // 硫磺矿石 => 4份硫磺粉末
    create.milling('6x tfc:powder/flux','tfc:ore/borax') // 硼砂矿石 => 6份助熔剂粉末
    create.milling('2x tfc:powder/flux','#tfc:fluxstone') // 标签为 #tfc:fluxstone 的物品 => 2份助熔剂粉末
    create.milling('tfc:ore/gypsum','tfc:rock/raw/limestone') // 原始石灰石 => 石膏矿石
    create.milling('4x tfc:powder/ruby','tfc:ore/ruby') // 红宝石矿石 => 4份红宝石粉末
    create.milling('4x tfc:powder/ruby','tfc:gem/ruby') // 红宝石宝石 => 4份红宝石粉末
    create.milling('8x minecraft:redstone','tfc:ore/cinnabar') // 辰砂矿石 => 8个原版红石
    create.milling('8x minecraft:redstone','tfc:ore/cryolite') // 冰晶石矿石 => 8个原版红石
    create.milling('4x tfc:powder/pyrite','tfc:gem/pyrite') // 黄铁矿宝石 => 4份黄铁矿粉末
    create.milling('4x tfc:powder/pyrite','tfc:ore/pyrite') // 黄铁矿矿石 => 4份黄铁矿粉末
    create.milling('4x tfc:powder/lapis_lazuli','tfc:ore/lapis_lazuli') // 青金石矿石 => 4份青金石粉末
    create.milling('4x tfc:powder/lapis_lazuli','tfc:gem/lapis_lazuli') // 青金石宝石 => 4份青金石粉末
    create.milling('4x tfc:powder/diamond','tfc:gem/diamond') // 钻石宝石 => 4份钻石粉末
    create.milling('4x tfc:powder/diamond','tfc:ore/diamond') // 钻石矿石 => 4份钻石粉末
    create.milling('4x tfc:powder/opal','tfc:gem/opal') // 蛋白石宝石 => 4份蛋白石粉末
    create.milling('4x tfc:powder/opal','tfc:ore/opal') // 蛋白石矿石 => 4份蛋白石粉末
    create.milling('4x tfc:powder/emerald','tfc:gem/emerald') // 祖母绿宝石 => 4份祖母绿粉末
    create.milling('4x tfc:powder/emerald','tfc:ore/emerald') // 祖母绿矿石 => 4份祖母绿粉末
    create.milling('4x tfc:powder/topaz','tfc:gem/topaz') // 黄玉宝石 => 4份黄玉粉末
    create.milling('4x tfc:powder/topaz','tfc:ore/topaz') // 黄玉矿石 => 4份黄玉粉末
    create.milling('4x tfc:powder/sapphire','tfc:gem/sapphire') // 蓝宝石宝石 => 4份蓝宝石粉末
    create.milling('4x tfc:powder/sapphire','tfc:ore/sapphire') // 蓝宝石矿石 => 4份蓝宝石粉末
    create.milling('4x tfc:powder/amethyst','tfc:gem/amethyst') // 紫水晶宝石 => 4份紫水晶粉末
    create.milling('4x tfc:powder/amethyst','tfc:ore/amethyst') // 紫水晶矿石 => 4份紫水晶粉末 
   
 



    create.compacting('4x minecraft:cobbled_deepslate','4x minecraft:cobblestone').heated()//深板岩
    create.compacting('minecraft:smooth_stone','minecraft:cobblestone').superheated()//平滑石头
    create.deploying('minecraft:paper',['tfc:unrefined_paper','#tfc:knives']).keepHeldItem()
    create.filling('minecraft:glowstone_dust',['kubejs:rock_powder',Fluid.of('minecraft:lava',20)]).superheated()//萤石


    event.recipes.tfc.barrel_sealed(5000).outputItem('tfc:unrefined_paper').inputs('farmersdelight:tree_bark', TFC.fluidStackIngredient('tfc:limewater', 50))//获取未精致纸
    event.recipes.firmalife.vat().outputFluid(Fluid.of('tfc:tallow',100)).inputs('butcher:animalfat', Fluid.of('minecraft:water', 100))//获取蜡质
  

   

    //基础炼矿
    event.recipes.tfc.heating('tfc:ore/poor_native_copper', 1083).resultFluid(Fluid.of('tfc:metal/copper', 10))
    event.recipes.tfc.heating('tfc:ore/normal_native_copper', 1083).resultFluid(Fluid.of('tfc:metal/copper', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_native_copper', 1083).resultFluid(Fluid.of('tfc:metal/copper', 30))//铜

    event.recipes.tfc.heating('tfc:ore/poor_native_silver', 961).resultFluid(Fluid.of('tfc:metal/silver', 10))
    event.recipes.tfc.heating('tfc:ore/normal_native_silver', 961).resultFluid(Fluid.of('tfc:metal/silver', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_native_silver', 961).resultFluid(Fluid.of('tfc:metal/silver', 30))//银

    event.recipes.tfc.heating('tfc:ore/poor_hematite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 10))
    event.recipes.tfc.heating('tfc:ore/normal_hematite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_hematite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 30))//赤铁

    event.recipes.tfc.heating('tfc:ore/poor_native_gold', 1064).resultFluid(Fluid.of('tfc:metal/gold', 10))
    event.recipes.tfc.heating('tfc:ore/normal_native_gold', 1064).resultFluid(Fluid.of('tfc:metal/gold', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_native_gold', 1064).resultFluid(Fluid.of('tfc:metal/gold', 30))//金

    event.recipes.tfc.heating('tfc:ore/poor_bismuthinite', 271).resultFluid(Fluid.of('tfc:metal/bismuth', 10))
    event.recipes.tfc.heating('tfc:ore/normal_bismuthinite', 271).resultFluid(Fluid.of('tfc:metal/bismuth', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_bismuthinite', 271).resultFluid(Fluid.of('tfc:metal/bismuth', 30))//铋

    event.recipes.tfc.heating('tfc:ore/poor_garnierite',1445).resultFluid(Fluid.of('tfc:metal/nickel', 10))
    event.recipes.tfc.heating('tfc:ore/normal_garnierite', 1445).resultFluid(Fluid.of('tfc:metal/nickel', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_garnierite', 1445).resultFluid(Fluid.of('tfc:metal/nickel', 30))//绿镍
    
    event.recipes.tfc.heating('tfc:ore/poor_malachite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 10))
    event.recipes.tfc.heating('tfc:ore/normal_malachite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_malachite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 30))//孔雀石

    event.recipes.tfc.heating('tfc:ore/poor_cassiterite', 231).resultFluid(Fluid.of('tfc:metal/tin', 10))
    event.recipes.tfc.heating('tfc:ore/normal_cassiterite', 231).resultFluid(Fluid.of('tfc:metal/tin', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_cassiterite', 231).resultFluid(Fluid.of('tfc:metal/tin', 30))//锡石
    
    event.recipes.tfc.heating('tfc:ore/poor_tetrahedrite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 10))
    event.recipes.tfc.heating('tfc:ore/normal_tetrahedrite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_tetrahedrite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 30))//黝铜矿

    event.recipes.tfc.heating('tfc:ore/poor_limonite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 10))
    event.recipes.tfc.heating('tfc:ore/normal_limonite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_limonite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 30))//褐铁矿

    event.recipes.tfc.heating('tfc:ore/poor_magnetite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 10))
    event.recipes.tfc.heating('tfc:ore/normal_magnetite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_magnetite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 30))//磁铁矿

    event.recipes.tfc.heating('tfc:ore/poor_sphalerite', 419).resultFluid(Fluid.of('tfc:metal/zinc', 10))
    event.recipes.tfc.heating('tfc:ore/normal_sphalerite', 419).resultFluid(Fluid.of('tfc:metal/zinc', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_sphalerite', 419).resultFluid(Fluid.of('tfc:metal/zinc', 30))//闪锌


    //获取树皮
    const woodTypes = ['acacia','ash','aspen','birch','blackwood','chestnut','douglas_fir','hickory','kapok','mangrove','maple','oak','palm','pine','rosewood','sequoia','spruce','sycamore','white_cedar','willow',];
    const adcwoodTypes = ['baobab','black_oak','cypress','eucalyptus','fig','gum_arabic','hevea','ipe','ironwood','mahogany','poplar','rainbow_eucalyptus','redcedar','rubber_fig','teak','tualang',];
  
 
  woodTypes.forEach(woodType => {
      event.shapeless(Item.of('farmersdelight:tree_bark', 1), [
          `tfc:wood/log/${woodType}`,
          '#tfc:knives'
      ])
     .replaceIngredient({ item: `tfc:wood/log/${woodType}` }, `tfc:wood/stripped_log/${woodType}`)
     .damageIngredient({ tag: '#tfc:knives' }, 2);
     
  });
  adcwoodTypes.forEach(adcwoodTypes => {
    event.shapeless(Item.of('farmersdelight:tree_bark', 1), [
      `afc:wood/log/${adcwoodTypes}`,
      '#tfc:knives'
  ])
      .replaceIngredient({ item: `afc:wood/log/${adcwoodTypes}` }, `afc:wood/stripped_log/${adcwoodTypes}`)
      .damageIngredient({ tag: '#tfc:knives' }, 2);

    
  });
    
    

   event.forEachRecipe(//所有肉的烤制配方
        {       
          
            
            type:"smoking"
            //output: '#forge:meats'
        }, r => {   
          
            var cookmeat_id = r.getOriginalRecipeResult().getId()
            var meat_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
           
            if ((!cookmeat_id||(!meat_id || meat_id.length === 0)||(!meat_id || meat_id.length === 0))) {
          
                return;
            }
        
            event.recipes.tfc.heating(meat_id, 200).resultItem(cookmeat_id)
    })

    event.shaped('create:empty_blaze_burner', [
      'a a', 
      'bcb', 
      'ded'
  ], {
      a:'minecraft:blaze_rod',
      b:'tfc:metal/rod/wrought_iron',
      c:'#forge:stone_bricks',
      d:'tfc:metal/sheet/wrought_iron',
      e:'tfc:metal/double_sheet/wrought_iron'
  })//烈焰人燃烧室
  event.custom({"type": "tfc:heating","ingredient": {"item": 'create:empty_blaze_burner'},"result_item": {"item": 'create:blaze_burner'},"temperature": 1538})//烈焰人燃烧室
  event.custom({//海带烧
    "type": "tfc:heating",
    "ingredient": {"tag": 'tfc:plants/kelp'},
    "result_item": {"item": "tfc:food/dried_kelp"},
    "temperature": 200
  })
  event.custom({//海带烧
    "type": "tfc:heating",
    "ingredient": {"item": 'tfc:plant/laminaria'},
    "result_item": {"item": "tfc:food/dried_kelp"},
    "temperature": 200
  })
 
  
  const inputcailiao='tfc:metal/sheet/black_steel'
  create.sequenced_assembly('kubejs:basic_crystal_pannel','tfc:metal/sheet/black_steel',
   [ create.deploying(inputcailiao,[inputcailiao,'create:andesite_alloy']),
    create.pressing(inputcailiao,inputcailiao),
    create.deploying(inputcailiao,[inputcailiao,'create_new_age:copper_circuit']),
    create.deploying(inputcailiao,[inputcailiao,'create:precision_mechanism']),
    create.deploying(inputcailiao,[inputcailiao,'create:electron_tube']),
    create.pressing(inputcailiao,inputcailiao)]
  ).transitionalItem(inputcailiao).loops(2)//基础晶体面板
  create.sequenced_assembly('kubejs:moon_crystal_panel','tfc:metal/sheet/black_steel',
    [ create.deploying(inputcailiao,[inputcailiao,'tfc:metal/double_sheet/brass']),
     create.deploying(inputcailiao,[inputcailiao,'immersiveengineering:circuit_board']),
     create.deploying(inputcailiao,[inputcailiao,'create_new_age:copper_circuit']),
     create.deploying(inputcailiao,[inputcailiao,'create:precision_mechanism']),
     create.deploying(inputcailiao,[inputcailiao,'create:electron_tube']),
     create.pressing(inputcailiao,inputcailiao)]
   ).transitionalItem(inputcailiao).loops(2)//月球晶体面板
   create.sequenced_assembly('kubejs:hologram_frontpanel','tfc:metal/sheet/black_steel',
    [ create.deploying(inputcailiao,[inputcailiao,'tfc:metal/double_sheet/wrought_iron']),
     create.deploying(inputcailiao,[inputcailiao,'mekanism:elite_control_circuit']),
     create.deploying(inputcailiao,[inputcailiao,'ae2:printed_calculation_processor']),
     create.deploying(inputcailiao,[inputcailiao,'ae2:printed_engineering_processor']),
     create.deploying(inputcailiao,[inputcailiao,'ad_astra:photovoltaic_etrium_cell']),
     create.pressing(inputcailiao,inputcailiao)]
   ).transitionalItem(inputcailiao).loops(2)//六方全息面板
 


   //TFC
   event.recipes.tfc.knapping('kubejs:unfired_mold_mechanical', 'tfc:clay', [
    'XXXXX', 
    'X X X', 
    'X X X', 
    'X X X', 
    'XXXXX']).outsideSlotRequired(false)
        event.recipes.tfc.heating('kubejs:unfired_mold_mechanical', 1500).resultItem('kubejs:mold_mechanical')//零件模具
        event.recipes.tfc.casting('2x tfc:brass_mechanisms', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/brass', 100), 1)
        event.recipes.tfc.casting('4x firmaciv:copper_bolt', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/copper', 100), 1)
        event.recipes.tfc.heating('tfc:brass_mechanisms', 940).resultFluid(Fluid.of('tfc:metal/brass', 50))//黄铜机件融化

        event.recipes.tfc.welding('tfc:metal/double_ingot/cast_iron','tfc:metal/ingot/cast_iron', 'tfc:metal/ingot/cast_iron')//铸铁焊接



 




  
     
 
})
//沃土系数更改
ServerEvents.recipes(e => {
  const CROP_GROWTH_TIME_MULTIPLIER = 0.8;// 沃土加速系数，暂定 0.8
  const BASE_GROWTH_TIME = 12800;// 基础生长时间
  const ADJUSTED_GROWTH_TIME = BASE_GROWTH_TIME * CROP_GROWTH_TIME_MULTIPLIER;// 计算调整后的生长时间
  const RICH_SOIL = 'farmersdelight:rich_soil';// 沃土土壤类型
  
  const crops = [// 定义作物列表，每个作物包含名称、产出物品、种子物品和作物方块
      { name: 'wheat', product: 'tfc:food/wheat', seed: 'tfc:seeds/wheat', cropBlock: 'tfc:crop/wheat' },
      { name: 'tomato', product: 'tfc:food/tomato', seed: 'tfc:seeds/tomato', cropBlock: 'tfc:crop/tomato' },
      { name: 'sugarcane', product: 'tfc:food/sugarcane', seed: 'tfc:seeds/sugarcane', cropBlock: 'tfc:crop/sugarcane' },
      { name: 'squash', product: 'tfc:food/squash', seed: 'tfc:seeds/squash', cropBlock: 'tfc:crop/squash' },
      { name: 'soybean', product: 'tfc:food/soybean', seed: 'tfc:seeds/soybean', cropBlock: 'tfc:crop/soybean' },
      { name: 'rye', product: 'tfc:food/rye', seed: 'tfc:seeds/rye', cropBlock: 'tfc:crop/rye' },
      { name: 'rice', product: 'tfc:food/rice', seed: 'tfc:seeds/rice', cropBlock: 'tfc:crop/rice' },
      { name: 'pumpkin', product: 'tfc:pumpkin', seed: 'tfc:seeds/pumpkin', cropBlock: 'tfc:crop/pumpkin' },
      { name: 'potato', product: 'tfc:food/potato', seed: 'tfc:seeds/potato', cropBlock: 'tfc:crop/potato' },
      { name: 'onion', product: 'tfc:food/onion', seed: 'tfc:seeds/onion', cropBlock: 'tfc:crop/onion' },
      { name: 'oat', product: 'tfc:food/oat', seed: 'tfc:seeds/oat', cropBlock: 'tfc:crop/oat' },
      { name: 'melon', product: 'tfc:melon', seed: 'tfc:seeds/melon', cropBlock: 'tfc:crop/melon' },
      { name: 'maize', product: 'tfc:food/maize', seed: 'tfc:seeds/maize', cropBlock: 'tfc:crop/maize' },
      { name: 'jute', product: 'tfc:jute', seed: 'tfc:seeds/jute', cropBlock: 'tfc:crop/jute' },
      { name: 'green_bean', product: 'tfc:food/green_bean', seed: 'tfc:seeds/green_bean', cropBlock: 'tfc:crop/green_bean' },
      { name: 'garlic', product: 'tfc:food/garlic', seed: 'tfc:seeds/garlic', cropBlock: 'tfc:crop/garlic' },
      { name: 'carrot', product: 'tfc:food/carrot', seed: 'tfc:seeds/carrot', cropBlock: 'tfc:crop/carrot' },
      { name: 'cabbage', product: 'tfc:food/cabbage', seed: 'tfc:seeds/cabbage', cropBlock: 'tfc:crop/cabbage' },
      { name: 'beet', product: 'tfc:food/beet', seed: 'tfc:seeds/beet', cropBlock: 'tfc:crop/beet' },
      { name: 'barley', product: 'tfc:food/barley', seed: 'tfc:seeds/barley', cropBlock: 'tfc:crop/barley' }
  ];
  
    crops.forEach(crop => {
        e.custom({
            "type": "immersiveengineering:cloche",
            "results": [
                { "item": crop.product, "count": 2 },
                { "item": crop.seed }
            ],
            "input": { "item": crop.seed },
            "soil": { "item": RICH_SOIL },
            "time": ADJUSTED_GROWTH_TIME,
            "render": { "type": "crop", "block": crop.cropBlock }
        });
        console.log(`为 ${crop.name} 创建了种植配方`);
    });
})
//绑定和tag修改
ServerEvents.tags('minecraft:item', event => {
  // 标签id，物品id
  event.remove("bsa:bindings/strong", 'tfc:jute_fiber');//移除完美绑定
  event.remove("bsa:bindings/strong", '#forge:plant_fiber');
  event.remove("bsa:bindings/strong", '#forge:string');
  event.remove("bsa:bindings/strong", 'tfc:glue');
  
  



  
  event.add("bsa:bindings/medium", 'minecraft:slime_ball');//合格粘液球
  event.add("bsa:bindings/medium", 'minecraft:string');//合格，线
  event.add("bsa:bindings/medium", 'tfc:glue');//合格
  event.add("bsa:bindings/medium", 'tfc:wool_yarn');//合格
  event.add("bsa:bindings/medium", 'animaltrap:twine');//合格

  event.add("bsa:bindings/weak", 'htm:plant_string');//满耐久
  event.add("bsa:bindings/weak", '#forge:fiber_hemp');//满耐久

  event.add("bsa:bindings/strong", 'bsa:sinew_string');//完美
  event.add("bsa:bindings/strong", 'firmaciv:rope_coil');//完美

  

  event.add('tfc:any_knapping', 'minecraft:diamond');//钻石上可以敲的标签
  event.add('tfc:any_knapping', 'kubejs:obsidian_shards');//钻石上可以敲的标签
  //event.add('kubejs:diamond', 'minecraft:diamond');//钻石上可以敲的标签
  

 






})
//刷铁机产线
ServerEvents.recipes(event => { 
  event.remove({id:"create:splashing/gravel"})
  const create = event.recipes.create
create.splashing([Item.of('minecraft:flint').withChance(0.25),Item.of('tfc:ore/small_limonite').withChance(0.12)],'minecraft:gravel')
create.splashing([Item.of('minecraft:flint').withChance(0.25),Item.of('tfc:ore/small_limonite').withChance(0.12)],'#tfc:rock/gravel')

//create.crushing([Item.of('minecraft:flint').withChance(0.25),Item.of('tfc:ore/small_limonite').withChance(0.1)],"#forge:gravel")
  // 定义生成生铁液体合成配方的函数
function createCastIronMixing(fluidAmount, oreItem) {
try {
    create.mixing(Fluid.of('tfc:metal/cast_iron', fluidAmount), [oreItem]).heated();
} catch (error) {
    console.error(`生成 ${oreItem} 对应的生铁液体合成配方时出错:`, error);
}
}

// 定义不同品质矿石对应的液体量
const oreAmountMap = {
'small': 5,
'poor': 10,
'normal': 20,
'rich': 30
};

// 定义不同类型的铁矿石
const ironOres = ['limonite', 'hematite', 'magnetite'];

// 遍历不同品质和类型的铁矿石进行合成操作
Object.keys(oreAmountMap).forEach(quality => {
const fluidAmount = oreAmountMap[quality];
ironOres.forEach(ore => {
    const oreItem = `tfc:ore/${quality}_${ore}`;
    createCastIronMixing(fluidAmount, oreItem);
});
});
const oreAmountMap2 = {
'powder': 5,
'tfcorewashing:pellet': 20,
'tfcorewashing:briquet': 80,
};
Object.keys(oreAmountMap2).forEach(quality => {
const fluidAmount = oreAmountMap2[quality];
ironOres.forEach(ore => {
    const oreItem = `${quality}_${ore}`;
    createCastIronMixing(fluidAmount, oreItem);
});
});
  create.mixing(Fluid.of('tfc:metal/cast_iron',100),['tfc:metal/ingot/cast_iron']).heated()





})
//弓箭工艺
ServerEvents.recipes(event => { 
  const INITIAL_HEATING_TEMPERATURE = 200;
// 定义每次温度递增常量
const TEMPERATURE_INCREMENT = 30;
// 定义大桶浸油时间，8 分钟，假设游戏刻速为 20 刻/秒，8 分钟就是 8 * 60 * 20 = 9600 刻
const BARREL_DURATION = 9600;

  
  
    // 泡过水的弓臂 -> 正在烧制的弓臂
    event.recipes.tfc.heating('kubejs:soaked_bow_arm', INITIAL_HEATING_TEMPERATURE)
      .resultItem('kubejs:burning_bow_arm');
 
    // 正在烧制的弓臂 -> 烧制正好的弓臂
    event.recipes.tfc.heating('kubejs:burning_bow_arm', INITIAL_HEATING_TEMPERATURE + TEMPERATURE_INCREMENT)
      .resultItem('kubejs:perfectly_burned_bow_arm');
 
    // 烧制正好的弓臂 -> 烧过了头的弓臂
    event.recipes.tfc.heating('kubejs:perfectly_burned_bow_arm', INITIAL_HEATING_TEMPERATURE + 2 * TEMPERATURE_INCREMENT)
      .resultItem('kubejs:overburned_bow_arm');
 
    // 烧过了头的弓臂 -> 烧糊了的弓臂
    event.recipes.tfc.heating('kubejs:overburned_bow_arm', INITIAL_HEATING_TEMPERATURE + 3 * TEMPERATURE_INCREMENT)
      .resultItem('kubejs:charred_bow_arm');
 
    // 正在烧制的弓臂浸油配方，锻造奖励设为 2
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:burning_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":2}'))
      .sound('minecraft:block.barrel.open');
 
    // 烧制正好的弓臂浸油配方，锻造奖励设为 4
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:perfectly_burned_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":4}'))
      .sound('minecraft:block.barrel.open');
 
    // 烧过了头的弓臂浸油配方，锻造奖励设为 1
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:overburned_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":1}'))
      .sound('minecraft:block.barrel.open');
 
    // 烧糊了的弓臂浸油配方，锻造奖励设为 0
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:charred_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":0}'))
      .sound('minecraft:block.barrel.open');
})
//钻石，黑曜石工具
ServerEvents.recipes(event => {
  const MODID = "kubejs:";

  // 定义钻石工具部件的敲制配方信息
  const diamondToolPartRecipes = [
      {
          result: `${MODID}diamond_axe_head`,
          knappingType: 'kubejs:diamond',
          pattern: [" X   ", "XXXX ", "XXXXX", "XXXX ", " X   "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_javelin_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXX  ", "XXXX ", "XXXXX", " XXX ", "  X  "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_hammer_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXXXX", "XXXXX", "  X  "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_hoe_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXXXX", "XX   ", "     ", "XXXXX", "XX   "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_shovel_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXX", "XXX", "XXX", "XXX", " X "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_knife_blade`,
          knappingType: 'kubejs:diamond',
          pattern: ["X  X ", "XX XX", "XX XX", "XX XX", "XX XX"],
          ingredient: Item.of("minecraft:diamond")
      }
  ];

  // 注册钻石工具部件的敲制配方
  diamondToolPartRecipes.forEach(recipe => {
      event.recipes.tfc.knapping(recipe.result, recipe.knappingType, recipe.pattern)
         .ingredient(recipe.ingredient)
         .outsideSlotRequired(false);
  });

  // 定义黑曜石工具部件的敲制配方信息
  const obsidianToolPartRecipes = [
      {
          result: `${MODID}obsidian_axe_head`,
          knappingType: 'kubejs:obsidian',
          pattern: [" X   ", "XXXX ", "XXXXX", "XXXX ", " X   "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_javelin_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXX  ", "XXXX ", "XXXXX", " XXX ", "  X  "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_hammer_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXXXX", "XXXXX", "  X  "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_hoe_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXXXX", "XX   ", "     ", "XXXXX", "XX   "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_shovel_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXX", "XXX", "XXX", "XXX", " X "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_knife_blade`,
          knappingType: 'kubejs:obsidian',
          pattern: ["X  X ", "XX XX", "XX XX", "XX XX", "XX XX"],
          ingredient: Item.of('kubejs:obsidian_shards')
      }
  ];

  // 注册黑曜石工具部件的敲制配方
  obsidianToolPartRecipes.forEach(recipe => {
      event.recipes.tfc.knapping(recipe.result, recipe.knappingType, recipe.pattern)
         .ingredient(recipe.ingredient)
         .outsideSlotRequired(false);
  });
})
//辊压机碎矿一次处理
ServerEvents.recipes(event => {
  const create = event.recipes.create
  const double_ingots = [ 'bismuth', 'bismuth_bronze','black_bronze', 'black_steel', 'blue_steel',
     'brass', 'bronze', 'cast_iron','copper', 'gold', 'nickel','steel','sterling_silver','wrought_iron', 'zinc','tin','red_steel', 'rose_gold','silver'];
  const fdouble_ingots = ['chromium', 'stainless_steel'];
  const imdouble_ingots = ['aluminum','uranium','constantan','electrum','lead'];

//动力辊压机压板
/*double_ingots.forEach(di=>{
   let inputm =`tfc:metal/double_ingot/${di}`
   let outputm =`tfc:metal/sheet/${di}`
 event.custom(
  {
    "conditions": [{"type": "forge:mod_loaded", "modid": "create"}],
    "type": "create:sequenced_assembly",
    "ingredient": {
      "type": "tfc:heatable",
      "min_temp": 500,
      "ingredient": {"item": inputm}
    },
    "transitionalItem": {"item": inputm},
    "sequence": [
      {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
      {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
      {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
    ],
    "results": [{"item": outputm}],
    "loops": 2
  })
})*/
/*fdouble_ingots.forEach(di=>{
    let inputm =`firmalife:metal/double_ingot/${di}`
    let outputm =`firmalife:metal/sheet/${di}`
    event.custom(
      {
        "conditions": [{"type": "forge:mod_loaded", "modid": "create"}],
        "type": "create:sequenced_assembly",
        "ingredient": {
          "type": "tfc:heatable",
          "min_temp": 500,
          "ingredient": {"item": inputm}
        },
        "transitionalItem": {"item": inputm},
        "sequence": [
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
        ],
        "results": [{"item": outputm}],
        "loops": 2
      }) 
})
imdouble_ingots.forEach(di=>{
    let inputm =`tfc_ie_addon:metal/double_ingot/${di}`
    let outputm =`tfc_ie_addon:metal/sheet/${di}`
    event.custom(
      {
        "conditions": [{"type": "forge:mod_loaded", "modid": "create"}],
        "type": "create:sequenced_assembly",
        "ingredient": {
          "type": "tfc:heatable",
          "min_temp": 500,
          "ingredient": {"item": inputm}
        },
        "transitionalItem": {"item": inputm},
        "sequence": [
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
        ],
        "results": [{"item": outputm}],
        "loops": 2
      }) 
})*/

//激光焊接-锭>双锭

double_ingots.forEach(di=>{
  const input1=`tfc:metal/ingot/${di}`
  const output1=`tfc:metal/double_ingot/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
fdouble_ingots.forEach(di=>{
  const input1=`firmalife:metal/ingot/${di}`
  const output1=`firmalife:metal/double_ingot/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
imdouble_ingots.forEach(di=>{
  const input1 =`immersiveengineering:ingot_${di}`
  const output1=`tfc_ie_addon:metal/double_ingot/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)
  })
//激光焊接-板>双板

double_ingots.forEach(di=>{
  const input1=`tfc:metal/sheet/${di}`
  const output1=`tfc:metal/double_sheet/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
fdouble_ingots.forEach(di=>{
  const input1=`firmalife:metal/sheet/${di}`
  const output1=`firmalife:metal/double_sheet/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
imdouble_ingots.forEach(di=>{
  const input1=`tfc_ie_addon:metal/sheet/${di}`
  const output1=`tfc_ie_addon:metal/double_sheet/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
  
   


})

