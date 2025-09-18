ServerEvents.recipes(e => {

  const iddd = [
    "create:crafting/kinetics/water_wheel",//水车
    "create:crafting/kinetics/large_water_wheel",//大水车
    "createdieselgenerators:compat/immersiveengineering/nickel_sheet",//锤子锤板子
    "createdieselgenerators:hammering/brass_sheet",
    "createdieselgenerators:compat/immersiveengineering/silver_sheet",
    "createdieselgenerators:hammering/iron_sheet",
    "createdieselgenerators:compat/immersiveengineering/constantan_sheet",
    "createdieselgenerators:compat/immersiveengineering/uranium_sheet",
    "createdieselgenerators:hammering/copper_sheet",
    "createdieselgenerators:compat/immersiveengineering/aluminum_sheet",
    "createdieselgenerators:compat/immersiveengineering/electrum_sheet",
    "createdieselgenerators:compat/immersiveengineering/steel_sheet",
    "createdieselgenerators:hammering/gold_sheet",
    "create:crafting/kinetics/propeller",//扇叶
    "create:crafting/kinetics/whisk",//搅拌头
"butcher:hook_recipe"//恶性bug钩子
  ]
  iddd.forEach(id => { e.remove({ id: id }); });























  //在这里ban掉一些比较逃课，或者比较偏离群峦原本玩法的配方（比如CCA的铜工具）
  e.remove({ id: 'create_sa:blazing_axe_recipe' }) // 移除"炽热斧头"的合成配方-create_sa
  e.remove({ id: 'create_sa:blazing_pickaxe_recipe' }) // 移除"炽热镐子"的合成配方-create_sa
  e.remove({ id: 'create_sa:blazing_shovel_recipe' }) // 移除"炽热铲子"的合成配方-create_sa
  e.remove({ id: 'create_sa:blazing_sword_recipe' }) // 移除"炽热剑"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_axe_recipe' }) // 移除"黄铜斧头"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_pickaxe_recipe' }) // 移除"黄铜镐子"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_shovel_recipe' }) // 移除"黄铜铲子"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_sword_recipe' }) // 移除"黄铜剑"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_hoe_recipe' }) // 移除"黄铜锄头"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_helmet_recipe' }) // 移除"黄铜头盔"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_chestplate_recipe' }) // 移除"黄铜胸甲"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_leggings_recipe' }) // 移除"黄铜 leggings（护腿）"的合成配方-create_sa
  e.remove({ id: 'create_sa:brass_boots_recipe' }) // 移除"黄铜靴子"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_axe_recipe' }) // 移除"铜斧头"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_pickaxe_recipe' }) // 移除"铜镐子"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_shovel_recipe' }) // 移除"铜铲子"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_sword_recipe' }) // 移除"铜剑"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_hoe_recipe' }) // 移除"铜锄头"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_helmet_recipe' }) // 移除"铜头盔"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_chestplate_recipe' }) // 移除"铜胸甲"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_leggings_recipe' }) // 移除"铜护腿"的合成配方-create_sa
  e.remove({ id: 'create_sa:copper_boots_recipe' }) // 移除"铜靴子"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_axe_recipe' }) // 移除"锌斧头"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_pickaxe_recipe' }) // 移除"锌镐子"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_shovel_recipe' }) // 移除"锌铲子"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_sword_recipe' }) // 移除"锌剑"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_hoe_recipe' }) // 移除"锌锄头"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_helmet_recipe' }) // 移除"锌头盔"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_chestplate_recipe' }) // 移除"锌胸甲"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_leggings_recipe' }) // 移除"锌护腿"的合成配方-create_sa
  e.remove({ id: 'create_sa:zinc_boots_recipe' }) // 移除"锌靴子"的合成配方-create_sa
  e.remove({ id: 'createaddition:fiiling/chocolate_cake' }) // 移除"巧克力蛋糕"的填充配方-createaddition
  e.remove({ id: 'createaddition:fiiling/cake' }) // 移除"蛋糕"的填充配方-createaddition
  e.remove({ id: 'createaddition:fiiling/honey_cake' }) // 移除"蜂蜜蛋糕"的填充配方-createaddition
  e.remove({ id: 'call_of_yucutan:wooden_spear_recipe' }) // 移除"木矛"的合成配方-call_of_yucutan
  e.remove({ id: 'call_of_yucutan:wooden_tecpatl_recipe' }) // 移除"木tecpatl（一种工具）"的合成配方-call_of_yucutan
  e.remove({ id: 'call_of_yucutan:flint_spear_recipe' }) // 移除"燧石矛"的合成配方-call_of_yucutan
  e.remove({ id: 'call_of_yucutan:flint_tecpatl_recipe' }) // 移除"燧石tecpatl"的合成配方-call_of_yucutan
  e.remove({ id: 'mobs_of_mythology:bronze_ingot' }) // 移除"青铜锭"的相关配方-mobs_of_mythology
  e.remove({ id: 'drinkbeer:recipe_board_package' }) // 移除"木板包"的合成配方-drinkbeer
  e.remove({ id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals' }) // 移除"铁锭与煤合金化合成钢锭"的配方-ad_astra
  e.remove({ id: 'create:crafting/materials/andesite_alloy' }) // 移除"安山岩合金"的合成配方-create
  e.remove({ id: 'createaddition:compact/immersiveengineering/crushing/coke_block' }) // 移除"焦炭块"的粉碎压缩配方-createaddition与immersiveengineering
  e.remove({ id: 'create:mixing/andesite_alloy' }) // 移除"安山岩合金"的混合配方-create
  e.remove({ id: 'create:mixing/andesite_alloy_from_zinc' }) // 移除"用锌混合制作安山岩合金"的配方-create
  e.remove({ id: 'htm:materials/sawdust' }) // 移除"锯末"的相关配方-htm
  e.remove({ id: 'tfcoreprocessing:quern/kindle/leaves_sawdust' }) // 移除"树叶研磨成锯末"的配方-tfcoreprocessing
  e.remove({ id: 'mekanism:enriching/charcoal' }) // 移除"木炭"的富集配方-mekanism
  e.remove({ id: 'mekanism:cardboard_box' }) // 移除"硬纸板箱"的合成配方-mekanism
  e.remove({ id: 'mekanism:nucleosynthesizing/iron' }) // 移除"铁"的核合成配方-mekanism
  e.remove({ id: 'tfc:loom/wool_block' }) // 移除"羊毛块"的织布机配方-tfc
  e.remove({ id: 'mekanism:paper' }) // 移除"纸"的合成配方-mekanism
  e.remove({ id: 'immersiveengineering:crafting/paper_from_sawdust' }) // 移除"锯末制作纸"的合成配方-immersiveengineering
  e.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable' }) // 移除"可发酵物"的盆地发酵配方-createdieselgenerators
  e.remove({ id: 'createdieselgenerators:basin_fermenting/fermented_spider_eye' }) // 移除"发酵蛛眼"的盆地发酵配方-createdieselgenerators
  e.remove({ id: 'createdieselgenerators:crafting/basin_lid' }) // 移除"盆地盖子"的合成配方-createdieselgenerators
  e.remove({ id: 'createaddition:compacting/cake_base' }) // 移除"蛋糕基底"的压缩配方-createaddition
  e.remove({ id: 'createaddition:smoking/cake_base_baked' }) // 移除"烘焙蛋糕基底"的烟熏配方-createaddition
  e.remove({ id: 'createaddition:filling/cake' }) // 移除"蛋糕"的填充配方-createaddition模组，重复移除）
  e.remove({ id: 'createaddition:filling/chocolate_cake' }) // 移除"巧克力蛋糕"的填充配方-createaddition模组，重复移除）
  e.remove({ id: 'createaddition:filling/honey_cake' }) // 移除"蜂蜜蛋糕"的填充配方-createaddition模组，重复移除）
  e.remove({ id: 'drinkbeer:trade_box_normal' }) // 移除"普通交易箱"的合成配方-drinkbeer
  e.remove({ id: 'tfc_ie_addon:crafting/steel_sheet_to_plate' }) // 移除"钢片转钢板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/lead_sheet_to_plate' }) // 移除"铅片转铅板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/nickel_sheet_to_plate' }) // 移除"镍片转镍板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/copper_sheet_to_plate' }) // 移除"铜片转铜板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/silver_sheet_to_plate' }) // 移除"银片转银板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/wrought_iron_sheet_to_plate' }) // 移除"锻铁片转锻铁板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/uranium_sheet_to_plate' }) // 移除"铀片转铀板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/constantan_sheet_to_plate' }) // 移除"康铜片转康铜板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/aluminum_sheet_to_plate' }) // 移除"铝片转铝板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/electrum_sheet_to_plate' }) // 移除"电成片转电成板"的合成配方-tfc_ie_addon
  e.remove({ id: 'tfc_ie_addon:crafting/gold_sheet_to_plate' }) // 移除"金片转金板"的合成配方-tfc_ie_addon
  e.remove({ id: 'immersiveengineering:metalpress/plate_bronze' }) // 移除"青铜板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'immersiveengineering:metalpress/plate_constantan' }) // 移除"康铜板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'immersiveengineering:metalpress/plate_aluminum' }) // 移除"铝板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'tfc_ie_addon:metalpress/plate_wrought_iron' }) // 移除"锻铁板"的金属冲压配方-tfc_ie_addon
  e.remove({ id: 'immersiveengineering:metalpress/plate_lead' }) // 移除"铅板"的金属冲压配方-immersiveengineering
  e.remove({ id: 'vintageimprovements:pressing/aluminum_ingot' }) // 移除"铝锭"的压制配方-vintageimprovements
  e.remove({ id: 'vintageimprovements:pressing/constantan_ingot' }) // 移除"康铜锭"的压制配方-vintageimprovements
  e.remove({ id: 'vintageimprovements:pressing/uranium_ingot' }) // 移除"铀锭"的压制配方-vintageimprovements
  e.remove({ id: 'vintageimprovements:pressing/lead_ingot' }) // 移除"铅锭"的压制配方-vintageimprovements
  e.remove({ id: 'createaddition:pressing/electrum_ingot' }) // 移除"电成锭"的压制配方-createaddition
  e.remove({ type: "ad_astra:compressing", tag: '#forge:sheets' }) // 移除ad_astra模组中所有"板材（#forge:sheets）"的压缩配方
  e.remove({ type: "create:pressing", input: '#forge:ingots', output: "#forge:sheets" }) // 移除create模组中"所有锭（#forge:ingots）压制成板材（#forge:sheets）"的压制配方
  e.remove({ type: 'minecraft:smelting' }) // 移除熔炉熔炼配方
  e.remove({ type: 'minecraft:campfire_cooking' }) // 移除营火烹饪配方
  e.remove({ type: 'minecraft:blasting' }) // 移除高炉熔炼配方
  e.remove({ id: 'map_atlases:craft_atlas' }) // 移除 map_atlases 模组制作地图集的配方
  e.remove({ id: 'simpleradio:radio' }) // 移除 simpleradio 模组制作收音机的配方
  e.remove({ id: 'simpleradio:transceiver' }) // 移除 simpleradio 模组制作收发器的配方
  e.remove({ id: 'simpleradio:radiosmither' }) // 移除 simpleradio 模组制作无线电锻造器的配方
  e.remove({ id: 'simpleradio:transmitting_module' }) // 移除 simpleradio 模组制作发射模块的配方
  e.remove({ id: 'simpleradio:speaker_module' }) // 移除 simpleradio 模组制作扬声器模块的配方
  e.remove({ id: 'simpleradio:receiving_module' }) // 移除 simpleradio 模组制作接收模块的配方
  e.remove({ id: 'astikorcarts:animal_cart' }) // 移除 astikorcarts 模组中动物推车的配方
  e.remove({ id: 'astikorcarts:supply_cart' }) // 移除 astikorcarts 模组中补给推车的配方
  e.remove({ id: 'astikorcarts:plow' }) // 移除 astikorcarts 模组中犁的配方
  e.remove({ id: 'astikorcarts:wheel' }) // 移除 astikorcarts 模组中轮子的配方
  e.remove({ output: '#minecraft:tools', mod: 'ae2' }) // 移除 astikorcarts 模组中轮子的配方
  e.remove({ id: 'ad_astra:nasa_workbench' }) //NASA工作台
  e.remove({ id: 'ad_astra:compressor' }) //压缩机
  e.remove({ id: 'ad_astra:etrionic_blast_furnace' }) //电力高炉
  e.remove({ output: 'vintageimprovements:pig_iron_sheet' })//移除猪铁
  e.remove({ output: 'vintageimprovements:cast_iron_sheet' })//移除锻铁板
  e.remove('htm:compat/tfc/rock_knapping/hammer_head')//移处锤子
  e.remove('tfc:welding/cast_iron_double_ingot')
  e.remove('tfc:heating/kaolin_clay')
  e.remove('crafttweaker:backpack')
  e.remove({ id: 'create:crafting/kinetics/empty_blaze_burner' })//移除烈焰人燃烧室
  e.remove({ id: 'vinery:bamboo_lattice' })//删除竹格

  e.remove('farmersdelight:paper_from_tree_bark')//三个树皮合成纸

  e.remove({ id: 'tfc_metal_items:crafting/steel_tilt_hammer_head' }) // 移除杠杆锤头
  e.remove({ id: 'create:crafting/kinetics/shaft' }) // 移除传动杆
  e.remove({ id: 'sophisticatedbackpacks:backpack' }) // 移除 背包
  e.remove({ id: "minecraft:iron_ingot_from_iron_block" }) // 移除 铁块合成铁
  e.remove({ id: "farmersdelight:cutting_board_from_beam" }) // 移除 梁合成木棍


  //刷物品
  e.remove({ input: '#forge:plates', output: '#forge:plates' }) //板子
})