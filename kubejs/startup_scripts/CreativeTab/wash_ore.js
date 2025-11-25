/*
// 动态生成所有矿石加工物品的ID数组
const oreItems = [];
wash_ore.forEach(ore => {
    // 基础矿石加工物品（所有矿石都有）
    oreItems.push(
        `kubejs:item/ore/rocky_chunks/${ore.ore}`,
        `kubejs:item/ore/chunks/${ore.ore}`,
        `kubejs:item/ore/dirty_dust/${ore.ore}`,
        `kubejs:item/ore/dirty_pile/${ore.ore}`
    );

    // 精炼类矿石加工物品（仅type为/type_的矿石有）
    if (ore.type === '/type_') {
        oreItems.push(
            `kubejs:item/ore/purified_dust/${ore.ore}`,
            `kubejs:item/ore/refined_dust/${ore.ore}`,
            `kubejs:item/ore/dust_lump/${ore.ore}`,
            `kubejs:item/ore/dust_clump/${ore.ore}`,
            `kubejs:item/ore/dust_brick/${ore.ore}`,
            // 矿浆流体桶（流体需要包装为桶才能放入创造物品栏）
            `kubejs:bucket/item/ore/slurry/${ore.ore}`
        );
    }
});

StartupEvents.modifyCreativeTab("yeefish:ore", event => {
    event.add(oreItems);
    
});*/