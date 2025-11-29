StartupEvents.registry("item", e => {
    // 定义所有武器材质
    let bismuth_bronze = Spartan.createWeaponMaterial("bismuth_bronze", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:bismuth_bronze", "kubejs:bismuth_bronze_trait");
    let black_bronze = Spartan.createWeaponMaterial("black_bronze", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:black_bronze", "kubejs:black_bronze_trait");
    let black_steel = Spartan.createWeaponMaterial("black_steel", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:black_steel", "kubejs:black_steel_trait");
    let blue_steel = Spartan.createWeaponMaterial("blue_steel", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:blue_steel", "kubejs:blue_steel_trait");
    let bronze = Spartan.createWeaponMaterial("bronze", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:bronze", "kubejs:bronze_trait");
    let copper = Spartan.createWeaponMaterial("copper", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:copper", "kubejs:copper_trait");
    let red_steel = Spartan.createWeaponMaterial("red_steel", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:red_steel", "kubejs:red_steel_trait");
    let steel = Spartan.createWeaponMaterial("steel", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:steel", "kubejs:steel_trait");
    let wrought_iron = Spartan.createWeaponMaterial("wrought_iron", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:wrought_iron", "kubejs:wrought_iron_trait");

    // 一、铜（copper）系列武器
    // 1. 长枪spear
    e.create("copper_spear", "spartanweaponry:spear").material(copper).setAttackDamage(5).setAttackSpeed(2).setDuration(300).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("copper_greatsword", "spartanweaponry:greatsword").material(copper).setAttackDamage(6).setAttackSpeed(1.4).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("copper_halberd", "spartanweaponry:halberd").material(copper).setAttackDamage(8).setAttackSpeed(0.8).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("copper_battle_hammer", "spartanweaponry:battle_hammer").material(copper).setAttackDamage(7).setAttackSpeed(1).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("copper_scythe", "spartanweaponry:scythe").material(copper).setAttackDamage(6).setAttackSpeed(1.4).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("copper_battleaxe", "spartanweaponry:battleaxe").material(copper).setAttackDamage(7).setAttackSpeed(1).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("copper_lance", "spartanweaponry:lance").material(copper).setAttackDamage(6).setAttackSpeed(1.4).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("copper_longsword", "spartanweaponry:longsword").material(copper).setAttackDamage(5).setAttackSpeed(1.6).setDuration(500).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("copper_katana", "spartanweaponry:katana").material(copper).setAttackDamage(4).setAttackSpeed(2).setDuration(500).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("copper_saber", "spartanweaponry:saber").material(copper).setAttackDamage(3).setAttackSpeed(1.6).setDuration(500).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("copper_flanged_mace", "spartanweaponry:flanged_mace").material(copper).setAttackDamage(6).setAttackSpeed(1).setDuration(500).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("copper_warhammer", "spartanweaponry:warhammer").material(copper).setAttackDamage(4).setAttackSpeed(1.2).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("copper_quarterstaff", "spartanweaponry:quarterstaff").material(copper).setAttackDamage(4).setAttackSpeed(1.6).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("copper_glaive", "spartanweaponry:glaive").material(copper).setAttackDamage(4).setAttackSpeed(1.6).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("copper_rapier", "spartanweaponry:rapier").material(copper).setAttackDamage(3).setAttackSpeed(2).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("copper_dagger", "spartanweaponry:dagger").material(copper).setAttackDamage(3).setAttackSpeed(2.5).setDuration(300).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("copper_parrying_dagger", "spartanweaponry:parrying_dagger").material(copper).setAttackDamage(3).setAttackSpeed(2.5).setDuration(300).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("copper_throwing_knife", "spartanweaponry:throwing_knife").material(copper).setAttackDamage(2).setAttackSpeed(2.5).setAmmo(16).setDuration(20).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("copper_pike", "spartanweaponry:pike").material(copper).setAttackDamage(5).setAttackSpeed(2).setDuration(300).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("copper_tomahawk", "spartanweaponry:tomahawk").material(copper).setAttackDamage(4).setAttackSpeed(1).setAmmo(8).setDuration(20).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("copper_boomerang", "spartanweaponry:boomerang").material(copper).setAttackDamage(4).setAttackSpeed(1.4).setAmmo(1).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("copper_javelin", "spartanweaponry:javelin").material(copper).setAttackDamage(4).setAttackSpeed(1).setAmmo(4).setDuration(20).tag('tfc:usable_on_tool_rack');

    // 二、青铜（bronze）系列武器
    // 1. 长枪spear
    e.create("bronze_spear", "spartanweaponry:spear").material(bronze).setAttackDamage(6).setAttackSpeed(2).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("bronze_greatsword", "spartanweaponry:greatsword").material(bronze).setAttackDamage(7.25).setAttackSpeed(1.4).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("bronze_halberd", "spartanweaponry:halberd").material(bronze).setAttackDamage(10).setAttackSpeed(0.8).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("bronze_battle_hammer", "spartanweaponry:battle_hammer").material(bronze).setAttackDamage(8).setAttackSpeed(1).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("bronze_scythe", "spartanweaponry:scythe").material(bronze).setAttackDamage(7.25).setAttackSpeed(1.4).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("bronze_battleaxe", "spartanweaponry:battleaxe").material(bronze).setAttackDamage(8).setAttackSpeed(1).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("bronze_lance", "spartanweaponry:lance").material(bronze).setAttackDamage(7.25).setAttackSpeed(1.4).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("bronze_longsword", "spartanweaponry:longsword").material(bronze).setAttackDamage(6).setAttackSpeed(1.6).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("bronze_katana", "spartanweaponry:katana").material(bronze).setAttackDamage(5).setAttackSpeed(2).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("bronze_saber", "spartanweaponry:saber").material(bronze).setAttackDamage(4).setAttackSpeed(1.6).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("bronze_flanged_mace", "spartanweaponry:flanged_mace").material(bronze).setAttackDamage(7.25).setAttackSpeed(1).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("bronze_warhammer", "spartanweaponry:warhammer").material(bronze).setAttackDamage(5).setAttackSpeed(1.2).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("bronze_quarterstaff", "spartanweaponry:quarterstaff").material(bronze).setAttackDamage(5).setAttackSpeed(1.6).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("bronze_glaive", "spartanweaponry:glaive").material(bronze).setAttackDamage(5).setAttackSpeed(1.6).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("bronze_rapier", "spartanweaponry:rapier").material(bronze).setAttackDamage(4).setAttackSpeed(2).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("bronze_dagger", "spartanweaponry:dagger").material(bronze).setAttackDamage(4).setAttackSpeed(2.5).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("bronze_parrying_dagger", "spartanweaponry:parrying_dagger").material(bronze).setAttackDamage(4).setAttackSpeed(2.5).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("bronze_throwing_knife", "spartanweaponry:throwing_knife").material(bronze).setAttackDamage(2).setAttackSpeed(2.5).setAmmo(16).setDuration(40).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("bronze_pike", "spartanweaponry:pike").material(bronze).setAttackDamage(6).setAttackSpeed(2).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("bronze_tomahawk", "spartanweaponry:tomahawk").material(bronze).setAttackDamage(4).setAttackSpeed(1).setAmmo(8).setDuration(40).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("bronze_boomerang", "spartanweaponry:boomerang").material(bronze).setAttackDamage(5).setAttackSpeed(1.4).setAmmo(1).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("bronze_javelin", "spartanweaponry:javelin").material(bronze).setAttackDamage(4).setAttackSpeed(1).setAmmo(4).setDuration(40).tag('tfc:usable_on_tool_rack');


    // 三、铋铜（bismuth_bronze）系列武器
    // 1. 长枪spear
    e.create("bismuth_bronze_spear", "spartanweaponry:spear").material(bismuth_bronze).setAttackDamage(6).setAttackSpeed(2.4).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("bismuth_bronze_greatsword", "spartanweaponry:greatsword").material(bismuth_bronze).setAttackDamage(7.25).setAttackSpeed(1.6).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("bismuth_bronze_halberd", "spartanweaponry:halberd").material(bismuth_bronze).setAttackDamage(10).setAttackSpeed(1).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("bismuth_bronze_battle_hammer", "spartanweaponry:battle_hammer").material(bismuth_bronze).setAttackDamage(8).setAttackSpeed(1.2).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("bismuth_bronze_scythe", "spartanweaponry:scythe").material(bismuth_bronze).setAttackDamage(7.25).setAttackSpeed(1.6).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("bismuth_bronze_battleaxe", "spartanweaponry:battleaxe").material(bismuth_bronze).setAttackDamage(8).setAttackSpeed(1.2).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("bismuth_bronze_lance", "spartanweaponry:lance").material(bismuth_bronze).setAttackDamage(7.25).setAttackSpeed(1.6).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("bismuth_bronze_longsword", "spartanweaponry:longsword").material(bismuth_bronze).setAttackDamage(6).setAttackSpeed(1.8).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("bismuth_bronze_katana", "spartanweaponry:katana").material(bismuth_bronze).setAttackDamage(5).setAttackSpeed(2.2).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("bismuth_bronze_saber", "spartanweaponry:saber").material(bismuth_bronze).setAttackDamage(4).setAttackSpeed(1.8).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("bismuth_bronze_flanged_mace", "spartanweaponry:flanged_mace").material(bismuth_bronze).setAttackDamage(7.25).setAttackSpeed(1.2).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("bismuth_bronze_warhammer", "spartanweaponry:warhammer").material(bismuth_bronze).setAttackDamage(5).setAttackSpeed(1.4).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("bismuth_bronze_quarterstaff", "spartanweaponry:quarterstaff").material(bismuth_bronze).setAttackDamage(5).setAttackSpeed(1.8).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("bismuth_bronze_glaive", "spartanweaponry:glaive").material(bismuth_bronze).setAttackDamage(5).setAttackSpeed(1.8).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("bismuth_bronze_rapier", "spartanweaponry:rapier").material(bismuth_bronze).setAttackDamage(4).setAttackSpeed(2).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("bismuth_bronze_dagger", "spartanweaponry:dagger").material(bismuth_bronze).setAttackDamage(4).setAttackSpeed(2.8).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("bismuth_bronze_parrying_dagger", "spartanweaponry:parrying_dagger").material(bismuth_bronze).setAttackDamage(4).setAttackSpeed(2.8).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("bismuth_bronze_throwing_knife", "spartanweaponry:throwing_knife").material(bismuth_bronze).setAttackDamage(2).setAttackSpeed(2.5).setAmmo(16).setDuration(30).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("bismuth_bronze_pike", "spartanweaponry:pike").material(bismuth_bronze).setAttackDamage(6).setAttackSpeed(2.4).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("bismuth_bronze_tomahawk", "spartanweaponry:tomahawk").material(bismuth_bronze).setAttackDamage(4).setAttackSpeed(1.5).setAmmo(8).setDuration(30).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("bismuth_bronze_boomerang", "spartanweaponry:boomerang").material(bismuth_bronze).setAttackDamage(5).setAttackSpeed(1.6).setAmmo(1).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("bismuth_bronze_javelin", "spartanweaponry:javelin").material(bismuth_bronze).setAttackDamage(4).setAttackSpeed(1.5).setAmmo(4).setDuration(30).tag('tfc:usable_on_tool_rack');

    // 四、黑铜（black_bronze）系列武器
    // 1. 长枪spear
    e.create("black_bronze_spear", "spartanweaponry:spear").material(black_bronze).setAttackDamage(7).setAttackSpeed(2).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("black_bronze_greatsword", "spartanweaponry:greatsword").material(black_bronze).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("black_bronze_halberd", "spartanweaponry:halberd").material(black_bronze).setAttackDamage(12).setAttackSpeed(0.8).setDuration(1200).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("black_bronze_battle_hammer", "spartanweaponry:battle_hammer").material(black_bronze).setAttackDamage(10).setAttackSpeed(1).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("black_bronze_scythe", "spartanweaponry:scythe").material(black_bronze).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("black_bronze_battleaxe", "spartanweaponry:battleaxe").material(black_bronze).setAttackDamage(10).setAttackSpeed(1).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("black_bronze_lance", "spartanweaponry:lance").material(black_bronze).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(900).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("black_bronze_longsword", "spartanweaponry:longsword").material(black_bronze).setAttackDamage(7).setAttackSpeed(1.6).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("black_bronze_katana", "spartanweaponry:katana").material(black_bronze).setAttackDamage(6).setAttackSpeed(2).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("black_bronze_saber", "spartanweaponry:saber").material(black_bronze).setAttackDamage(5).setAttackSpeed(1.6).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("black_bronze_flanged_mace", "spartanweaponry:flanged_mace").material(black_bronze).setAttackDamage(8.25).setAttackSpeed(1).setDuration(800).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("black_bronze_warhammer", "spartanweaponry:warhammer").material(black_bronze).setAttackDamage(6).setAttackSpeed(1.2).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("black_bronze_quarterstaff", "spartanweaponry:quarterstaff").material(black_bronze).setAttackDamage(6).setAttackSpeed(1.6).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("black_bronze_glaive", "spartanweaponry:glaive").material(black_bronze).setAttackDamage(6).setAttackSpeed(1.6).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("black_bronze_rapier", "spartanweaponry:rapier").material(black_bronze).setAttackDamage(5).setAttackSpeed(2).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("black_bronze_dagger", "spartanweaponry:dagger").material(black_bronze).setAttackDamage(10).setAttackSpeed(0.8).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("black_bronze_parrying_dagger", "spartanweaponry:parrying_dagger").material(black_bronze).setAttackDamage(5).setAttackSpeed(2.5).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("black_bronze_throwing_knife", "spartanweaponry:throwing_knife").material(black_bronze).setAttackDamage(2.5).setAttackSpeed(2.5).setAmmo(16).setDuration(30).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("black_bronze_pike", "spartanweaponry:pike").material(black_bronze).setAttackDamage(7).setAttackSpeed(2).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("black_bronze_tomahawk", "spartanweaponry:tomahawk").material(black_bronze).setAttackDamage(5).setAttackSpeed(1).setAmmo(8).setDuration(30).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("black_bronze_boomerang", "spartanweaponry:boomerang").material(black_bronze).setAttackDamage(6).setAttackSpeed(1.4).setAmmo(1).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("black_bronze_javelin", "spartanweaponry:javelin").material(black_bronze).setAttackDamage(5).setAttackSpeed(1).setAmmo(4).setDuration(30).tag('tfc:usable_on_tool_rack');

    // 五、锻铁（wrought_iron）系列武器
    // 1. 长枪spear
    e.create("wrought_iron_spear", "spartanweaponry:spear").material(wrought_iron).setAttackDamage(7).setAttackSpeed(2).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("wrought_iron_greatsword", "spartanweaponry:greatsword").material(wrought_iron).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(2200).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("wrought_iron_halberd", "spartanweaponry:halberd").material(wrought_iron).setAttackDamage(12).setAttackSpeed(0.8).setDuration(2200).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("wrought_iron_battle_hammer", "spartanweaponry:battle_hammer").material(wrought_iron).setAttackDamage(10).setAttackSpeed(1).setDuration(2200).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("wrought_iron_scythe", "spartanweaponry:scythe").material(wrought_iron).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(2200).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("wrought_iron_battleaxe", "spartanweaponry:battleaxe").material(wrought_iron).setAttackDamage(10).setAttackSpeed(1).setDuration(2200).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("wrought_iron_lance", "spartanweaponry:lance").material(wrought_iron).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(2200).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("wrought_iron_longsword", "spartanweaponry:longsword").material(wrought_iron).setAttackDamage(7).setAttackSpeed(1.6).setDuration(1800).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("wrought_iron_katana", "spartanweaponry:katana").material(wrought_iron).setAttackDamage(6).setAttackSpeed(2).setDuration(1800).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("wrought_iron_saber", "spartanweaponry:saber").material(wrought_iron).setAttackDamage(5).setAttackSpeed(1.6).setDuration(1800).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("wrought_iron_flanged_mace", "spartanweaponry:flanged_mace").material(wrought_iron).setAttackDamage(8.25).setAttackSpeed(1).setDuration(1800).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("wrought_iron_warhammer", "spartanweaponry:warhammer").material(wrought_iron).setAttackDamage(6).setAttackSpeed(1.2).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("wrought_iron_quarterstaff", "spartanweaponry:quarterstaff").material(wrought_iron).setAttackDamage(6).setAttackSpeed(1.6).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("wrought_iron_glaive", "spartanweaponry:glaive").material(wrought_iron).setAttackDamage(6).setAttackSpeed(1.6).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("wrought_iron_rapier", "spartanweaponry:rapier").material(wrought_iron).setAttackDamage(5).setAttackSpeed(2).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("wrought_iron_dagger", "spartanweaponry:dagger").material(wrought_iron).setAttackDamage(5).setAttackSpeed(2.5).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("wrought_iron_parrying_dagger", "spartanweaponry:parrying_dagger").material(wrought_iron).setAttackDamage(5).setAttackSpeed(2.6).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("wrought_iron_throwing_knife", "spartanweaponry:throwing_knife").material(wrought_iron).setAttackDamage(2.5).setAttackSpeed(2.5).setAmmo(16).setDuration(80).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("wrought_iron_pike", "spartanweaponry:pike").material(wrought_iron).setAttackDamage(7).setAttackSpeed(2).setDuration(1000).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("wrought_iron_tomahawk", "spartanweaponry:tomahawk").material(wrought_iron).setAttackDamage(5).setAttackSpeed(1).setAmmo(8).setDuration(80).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("wrought_iron_boomerang", "spartanweaponry:boomerang").material(wrought_iron).setAttackDamage(6).setAttackSpeed(1.4).setAmmo(1).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("wrought_iron_javelin", "spartanweaponry:javelin").material(wrought_iron).setAttackDamage(5).setAttackSpeed(1).setAmmo(4).setDuration(80).tag('tfc:usable_on_tool_rack');

    //  六、钢（steel）系列武器
    // 1. 长枪spear
    e.create("steel_spear", "spartanweaponry:spear").material(steel).setAttackDamage(7).setAttackSpeed(2).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("steel_greatsword", "spartanweaponry:greatsword").material(steel).setAttackDamage(9.5).setAttackSpeed(1.4).setDuration(3300).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("steel_halberd", "spartanweaponry:halberd").material(steel).setAttackDamage(14).setAttackSpeed(0.8).setDuration(3300).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("steel_battle_hammer", "spartanweaponry:battle_hammer").material(steel).setAttackDamage(12).setAttackSpeed(1).setDuration(3300).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("steel_scythe", "spartanweaponry:scythe").material(steel).setAttackDamage(9.5).setAttackSpeed(1.4).setDuration(3300).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("steel_battleaxe", "spartanweaponry:battleaxe").material(steel).setAttackDamage(12).setAttackSpeed(1).setDuration(3300).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("steel_lance", "spartanweaponry:lance").material(steel).setAttackDamage(9.5).setAttackSpeed(1.4).setDuration(3300).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("steel_longsword", "spartanweaponry:longsword").material(steel).setAttackDamage(8).setAttackSpeed(1.6).setDuration(2500).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("steel_katana", "spartanweaponry:katana").material(steel).setAttackDamage(7).setAttackSpeed(2).setDuration(2500).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("steel_saber", "spartanweaponry:saber").material(steel).setAttackDamage(6).setAttackSpeed(1.6).setDuration(2500).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("steel_flanged_mace", "spartanweaponry:flanged_mace").material(steel).setAttackDamage(9.5).setAttackSpeed(1).setDuration(2500).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("steel_warhammer", "spartanweaponry:warhammer").material(steel).setAttackDamage(7).setAttackSpeed(1.2).setDuration(2000).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("steel_quarterstaff", "spartanweaponry:quarterstaff").material(steel).setAttackDamage(7).setAttackSpeed(1.6).setDuration(2000).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("steel_glaive", "spartanweaponry:glaive").material(steel).setAttackDamage(7).setAttackSpeed(1.6).setDuration(2000).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("steel_rapier", "spartanweaponry:rapier").material(steel).setAttackDamage(5).setAttackSpeed(2).setDuration(2000).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("steel_dagger", "spartanweaponry:dagger").material(steel).setAttackDamage(5).setAttackSpeed(2.5).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(steel).setAttackDamage(5).setAttackSpeed(2.6).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("steel_throwing_knife", "spartanweaponry:throwing_knife").material(steel).setAttackDamage(3).setAttackSpeed(2.5).setAmmo(16).setDuration(150).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("steel_pike", "spartanweaponry:pike").material(steel).setAttackDamage(7).setAttackSpeed(2).setDuration(1500).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("steel_tomahawk", "spartanweaponry:tomahawk").material(steel).setAttackDamage(6).setAttackSpeed(1).setAmmo(8).setDuration(150).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("steel_boomerang", "spartanweaponry:boomerang").material(steel).setAttackDamage(7).setAttackSpeed(1.4).setAmmo(1).setDuration(2000).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("steel_javelin", "spartanweaponry:javelin").material(steel).setAttackDamage(6).setAttackSpeed(1).setAmmo(4).setDuration(150).tag('tfc:usable_on_tool_rack');

    // 七、黑钢（black_steel）系列武器
    // 1. 长枪spear
    e.create("black_steel_spear", "spartanweaponry:spear").material(black_steel).setAttackDamage(8).setAttackSpeed(2).setDuration(4000).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("black_steel_greatsword", "spartanweaponry:greatsword").material(black_steel).setAttackDamage(10).setAttackSpeed(1.4).setDuration(9000).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("black_steel_halberd", "spartanweaponry:halberd").material(black_steel).setAttackDamage(14).setAttackSpeed(0.8).setDuration(9000).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("black_steel_battle_hammer", "spartanweaponry:battle_hammer").material(black_steel).setAttackDamage(12).setAttackSpeed(1).setDuration(9000).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("black_steel_scythe", "spartanweaponry:scythe").material(black_steel).setAttackDamage(10).setAttackSpeed(1.4).setDuration(9000).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("black_steel_battleaxe", "spartanweaponry:battleaxe").material(black_steel).setAttackDamage(12).setAttackSpeed(1).setDuration(9000).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("black_steel_lance", "spartanweaponry:lance").material(black_steel).setAttackDamage(10).setAttackSpeed(1.4).setDuration(9000).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("black_steel_longsword", "spartanweaponry:longsword").material(black_steel).setAttackDamage(8).setAttackSpeed(1.6).setDuration(7000).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("black_steel_katana", "spartanweaponry:katana").material(black_steel).setAttackDamage(7).setAttackSpeed(2).setDuration(7000).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("black_steel_saber", "spartanweaponry:saber").material(black_steel).setAttackDamage(6).setAttackSpeed(1.6).setDuration(7000).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("black_steel_flanged_mace", "spartanweaponry:flanged_mace").material(black_steel).setAttackDamage(10).setAttackSpeed(1).setDuration(7000).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("black_steel_warhammer", "spartanweaponry:warhammer").material(black_steel).setAttackDamage(7).setAttackSpeed(1.2).setDuration(6000).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("black_steel_quarterstaff", "spartanweaponry:quarterstaff").material(black_steel).setAttackDamage(7).setAttackSpeed(1.6).setDuration(6000).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("black_steel_glaive", "spartanweaponry:glaive").material(black_steel).setAttackDamage(7).setAttackSpeed(1.6).setDuration(6000).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("black_steel_rapier", "spartanweaponry:rapier").material(black_steel).setAttackDamage(5.5).setAttackSpeed(2).setDuration(6000).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("black_steel_dagger", "spartanweaponry:dagger").material(black_steel).setAttackDamage(5.5).setAttackSpeed(2.5).setDuration(4000).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("black_steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(black_steel).setAttackDamage(5.5).setAttackSpeed(2.6).setDuration(4000).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("black_steel_throwing_knife", "spartanweaponry:throwing_knife").material(black_steel).setAttackDamage(3).setAttackSpeed(2.5).setAmmo(16).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("black_steel_pike", "spartanweaponry:pike").material(black_steel).setAttackDamage(8).setAttackSpeed(2).setDuration(4000).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("black_steel_tomahawk", "spartanweaponry:tomahawk").material(black_steel).setAttackDamage(6).setAttackSpeed(1).setAmmo(8).setDuration(600).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("black_steel_boomerang", "spartanweaponry:boomerang").material(black_steel).setAttackDamage(7).setAttackSpeed(1.4).setAmmo(1).setDuration(6000).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("black_steel_javelin", "spartanweaponry:javelin").material(black_steel).setAttackDamage(6).setAttackSpeed(1).setAmmo(4).setDuration(600).tag('tfc:usable_on_tool_rack');


    // 八、红钢（red_steel）系列武器
    // 1. 长枪spear
    e.create("red_steel_spear", "spartanweaponry:spear").material(red_steel).setAttackDamage(16).setAttackSpeed(1.5).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("red_steel_greatsword", "spartanweaponry:greatsword").material(red_steel).setAttackDamage(19.5).setAttackSpeed(1.3).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("red_steel_halberd", "spartanweaponry:halberd").material(red_steel).setAttackDamage(28).setAttackSpeed(0.7).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("red_steel_battle_hammer", "spartanweaponry:battle_hammer").material(red_steel).setAttackDamage(22).setAttackSpeed(0.9).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("red_steel_scythe", "spartanweaponry:scythe").material(red_steel).setAttackDamage(19.5).setAttackSpeed(1.3).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("red_steel_battleaxe", "spartanweaponry:battleaxe").material(red_steel).setAttackDamage(22).setAttackSpeed(0.9).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("red_steel_lance", "spartanweaponry:lance").material(red_steel).setAttackDamage(19.5).setAttackSpeed(1.3).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("red_steel_longsword", "spartanweaponry:longsword").material(red_steel).setAttackDamage(16).setAttackSpeed(1.5).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("red_steel_katana", "spartanweaponry:katana").material(red_steel).setAttackDamage(14).setAttackSpeed(1.8).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("red_steel_saber", "spartanweaponry:saber").material(red_steel).setAttackDamage(12).setAttackSpeed(1.5).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("red_steel_flanged_mace", "spartanweaponry:flanged_mace").material(red_steel).setAttackDamage(19.5).setAttackSpeed(0.9).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("red_steel_warhammer", "spartanweaponry:warhammer").material(red_steel).setAttackDamage(14).setAttackSpeed(1.1).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("red_steel_quarterstaff", "spartanweaponry:quarterstaff").material(red_steel).setAttackDamage(14).setAttackSpeed(1.5).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("red_steel_glaive", "spartanweaponry:glaive").material(red_steel).setAttackDamage(14).setAttackSpeed(1.5).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("red_steel_rapier", "spartanweaponry:rapier").material(red_steel).setAttackDamage(11).setAttackSpeed(1.8).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("red_steel_dagger", "spartanweaponry:dagger").material(red_steel).setAttackDamage(20).setAttackSpeed(0.8).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("red_steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(red_steel).setAttackDamage(11).setAttackSpeed(2.3).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("red_steel_throwing_knife", "spartanweaponry:throwing_knife").material(red_steel).setAttackDamage(7).setAttackSpeed(2.5).setAmmo(16).setDuration(300).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("red_steel_pike", "spartanweaponry:pike").material(red_steel).setAttackDamage(16).setAttackSpeed(1.8).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("red_steel_tomahawk", "spartanweaponry:tomahawk").material(red_steel).setAttackDamage(13).setAttackSpeed(1).setAmmo(8).setDuration(300).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("red_steel_boomerang", "spartanweaponry:boomerang").material(red_steel).setAttackDamage(14).setAttackSpeed(1.3).setAmmo(1).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("red_steel_javelin", "spartanweaponry:javelin").material(red_steel).setAttackDamage(40).setAttackSpeed(0.2).setAmmo(1).setDuration(300).tag('tfc:usable_on_tool_rack');

    // 九、蓝钢（blue_steel）系列武器
    // 1. 长枪spear
    e.create("blue_steel_spear", "spartanweaponry:spear").material(blue_steel).setAttackDamage(11.5).setAttackSpeed(2.8).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 2. 大剑greatsword
    e.create("blue_steel_greatsword", "spartanweaponry:greatsword").material(blue_steel).setAttackDamage(13.25).setAttackSpeed(2.0).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 3. 战戟halberd
    e.create("blue_steel_halberd", "spartanweaponry:halberd").material(blue_steel).setAttackDamage(20).setAttackSpeed(1.1).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 4. 大锤battle_hammer
    e.create("blue_steel_battle_hammer", "spartanweaponry:battle_hammer").material(blue_steel).setAttackDamage(15).setAttackSpeed(1.6).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 5. 战镰scythe
    e.create("blue_steel_scythe", "spartanweaponry:scythe").material(blue_steel).setAttackDamage(13.25).setAttackSpeed(2.0).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 6. 双刃斧battleaxe
    e.create("blue_steel_battleaxe", "spartanweaponry:battleaxe").material(blue_steel).setAttackDamage(15).setAttackSpeed(1.6).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 7. 骑枪lance
    e.create("blue_steel_lance", "spartanweaponry:lance").material(blue_steel).setAttackDamage(13.25).setAttackSpeed(2.0).setDuration(4400).tag('tfc:usable_on_tool_rack');
    // 8. 长刀longsword
    e.create("blue_steel_longsword", "spartanweaponry:longsword").material(blue_steel).setAttackDamage(12).setAttackSpeed(2.2).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 9. 太刀katana
    e.create("blue_steel_katana", "spartanweaponry:katana").material(blue_steel).setAttackDamage(10).setAttackSpeed(2.8).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 10. 军刀saber
    e.create("blue_steel_saber", "spartanweaponry:saber").material(blue_steel).setAttackDamage(9).setAttackSpeed(2.2).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 11. 页锤flanged_mace
    e.create("blue_steel_flanged_mace", "spartanweaponry:flanged_mace").material(blue_steel).setAttackDamage(13.25).setAttackSpeed(1.6).setDuration(3800).tag('tfc:usable_on_tool_rack');
    // 12. 战锤warhammer
    e.create("blue_steel_warhammer", "spartanweaponry:warhammer").material(blue_steel).setAttackDamage(10).setAttackSpeed(1.8).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 13. 长棍quarterstaff
    e.create("blue_steel_quarterstaff", "spartanweaponry:quarterstaff").material(blue_steel).setAttackDamage(10).setAttackSpeed(2.2).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 14. 长柄刀glaive
    e.create("blue_steel_glaive", "spartanweaponry:glaive").material(blue_steel).setAttackDamage(10).setAttackSpeed(2.2).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 15. 迅捷剑rapier
    e.create("blue_steel_rapier", "spartanweaponry:rapier").material(blue_steel).setAttackDamage(7).setAttackSpeed(3.2).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 16. （短）匕首dagger
    e.create("blue_steel_dagger", "spartanweaponry:dagger").material(blue_steel).setAttackDamage(7).setAttackSpeed(3.5).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 17. （短）格挡匕首parrying_dagger
    e.create("blue_steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(blue_steel).setAttackDamage(7).setAttackSpeed(3.6).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 18. （短）飞刀throwing_knife
    e.create("blue_steel_throwing_knife", "spartanweaponry:throwing_knife").material(blue_steel).setAttackDamage(3).setAttackSpeed(4).setAmmo(200).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 19. （长+）长矛pike
    e.create("blue_steel_pike", "spartanweaponry:pike").material(blue_steel).setAttackDamage(11.5).setAttackSpeed(2.8).setDuration(2100).tag('tfc:usable_on_tool_rack');
    // 20. 印第安投斧tomahawk
    e.create("blue_steel_tomahawk", "spartanweaponry:tomahawk").material(blue_steel).setAttackDamage(9).setAttackSpeed(1).setAmmo(8).setDuration(400).tag('tfc:usable_on_tool_rack');
    // 21. 回旋镖boomerang
    e.create("blue_steel_boomerang", "spartanweaponry:boomerang").material(blue_steel).setAttackDamage(10).setAttackSpeed(2.0).setAmmo(1).setDuration(3000).tag('tfc:usable_on_tool_rack');
    // 22. 标枪javelin
    e.create("blue_steel_javelin", "spartanweaponry:javelin").material(blue_steel).setAttackDamage(9).setAttackSpeed(1).setAmmo(4).setDuration(400).tag('tfc:usable_on_tool_rack');


})
