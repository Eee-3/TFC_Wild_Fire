ServerEvents.recipes(e => {
  const { tfc, create, kubejs, immersiveengineering } = e.recipes;
const metal = [
    { name: "copper", temperature: 1080, metal: "copper" },       
    { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
    { name: "black_bronze", temperature: 1050, metal: "black_bronze" }, 
    { name: "bronze", temperature: 950, metal: "bronze" },        
    { name: "black_steel", temperature: 1485, metal: "black_steel" },  
    { name: "blue_steel", temperature: 1538, metal: "blue_steel" },   
    { name: "red_steel", temperature: 1538, metal: "red_steel" },    
    { name: "steel", temperature: 1540, metal: "steel" },        
    { name: "wrought_iron", temperature: 1535, metal: 'cast_iron' }  
];
  const weaponry = [
    { name: "quarterstaff", number: 200 },        // 长棍
    { name: "dagger", number: 100 },              // 匕首
    { name: "parrying_dagger", number: 100 },     // 格挡匕首
    { name: "longsword", number: 300 },           // 长刀
    { name: "greatsword", number: 400 },          // 大剑
    { name: "saber", number: 300 },               // 军刀
    { name: "rapier", number: 200 },              // 迅捷剑
    { name: "katana", number: 300 },              // 太刀
    { name: "battleaxe", number: 400 },           // 战斧
    { name: "battle_hammer", number: 200 },       // 长柄锤
    { name: "warhammer", number: 400 },           // 大锤
    { name: "javelin", number: 400 },             // 标枪
    { name: "spear", number: 100 },               // 矛
    { name: "pike", number: 100 },                // 长矛
    { name: "lance", number: 400 },               // 骑枪
    { name: "glaive", number: 200 },              // 长柄刀
    { name: "halberd", number: 400 },             // 戟
    { name: "throwing_knife", number: 100 },      // 飞刀
    { name: "tomahawk", number: 200 },            // 印第安投斧
    { name: "scythe", number: 400 },              // 战镰
    { name: "flanged_mace", number: 300 },        // 页锤
    { name: "boomerang", number: 100 }            // 回旋镖
  ];
  metal.forEach(metala => {
    weaponry.forEach(weaponrya => {
      tfc.heating(`kubejs:${metala.name}_${weaponrya.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, weaponrya.number))
        .useDurability(true);
    });
  });
const items = [
    { name: "copper_fragments", metal: "copper", number: 35, temperature: 1080 }, // 铜碎片
    { name: "bronze_fragments", metal: "bronze", number: 35, temperature: 950 }, // 青铜碎片
    { name: "iron_fragments", metal: 'cast_iron', number: 35, temperature: 1535 }, // 铁碎片
    { name: "rusty_iron_fragments", metal: 'cast_iron', number: 35, temperature: 1535 }, // 生锈的铁碎片
    { name: "silver_fragments", metal: "silver", number: 35, temperature: 961 }, // 银碎片
    { name: "gold_fragments", metal: "gold", number: 35, temperature: 1064 }, // 金碎片
    { name: "rose_gold_fragments", metal: "rose_gold", number: 35, temperature: 1064 }, // 玫瑰金碎片
    { name: "amber_gold_fragments", metal: "amber_gold", number: 35, temperature: 1064 }, // 琥珀金碎片
    { name: "copper_scrap", metal: "copper", number: 75, temperature: 1080 }, // 铜甲片
    { name: "rusty_copper_scrap", metal: "copper", number: 75, temperature: 1080 }, // 生锈的铜甲片
    { name: "rusty_bronze_scrap", metal: "bronze", number: 75, temperature: 950 }, // 生锈的青铜甲片
    { name: "bronze_scrap", metal: "bronze", number: 75, temperature: 950 }, // 青铜甲片
    { name: "rusty_iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 }, // 生锈的铁甲片
    { name: "iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 }, // 铁甲片
    { name: "ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 }, // 古代钢甲片
    { name: "rusty_ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 }, // 生锈的古代钢甲片
    { name: "copper_link", metal: "copper", number: 10, temperature: 1080 }, // 铜链环
    { name: "rusty_copper_link", metal: "copper", number: 10, temperature: 1080 }, // 生锈的铜链环
    { name: "bronze_link", metal: "bronze", number: 10, temperature: 950 }, // 青铜链环
    { name: "rusty_bronze_link", metal: "bronze", number: 10, temperature: 950 }, // 生锈的青铜链环
    { name: "rusty_iron_link", metal: 'cast_iron', number: 10, temperature: 1535 }, // 生锈的铁链环
    { name: "iron_link", metal: 'cast_iron', number: 10, temperature: 1535 }, // 铁链环
    { name: "crown", metal: "gold", number: 5, temperature: 1064 }, // 金币
    { name: "triple_copper", temperature: 1080, metal: "copper", number: 300 },
    { name: "triple_bismuth_bronze", temperature: 960, metal: "bismuth_bronze", number: 300 },
    { name: "triple_black_bronze", temperature: 1050, metal: "black_bronze", number: 300 },
    { name: "triple_bronze", temperature: 950, metal: "bronze", number: 300 },
    { name: "triple_black_steel", temperature: 1485, metal: "black_steel", number: 300 },
    { name: "triple_blue_steel", temperature: 1538, metal: "blue_steel", number: 300 },
    { name: "triple_red_steel", temperature: 1538, metal: "red_steel", number: 300 },
    { name: "triple_steel", temperature: 1540, metal: "steel", number: 300 },
    { name: "triple_wrought_iron", temperature: 1535, metal: "cast_iron", number: 300 }

   
];
 items.forEach(metala => {
    
      tfc.heating(`kubejs:${metala.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, metala.number))
    
  });







  
});