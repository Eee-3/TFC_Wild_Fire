StartupEvents.registry("item", e => {
    let testMaterial = Spartan.createWeaponMaterial
    ("test", 100, 3, 20, 10, 0xFF00FF, 0xFFFF00, "kubejs:test", "kubejs:test_trait")
    // 一、铜（copper）系列武器
    e.create("aaaaa", "spartanweaponry:greatsword")
        .material(testMaterial)
        .setAttackDamage(2147473646)
        .setAttackSpeed(999)
        .setDuration(999)
    
       
    


   // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("copper_greatsword", "spartanweaponry:greatsword")
        .material(testMaterial)
        .setAttackDamage(6)
        .setAttackSpeed(1.4)
        .setDuration(600);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("copper_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(8).setAttackSpeed(0.8).setDuration(600);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("copper_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(7).setAttackSpeed(1).setDuration(600);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("copper_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.4).setDuration(600);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("copper_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(7).setAttackSpeed(1).setDuration(600);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("copper_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.4).setDuration(600);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("copper_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.6).setDuration(500);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("copper_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(4).setAttackSpeed(2).setDuration(500);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("copper_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(3).setAttackSpeed(1.6).setDuration(500);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("copper_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(6).setAttackSpeed(1).setDuration(500);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("copper_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.2).setDuration(400);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("copper_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.6).setDuration(400);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("copper_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.6).setDuration(400);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("copper_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(3).setAttackSpeed(2).setDuration(400);
    // 16. （短）匕首（轻 型）- spartanweaponry:dagger
    e.create("copper_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(3).setAttackSpeed(2.5).setDuration(300);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("copper_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(3).setAttackSpeed(2.5).setDuration(300);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量16）
    e.create("copper_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(2).setAttackSpeed(2.5).setAmmo(16).setDuration(20);
    // 19. （双）（长+）长矛（轻型）- spartanweaponry:pike
    e.create("copper_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(5).setAttackSpeed(2).setDuration(300);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量8）
    e.create("copper_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(4).setAttackSpeed(1).setAmmo(8).setDuration(20);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量1）
    e.create("copper_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.4).setAmmo(1).setDuration(400);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量4）
    e.create("copper_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(4).setAttackSpeed(1).setAmmo(4).setDuration(20);

    // 二、青铜（bronze）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("bronze_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1.4).setDuration(1200);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("bronze_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(10).setAttackSpeed(0.8).setDuration(1200);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("bronze_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(8).setAttackSpeed(1).setDuration(1200);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("bronze_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1.4).setDuration(1200);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("bronze_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(8).setAttackSpeed(1).setDuration(1200);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("bronze_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1.4).setDuration(1200);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("bronze_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.6).setDuration(1000);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("bronze_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(5).setAttackSpeed(2).setDuration(1000);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("bronze_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.6).setDuration(1000);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("bronze_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1).setDuration(1000);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("bronze_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.2).setDuration(900);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("bronze_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.6).setDuration(900);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("bronze_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.6).setDuration(900);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("bronze_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(4).setAttackSpeed(2).setDuration(900);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("bronze_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(4).setAttackSpeed(2.5).setDuration(600);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("bronze_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(4).setAttackSpeed(2.5).setDuration(600);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量16）
    e.create("bronze_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(2).setAttackSpeed(2.5).setAmmo(16).setDuration(40);
    // 19. （双）（长+）长矛（轻型）- spartanweaponry:pike
    e.create("bronze_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(6).setAttackSpeed(2).setDuration(600);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量8）
    e.create("bronze_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(4).setAttackSpeed(1).setAmmo(8).setDuration(40);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量1）
    e.create("bronze_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.4).setAmmo(1).setDuration(900);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量4）
    e.create("bronze_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(4).setAttackSpeed(1).setAmmo(4).setDuration(40);

    // 三、铋铜（bismuth_bronze）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("bismuth_bronze_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1.6).setDuration(900);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("bismuth_bronze_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(10).setAttackSpeed(1).setDuration(1200);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("bismuth_bronze_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(8).setAttackSpeed(1.2).setDuration(900);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("bismuth_bronze_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1.6).setDuration(900);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("bismuth_bronze_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(8).setAttackSpeed(1.2).setDuration(900);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("bismuth_bronze_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1.6).setDuration(900);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("bismuth_bronze_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.8).setDuration(800);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("bismuth_bronze_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(5).setAttackSpeed(2.2).setDuration(800);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("bismuth_bronze_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.8).setDuration(800);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("bismuth_bronze_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(7.25).setAttackSpeed(1.2).setDuration(800);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("bismuth_bronze_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.4).setDuration(600);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("bismuth_bronze_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.8).setDuration(600);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("bismuth_bronze_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.8).setDuration(600);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("bismuth_bronze_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(4).setAttackSpeed(2).setDuration(600);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("bismuth_bronze_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(4).setAttackSpeed(2.8).setDuration(400);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("bismuth_bronze_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(4).setAttackSpeed(2.8).setDuration(400);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量 16）
    e.create("bismuth_bronze_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(2).setAttackSpeed(2.5).setAmmo(16).setDuration(30);
    // 19. （双）（长 +）长矛（轻型）- spartanweaponry:pike
    e.create("bismuth_bronze_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(6).setAttackSpeed(2.4).setDuration(400);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量 8）
    e.create("bismuth_bronze_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.5).setAmmo(8).setDuration(30);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量 1）
    e.create("bismuth_bronze_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.6).setAmmo(1).setDuration(600);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量 4）
    e.create("bismuth_bronze_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(4).setAttackSpeed(1.5).setAmmo(4).setDuration(30);

    // 四、黑铜（black_bronze，注：原金属列表写为 “黑铜”，对应英文 “black_bronze”）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("black_bronze_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(900);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("black_bronze_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(12).setAttackSpeed(0.8).setDuration(1200);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("black_bronze_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(10).setAttackSpeed(1).setDuration(900);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("black_bronze_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(900);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("black_bronze_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(10).setAttackSpeed(1).setDuration(900);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("black_bronze_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(900);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("black_bronze_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.6).setDuration(800);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("black_bronze_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(6).setAttackSpeed(2).setDuration(800);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("black_bronze_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.6).setDuration(800);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("black_bronze_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1).setDuration(800);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("black_bronze_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.2).setDuration(600);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("black_bronze_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.6).setDuration(600);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("black_bronze_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.6).setDuration(600);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("black_bronze_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(5).setAttackSpeed(2).setDuration(600);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("black_bronze_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(10).setAttackSpeed(0.8).setDuration(400);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("black_bronze_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(5).setAttackSpeed(2.5).setDuration(400);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量 16）
    e.create("black_bronze_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(2.5).setAttackSpeed(2.5).setAmmo(16).setDuration(30);
    // 19. （双）（长 +）长矛（轻型）- spartanweaponry:pike
    e.create("black_bronze_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(7).setAttackSpeed(2).setDuration(400);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量 8）
    e.create("black_bronze_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(5).setAttackSpeed(1).setAmmo(8).setDuration(30);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量 1）
    e.create("black_bronze_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.4).setAmmo(1).setDuration(600);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量 4）
    e.create("black_bronze_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(5).setAttackSpeed(1).setAmmo(4).setDuration(30);

    // 五、锻铁（wrought_iron）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("wrought_iron_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(2200);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("wrought_iron_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(12).setAttackSpeed(0.8).setDuration(2200);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("wrought_iron_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(10).setAttackSpeed(1).setDuration(2200);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("wrought_iron_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(2200);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("wrought_iron_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(10).setAttackSpeed(1).setDuration(2200);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("wrought_iron_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1.4).setDuration(2200);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("wrought_iron_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.6).setDuration(1800);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("wrought_iron_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(6).setAttackSpeed(2).setDuration(1800);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("wrought_iron_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(5).setAttackSpeed(1.6).setDuration(1800);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("wrought_iron_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(8.25).setAttackSpeed(1).setDuration(1800);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("wrought_iron_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.2).setDuration(1500);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("wrought_iron_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.6).setDuration(1500);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("wrought_iron_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.6).setDuration(1500);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("wrought_iron_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(5).setAttackSpeed(2).setDuration(1500);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("wrought_iron_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(5).setAttackSpeed(2.5).setDuration(1000);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("wrought_iron_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(5).setAttackSpeed(2.6).setDuration(1000);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量 16）
    e.create("wrought_iron_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(2.5).setAttackSpeed(2.5).setAmmo(16).setDuration(80);
    // 19. （双）（长 +）长矛（轻型）- spartanweaponry:pike
    e.create("wrought_iron_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(7).setAttackSpeed(2).setDuration(1000);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量 8）
    e.create("wrought_iron_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(5).setAttackSpeed(1).setAmmo(8).setDuration(80);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量 1）
    e.create("wrought_iron_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.4).setAmmo(1).setDuration(1500);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量 4）
    e.create("wrought_iron_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(5).setAttackSpeed(1).setAmmo(4).setDuration(80);

    // 六、钢（steel）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("steel_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(9.5).setAttackSpeed(1.4).setDuration(3300);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("steel_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(14).setAttackSpeed(0.8).setDuration(3300);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("steel_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(12).setAttackSpeed(1).setDuration(3300);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("steel_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(9.5).setAttackSpeed(1.4).setDuration(3300);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("steel_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(12).setAttackSpeed(1).setDuration(3300);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("steel_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(9.5).setAttackSpeed(1.4).setDuration(3300);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("steel_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(8).setAttackSpeed(1.6).setDuration(2500);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("steel_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(7).setAttackSpeed(2).setDuration(2500);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("steel_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.6).setDuration(2500);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("steel_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(9.5).setAttackSpeed(1).setDuration(2500);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("steel_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.2).setDuration(2000);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("steel_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.6).setDuration(2000);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("steel_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.6).setDuration(2000);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("steel_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(5).setAttackSpeed(2).setDuration(2000);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("steel_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(5).setAttackSpeed(2.5).setDuration(1500);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(5).setAttackSpeed(2.6).setDuration(1500);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量 16）
    e.create("steel_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(3).setAttackSpeed(2.5).setAmmo(16).setDuration(150);
    // 19. （双）（长 +）长矛（轻型）- spartanweaponry:pike
    e.create("steel_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(7).setAttackSpeed(2).setDuration(1500);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量 8）
    e.create("steel_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(6).setAttackSpeed(1).setAmmo(8).setDuration(150);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量 1）
    e.create("steel_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.4).setAmmo(1).setDuration(2000);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量 4）
    e.create("steel_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(6).setAttackSpeed(1).setAmmo(4).setDuration(150);

    // 七、黑钢（black_steel）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("black_steel_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(10).setAttackSpeed(1.4).setDuration(9000);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("black_steel_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(14).setAttackSpeed(0.8).setDuration(9000);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("black_steel_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(12).setAttackSpeed(1).setDuration(9000);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("black_steel_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(10).setAttackSpeed(1.4).setDuration(9000);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("black_steel_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(12).setAttackSpeed(1).setDuration(9000);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("black_steel_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(10).setAttackSpeed(1.4).setDuration(9000);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("black_steel_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(8).setAttackSpeed(1.6).setDuration(7000);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("black_steel_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(7).setAttackSpeed(2).setDuration(7000);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("black_steel_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(6).setAttackSpeed(1.6).setDuration(7000);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("black_steel_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(10).setAttackSpeed(1).setDuration(7000);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("black_steel_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.2).setDuration(6000);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("black_steel_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.6).setDuration(6000);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("black_steel_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.6).setDuration(6000);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("black_steel_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(5.5).setAttackSpeed(2).setDuration(6000);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("black_steel_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(5.5).setAttackSpeed(2.5).setDuration(4000);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("black_steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(5.5).setAttackSpeed(2.6).setDuration(4000);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量 16）
    e.create("black_steel_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(3).setAttackSpeed(2.5).setAmmo(16).setDuration(600);
    // 19. （双）（长 +）长矛（轻型）- spartanweaponry:pike
    e.create("black_steel_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(8).setAttackSpeed(2).setDuration(4000);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量 8）
    e.create("black_steel_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(6).setAttackSpeed(1).setAmmo(8).setDuration(600);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量 1）
    e.create("black_steel_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(7).setAttackSpeed(1.4).setAmmo(1).setDuration(6000);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量 4）
    e.create("black_steel_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(6).setAttackSpeed(1).setAmmo(4).setDuration(600);

    // 八、红钢（red_steel）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("red_steel_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(19.5).setAttackSpeed(1.3).setDuration(4400);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("red_steel_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(28).setAttackSpeed(0.7).setDuration(4400);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("red_steel_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(22).setAttackSpeed(1).setDuration(4400);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("red_steel_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(19.5).setAttackSpeed(1.3).setDuration(4400);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("red_steel_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(22).setAttackSpeed(1).setDuration(4400);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("red_steel_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(19.5).setAttackSpeed(1.3).setDuration(4400);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("red_steel_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(16).setAttackSpeed(1.5).setDuration(3800);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("red_steel_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(14).setAttackSpeed(1.8).setDuration(3800);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("red_steel_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(12).setAttackSpeed(1.5).setDuration(3800);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("red_steel_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(19.5).setAttackSpeed(1).setDuration(3800);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("red_steel_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(14).setAttackSpeed(1.1).setDuration(3000);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("red_steel_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(14).setAttackSpeed(1.5).setDuration(3000);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("red_steel_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(14).setAttackSpeed(1.5).setDuration(3000);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("red_steel_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(11).setAttackSpeed(1.8).setDuration(3000);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("red_steel_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(20).setAttackSpeed(0.8).setDuration(2100);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("red_steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(11).setAttackSpeed(2.3).setDuration(2100);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量 16）
    e.create("red_steel_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(7).setAttackSpeed(2.5).setAmmo(16).setDuration(300);
    // 19. （双）（长 +）长矛（轻型）- spartanweaponry:pike
    e.create("red_steel_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(16).setAttackSpeed(1.8).setDuration(2100);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量 8）
    e.create("red_steel_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(13).setAttackSpeed(1).setAmmo(8).setDuration(300);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量 1）
    e.create("red_steel_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(14).setAttackSpeed(1.3).setAmmo(1).setDuration(3000);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量 4）
    e.create("red_steel_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(40).setAttackSpeed(0.2).setAmmo(4).setDuration(300);

    // 九、蓝钢（blue_steel）系列武器


    // 2. （双）（长）大剑（重型）- spartanweaponry:greatsword
    e.create("blue_steel_greatsword", "spartanweaponry:greatsword").material(testMaterial).setAttackDamage(13.25).setAttackSpeed(2.0).setDuration(4400);
    // 3. （双）（长）战戟（重型）- spartanweaponry:halberd
    e.create("blue_steel_halberd", "spartanweaponry:halberd").material(testMaterial).setAttackDamage(20).setAttackSpeed(1.1).setDuration(4400);
    // 4. （双）大锤（重型）- spartanweaponry:warhammer
    e.create("blue_steel_warhammer", "spartanweaponry:warhammer").material(testMaterial).setAttackDamage(15).setAttackSpeed(1.6).setDuration(4400);
    // 5. （双）（长）战镰（重型）- spartanweaponry:scythe
    e.create("blue_steel_scythe", "spartanweaponry:scythe").material(testMaterial).setAttackDamage(13.25).setAttackSpeed(2.0).setDuration(4400);
    // 6. （双）双刃斧（重型）- spartanweaponry:battleaxe
    e.create("blue_steel_battleaxe", "spartanweaponry:battleaxe").material(testMaterial).setAttackDamage(15).setAttackSpeed(1.6).setDuration(4400);
    // 7. （双）（长）骑枪（重型）- spartanweaponry:lance
    e.create("blue_steel_lance", "spartanweaponry:lance").material(testMaterial).setAttackDamage(13.25).setAttackSpeed(2.0).setDuration(4400);
    // 8. （双）长刀（中型）- spartanweaponry:longsword
    e.create("blue_steel_longsword", "spartanweaponry:longsword").material(testMaterial).setAttackDamage(12).setAttackSpeed(2.2).setDuration(3800);
    // 9. （双）太刀（中型）- spartanweaponry:katana
    e.create("blue_steel_katana", "spartanweaponry:katana").material(testMaterial).setAttackDamage(10).setAttackSpeed(2.8).setDuration(3800);
    // 10. 军刀（中型）- spartanweaponry:saber
    e.create("blue_steel_saber", "spartanweaponry:saber").material(testMaterial).setAttackDamage(9).setAttackSpeed(2.2).setDuration(3800);
    // 11. 页锤（中型）- spartanweaponry:flanged_mace
    e.create("blue_steel_flanged_mace", "spartanweaponry:flanged_mace").material(testMaterial).setAttackDamage(13.25).setAttackSpeed(1.6).setDuration(3800);
    // 12. （双）（长）长柄锤（中型）- spartanweaponry:battle_hammer
    e.create("blue_steel_battle_hammer", "spartanweaponry:battle_hammer").material(testMaterial).setAttackDamage(10).setAttackSpeed(1.8).setDuration(3000);
    // 13. （双）（长）长棍（普通）- spartanweaponry:quarterstaff
    e.create("blue_steel_quarterstaff", "spartanweaponry:quarterstaff").material(testMaterial).setAttackDamage(10).setAttackSpeed(2.2).setDuration(3000);
    // 14. （双）（长）长柄刀（普通）- spartanweaponry:glaive
    e.create("blue_steel_glaive", "spartanweaponry:glaive").material(testMaterial).setAttackDamage(10).setAttackSpeed(2.2).setDuration(3000);
    // 15. 迅捷剑（普通）- spartanweaponry:rapier
    e.create("blue_steel_rapier", "spartanweaponry:rapier").material(testMaterial).setAttackDamage(7).setAttackSpeed(3.2).setDuration(3000);
    // 16. （短）匕首（轻型）- spartanweaponry:dagger
    e.create("blue_steel_dagger", "spartanweaponry:dagger").material(testMaterial).setAttackDamage(7).setAttackSpeed(3.5).setDuration(2100);
    // 17. （短）格挡匕首（轻型）- spartanweaponry:parrying_dagger
    e.create("blue_steel_parrying_dagger", "spartanweaponry:parrying_dagger").material(testMaterial).setAttackDamage(7).setAttackSpeed(3.6).setDuration(2100);
    // 18. （短）飞刀（轻型）- spartanweaponry:throwing_knife（投掷物数量 16）
    e.create("blue_steel_throwing_knife", "spartanweaponry:throwing_knife").material(testMaterial).setAttackDamage(3).setAttackSpeed(4).setAmmo(16).setDuration(400);
    // 19. （双）（长 +）长矛（轻型）- spartanweaponry:pike
    e.create("blue_steel_pike", "spartanweaponry:pike").material(testMaterial).setAttackDamage(11.5).setAttackSpeed(2.8).setDuration(2100);
    // 20. 印第安投斧（普通）- spartanweaponry:tomahawk（投掷物数量 8）
    e.create("blue_steel_tomahawk", "spartanweaponry:tomahawk").material(testMaterial).setAttackDamage(9).setAttackSpeed(1).setAmmo(8).setDuration(400);
    // 21. 回旋镖（轻型）- spartanweaponry:boomerang（投掷物数量 1）
    e.create("blue_steel_boomerang", "spartanweaponry:boomerang").material(testMaterial).setAttackDamage(10).setAttackSpeed(2.0).setAmmo(1).setDuration(3000);
    // 22. （长）标枪（重型）- spartanweaponry:javelin（投掷物数量 4）
    e.create("blue_steel_javelin", "spartanweaponry:javelin").material(testMaterial).setAttackDamage(9).setAttackSpeed(1).setAmmo(4).setDuration(400);



})
