ServerEvents.recipes(event => {

    


    event.forEachRecipe(//合成木板
        {
            not: { mod: 'quark' },
            type: "crafting_shapeless",
            output: "#minecraft:planks"
        }, r => {
            var slab_id = r.getOriginalRecipeResult().getId()
            var block_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
            event.shapeless(Item.of(slab_id, 2), [block_id, '#tfc:saws']).damageIngredient({ tag: '#tfc:saws' }, 1)
        })
    event.remove([{ not: { mod: "kubejs" }, input: "#minecraft:logs", type: "crafting_shapeless", output: "#minecraft:planks" }])//移除所有合成木板配方
    event.remove([{ not: { mod: "kubejs" }, input: ["#minecraft:logs", "#minecraft:planks"], type: "crafting_shaped", output: "#forge:chests" }])//移除所有箱子配方





})//region木板，箱子
ServerEvents.recipes(event => {

    function farmersdelight_cutting(outputitem, inputitem, num, tool) {
        let processedTool = tool; // 先定义变量接收原始tool值
        if (processedTool.startsWith('#')) { // 判断是否以#开头
            processedTool = processedTool.substring(1); // 截取从第2个字符开始的字符串，移除#
        }

        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [{ "item": inputitem }],
            "result": [{ "count": num, "item": outputitem }],
            "tool": { "tag": processedTool } // 使用处理后的tool参数
        });
    }

    event.replaceInput({ output: 'ars_nouveau:scribes_table' }, '#forge:logs/archwood', '#forge:ingots/steel')
    event.replaceInput({ output: 'ars_nouveau:scribes_table' }, 'ars_nouveau:archwood_slab', 'immersiveengineering:slab_treated_wood_horizontal')
    event.replaceInput({ output: 'create:tree_fertilizer' }, '#forge:coral', 'coralstfc:coral_powder')//珊瑚
    event.replaceInput({ output: '@mekanism' }, "tfc:metal/ingot/wrought_iron", 'tfc:metal/ingot/steel')
    event.replaceInput({ output: '@mekanism' }, 'minecraft:iron_ingot', 'tfc:metal/ingot/steel')







    //event.shaped('12x create:shaft', ['A','B','A'],{A:'create:andesite_alloy',B:'minecraft:iron_nugget'})//传动杆变难

    //event.shaped('tfc_metal_items:steel_tilt_hammer_head', ['BAB', 'B B', 'AAA'], { A: 'tfc:metal/double_ingot/wrought_iron', B: 'tfc:metal/ingot/wrought_iron' })//杠杆锤头变简单



    event.replaceInput({ output: 'minecraft:slime_ball' }, 'create:dough', '#tfc:foods/dough')//粘液球面团替换
    event.replaceInput({ input: 'minecraft:iron_ingot', type: "crafting_shaped" }, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')//锻铁替换铁
    event.replaceOutput({}, 'create_power_loader:empty_andesite_chunk_loader', 'create_power_loader:andesite_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_andesite_chunk_loader” 替换为 “create_power_loader:andesite_chunk_loader”
    event.replaceOutput({}, 'create_power_loader:empty_brass_chunk_loader', 'create_power_loader:brass_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_brass_chunk_loader” 替换为 “create_power_loader:brass_chunk_loader”
    event.replaceInput({ id: 'create:crafting/kinetics/super_glue' }, 'minecraft:slime_ball', '#forge:glue') //强力胶
    event.replaceInput({ id: 'create:crafting/materials/sand_paper' }, 'minecraft:sand', '#forge:sand')//砂纸
    event.replaceInput({ input: 'firmalife:food/bacon' }, 'firmalife:food/bacon', 'farmersdelight:bacon')//培根替换
    event.replaceInput({ input: 'immersiveengineering:plate_steel' }, 'immersiveengineering:plate_steel', 'tfc:metal/sheet/steel') // 将配方中钢板换成钢薄板





    // event.create('leather_hot_water_bag', 'basic').texture('kubejs:item/tfc/leather_hot_water_bag');// 皮革热水袋


    farmersdelight_cutting('kubejs:tfc/crushed_sinew', 'kubejs:tfc/dried_sinew', 1, 'tfc:hammers')//捣碎筋腱
    farmersdelight_cutting('kubejs:tfc/sinew_thread', 'kubejs:tfc/crushed_sinew', 2, 'tfc:knives')//筋线
})