ServerEvents.recipes(e => {
    const { tfc, create, kubejs, immersiveengineering } = e.recipes;
    const rings = [//戒指锻造

        { name: "copper", temperature: 1080, metal: "copper" }, // 铜戒指
        { name: "bronze", temperature: 950, metal: "bronze" }, // 青铜戒指
        { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" }, // 铋铜戒指
        { name: "black_bronze", temperature: 1050, metal: "black_bronze" } // 黑铜戒指

    ];
    const ringGems = [
        { name: "topaz", mod: "tfc:", gem: "gem/topaz" }, // 黄宝石
        { name: "lapis", mod: "tfc:", gem: "gem/lapis_lazuli" }, // 青金石
        { name: "pyrite", mod: "tfc:", gem: "gem/pyrite" }, // 黄铁矿
        { name: "amethyst", mod: "tfc:", gem: "gem/amethyst" }, // 紫水晶
        { name: "cinnabar", mod: "tfc:", gem: "ore/cinnabar" }, // 朱砂
    ];
    rings.forEach(item => {
        tfc.anvil(
            `shiny_ornaments:${item.name}_ring_base`,
            `tfc:metal/rod/${item.name}`,
            [
                'hit_any',
            ]
        ).tier(1).bonus(true).id(`tfc:shiny_ornaments/${item.name}_ring/anvil`)//棒锻打成戒指

        tfc.welding(
            `shiny_ornaments:${item.name}_ring`,       // 输出
            `shiny_ornaments:${item.name}_ring_base`,
            `shiny_ornaments:${item.name}_ring_base`,
            1 // 砧等级 0是石头 1铜 2铜合金 3锻铁 4钢 5黑钢 6红蓝钢
        );


        tfc.heating(`shiny_ornaments:${item.name}_ring_base`, item.temperature)
            .resultFluid(Fluid.of(`tfc:metal/${item.name}`, 50))
        tfc.heating(`shiny_ornaments:${item.name}_ring`, item.temperature)
            .resultFluid(Fluid.of(`tfc:metal/${item.name}`, 100))


    });
    ringGems.forEach(itema => {
        rings.forEach(itemb => {

            e.shapeless(Item.of(`shiny_ornaments:${itemb.metal}_${itema.name}_ring`),
                [`shiny_ornaments:${itemb.name}_ring`, `${itema.mod}${itema.gem}`])




        })
    })
})