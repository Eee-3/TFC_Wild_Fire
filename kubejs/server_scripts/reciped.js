ServerEvents.recipes(event => {
    event.shaped('minecraft:anvil', ['aaa', ' a ', 'aaa'], { a: 'tfc:metal/double_ingot/cast_iron' })//铁砧
    event.shaped('vintageimprovements:helve_hammer', ['abb', 'acc', '  d'], {
        a: 'tfc:metal/double_ingot/cast_iron', b: '#valhelsia_structures:posts', c: 'vintageimprovements:iron_spring', d: 'create:vertical_gearbox'
    })//杠杠锤

    event.shaped('create:basin', ['a a', 'bcb'], {
        a: 'vintageimprovements:andesite_sheet', b: 'tfc:metal/sheet/cast_iron', c: 'tfc:metal/double_ingot/cast_iron'
    })//工作盆
    event.shaped('createmetallurgy:foundry_basin', ['a a', 'bcb'], {
        a: 'vintageimprovements:andesite_sheet', b: 'tfc:metal/sheet/cast_iron', c: 'tfc:crucible'
    })//熔铸盆
    event.shaped('createmetallurgy:foundry_basin', ['bcb'], {
        b: 'tfc:metal/sheet/cast_iron', c: 'tfc:crucible', d: 'create:vertical_gearbox'
    })//工作盆盖子
    event.shaped('createmetallurgy:foundry_lid', ['bcb', 'a a'], {
        a: 'vintageimprovements:andesite_sheet', b: 'tfc:metal/sheet/cast_iron', c: 'tfc:metal/tuyere/wrought_iron'
    }) //熔铸盆盖子
    event.shaped('tfc:blast_furnace', ['aba', 'cdc', 'aea'], {
        a: 'tfc:metal/sheet/cast_iron', b: 'createmetallurgy:foundry_lid', c: 'tfc:metal/tuyere/wrought_iron', d: 'tfc:metal/bars/wrought_iron', e: 'tfc:crucible'
    }) //高炉

    event.shaped('tfc:bloomery', ['aba', 'c c', 'aba'], {
        a: 'tfc:brass_mechanisms',
        b: 'tfc:metal/double_sheet/brass',
        c: 'kubejs:brass_forge_door'
    }).modifyResult((inputit, outputit) => {
        let brassForgeDoors = brassForgeDoors.getOrCreateTag().getInt("tfc:forging_bonus");
        for (let i = 0; i < brassForgeDoors; i++) {
            if (!brassForgeDoors[i] > 3) {
                return "air"
            }
        }
        return outputit
    });

    event.shapeless('minecraft:oak_log', ['#tfc:chisels', 'tfc:wood/log/oak']).keepIngredient({ item: '#tfc:chisels' })//橡木原木  橡木
    event.shapeless('minecraft:oak_log', ['#tfc:chisels', 'afc:wood/log/ancient_oak']).keepIngredient({ item: '#tfc:chisels' })//橡木原木  古代
    event.shapeless('minecraft:spruce_log', ['#tfc:chisels', 'tfc:wood/log/spruce']).keepIngredient({ item: '#tfc:chisels' })//云杉木原木  云杉
    event.shapeless('minecraft:spruce_log', ['#tfc:chisels', 'afc:wood/log/ancient_spruce']).keepIngredient({ item: '#tfc:chisels' })//云杉木原木  古代
    event.shapeless('minecraft:birch_log', ['#tfc:chisels', 'tfc:wood/log/birch']).keepIngredient({ item: '#tfc:chisels' })//白桦木原木  白桦
    event.shapeless('minecraft:birch_log', ['#tfc:chisels', 'afc:wood/log/ancient_birch']).keepIngredient({ item: '#tfc:chisels' })//白桦木原木  古代
    event.shapeless('minecraft:jungle_log', ['#tfc:chisels', 'tfc:wood/log/kapok']).keepIngredient({ item: '#tfc:chisels' })//丛林木原木  木棉
    event.shapeless('minecraft:jungle_log', ['#tfc:chisels', 'afc:wood/log/ancient_kapok']).keepIngredient({ item: '#tfc:chisels' })//丛林木原木  古代
    event.shapeless('minecraft:acacia_log', ['#tfc:chisels', 'tfc:wood/log/acacia']).keepIngredient({ item: '#tfc:chisels' })//金合欢原木  金合欢
    event.shapeless('minecraft:acacia_log', ['#tfc:chisels', 'afc:wood/log/ancient_acacia']).keepIngredient({ item: '#tfc:chisels' })//金合欢原木  古代
    event.shapeless('minecraft:dark_oak_log', ['#tfc:chisels', 'afc:wood/log/black_oak']).keepIngredient({ item: '#tfc:chisels' })//深色木原木  黑橡木
    event.shapeless('minecraft:dark_oak_log', ['#tfc:chisels', 'afc:wood/log/ancient_black_oak']).keepIngredient({ item: '#tfc:chisels' })//深色橡木原木  古代
    event.shapeless('minecraft:mangrove_log', ['#tfc:chisels', 'tfc:wood/log/mangrove']).keepIngredient({ item: '#tfc:chisels' })//红木原木  红木
    event.shapeless('minecraft:cherry_log', ['#tfc:chisels', 'afc:wood/log/fig']).keepIngredient({ item: '#tfc:chisels' })//樱花原木  无花果
    event.shapeless('minecraft:cherry_log', ['#tfc:chisels', 'afc:wood/log/rubber_fig']).keepIngredient({ item: '#tfc:chisels' })//樱花原木  古代无花果
    event.shapeless('minecraft:cherry_log', ['#tfc:chisels', 'afc:wood/log/ancient_fig']).keepIngredient({ item: '#tfc:chisels' })//樱花原木  橡皮树





    event.forEachRecipe( //合成箱子
        {
            not: { input: ['#minecraft:logs', '#forge:chests'] },
            mod: 'quark',
            type: "crafting_shaped",
            output: "#forge:chests"
        }, r => {
            var chest_id = r.getOriginalRecipeResult().getId()
            var wood_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
            event.shaped(chest_id, [
                'SbS',
                'b b',
                'SbS'
            ], {
                S: wood_id,
                b: 'firmaciv:copper_bolt'
            })
        })

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
    event.shapeless(Item.of('create_power_loader:brass_chunk_loader'), ['create_power_loader:empty_brass_chunk_loader']);//黄铜区块加载器
    event.shapeless(Item.of('create_power_loader:andesite_chunk_loader'), ['create_power_loader:empty_andesite_chunk_loader']);//安山区块加载

    event.replaceInput({ output: 'ars_nouveau:scribes_table' }, '#forge:logs/archwood', '#forge:ingots/steel')
    event.replaceInput({ output: 'ars_nouveau:scribes_table' }, 'ars_nouveau:archwood_slab', 'immersiveengineering:slab_treated_wood_horizontal')
    event.replaceInput({ output: 'create:tree_fertilizer' }, '#forge:coral', 'coralstfc:coral_powder')//珊瑚
    event.replaceInput({ output: '@mekanism' }, "tfc:metal/ingot/wrought_iron", 'tfc:metal/ingot/steel')
    event.replaceInput({ output: '@mekanism' }, 'minecraft:iron_ingot', 'tfc:metal/ingot/steel')






    event.shaped('sophisticatedbackpacks:backpack', ['aba', 'aca', 'ddd'], { a: '#c:string', b: 'tfc:metal/double_sheet/wrought_iron', c: 'backpacked_tfc:backpack', d: '#forge:leather' })//背包合成困难

    //event.shaped('12x create:shaft', ['A','B','A'],{A:'create:andesite_alloy',B:'minecraft:iron_nugget'})//传动杆变难

    //event.shaped('tfc_metal_items:steel_tilt_hammer_head', ['BAB', 'B B', 'AAA'], { A: 'tfc:metal/double_ingot/wrought_iron', B: 'tfc:metal/ingot/wrought_iron' })//杠杆锤头变简单
    event.shapeless('9x tfc:metal/ingot/wrought_iron', ['minecraft:iron_block']);//铁块合成锻铁



    event.replaceInput({ output: 'minecraft:slime_ball' }, 'create:dough', '#tfc:foods/dough')//粘液球面团替换
    event.replaceInput({ input: 'minecraft:iron_ingot', type: "crafting_shaped" }, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')//锻铁替换铁
    event.replaceOutput({}, 'create_power_loader:empty_andesite_chunk_loader', 'create_power_loader:andesite_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_andesite_chunk_loader” 替换为 “create_power_loader:andesite_chunk_loader”
    event.replaceOutput({}, 'create_power_loader:empty_brass_chunk_loader', 'create_power_loader:brass_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_brass_chunk_loader” 替换为 “create_power_loader:brass_chunk_loader”
    event.replaceInput({ id: 'create:crafting/kinetics/super_glue' }, 'minecraft:slime_ball', '#forge:glue') //强力胶
    event.replaceInput({ id: 'create:crafting/materials/sand_paper' }, 'minecraft:sand', '#forge:sand')//砂纸

    event.replaceInput({ input: 'immersiveengineering:plate_steel' }, 'immersiveengineering:plate_steel', 'tfc:metal/sheet/steel') // 将配方中钢板换成钢薄板




    //无序配方
    event.shapeless(Item.of('create_new_age:magnetite_block'), ['9x tfcorewashing:rocky_chunks_magnetite']);//磁铁矿块

    //event.shapeless(Item.of('4x tfcorewashing:pellet_malachite'),['tfcorewashing:briquet_malachite'])
    event.shapeless(Item.of('minecraft:lantern'), ['8x minecraft:iron_nugget', 'minecraft:torch'])
    event.shapeless(Item.of('minecraft:kelp'), ['tfc:plant/leafy_kelp'])
    event.shapeless(Item.of('4x tfc:plant/moss'), ['tfc:plant/moss', 'tfc:groundcover/humus'])
    event.shapeless(Item.of('minecraft:moss_block'), ['tfc:plant/moss', '#minecraft:dirt'])
    event.shapeless(Item.of('2x minecraft:tuff'), ['2x minecraft:flint', '2x #forge:gravel'])//燧石
    event.shapeless(Item.of('9x minecraft:spruce_planks'), ['9x afc:wood/planks/cypress'])
    //  event.shapeless(Item.of('vinery:cherry_sapling'),['tfc:plant/cherry_sapling'])//樱桃树苗
    event.shapeless(Item.of('minecraft:amethyst_shard'), ['tfc:gem/amethyst'])//紫水晶


    //有序配方
    event.shaped('create:fluid_tank', [['#forge:plates/copper'], ['immersiveengineering:wooden_barrel'], ['#forge:plates/copper']])//流体储罐
    event.shaped('create:item_vault', [['#forge:plates/iron'], ['immersiveengineering:crate'], ['#forge:plates/iron']])//机械动力保险箱
})