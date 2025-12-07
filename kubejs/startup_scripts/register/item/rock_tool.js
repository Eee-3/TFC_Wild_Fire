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


    function registerTFCTools(event, material, maxDamage, attackDamage) {

        const acheulianDmg = Math.floor(maxDamage * 0.8);

        // 1. 锤子
        event.create(`kubejs:rock_tool/${material}_hammer`, 'tfc:hammer')
            .attackDamageBaseline(maxDamage)
            .tag('tfc:usable_on_tool_rack')
            .texture(`kubejs:item/tfc/${material}/hammer`)
            .metalTexture('kubejs:block/trip_hammers/electrum') // 锤击纹理沿用原配置


        // 2. 标枪
        event.create(`kubejs:rock_tool/${material}_javelin`, 'tfc:javelin')
            .attackDamageBaseline(maxDamage)
            .thrownDamage(3 + attackDamage)
            .texture(`kubejs:item/tfc/${material}/javelin`)
            .tag('tfc:usable_on_tool_rack')


        // 3. 锄头
        event.create(`kubejs:rock_tool/${material}_hoe`, 'tfc:hoe')
            .attackDamageBaseline(maxDamage)
            .texture(`kubejs:item/tfc/${material}/hoe`)


        // 4. 小刀
        event.create(`kubejs:rock_tool/${material}_knife`, 'tfc:tool')
            .attackDamageBaseline(maxDamage)
            .texture(`kubejs:item/tfc/${material}/knife`)
            .tag('tfc:usable_on_tool_rack')
            .knife()


        // 5. 斧头
        event.create(`kubejs:rock_tool/${material}_axe`, "axe")

            .attackDamageBaseline(3 + maxDamage)
            .tag('tfc:axes')
            .tag('tfc:axes_that_log')
            .tag('tfc:usable_on_tool_rack')
            .tag("tfc:inefficient_logging_axes")
            .texture(`kubejs:item/tfc/${material}/axe`);

        // 6. 铲子
        event.create(`kubejs:rock_tool/${material}_shovel`, "shovel")

            .attackDamageBaseline(maxDamage)
            .tag('tfc:usable_on_tool_rack')
            .texture(`kubejs:item/tfc/${material}/shovel`);

        // 7. 阿舍利手斧
        event.create(`kubejs:rock_tool/${material}_acheulian`, "axe")
            .attackDamageBaseline(1 + acheulianDmg)
            .tag('minecraft:shovels')
            .tag('tfc:axes')
            .tag('tfc:axes_that_log')
            .tag("tfc:inefficient_logging_axes")
            .tag("tfc:deals_slashing_damage")
            .tag('tfc:knives')
            .texture(`kubejs:item/tfc/${material}/acheulian`);
    }

    // 批量注册三种材质的工具//耐久  伤害
    registerTFCTools(event, 'diamond', 360, 1);    // 钻石基础耐久700 → 阿舍利手斧560（700×0.8）
    registerTFCTools(event, 'obsidian', 180, 3);   // 黑曜石基础耐久250 → 阿舍利手斧200（250×0.8）
    registerTFCTools(event, 'flint', 118, 0.5);      // 燧石基础耐久120 → 阿舍利手斧96（120×0.8）
})