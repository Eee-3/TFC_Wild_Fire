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


const id_prefix = 'kubejs:tfc/ore_processing/';


//矿物
ServerEvents.recipes(event => {
    const { tfc, create, kubejs, immersiveengineering } = event.recipes;



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
        tfc.heating(`tfc:ore/poor_${ore.name}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 10))//贫瘠
        tfc.heating(`tfc:ore/normal_${ore.name}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 15))//普通
        tfc.heating(`tfc:ore/rich_${ore.name}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 25))//富集
    })

})
