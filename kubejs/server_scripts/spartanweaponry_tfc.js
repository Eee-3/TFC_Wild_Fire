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
          e.add("tfc:deals_crushing_damage", [`kubejs:${material}_battle_hammer`,"spartanweaponry:oilable_weapons","spartanweaponry:battle_hammers"]);        // 大锤
          e.add("tfc:deals_crushing_damage", [`kubejs:${material}_warhammer`,"spartanweaponry:oilable_weapons","spartanweaponry:warhammers"]);            // 战锤
          e.add("tfc:deals_crushing_damage", [`kubejs:${material}_flanged_mace`,"spartanweaponry:oilable_weapons","spartanweaponry:flanged_maces"]);         // 页锤
          e.add("tfc:deals_crushing_damage", [`kubejs:${material}_quarterstaff`,"spartanweaponry:oilable_weapons","spartanweaponry:quarterstaves"]);         // 长棍
          e.add("tfc:deals_crushing_damage", [`kubejs:${material}_boomerang`,"spartanweaponry:oilable_weapons","spartanweaponry:boomerangs"]);            // 回旋镖
     })
     materials.forEach(material => {
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_tomahawk`,"spartanweaponry:oilable_weapons","spartanweaponry:tomahawks"]);             // 投斧
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_longsword`,"spartanweaponry:oilable_weapons","spartanweaponry:longswords"]);            // 长刀
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_katana`,"spartanweaponry:oilable_weapons","spartanweaponry:katanas"]);               // 太刀
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_glaive`,"spartanweaponry:oilable_weapons","spartanweaponry:glaives"]);               // 长柄刀
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_battleaxe`,"spartanweaponry:oilable_weapons","spartanweaponry:battleaxes"]);            // 战斧
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_saber`,"spartanweaponry:oilable_weapons","spartanweaponry:sabers"]);                // 军刀
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_halberd`,"spartanweaponry:oilable_weapons","spartanweaponry:halberds"]);              // 戟
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_greatsword`,"spartanweaponry:oilable_weapons","spartanweaponry:greats_words"]);              // 大剑
          e.add("tfc:deals_slashing_damage", [`kubejs:${material}_scythe`,"spartanweaponry:oilable_weapons","spartanweaponry:scythes"]);              // 战镰
     }) 

     materials.forEach(material => {
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_throwing_knife`,"spartanweaponry:oilable_weapons","spartanweaponry:throwing_knives"]);       // 飞刀
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_rapier`,"spartanweaponry:oilable_weapons","spartanweaponry:rapiers"]);               // 迅捷剑
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_lance`,"spartanweaponry:oilable_weapons","spartanweaponry:lances"]);                // 骑枪
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_pike`,"spartanweaponry:oilable_weapons","spartanweaponry:pikes"]);                 // 长矛
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_spear`,"spartanweaponry:oilable_weapons","spartanweaponry:spears"]);                // 长枪
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_javelin`,"spartanweaponry:oilable_weapons","spartanweaponry:javelins"]);              // 标枪
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_dagger`,"spartanweaponry:oilable_weapons","spartanweaponry:daggers"]);               // 匕首
          e.add("tfc:deals_piercing_damage", [`kubejs:${material}_parrying_dagger`,"spartanweaponry:oilable_weapons","spartanweaponry:parrying_daggers"]);      // 格挡匕首
     })


})