

//矿物
ServerEvents.recipes(event => {
    const { tfc, create, kubejs, immersiveengineering } = event.recipes;
    const processingTime = 20 * 5;
    const ore = [
        'limonite',
        'sphalerite',
        'tetrahedrite',
        'malachite',
        'garnierite',
        'bismuthinite',
        'cassiterite',
        'native_silver',
        'hematite',
        'native_gold',
        'native_copper',
        'magnetite']
    const tfc_ore = [
        { name: 'magnetite', temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'magnetite' }, // 磁铁矿，可冶炼出铸铁
        { name: 'hematite', temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'hematite' }, // 赤铁矿，可冶炼出铸铁 
        { name: 'cassiterite', temperature: 232, out: 'tfc:metal/tin', metal: 'cassiterite' }, // 锡石矿，可冶炼出锡
        { name: 'limonite', temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'limonite' }, // 褐铁矿，可冶炼出铸铁
        { name: 'bismuthinite', temperature: 271, out: 'tfc:metal/bismuth', metal: 'bismuthinite' }, // 辉铋矿，可冶炼出铋
        { name: 'garnierite', temperature: 1453, out: 'tfc:metal/nickel', metal: 'garnierite' }, // 镍华矿，可冶炼出镍
        { name: 'sphalerite', temperature: 419, out: 'tfc:metal/zinc', metal: 'sphalerite' }, // 闪锌矿，可冶炼出锌
        { name: 'tetrahedrite', temperature: 1083, out: 'tfc:metal/copper', metal: 'tetrahedrite' }, // 黝铜矿，可冶炼出铜
        { name: 'malachite', temperature: 1085, out: 'tfc:metal/copper', metal: 'malachite' },
        { name: 'native_copper', temperature: 1085, out: 'tfc:metal/copper', metal: 'copper' }, // 自然铜矿，可直接获取铜
        { name: 'native_gold', temperature: 1064, out: 'tfc:metal/gold', metal: 'gold' }, // 自然金矿，可直接获取金
        { name: 'native_silver', temperature: 961, out: 'tfc:metal/silver', metal: 'silver' }, // 自然银矿，可直接获取银 // 孔雀石，可冶炼出铜
    ];

    const tfcorewashing = [
        { base: 'tfcorewashing:', type: 'briquet_', num: 80 },
        { base: 'tfcorewashing:', type: 'pellet_', num: 20 },
        { base: 'tfcorewashing:', type: 'dirty_pile_', num: 1 }
    ];



    const id_prefix = 'kubejs:tfc/ore_processing/';

    ore.forEach(ore => {
        create.compacting(`tfcoreprocessing:roasted_brick/${ore}`,
            [`4x tfcoreprocessing:refined/${ore}`, Fluid.of('minecraft:water', 25)]).heated()
            .id(`${id_prefix}${ore}/roasted_brick`)//加热压制焙烧
        event.custom({
            "type": "createdieselgenerators:basin_fermenting",
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "amount": 250,
                    "fluid": `tfcoreprocessing:slurry_${ore}`
                }
            ],
            "processingTime": 20,
            "results": [
                {
                    "item": `tfcoreprocessing:refined/${ore}`
                }
            ]
        }).id(`${id_prefix}${ore}/refined_${ore}`)//原浆发酵成精矿粉末
    })
    tfc_ore.forEach(ore => {
        create.mixing(Fluid.of(`tfcoreprocessing:slurry_${ore.name}`, 250),
            [`tfc:powder/${ore.name}`, Fluid.of('minecraft:water', 250)])
            .id(`${id_prefix}${ore.name}/slurry_${ore.name}`)//基础粉末变原浆
    })

    tfc_ore.forEach(ore => {
        tfc.heating(`tfcorewashing:rocky_chunks_${ore.metal}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 4))//多石
        tfc.heating(`tfcorewashing:chunks_${ore.metal}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 4))//粗块
        tfc.heating(`tfcorewashing:dirty_dust_${ore.metal}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5))//脏粉
        tfc.heating(`tfcorewashing:dirty_pile_${ore.metal}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 1))//小脏粉
        tfc.heating(`tfc:ore/poor_${ore.name}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 10))//贫瘠
        tfc.heating(`tfc:ore/normal_${ore.name}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 15))//普通
        tfc.heating(`tfc:ore/rich_${ore.name}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 25))//富集

    })
    tfc_ore.forEach(ore => {
        tfcorewashing.forEach(prefix => {
            event.custom({
                "type": "woodencog:heated_mixing",
                "heatRequirement": ore.temperature,
                "processingTime": processingTime,
                "ingredients": [
                    {
                        "ingredient": {
                            "item": `${prefix.base}${prefix.type}${ore.name}`
                        }
                    }
                ],
                "results": [
                    {
                        "amount": prefix.num,
                        "fluid": ore.out,
                        "nbt": {}
                    }
                ]
            }).id(`kubejs:tfc/ore_processing/heated_mixing/${prefix.type}${ore.name}`);//多石块加热混合冶炼
        })
    })//团矿融化
    tfc_ore.forEach(ore => {
        event.custom({
            "type": "woodencog:heated_mixing",
            "heatRequirement": ore.temperature,
            "processingTime": processingTime,
            "ingredients": [
                {
                    "ingredient": {
                        "item": `tfc:powder/${ore.name}`
                    }
                }
            ],
            "results": [
                {
                    "amount": 5,
                    "fluid": ore.out,
                    "nbt": {}
                }
            ]
        }).id(`kubejs:tfc/ore_processing/heated_mixing/powder/${ore.name}`);//多石块加热混合冶炼
    })//粉融化
    tfc_ore.forEach(ore => {
        event.custom({
            "type": "woodencog:heated_mixing",
            "heatRequirement": ore.temperature,
            "processingTime": processingTime,
            "ingredients": [
                {
                    "ingredient": {
                        "item": `tfcorewashing:rocky_chunks_${ore.metal}`
                    }
                }
            ],
            "results": [
                {
                    "amount": 4,
                    "fluid": ore.out,
                    "nbt": {}
                }
            ]
        }).id(`kubejs:tfc/ore_processing/heated_mixing/rocky_chunks_${ore.metal}`);//多石块加热混合冶炼
        event.custom({
            "type": "woodencog:heated_mixing",
            "heatRequirement": ore.temperature,
            "processingTime": processingTime,
            "ingredients": [
                {
                    "ingredient": {
                        "item": `tfcorewashing:chunks_${ore.metal}`
                    }
                }
            ],
            "results": [
                {
                    "amount": 4,
                    "fluid": ore.out,
                    "nbt": {}
                }
            ]
        }).id(`kubejs:tfc/ore_processing/heated_mixing/chunks_${ore.metal}`);//粗块加热混合冶炼
        event.custom({
            "type": "woodencog:heated_mixing",
            "heatRequirement": ore.temperature,
            "processingTime": processingTime,
            "ingredients": [
                {
                    "ingredient": {
                        "item": `tfcorewashing:dirty_dust_${ore.metal}`
                    }
                }
            ],
            "results": [
                {
                    "amount": 5,
                    "fluid": ore.out,
                    "nbt": {}
                }
            ]
        }).id(`kubejs:tfc/ore_processing/heated_mixing/dirty_dust_${ore.metal}`);//脏粉加热混合冶炼
        event.custom({
            "type": "woodencog:heated_mixing",
            "heatRequirement": ore.temperature,
            "processingTime": processingTime,
            "ingredients": [
                {
                    "ingredient": {
                        "item": `tfc:ore/poor_${ore.metal}`
                    }
                }
            ],
            "results": [
                {
                    "amount": 10,
                    "fluid": ore.out,
                    "nbt": {}
                }
            ]
        }).id(`kubejs:tfc/ore_processing/heated_mixing/poor_${ore.name}`);//贫瘠矿石加热混合冶炼
        event.custom({
            "type": "woodencog:heated_mixing",
            "heatRequirement": ore.temperature,
            "processingTime": processingTime,
            "ingredients": [
                {
                    "ingredient": {
                        "item": `tfc:ore/normal_${ore.metal}`
                    }
                }
            ],
            "results": [
                {
                    "amount": 15,
                    "fluid": ore.out,
                    "nbt": {}
                }
            ]
        }).id(`kubejs:tfc/ore_processing/heated_mixing/normal_${ore.name}`);//普通矿石加热混合冶炼
        event.custom({
            "type": "woodencog:heated_mixing",
            "heatRequirement": ore.temperature,
            "processingTime": processingTime,
            "ingredients": [
                {
                    "ingredient": {
                        "item": `tfc:ore/rich_${ore.metal}`
                    }
                }
            ],
            "results": [
                {
                    "amount": 25,
                    "fluid": ore.out,
                    "nbt": {}
                }
            ]
        }).id(`kubejs:tfc/ore_processing/heated_mixing/rich_${ore.name}`);//富集矿石加热混合冶炼

    })//矿石融化
    const compressedOresWithTemp = [
        { name: "native_copper", temperature: 1085, out: "tfc:metal/copper" },
        { name: "limonite", temperature: 1538, out: "tfc:metal/cast_iron" },
        { name: "magnetite", temperature: 1538, out: "tfc:metal/cast_iron" },
        { name: "malachite", temperature: 1085, out: "tfc:metal/copper" },
        { name: "garnierite", temperature: 1453, out: "tfc:metal/nickel" },
        { name: "bismuthinite", temperature: 271, out: "tfc:metal/bismuth" },
        { name: "cassiterite", temperature: 231.9, out: "tfc:metal/tin" },
        { name: "native_silver", temperature: 962, out: "tfc:metal/silver" },
        { name: "hematite", temperature: 1538, out: "tfc:metal/cast_iron" },
        { name: "native_gold", temperature: 1064, out: "tfc:metal/gold" },
        { name: "tetrahedrite", temperature: 1085, out: "tfc:metal/copper" },
        { name: "sphalerite", temperature: 420, out: "tfc:metal/zinc" }
    ];
    const oreProcesses = [
        { type: "roasted_brick", num: 50 },
        { type: "roasted", num: 10 },
        { type: "refined", num: 8 },
        { type: "compressed", num: 40 }
    ];

    compressedOresWithTemp.forEach((ore) => {
        oreProcesses.forEach((oreP) => {

            event.custom({
                "type": "woodencog:heated_mixing",
                "heatRequirement": ore.temperature,
                "processingTime": processingTime,
                "ingredients": [
                    {
                        "ingredient": {
                            "item": `tfcoreprocessing:${oreP.type}/${ore.name}`
                        }
                    }
                ],
                "results": [
                    {
                        "amount": oreP.num,
                        "fluid": ore.out,
                        "nbt": {}
                    }
                ]
            }).id(`kubejs:tfc/ore_processing/heated_mixing/${oreP.type}_${ore.name}`);//压缩富集矿石加热混合冶炼
        })
    })



})
