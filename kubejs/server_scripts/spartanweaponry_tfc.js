ServerEvents.tags("spartanweaponry:weapon_traits", e => {
     e.add("kubejs:copper_trait", [])
     e.add("kubejs:bronze_trait", [])
     e.add("kubejs:bismuth_bronze_trait", [])
     e.add("kubejs:black_bronze_trait", [])
     e.add("kubejs:wrought_iron_trait", [])
     e.add("kubejs:steel_trait", [])
     e.add("kubejs:black_steel_trait", [])
     e.add("kubejs:blue_steel_trait", [])
     e.add("kubejs:red_steel_trait", [])
})
ServerEvents.tags("item", e => {
     const materials = [
          "copper",
          "bronze",
          "bismuth_bronze",
          "black_bronze",
          "wrought_iron",
          "steel",
          "red_steel",
          "blue_steel",
          "black_steel"
     ];

     materials.forEach(material => {
          e.add("tfc:deals_crushing_damage", `kubejs:${material}_battle_hammer`);       // 大锤
          e.add("tfc:deals_crushing_damage", `kubejs:${material}_warhammer`);           // 战锤
          e.add("tfc:deals_crushing_damage", `kubejs:${material}_flanged_mace`);        // 页锤
          e.add("tfc:deals_crushing_damage", `kubejs:${material}_quarterstaff`);        // 长棍
          e.add("tfc:deals_crushing_damage", `kubejs:${material}_boomerang`);           // 回旋镖
     });

     materials.forEach(material => {
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_tomahawk`);            // 投斧
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_longsword`);           // 长刀
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_katana`);              // 太刀
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_glaive`);              // 长柄刀
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_battleaxe`);           // 战斧
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_saber`);               // 军刀
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_halberd`);             // 戟
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_greatsword`);             // 大剑
          e.add("tfc:deals_slashing_damage", `kubejs:${material}_scythe`);             // 战镰
     });

     materials.forEach(material => {
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_throwing_knife`);      // 飞刀
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_rapier`);              // 迅捷剑
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_lance`);               // 骑枪
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_pike`);                // 长矛
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_spear`);               // 长枪
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_javelin`);             // 标枪
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_dagger`);              // 匕首
          e.add("tfc:deals_piercing_damage", `kubejs:${material}_parrying_dagger`);     // 格挡匕首
     });


})