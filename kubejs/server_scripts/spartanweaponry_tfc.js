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
        // 大锤
        e.add("tfc:deals_crushing_damage", `kubejs:${material}_battle_hammer`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_battle_hammer`);
        e.add("spartanweaponry:battle_hammers", `kubejs:${material}_battle_hammer`);

        // 战锤
        e.add("tfc:deals_crushing_damage", `kubejs:${material}_warhammer`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_warhammer`);
        e.add("spartanweaponry:warhammers", `kubejs:${material}_warhammer`);

        // 页锤
        e.add("tfc:deals_crushing_damage", `kubejs:${material}_flanged_mace`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_flanged_mace`);
        e.add("spartanweaponry:flanged_maces", `kubejs:${material}_flanged_mace`);

        // 长棍
        e.add("tfc:deals_crushing_damage", `kubejs:${material}_quarterstaff`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_quarterstaff`);
        e.add("spartanweaponry:quarterstaves", `kubejs:${material}_quarterstaff`);

        // 回旋镖
        e.add("tfc:deals_crushing_damage", `kubejs:${material}_boomerang`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_boomerang`);
        e.add("spartanweaponry:boomerangs", `kubejs:${material}_boomerang`);
    });

    materials.forEach(material => {
        // 投斧
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_tomahawk`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_tomahawk`);
        e.add("spartanweaponry:tomahawks", `kubejs:${material}_tomahawk`);

        // 长刀
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_longsword`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_longsword`);
        e.add("spartanweaponry:longswords", `kubejs:${material}_longsword`);

        // 太刀
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_katana`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_katana`);
        e.add("spartanweaponry:katanas", `kubejs:${material}_katana`);

        // 长柄刀
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_glaive`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_glaive`);
        e.add("spartanweaponry:glaives", `kubejs:${material}_glaive`);

        // 战斧
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_battleaxe`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_battleaxe`);
        e.add("spartanweaponry:battleaxes", `kubejs:${material}_battleaxe`);

        // 军刀
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_saber`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_saber`);
        e.add("spartanweaponry:sabers", `kubejs:${material}_saber`);

        // 戟
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_halberd`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_halberd`);
        e.add("spartanweaponry:halberds", `kubejs:${material}_halberd`);

        // 大剑
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_greatsword`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_greatsword`);
        e.add("spartanweaponry:greats_words", `kubejs:${material}_greatsword`);

        // 战镰
        e.add("tfc:deals_slashing_damage", `kubejs:${material}_scythe`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_scythe`);
        e.add("spartanweaponry:scythes", `kubejs:${material}_scythe`);
    });

    materials.forEach(material => {
        // 飞刀
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_throwing_knife`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_throwing_knife`);
        e.add("spartanweaponry:throwing_knives", `kubejs:${material}_throwing_knife`);

        // 迅捷剑
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_rapier`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_rapier`);
        e.add("spartanweaponry:rapiers", `kubejs:${material}_rapier`);

        // 骑枪
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_lance`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_lance`);
        e.add("spartanweaponry:lances", `kubejs:${material}_lance`);

        // 长矛
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_pike`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_pike`);
        e.add("spartanweaponry:pikes", `kubejs:${material}_pike`);

        // 长枪
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_spear`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_spear`);
        e.add("spartanweaponry:spears", `kubejs:${material}_spear`);

        // 标枪
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_javelin`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_javelin`);
        e.add("spartanweaponry:javelins", `kubejs:${material}_javelin`);

        // 匕首
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_dagger`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_dagger`);
        e.add("spartanweaponry:daggers", `kubejs:${material}_dagger`);

        // 格挡匕首
        e.add("tfc:deals_piercing_damage", `kubejs:${material}_parrying_dagger`);
        e.add("spartanweaponry:oilable_weapons", `kubejs:${material}_parrying_dagger`);
        e.add("spartanweaponry:parrying_daggers", `kubejs:${material}_parrying_dagger`);

        // 火枪手刺剑
        e.add("tfc:deals_piercing_damage", `warriorsofpastepoch:musketeer_rapier`);
        // 燧发枪
        e.add("tfc:deals_crushing_damage", `warriorsofpastepoch:pistol`);
        // 火枪
        e.add("tfc:deals_piercing_damage", `warriorsofpastepoch:musket`);

    });

})