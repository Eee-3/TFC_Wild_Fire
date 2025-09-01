ServerEvents.tags('item', e => {
    // 突刺伤害类型武器
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:daggers`); // 匕首
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:parrying_daggers`); // 格挡匕首
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:rapiers`); // 刺剑（迅捷剑）
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:throwing_knives`); // 飞刀
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:pikes`); // 长矛
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:lances`); // 骑枪（长枪）
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:javelins`); // 标枪
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:spears`); // 矛（突刺类补充）
    e.add("tfc:deals_piercing_damage", `#minecraft:arrows`); // 箭
    e.add("tfc:deals_piercing_damage", `#spartanweaponry:bolts`); // 弩箭

    // 斩击伤害类型武器
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:tomahawks`); // 印第安投斧（投斧）
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:longswords`); // 长刀
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:katanas`); // 武士刀
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:sabers`); // 军刀
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:battleaxes`); // 战斧
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:glaives`); // 长柄刀
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:halberds`); // 戟
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:greatswords`); // 大剑
    e.add("tfc:deals_slashing_damage", `#spartanweaponry:scythes`); // 镰刀

    // 打击伤害类型武器
    e.add("tfc:deals_crushing_damage", `#spartanweaponry:battle_hammers`); // 大锤
    e.add("tfc:deals_crushing_damage", `#spartanweaponry:warhammers`); // 战锤
    e.add("tfc:deals_crushing_damage", `#spartanweaponry:flanged_maces`); // 页锤
    e.add("tfc:deals_crushing_damage", `#spartanweaponry:boomerangs`); // 回旋镖
    e.add("tfc:deals_crushing_damage", `#spartanweaponry:quarterstaves`); // 长棍

    e.add("tfc:deals_crushing_damage", '#spartanweaponry:cestusae'); // 拳套
    e.add("tfc:deals_crushing_damage", '#spartanweaponry:clubs'); // 棒

    // 长弓（穿刺伤害类型）
    e.add("tfc:deals_piercing_damage", '#spartanweaponry:longbows');
    e.add("tfc:deals_piercing_damage", '#forge:bows');

    e.add("tfc:deals_piercing_damage", 'irons_spellbooks:autoloader_crossbow');
    e.add("tfc:deals_piercing_damage", 'alexscaves:dreadbow');
    // 十字弓（穿刺伤害类型）
    e.add("tfc:deals_piercing_damage", '#spartanweaponry:heavy_crossbows');

    e.add("tfc:deals_piercing_damage", 'minecraft:crossbow');


    e.add("tfc:deals_slashing_damage", `warriorsofpastepoch:surgical_saw`); // 手术锯
    e.add("tfc:deals_crushing_damage", `bakery:rolling_pin`); // 擀面杖
    e.add("tfc:deals_crushing_damage", `bakery:small_cooking_pot`); // 小烹饪锅
    e.add("tfc:deals_slashing_damage", `eidolon:sapping_sword`); // 侵蚀之剑
    e.add("tfc:deals_piercing_damage", 'mobs_of_mythology:kobold_spear'); //库博长矛
    e.add("tfc:deals_slashing_damage", `mythsandlegends:gargoyle_axe`); // 石像鬼斧
    e.add("tfc:deals_slashing_damage", `mythsandlegends:umbras_whisper`); // 暗影之语
    e.add("tfc:deals_slashing_damage", `call_of_yucutan:macuahuitl`); // 黑曜石巨剑
    e.add("tfc:deals_crushing_damage", `alexscaves:primitive_club`); // 原始大棒
    e.add("tfc:deals_crushing_damage", `alexsmobs:tendon_whip`); // 鞭
    e.add("tfc:deals_crushing_damage", `farmersdelight:skillet`); // 锅
    e.add("tfc:deals_slashing_damage", `bakery:bread_knife`); //刀
    //法杖
    e.add("tfc:deals_crushing_damage", `irons_spellbooks:lightning_rod`); 
    e.add("tfc:deals_crushing_damage", `irons_spellbooks:artificer_cane`); 
    e.add("tfc:deals_crushing_damage", `irons_spellbooks:ice_staff`); 
    e.add("tfc:deals_crushing_damage", `irons_spellbooks:graybeard_staff`); 
    e.add("tfc:deals_crushing_damage", `irons_spellbooks:blood_staff`); 
    // 幻梦武器
    e.add("tfc:deals_slashing_damage", `eidolon:deathbringer_scythe`); 
    e.add("tfc:deals_piercing_damage", `eidolon:athame`); 
    e.add("tfc:deals_slashing_damage", `eidolon:cleaving_axe`); 
    e.add("tfc:deals_slashing_damage", `eidolon:reaper_scythe`); 
    e.add("minecraft:swords", `eidolon:silver_sword`); 
    e.add("minecraft:axes", `eidolon:axes`); 
    e.add("minecraft:hoes", `eidolon:hoes`); 
    e.add("minecraft:shovels", `eidolon:shovels`); 
    e.add("minecraft:pickaxes", `eidolon:pickaxes`); 

    e.add("tfc:deals_slashing_damage", `immersiveengineering:buzzsaw`); // 手持机械锯
    e.add("tfc:deals_piercing_damage", `immersiveengineering:drill`); // 采矿机械钻
    e.add("tfc:deals_crushing_damage", `immersiveengineering:railgun`); // 磁轨炮

    e.add("tfc:deals_crushing_damage", `create:cardboard_sword`);  //纸棍
    e.add("tfc:deals_crushing_damage", `#forge:tools/wrench`);  //扳手
    e.add("tfc:deals_crushing_damage", `#forge:wrench`);  //扳手
    e.add("tfc:deals_crushing_damage", `create:potato_cannon`);  //土豆加农炮

    //重击者之锤
    e.remove('minecraft:swords', 'born_in_chaos_v1:skullbreaker_hammer')
    e.add('tfc:deals_crushing_damage', 'born_in_chaos_v1:skullbreaker_hammer')

    //刺壳锤
    e.remove('minecraft:swords', 'born_in_chaos_v1:shell_mace')
    e.add('tfc:deals_crushing_damage', 'born_in_chaos_v1:shell_mace')
    
    //兽肉
    e.remove('minecraft:swords', 'born_in_chaos_v1:monster_flesh')
    e.add('tfc:deals_crushing_damage', 'born_in_chaos_v1:monster_flesh')
    e.remove('minecraft:swords', 'born_in_chaos_v1:smoked_monster_flesh')
    e.add('tfc:deals_crushing_damage', 'born_in_chaos_v1:smoked_monster_flesh')


    //干草叉
    e.remove('minecraft:swords', 'born_in_chaos_v1:trident_hayfork')
    e.add('tfc:deals_piercing_damage', 'born_in_chaos_v1:trident_hayfork')
    
    //骷髅剑鱼头骨
    e.remove('minecraft:swords', 'alexsmobs:skelewag_sword')
    e.add('tfc:deals_piercing_damage', 'alexsmobs:skelewag_sword')
    
    //拐杖
    e.remove('minecraft:swords', 'born_in_chaos_v1:nut_hammer')
    e.add('tfc:deals_crushing_damage', 'born_in_chaos_v1:nut_hammer')
    
    //婊子扫把
    e.remove('minecraft:swords', 'born_in_chaos_v1:birch_branches')
    e.add('tfc:deals_crushing_damage', 'born_in_chaos_v1:birch_branches')
    
    e.add('tfc:deals_crushing_damage', 'refurbished_furniture:spatula')

    //苦痛刺剑、紫水晶刺剑
    e.remove('minecraft:swords', 'irons_spellbooks:misery')
    e.add('tfc:deals_piercing_damage', 'irons_spellbooks:misery')
    e.remove('minecraft:swords', 'irons_spellbooks:amethyst_rapier')
    e.add('tfc:deals_piercing_damage', 'irons_spellbooks:amethyst_rapier')
    
    //螺纹长枪
    e.remove('minecraft:swords', 'alexscaves:ortholance')
    e.add('tfc:deals_piercing_damage', 'alexscaves:ortholance')

    e.add('tfc:deals_piercing_damage', 'tacz:modern_kinetic_gun') //枪
    e.add('tfc:deals_piercing_damage', 'immersiveengineering:revolver') //左轮
    e.add('tfc:deals_crushing_damage', 'alexscaves:shot_gum') //口香糖霰弹枪

    
    e.add('tfc:deals_piercing_damage', 'minecraft:trident') //三叉戟

    
    e.add('tfc:javelins', 'kubejs:obsidian_javelin') //标枪tag
    e.add('tfc:javelins', 'kubejs:diamond_javelin') 
    
    //锄头和铲子和稿子
    e.add('tfc:deals_crushing_damage', '#minecraft:shovels')
    e.add('tfc:deals_crushing_damage', '#forge:shovels')
    e.add('tfc:deals_crushing_damage', '#forge:tools/shovels')
    e.add('tfc:deals_crushing_damage', '#minecraft:hoes')
    e.add('tfc:deals_crushing_damage', '#forge:hoes')
    e.add('tfc:deals_crushing_damage', '#forge:tools/hoes')
    e.add('tfc:deals_crushing_damage', '#minecraft:pickaxes')
    e.add('tfc:deals_crushing_damage', '#forge:pickaxes')
    e.add('tfc:deals_crushing_damage', '#forge:tools/pickaxes')
    e.add("tfc:deals_slashing_damage", `#forge:swords`); 
    e.add("tfc:deals_slashing_damage", `#forge:axes`); 
    e.add("tfc:deals_slashing_damage", `#forge:tools/swords`); 
    e.add("tfc:deals_slashing_damage", `#forge:tools/axes`); 
    e.add("tfc:deals_slashing_damage", `#tfc:saws`); 
    e.add("tfc:deals_slashing_damage", `illagerinvasion:platinum_infused_hatchet`); 
    e.add('tfc:deals_crushing_damage', '#tfc_hammer_time:excavators')
    e.add('tfc:deals_piercing_damage', '#precisionprospecting:prospector_drills')
    e.add('tfc:deals_crushing_damage', '#precisionprospecting:mineral_prospectors')
    e.add('tfc:deals_crushing_damage', '#precisionprospecting:prospector_hammers')
    e.add('tfc:deals_piercing_damage', 'alexscaves:frostmint_spear')
    e.add('tfc:deals_piercing_damage', 'alexscaves:sharpened_candy_cane')
    e.add('tfc:deals_piercing_damage', 'tfc:chisels')

    //尤卡坦的呼唤武器列表tag填入
    e.add('forge:swords', 'call_of_yucutan:jade_sword')
    e.add('forge:pickaxes', 'call_of_yucutan:jade_pickaxe')
    e.add('forge:axes', 'call_of_yucutan:jade_axe')
    e.add('forge:shovels', 'call_of_yucutan:jade_shovel')
    e.add('forge:hoes', 'call_of_yucutan:jade_hoe')
    e.add('tfc:deals_slashing_damage', 'call_of_yucutan:sentient_vine')
    e.add('tfc:deals_slashing_damage', '#forge:tools/knives')
    e.add('spartanweaponry:pikes', 'call_of_yucutan:wooden_spear')
    e.add('spartanweaponry:pikes', 'call_of_yucutan:obsidian_spear')
    
    e.add("minecraft:swords", `#kubejs:swords`); 
    e.add("minecraft:axes", `#kubejs:axes`); 
    e.add("minecraft:hoes", `#kubejs:hoes`); 
    e.add("minecraft:shovels", `#kubejs:shovels`); 
    
})