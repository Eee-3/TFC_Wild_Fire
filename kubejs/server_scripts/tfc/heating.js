ServerEvents.recipes(e => {

  const { tfc, create, kubejs, immersiveengineering } = e.recipes;
  function crucible(input, output, amount, temperature) {
    e.custom({
      "type": "createmetallurgy:bulk_melting",
      "conditions":
        [{
          "type": "forge:not", "value":
            { "type": "forge:tag_empty", "tag": "forge:storage_blocks/iron" }
        }],
      "ingredients": [{ "item": input }],
      "maxHeatRequirement": 50, "minHeatRequirement": Math.ceil(temperature / 300), "processingTime": 200,
      "results": [{ "amount": amount, "fluid": output }]
    })
  }
  const metaltype = [
    { name: 'ingot', number: 100 },
    { name: 'double_ingot', number: 200 },
    { name: 'sheet', number: 200 },
    { name: 'double_sheet', number: 400 },
    { name: 'rod', number: 50 }]
  const allmetal = [
    { name: "bismuth", temperature: 271, metal: "bismuth" },
    { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
    { name: "black_bronze", temperature: 1050, metal: "black_bronze" },
    { name: "bronze", temperature: 950, metal: "bronze" },
    { name: "copper", temperature: 1080, metal: "copper" },
    { name: "gold", temperature: 1064, metal: "gold" },
    { name: "nickel", temperature: 1455, metal: "nickel" },
    { name: "rose_gold", temperature: 1060, metal: "rose_gold" },
    { name: "silver", temperature: 961, metal: "silver" },
    { name: "tin", temperature: 232, metal: "tin" },
    { name: "zinc", temperature: 420, metal: "zinc" },
    { name: "sterling_silver", temperature: 925, metal: "sterling_silver" },
    { name: "wrought_iron", temperature: 1535, metal: "cast_iron" },
    { name: "cast_iron", temperature: 1150, metal: "cast_iron" },
    { name: "steel", temperature: 1540, metal: "steel" },
    { name: "black_steel", temperature: 1485, metal: "black_steel" },
    { name: "blue_steel", temperature: 1538, metal: "blue_steel" },
    { name: "red_steel", temperature: 1538, metal: "red_steel" }
  ];
  const metal = [
    { name: "copper", temperature: 1080, metal: "copper" },
    { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
    { name: "black_bronze", temperature: 1070, metal: "black_bronze" },
    { name: "bronze", temperature: 950, metal: "bronze" },
    { name: "black_steel", temperature: 1485, metal: "black_steel" },
    { name: "blue_steel", temperature: 1538, metal: "blue_steel" },
    { name: "red_steel", temperature: 1538, metal: "red_steel" },
    { name: "steel", temperature: 1540, metal: "steel" },
    { name: "wrought_iron", temperature: 1535, metal: 'cast_iron' }
  ];
  allmetal.forEach(metala => {
    metaltype.forEach(type => {
      crucible(`tfc:metal/${type.name}/${metala.name}`, `tfc:metal/${metala.metal}`, type.number, metala.temperature)
    })
  })
  const tfctool = [
    // { mod: 'tfc:metal/', tool: 'tuyere/', number: 200 },        // 鼓风口
    { mod: 'tfc:metal/', tool: 'propick_head/', number: 100 },       // 勘探镐
    { mod: 'tfc:metal/', tool: 'axe_head/', number: 100 },           // 斧头
    { mod: 'tfc:metal/', tool: 'shovel_head/', number: 100 },        // 铲子
    { mod: 'tfc:metal/', tool: 'hoe_head/', number: 100 },           // 锄头
    { mod: 'tfc:metal/', tool: 'chisel_head/', number: 100 },        // 凿子
    { mod: 'tfc:metal/', tool: 'hammer_head/', number: 100 },        // 锤子
    { mod: 'tfc:metal/', tool: 'saw_blade/', number: 100 },           // 锯子 
    { mod: 'tfc:metal/', tool: 'knife_blade/', number: 100 },         // 小刀
    { mod: 'tfc:metal/', tool: 'scythe_blade/', number: 100 },        // 镰刀
    { mod: 'tfc:metal/', tool: 'sword_blade/', number: 200 },         // 剑
    { mod: 'tfc:metal/', tool: 'mace_head/', number: 200 },          // 钉头锤
    { mod: 'tfc:metal/', tool: 'fishing_rod/', number: 150 },   // 钓鱼竿 
    //{ mod: 'tfc:metal/', tool: 'shears_head/', number: 200 },        // 剪刀
    //{ mod: 'tfc:metal/', tool: 'shield/', number: 200 },        // 盾牌
    { mod: 'tfc:metal/unfinished_', tool: 'chestplate/', number: 400 },    // 胸甲
    { mod: 'tfc:metal/unfinished_', tool: 'boots/', number: 200 },         // 靴子
    { mod: 'tfc:metal/unfinished_', tool: 'greaves/', number: 400 },       // 护腿
    { mod: 'tfc:metal/unfinished_', tool: 'helmet/', number: 400 },        // 头盔

    { mod: 'artisanal:metal/', tool: 'circle_blade/', number: 50 },  // 开罐器
    { mod: 'tfc_hammer_time:metal/', tool: 'excavator_head/', number: 200 },   // 挖掘器
    { mod: 'tfc_hammer_time:metal/', tool: 'sledgehammer_head/', number: 300 },   // 大锤
    { mod: 'precisionprospecting:metal/', tool: 'mineral_prospector_head/', number: 200 }, // 矿物勘探仪
    { mod: 'precisionprospecting:metal/', tool: 'prospector_drill_head/', number: 400 },   // 勘探钻头
    { mod: 'precisionprospecting:metal/', tool: 'prospector_hammer_head/', number: 200 }   // 勘探锤
  ]
  metal.forEach(metala => {
    tfctool.forEach(tool => {
      tfc.heating(`${tool.mod}${tool.tool}${metala.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, tool.number))
      crucible(`${tool.mod}${tool.tool}${metala.name}`, `tfc:metal/${metala.metal}`, tool.number, metala.temperature)
    })
  })//武器部件熔铸
  const weaponry = [
    { name: "quarterstaff", number: 200 },        // 长棍
    { name: "dagger", number: 100 },              // 匕首
    { name: "parrying_dagger", number: 150 },     // 格挡匕首
    { name: "longsword", number: 250 },           // 长刀
    { name: "greatsword", number: 350 },          // 大剑
    { name: "saber", number: 250 },               // 军刀
    { name: "rapier", number: 250 },              // 迅捷剑
    { name: "katana", number: 250 },              // 太刀
    { name: "battleaxe", number: 400 },           // 战斧
    { name: "battle_hammer", number: 200 },       // 长柄锤
    { name: "warhammer", number: 400 },           // 大锤
    { name: "javelin", number: 400 },             // 标枪
    { name: "spear", number: 100 },               // 矛
    { name: "pike", number: 100 },                // 长矛
    { name: "lance", number: 400 },               // 骑枪
    { name: "glaive", number: 350 },              // 长柄刀
    { name: "halberd", number: 400 },             // 戟
    { name: "throwing_knife", number: 100 },      // 飞刀
    { name: "tomahawk", number: 200 },            // 印第安投斧
    { name: "scythe", number: 400 },              // 战镰
    { name: "flanged_mace", number: 300 },        // 页锤
    { name: "boomerang", number: 100 }            // 回旋镖
  ];
  const weapon_part = [
    { name: "tomahawk_weapon_part", number: 100 },        // 印第安投斧武器部件
    { name: "throwing_knife_weapon_part", number: 100 },  // 飞刀武器部件
    { name: "dagger_weapon_part", number: 100 },          // 匕首武器部件
    { name: "handguard_weapon_part", number: 50 },       // 护手武器部件
    { name: "longsword_weapon_part", number: 200 },       // 长刀武器部件
    { name: "katana_weapon_part", number: 200 },          // 太刀武器部件
    { name: "saber_weapon_part", number: 200 },           // 军刀武器部件
    { name: "rapier_weapon_part", number: 200 },          // 迅捷剑武器部件
    { name: "battle_hammer_weapon_part", number: 200 },   // 战锤武器部件
    { name: "warhammer_weapon_part", number: 300 },       // 大战锤武器部件
    { name: "battleaxe_weapon_part", number: 300 },       // 战斧武器部件
    { name: "flanged_mace_weapon_part", number: 300 },    // 带刺钉头锤武器部件
    { name: "greatsword_weapon_part", number: 300 },      // 大剑武器部件
    { name: "halberd_weapon_part", number: 400 },         // 戟武器部件
    { name: "glaive_weapon_part", number: 300 },          // 长柄刀武器部件
    { name: "scythe_weapon_part", number: 400 },          // 战镰武器部件
    { name: "lance_weapon_part", number: 400 },           // 骑枪武器部件
    { name: "quarterstaff_weapon_part", number: 100 }     // 长棍武器部件
  ];
  metal.forEach(metala => {
    weapon_part.forEach(weapon_parta => {
      tfc.heating(`kubejs:${metala.name}_${weapon_parta.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, weapon_parta.number))
      crucible(`kubejs:${metala.name}_${weapon_parta.name}`, `tfc:metal/${metala.metal}`, weapon_parta.number, metala.temperature)
    })
  })//武器部件熔铸
  metal.forEach(metala => {
    weaponry.forEach(weaponrya => {
      tfc.heating(`kubejs:${metala.name}_${weaponrya.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, weaponrya.number))
        .useDurability(true);
    });
  });

  const items = [

    { name: "black_bronze_fragments", metal: "black_bronze", number: 20, temperature: 1080 }, // 黑铜碎片
    { name: "bismuth_bronze_fragments", metal: "bismuth_bronze", number: 20, temperature: 1080 }, // 铋铜碎片
    { name: "wrought_iron_fragments", metal: "cast_iron", number: 20, temperature: 1535 }, // 锻铁碎片
    { name: "steel_fragments", metal: "steel_fragments", number: 20, temperature: 1535 }, // 钢碎片
    { name: "black_steel_fragments", metal: "black_steel", number: 20, temperature: 1535 }, // 黑钢碎片
    { name: "red_steel_fragments", metal: "red_steel", number: 20, temperature: 1535 }, // 红钢碎片
    { name: "blue_steel_fragments", metal: "blue_steel", number: 20, temperature: 1535 }, // 蓝钢碎片
    { name: "copper_fragments", metal: "copper", number: 20, temperature: 1080 }, // 铜碎片
    { name: "bronze_fragments", metal: "bronze", number: 20, temperature: 950 }, // 青铜碎片
    { name: "rusty_iron_fragments", metal: 'cast_iron', number: 20, temperature: 1535 }, // 生锈的铁碎片
    { name: "silver_fragments", metal: "silver", number: 20, temperature: 961 }, // 银碎片
    { name: "gold_fragments", metal: "gold", number: 20, temperature: 1064 }, // 金碎片
    { name: "rose_gold_fragments", metal: "rose_gold", number: 20, temperature: 1064 }, // 玫瑰金碎片
    { name: "amber_gold_fragments", metal: "amber_gold", number: 20, temperature: 1064 }, // 琥珀金碎片

    //箭类
    { name: "copper_arrow", metal: "copper", number: 12, temperature: 1080 }, // 铜箭头
    { name: "wrought_iron_arrow", metal: "cast_iron", number: 12, temperature: 1535 }, // 铁箭头
    { name: "steel_arrow", metal: "steel", number: 12, temperature: 1540 }, // 钢箭头
    { name: "black_steel_arrow", metal: "black_steel", number: 12, temperature: 1485 }, // 黑钢箭头

    { name: "copper_scrap", metal: "copper", number: 75, temperature: 1080 }, // 铜甲片
    { name: "rusty_copper_scrap", metal: "copper", number: 75, temperature: 1080 }, // 生锈的铜甲片
    { name: "rusty_bronze_scrap", metal: "bronze", number: 75, temperature: 950 }, // 生锈的青铜甲片
    { name: "bronze_scrap", metal: "bronze", number: 75, temperature: 950 }, // 青铜甲片
    { name: "rusty_iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 }, // 生锈的铁甲片
    { name: "iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 }, // 铁甲片
    { name: "ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 }, // 古代钢甲片
    { name: "rusty_ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 }, // 生锈的古代钢甲片
    { name: "copper_link", metal: "copper", number: 25, temperature: 1080 }, // 铜链环
    { name: "rusty_copper_link", metal: "copper", number: 25, temperature: 1080 }, // 生锈的铜链环
    { name: "bronze_link", metal: "bronze", number: 25, temperature: 950 }, // 青铜链环
    { name: "rusty_bronze_link", metal: "bronze", number: 25, temperature: 950 }, // 生锈的青铜链环
    { name: "rusty_iron_link", metal: 'cast_iron', number: 25, temperature: 1535 }, // 生锈的铁链环
    { name: "iron_link", metal: 'cast_iron', number: 25, temperature: 1535 }, // 铁链环
    { name: "crown", metal: "gold", number: 5, temperature: 1064 }, // 金币
    { name: "triple_copper", temperature: 1080, metal: "copper", number: 300 },
    { name: "triple_bismuth_bronze", temperature: 960, metal: "bismuth_bronze", number: 300 },
    { name: "triple_black_bronze", temperature: 1050, metal: "black_bronze", number: 300 },
    { name: "triple_bronze", temperature: 950, metal: "bronze", number: 300 },
    { name: "triple_black_steel", temperature: 1485, metal: "black_steel", number: 300 },
    { name: "triple_blue_steel", temperature: 1538, metal: "blue_steel", number: 300 },
    { name: "triple_red_steel", temperature: 1538, metal: "red_steel", number: 300 },
    { name: "triple_steel", temperature: 1540, metal: "steel", number: 300 },
    // 钥匙类
    { name: "brass_simple_key", temperature: 940, metal: "brass", number: 100 },    // 黄铜简易钥匙（kubejs:brass_simple_key）
    { name: "gold_simple_key", temperature: 1064, metal: "gold", number: 100 },    // 黄金简易钥匙（kubejs:gold_simple_key）
    { name: "bismuth_bronze_simple_key", temperature: 960, metal: "bismuth_bronze", number: 100 },    // 铋铜简易钥匙（kubejs:bismuth_bronze_simple_key）
    { name: "black_bronze_simple_key", temperature: 1050, metal: "black_bronze", number: 100 },    // 黑铜简易钥匙（kubejs:black_bronze_simple_key）
    { name: "bronze_simple_key", temperature: 950, metal: "bronze", number: 100 },    // 青铜简易钥匙（kubejs:bronze_simple_key）
    { name: "copper_simple_key", temperature: 1080, metal: "copper", number: 100 },    // 铜制简易钥匙（kubejs:copper_simple_key）

    // 开锁器类
    { name: "bismuth_bronze_lockpick", temperature: 960, metal: "bismuth_bronze", number: 50 },    // 铋铜开锁器（kubejs:bismuth_bronze_lockpick）
    { name: "black_bronze_lockpick", temperature: 1050, metal: "black_bronze", number: 50 },    // 黑铜开锁器（kubejs:black_bronze_lockpick）
    { name: "bronze_lockpick", temperature: 950, metal: "bronze", number: 50 },    // 青铜开锁器（kubejs:bronze_lockpick）
    { name: "copper_lockpick", temperature: 1080, metal: "copper", number: 50 },    // 铜制开锁器（kubejs:copper_lockpick）
    { name: "cast_iron_lockpick", temperature: 1150, metal: "cast_iron", number: 50 },    // 铸铁开锁器（kubejs:cast_iron_lockpick）
    { name: "wrought_iron_lockpick", temperature: 1535, metal: "cast_iron", number: 50 },    // 锻铁开锁器（kubejs:wrought_iron_lockpick）
    { name: "steel_lockpick", temperature: 1540, metal: "steel", number: 50 },    // 钢制开锁器（kubejs:steel_lockpick）
    { name: "black_steel_lockpick", temperature: 1485, metal: "black_steel", number: 50 },    // 黑钢开锁器（kubejs:black_steel_lockpick）

    // 撬棍类
    { name: "wrought_iron_crowbar", temperature: 1535, metal: "cast_iron", number: 200 },    // 锻铁撬棍（kubejs:wrought_iron_crowbar）
    { name: "steel_crowbar", temperature: 1540, metal: "steel", number: 200 },    // 钢撬棍（kubejs:steel_crowbar）
    { name: "black_steel_crowbar", temperature: 1485, metal: "black_steel", number: 200 },    // 黑钢撬棍（kubejs:black_steel_crowbar）


  ];
  items.forEach(metala => {

    tfc.heating(`kubejs:${metala.name}`, metala.temperature)
      .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, metala.number)).useDurability(true);
    crucible(`kubejs:${metala.name}`, `tfc:metal/${metala.metal}`, metala.number, metala.temperature)

  });
  const itemss = [
    { name: "anvil", temperature: 1535, metal: "cast_iron", number: 1400, mods: "minecraft:" },
    { name: "chipped_anvil", temperature: 1535, metal: "cast_iron", number: 1200, mods: "minecraft:" },
    { name: "damaged_anvil", temperature: 1535, metal: "cast_iron", number: 1000, mods: "minecraft:" },
    { name: "material_component_steel", temperature: 1580, metal: "steel", number: 50, mods: "kubejs:" },
    { name: "material_component_black_steel", temperature: 1620, metal: "black_steel", number: 50, mods: "kubejs:" },
    { name: "material_component_wrought_iron", temperature: 1500, metal: "cast_iron", number: 50, mods: "kubejs:" },
    { name: "brass_forge_door", temperature: 930, metal: "brass", number: 400, mods: "kubejs:" },
    { name: "bloomery", temperature: 930, metal: "brass", number: 1800, mods: "tfc:" }
  ]
  itemss.forEach(metala => {

    tfc.heating(`${metala.mods}${metala.name}`, metala.temperature)
      .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, metala.number))
    crucible(`${metala.mods}${metala.name}`, `tfc:metal/${metala.metal}`, metala.number, metala.temperature)
  });


  tfc.heating('kubejs:unfired_mold_mechanical', 1399).resultItem('kubejs:mold_mechanical')//零件模具
  tfc.heating('kubejs:unfired_mold_simple_key', 1399).resultItem('kubejs:mold_simple_key')//钥匙模具
  tfc.heating('kubejs:unfired_crucible_mold', 1399).resultItem('kubejs:crucible_mold')//坩埚模具
  tfc.casting('2x tfc:brass_mechanisms', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/brass', 100), 1)
  tfc.casting('4x firmaciv:copper_bolt', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/copper', 100), 1)
  tfc.heating('tfc:brass_mechanisms', 940).resultFluid(Fluid.of('tfc:metal/brass', 50))//黄铜机件融化
  crucible('tfc:brass_mechanisms', 'tfc:metal/brass', 50, 940)
  const metaltongs = [
    { name: "bismuth_bronze", temperature: 860, metal: "tfc:metal/bismuth_bronze" },
    { name: "black_bronze", temperature: 910, metal: "tfc:metal/black_bronze" },
    { name: "bronze", temperature: 950, metal: "tfc:metal/bronze" },
    { name: "copper", temperature: 1085, metal: "tfc:metal/copper" },
    { name: "wrought_iron", temperature: 1535, metal: "tfc:metal/cast_iron" },
    { name: "steel", temperature: 1540, metal: "tfc:metal/steel" },
    { name: "black_steel", temperature: 1385, metal: "tfc:metal/black_steel" },
    { name: "blue_steel", temperature: 1540, metal: "tfc:metal/blue_steel" },
    { name: "red_steel", temperature: 1540, metal: "tfc:metal/red_steel" },
    { name: "cast_iron", temperature: 1200, metal: "tfc:metal/cast_iron" },
    { name: "gold", temperature: 1060, metal: "tfc:metal/gold" },
    { name: "rose_gold", temperature: 960, metal: "tfc:metal/rose_gold" },
    { name: "brass", temperature: 930, metal: "tfc:metal/brass" },
    { name: "bismuth", temperature: 271, metal: "tfc:metal/bismuth" },
    { name: "silver", temperature: 961, metal: "tfc:metal/silver" },
    { name: "sterling_silver", temperature: 940, metal: "tfc:metal/sterling_silver" },
    { name: "nickel", temperature: 1453, metal: "tfc:metal/nickel" },
    { name: "chromium", temperature: 1907, metal: "firmalife:bucket/metal/chromium" },
    { name: "zinc", temperature: 419, metal: "tfc:metal/zinc" },
    { name: "stainless_steel", temperature: 1400, metal: "firmalife:bucket/metal/stainless_steel" },
  ];
  metaltongs.forEach(metal => {

    tfc.heating(`kubejs:${metal.name}_tong`, metal.temperature).resultFluid(Fluid.of(metal.metal, 100))//完整融化
    tfc.heating(`kubejs:${metal.name}_tong_part`, metal.temperature).resultFluid(Fluid.of(metal.metal, 50))//部件融化
    crucible(`kubejs:${metal.name}_tong`, metal.metal, 100, metal.temperature)
    crucible(`kubejs:${metal.name}_tong_part`, metal.metal, 50, metal.temperature)
  })

  const metal_fish_hooks = [
    { name: "bismuth_bronze", temperature: 985, metal: "tfc:metal/bismuth_bronze" },
    { name: "black_bronze", temperature: 1070, metal: "tfc:metal/black_bronze" },
    { name: "bronze", temperature: 950, metal: "tfc:metal/bronze" },
    { name: "copper", temperature: 1080, metal: "tfc:metal/copper" },
    { name: "wrought_iron", temperature: 1535, metal: "tfc:metal/cast_iron" },
    { name: "steel", temperature: 1540, metal: "tfc:metal/steel" },
    { name: "black_steel", temperature: 1385, metal: "tfc:metal/black_steel" },
    { name: "blue_steel", temperature: 1540, metal: "tfc:metal/blue_steel" },
    { name: "red_steel", temperature: 1540, metal: "tfc:metal/red_steel" }
  ];
  metal_fish_hooks.forEach(metal => {

    tfc.heating(`tfc:metal/fish_hook/${metal.name}`, metal.temperature).resultFluid(Fluid.of(metal.metal, 50))//鱼钩融化
    crucible(`tfc:metal/fish_hook/${metal.name}`, metal.metal, 50, metal.temperature)
  })
  tfc.heating('kubejs:alkalized_bauxite_raw_material', 1500).resultItem('kubejs:bauxite_clinker')
  tfc.heating('kubejs:unfired_corundum_brick', 2000).resultItem('kubejs:corundum_brick')
  tfc.heating('kubejs:corundum_brick', 2600).resultFluid(Fluid.of("kubejs:synthetic_corundum", 50))//刚玉融化
  tfc.heating('kubejs:corundum_brick_block', 2600).resultFluid(Fluid.of("kubejs:synthetic_corundum", 200))//刚玉融化
  crucible('kubejs:corundum_brick', 'kubejs:synthetic_corundum', 50, 2600)
  crucible('kubejs:corundum_brick_block', 'kubejs:synthetic_corundum', 200, 2600)





});
