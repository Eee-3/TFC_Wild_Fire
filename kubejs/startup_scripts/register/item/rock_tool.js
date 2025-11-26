StartupEvents.registry('item', event => {
    const axetag = {}
    const toolParts = [
        "javelin_head",
        "hammer_head",
        "hoe_head",
        "axe_head",
        "shovel_head",
        "knife_blade"
    ];
    //黑曜石碎片
    event.create("obsidian_shards", "basic").texture('kubejs:item/tfc/obsidian_shards');
    // 注册工具部件
    toolParts.forEach(part => {
        event.create(`diamond_${part}`, "basic")
            .texture(`kubejs:item/tfc/diamond/${part}`);
        event.create(`obsidian_${part}`, "basic")
            .texture(`kubejs:item/tfc/obsidian/${part}`);
        event.create(`flint_${part}`, "basic")
            .texture(`kubejs:item/tfc/flint/${part}`);
    });

function registerTFCTools(event, material, maxDamage) {
   
    const acheulianDmg = Math.floor(maxDamage * 0.8);

    // 1. 锤子
    event.create(`kubejs:rock_tool/${material}_hammer`, 'tfc:hammer')
        .maxDamage(maxDamage)
        .tag('tfc:usable_on_tool_rack')
        .texture(`kubejs:item/tfc/${material}/hammer`)
        .metalTexture('kubejs:block/trip_hammers/electrum') // 锤击纹理沿用原配置
        .attackDamageBonus(7);

    // 2. 标枪
    event.create(`kubejs:rock_tool/${material}_javelin`, 'tfc:javelin')
        .maxDamage(maxDamage)
        .thrownDamage(7)
        .texture(`kubejs:item/tfc/${material}/javelin`)
        .tag('tfc:usable_on_tool_rack');

    // 3. 锄头
    event.create(`kubejs:rock_tool/${material}_hoe`, 'tfc:hoe')
        .maxDamage(maxDamage)
        .texture(`kubejs:item/tfc/${material}/hoe`)
        .attackDamageBonus(8);

    // 4. 小刀
    event.create(`kubejs:rock_tool/${material}_knife`, 'tfc:tool')
        .maxDamage(maxDamage)
        .texture(`kubejs:item/tfc/${material}/knife`)
        .tag('tfc:usable_on_tool_rack')
        .knife()
        .attackDamageBonus(8);

    // 5. 斧头
    event.create(`kubejs:rock_tool/${material}_axe`, "axe")
        .maxDamage(maxDamage)
        .tag('tfc:axes')
        .tag('tfc:axes_that_log')
        .tag('tfc:usable_on_tool_rack')
        .tag("tfc:inefficient_logging_axes")
        .texture(`kubejs:item/tfc/${material}/axe`);

    // 6. 铲子
    event.create(`kubejs:rock_tool/${material}_shovel`, "shovel")
        .maxDamage(maxDamage)
        .tag('tfc:usable_on_tool_rack')
        .texture(`kubejs:item/tfc/${material}/shovel`);

    // 7. 阿舍利手斧
    event.create(`kubejs:rock_tool/${material}_acheulian`, "axe")
        .maxDamage(acheulianDmg)
        .tag('minecraft:shovels')
        .tag('tfc:axes')
        .tag('tfc:axes_that_log')
        .tag("tfc:inefficient_logging_axes")
        .tag("tfc:deals_slashing_damage")
        .tag('tfc:knives')
        .texture(`kubejs:item/tfc/${material}/acheulian`);
}

// 批量注册三种材质的工具
registerTFCTools(event, 'diamond', 700);    // 钻石基础耐久700 → 阿舍利手斧560（700×0.8）
registerTFCTools(event, 'obsidian', 250);   // 黑曜石基础耐久250 → 阿舍利手斧200（250×0.8）
registerTFCTools(event, 'flint', 120);      // 燧石基础耐久120 → 阿舍利手斧96（120×0.8）
})