ServerEvents.recipes(event => {

    const id_in = "kubejs:recipe/shaped/"
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
    event.shaped('createmetallurgy:foundry_lid', ['bcb', 'a a'], {
        a: 'vintageimprovements:andesite_sheet', b: 'tfc:metal/sheet/cast_iron', c: 'tfc:metal/tuyere/wrought_iron'
    }) //熔铸盆盖子
    event.shaped('tfc:blast_furnace', ['aba', 'cdc', 'aea'], {
        a: 'tfc:metal/sheet/cast_iron', b: 'createmetallurgy:foundry_lid', c: 'tfc:metal/tuyere/wrought_iron', d: 'tfc:metal/bars/wrought_iron', e: 'tfc:crucible'
    }) //高炉
    event.shaped('2x immersiveengineering:light_engineering', ['aba', 'bcb', 'aba'], {
        a: 'tfc:metal/sheet/steel', b: 'immersiveengineering:component_steel', c: 'create:precision_mechanism'
    }) //轻型工程块
    event.shaped('2x immersiveengineering:heavy_engineering', ['aba', 'bcb', 'aba'], {
        a: 'tfc:metal/sheet/black_steel', b: 'kubejs:material_component_black_steel', c: 'create:precision_mechanism'
    }) //重型工程块
    event.shaped('minecraft:lead', ['aa ', 'aa ', '  a'], {
        a: 'farmersdelight:rope'
    }) // 栓绳
    event.shaped(Item.of('create:super_glue', '{Damage:400}'), ['aba', 'cbc', ' d '], {
        a: 'minecraft:lime_dye', b: 'tfc:glue', c: 'artisanal:metal/tinplate', d: 'tfc:jar_lid'
    }) // 强力胶

    event.shaped('butcher:spitroast', ['aaa', 'b b', 'c c'], {
        a: 'tfc:metal/rod/cast_iron', b: '#minecraft:walls', c: '#tfc:rock/bricks'
    }) // 锻铁烤架
    event.shaped('tfc:bloomery', ['aba', 'c c', 'aba'], {
        a: 'tfc:brass_mechanisms',
        b: 'tfc:metal/double_sheet/brass',
        c: 'kubejs:brass_forge_door'
    }).modifyResult((inputit, outputit) => { //let brassForgeDoors = inputit.getOrCreateTag().getInt("tfc:forging_bonus");
        const doors = inputit.findAll("kubejs:brass_forge_door");
        for (let i = 0; i < doors.length; i++) {
            if (!doors[i].hasNBT) { return "air" }
            if (doors[i].getOrCreateTag().getInt("tfc:forging_bonus") < 1) {
                return "air"
            }
        }
        return outputit


    }).id('jeihide:brass_forge_door');
    event.shaped('tfc:bloomery', ['aba', 'c c', 'aba'], {
        a: 'tfc:brass_mechanisms',
        b: 'tfc:metal/double_sheet/brass',
        c: Item.of('kubejs:brass_forge_door', '{"tfc:forging_bonus":2}').weakNBT()
    }).modifyResult((inputit, outputit) => { //let brassForgeDoors = inputit.getOrCreateTag().getInt("tfc:forging_bonus");
        const doors = inputit.findAll("kubejs:brass_forge_door");
        for (let i = 0; i < doors.length; i++) {
            if (!doors[i].hasNBT) { return "air" }
            if (doors[i].getOrCreateTag().getInt("tfc:forging_bonus") < 1) {
                return "air"
            }
        }
        return outputit


    }).id('kubejs:/reciped/brass_forge_door');



    event.shaped('kubejs:cast_iron_indenter', [' a ', 'aaa'], {
        a: 'tfc:metal/double_ingot/cast_iron'
    }) //铸铁压头合成

    /*event.shaped('minecraft:prismarine_shard', ['aaa', 'aab', ' aa'], {
        a: {
            "type": "tfc:heatable",
            "min_temp": 120,
            "ingredient": { "item": "tfc:ore/normal_hematite" }

        }, b: '#tfc:knives'
    }).damageIngredient({ tag: '#tfc:knives' }, 20)//测试*/

    event.shaped(Item.of('butcher:boneskinningknife'), ['kubejs:bone_butchersknife_blade', '#forge:rods/wooden'])//骨头刀合成
    event.shaped(Item.of('butcher:bonebutchersknife'), ['kubejs:bone_skinningknife_blade', '#forge:rods/wooden'])//骨头刀合成
    event.shaped(Item.of('kubejs:bone_fishing_rod'), [['#forge:rods/wooden', 'farmersdelight:rope'], ['#forge:rods/wooden', 'kubejs:bone_fish_hook']])//骨头吊杆合成




    event.shaped('minecraft:chest', ['aaa', 'bcb', 'aaa'], {
        a: '#tfc:lumber',
        b: 'firmaciv:copper_bolt',
        c: '#tfc:saws'
    }).damageIngredient({ tag: '#tfc:saws' }, 5) //箱子合成

    event.shaped('minecraft:barrel', ['aba', 'a a', 'aba'], {
        a: '#tfc:lumber',
        b: 'firmaciv:copper_bolt'
    }) //桶合成
    event.shaped('create:schematicannon',
        [
            ' a ',
            'bcb',
            'ddd'], {
        a: 'siegemachines:barrel',
        b: '#tfc:lumber',
        c: '#minecraft:logs',
        d: '#minecraft:slabs'
    }) //蓝图大炮
    event.shaped('minecraft:stonecutter',
        [
            ' a ',
            'bcb'
        ], {
        a: 'immersiveengineering:sawblade',
        b: '#tfc:rock/smooth',
        c: 'tfc:brass_mechanisms'
    }) //石切机



    /*event.forEachRecipe( //合成箱子
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
        })*/
    event.shaped('spartanweaponry:wooden_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:stone_arrow',
            b: '#forge:rods/wooden',
            c: 'artisanal:trimmed_feather'
        })//石箭头
    event.shaped('spartanweaponry:copper_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:copper_arrow',
            b: 'minecraft:stick',
            c: 'artisanal:trimmed_feather'
        })//铜箭头
    event.shaped('spartanweaponry:iron_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:wrought_iron_arrow',
            b: 'minecraft:stick',
            c: 'artisanal:trimmed_feather'
        })//铁箭头
    event.shaped('spartanweaponry:diamond_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:steel_arrow',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//钢箭头
    event.shaped('spartanweaponry:netherite_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:black_steel_arrow',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//黑钢箭头
    event.shaped('2x spartanweaponry:netherite_bolt',
        ['a',
            'b',
            'c'],
        {
            a: 'tfc:metal/rod/black_steel',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//黑钢弩箭
    event.shaped('2x spartanweaponry:bolt',
        ['a',
            'b',
            'c'],
        {
            a: 'tfc:metal/rod/wrought_iron',
            b: 'minecraft:stick',
            c: 'artisanal:trimmed_feather'
        })//铁弩箭

    event.shaped('2x spartanweaponry:diamond_bolt',
        ['a',
            'b',
            'c'],
        {
            a: 'tfc:metal/rod/steel',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//钢弩箭


    event.shaped('4x kubejs:stone_arrow',
        ['aa',
            ' a'],
        {
            a: '#tfc:loose_rocks'
        })//石箭头
    event.shaped('minecraft:bucket',
        ['cbc',
            ' c '],
        {
            c: TFC.ingredient.heatable('artisanal:metal/tinplate', 1200, null),
            b: '#tfc:hammers'
        }).damageIngredient({ tag: '#tfc:hammers' }, 10)//水桶






    event.shaped('immersiveengineering:sawblade',
        [
            ' a ',
            'aba',
            ' a '],
        {
            a: TFC.ingredient.heatable('tfc:metal/rod/wrought_iron', 1200, null),
            b: TFC.ingredient.heatable('tfc:metal/sheet/wrought_iron', 1200, null),
        })//锯子

    event.shaped('1x kubejs:corundum_brick_block',
        [
            'aba',
            'bbb',
            'aba'],
        {
            a: 'kubejs:corundum_brick',
            b: 'tfc:mortar',
        })//刚玉砖块
    event.shaped('createdieselgenerators:bulk_fermenter',
        [
            'dbd',
            'a a',
            'cbc'
        ],
        {
            a: 'tfc:metal/sheet/wrought_iron',
            b: 'vintageimprovements:andesite_sheet',
            c: 'tfc:metal/sheet/cast_iron',
            d: 'create:andesite_alloy'
        }
    ) //大型发酵储罐
    event.shaped('createdieselgenerators:basin_lid',
        [
            ' a ',
            'cbc'
        ],
        {
            a: 'minecraft:clock',
            b: 'vintageimprovements:andesite_sheet',
            c: 'tfc:metal/sheet/cast_iron'
        }
    ) //工作盆盖板
    event.shaped('createdieselgenerators:oil_barrel',
        [
            'b',
            'c',
            'b'
        ],
        {
            b: 'tfc:metal/sheet/wrought_iron',
            c: '#tfc:barrels'
        }
    ) //燃油储罐
    event.shaped('design_decor:gas_tank',
        [
            'b',
            'c'
        ],
        {
            b: 'tfc:metal/sheet/wrought_iron',
            c: '#tfc:barrels'
        }
    ) //小型铁流体储罐
    event.shaped('kubejs:peel',
        [
            'b',
            'c'
        ],
        {
            c: '#forge:rods/wooden',
            b: '#tfc:lumber'
        }
    ) //小型铁流体储罐
    event.shaped('2x create:belt_connector',
        [
            'aba',
        ],
        {
            a: 'minecraft:leather',
            b: 'tfc:wool_yarn',
        })//传送带
    event.shaped('legendarysurvivaloverhaul:sewing_table',
        [
            'abc',
            'bbb'
        ],
        {
            a: '#tfc:sewing_needles',
            b: '#tfc:lumber',
            c: 'tfc:brass_mechanisms',
        })//缝纫台
    event.shaped('sns:frame_pack',
        [
            'aaa',
            'bcb',
            'bcb'
        ],
        {
            a: 'tfc:metal/rod/bronze',
            b: 'farmersdelight:rope',
            c: '#forge:leather',
        })//背包

    event.shaped('minecraft:minecart', [
        'd d',
        'ddd'
    ], {

        d: 'tfc:metal/sheet/wrought_iron',
    })//矿车
    event.shaped('create:empty_blaze_burner', [
        'a a',
        'bcb',
        'ded'
    ], {
        a: 'minecraft:blaze_rod',
        b: 'tfc:metal/rod/wrought_iron',
        c: '#forge:stone_bricks',
        d: 'tfc:metal/sheet/wrought_iron',
        e: 'tfc:metal/double_sheet/wrought_iron'
    })//燃烧室框架
    event.shaped('createdieselgenerators:burner', [
        ' ab',
        'cdc',
        'efe'
    ], {
        a: 'create:fluid_pipe',
        b: '#kubejs:flint',
        c: 'tfc:metal/rod/cast_iron',
        d: 'design_decor:gas_tank',
        e: 'tfc:metal/double_sheet/wrought_iron',
        f: 'create:fluid_valve',
    })//燃气炉
    event.shaped('vintageimprovements:spring_coiling_machine_wheel', [
        ' a ',
        'cbc',
        ' a '
    ], {
        a: 'tfc:metal/sheet/wrought_iron',
        b: 'create:andesite_alloy_block',
        c: 'vintageimprovements:andesite_sheet',
    })//卷簧轮
    event.shaped('vintageimprovements:spring_coiling_machine', [
        'abc',
        'ded'
    ], {
        a: 'tfc:metal/sheet/wrought_iron',
        b: 'create:shaft',
        c: 'vintageimprovements:spring_coiling_machine_wheel',
        d: 'vintageimprovements:andesite_sheet',
        e: 'create:andesite_casing',
    })//卷簧机

    event.shaped('vintageimprovements:vacuum_chamber', [
        ' a ',
        'ebe',
        'cdc'
    ], {
        a: 'create:fluid_pipe',
        b: 'design_decor:gas_tank',
        c: 'vintageimprovements:andesite_sheet',
        d: 'create:mechanical_pump',
        e: 'vintageimprovements:andesite_sheet',
    })//压缩机

    event.shaped('supplementaries:sack', [
        ' a ',
        'b b',
        ' b '
    ], {
        a: 'farmersdelight:rope',
        b: 'tfc:burlap_cloth',
    })//麻布袋

    event.shaped('born_in_chaos_v1:hound_trap', [
        'aba',
        'cdc'
    ], {
        a: 'tfc:metal/hoe_head/wrought_iron',
        b: '#minecraft:wooden_pressure_plates',
        c: 'tfc:metal/rod/cast_iron',
        d: 'vintageimprovements:iron_spring',
    })//捕兽夹

    event.shaped('create_enchantment_industry:disenchanter', [
        'bab',
        'cdc'
    ], {
        a: 'create:sand_paper',
        b: 'tfc:metal/rod/black_bronze',
        c: 'tfc:metal/double_sheet/black_bronze',
        d: 'tfc:metal/sheet/brass',
    })//祛魔池

    event.shaped('fluid:copper_tap', [
        ' ab',
        ' c '
    ], {
        a: 'immersiveengineering:component_steel',
        b: 'minecraft:dried_kelp',
        c: 'tfc:metal/sheet/steel',
    })//钢龙头

    event.shaped('createmetallurgy:faucet', [
        'a a',
        ' b '
    ], {
        a: 'create:andesite_alloy',
        b: 'tfc:metal/sheet/cast_iron',
    })//龙头

    event.shaped('supplementaries:wicker_fence', [
        'aba',
        'aba'
    ], {
        a: 'minecraft:stick',
        b: 'farmersdelight:rope',
    })//藤条栅栏

    event.shaped('alexsmobs:vine_lasso', [
        ' aa',
        ' aa',
        'a  '
    ], {
        a: 'farmersdelight:rope',
    })//藤蔓套索

    event.shaped('moreburners:copper_coil', [
        ' a ',
        'aba',
        ' a '
    ], {
        a: 'immersiveengineering:wirecoil_copper',
        b: 'immersiveengineering:coil_lv',
    })//铜线圈

    event.shaped('moreburners:nickel_coil', [
        'cac',
        'aba',
        'cac'
    ], {
        a: 'immersiveengineering:wirecoil_electrum',
        b: 'immersiveengineering:coil_mv',
        c: 'immersiveengineering:wirecoil_steel',
    })//电阻线圈

    event.shaped('kubejs:unfired_crucible_mold', [
        'a',
        'b'
    ],
    {
        a: 'tfc:ceramic/large_vessel',
        b: 'minecraft:clay',
    }).replaceIngredient({ item: 'tfc:ceramic/large_vessel', }, 'tfc:ceramic/large_vessel',)//不消耗物品 
    //未完成的黏土坩埚模具_1

    event.shaped('kubejs:unfired_crucible_mold', [
        
        'a',
        'b'
    ],
     {
        a: 'minecraft:cauldron',
        b: 'minecraft:clay',

    }).replaceIngredient({ item: 'minecraft:cauldron', }, 'minecraft:cauldron',)//不消耗物品
    //未完成的黏土坩埚模具_2

    const tfc_metals = [
        'bronze',
        'black_bronze',
        'bismuth_bronze',
        'copper',
        'wrought_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel'

    ];
    tfc_metals.forEach((tfc_metals) => {
        //喂食盆
        event.shaped(`tfcgroomer:${tfc_metals}_grooming_station`, [
            'a a',
            'cbc',
            'c c'
        ], {
            a: `tfc:metal/sheet/${tfc_metals}`,
            b: `tfc:metal/double_sheet/${tfc_metals}`,
            c: '#forge:rods/wooden'

        })
        event.shaped(`tfc:metal/fishing_rod/${tfc_metals}`, [
            '  g',
            ' gi',
            'dhi'
        ], {
            g: `tfc:metal/rod/${tfc_metals}`,
            i: '#bookshelf:strings',
            d: '#forge:rods/wooden',
            h: `tfc:metal/fish_hook/${tfc_metals}`

        })


    })

    //event.shaped('create:fluid_tank', [['#forge:plates/copper'], ['immersiveengineering:wooden_barrel'], ['#forge:plates/copper']])//流体储罐
    event.shaped('create:item_vault', [['#forge:plates/iron'], ['immersiveengineering:crate'], ['#forge:plates/iron']])//机械动力保险箱
    event.shaped('sophisticatedbackpacks:backpack', ['aba', 'aca', 'ddd'], { a: '#kubejs:advanced_binding', b: 'tfc:metal/double_sheet/wrought_iron', c: 'sns:frame_pack', d: '#forge:leather' })//背包合成困难




})