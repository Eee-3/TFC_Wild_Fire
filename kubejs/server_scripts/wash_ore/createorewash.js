ServerEvents.recipes(event => {
    const create = event.recipes.create

    wash_ore.forEach(ore => {
        if (ore.type == '/type_') {
            if (ore.mod == 'tfc_ie_addon:ore') {
                create.splashing([Item.of(`tfc_ie_addon:powder/${ore.ore}`).withChance(1), Item.of(`kubejs:item/ore/dirty_pile/${ore.ore}`).withChance(0.2), Item.of(`kubejs:rock_powder`).withChance(0.75),], Item.of(`kubejs:item/ore/dirty_dust/${ore.ore}`)).id(`kubejs:wash_ore/createorewash/splashing/dirty_dust/${ore.ore}`);
            }
            if (ore.mod == 'firmalife:ore') {
                create.splashing([Item.of(`firmalife:powder/${ore.ore}`).withChance(1), Item.of(`kubejs:item/ore/dirty_pile/${ore.ore}`).withChance(0.2), Item.of(`kubejs:rock_powder`).withChance(0.75),], Item.of(`kubejs:item/ore/dirty_dust/${ore.ore}`)).id(`kubejs:wash_ore/createorewash/splashing/dirty_dust/${ore.ore}`);
            }
            if (ore.mod == 'tfc:ore') {
                create.splashing([Item.of(`tfc:powder/${ore.ore}`).withChance(1), Item.of(`kubejs:item/ore/dirty_pile/${ore.ore}`).withChance(0.2), Item.of(`kubejs:rock_powder`).withChance(0.75),], Item.of(`kubejs:item/ore/dirty_dust/${ore.ore}`)).id(`kubejs:wash_ore/createorewash/splashing/dirty_dust/${ore.ore}`);
            }
        }




        //脏粉清洗 
        create.splashing(//多石清洗
            [
                Item.of(`kubejs:item/ore/chunks/${ore.ore}`).withChance(1),
                Item.of(`kubejs:item/ore/dirty_pile/${ore.ore}`).withChance(0.2),
                Item.of(`kubejs:rock_powder`).withChance(0.75),
            ],
            Item.of(`kubejs:item/ore/rocky_chunks/${ore.ore}`)
        ).id(`kubejs:wash_ore/createorewash/splashing/rocky_chunks/${ore.ore}`);
    })
    create.splashing([Item.of('tfc:powder/sulfur').withChance(1)],
        Item.of('kubejs:item/ore/dirty_dust/'))
        .id(`kubejs:wash_ore/createorewash/splashing/dirty_dust/sulfur`);
    create.splashing([Item.of('tfc:powder/graphite').withChance(1)],
        Item.of('kubejs:item/ore/dirty_dust/graphite'))
        .id(`kubejs:wash_ore/createorewash/splashing/dirty_dust/graphite`); 
    create.splashing([Item.of('minecraft:redstone_wire').withChance(1)],
        Item.of('kubejs:item/ore/dirty_dust/cryolite'))
        .id(`kubejs:wash_ore/createorewash/splashing/dirty_dust/cryolite`);
    create.splashing([Item.of('minecraft:redstone_wire').withChance(1)],
        Item.of('kubejs:item/ore/dirty_dust/cinnabar'))
        .id(`kubejs:wash_ore/createorewash/splashing/dirty_dust/cinnabar`);




    // 融合后的岩石洗矿完整信息数组
    const orea = [
        {
            name: "tfc:rock/gravel/granite",
            rock: "granite",
            t1: "kubejs:item/ore/rocky_chunks/native_gold",
            t2: "kubejs:item/ore/rocky_chunks/native_silver",
            t3: "kubejs:item/ore/rocky_chunks/cassiterite",
            t4: "kubejs:item/ore/rocky_chunks/graphite",
            t5: "kubejs:item/ore/rocky_chunks/uraninite"
        },
        {
            name: "tfc:rock/gravel/diorite",
            rock: "diorite",
            t1: "kubejs:item/ore/rocky_chunks/native_copper",
            t2: "kubejs:item/ore/rocky_chunks/hematite",
            t3: "kubejs:item/ore/rocky_chunks/magnetite",
            t4: "kubejs:item/ore/rocky_chunks/sphalerite",
            t5: "kubejs:item/ore/rocky_chunks/galena"
        },
        {
            name: "tfc:rock/gravel/gabbro",
            rock: "gabbro",
            t1: "kubejs:item/ore/rocky_chunks/magnetite",
            t2: "kubejs:item/ore/rocky_chunks/hematite",
            t3: "kubejs:item/ore/rocky_chunks/chromite",
            t4: "kubejs:item/ore/rocky_chunks/garnierite",
            t5: "kubejs:item/ore/rocky_chunks/limonite"
        },
        {
            name: "tfc:rock/gravel/shale",
            rock: "shale",
            t1: "kubejs:item/ore/rocky_chunks/sulfur",
            t2: "kubejs:item/ore/rocky_chunks/native_copper",
            t3: "kubejs:item/ore/rocky_chunks/malachite",
            t4: "kubejs:item/ore/rocky_chunks/uraninite",
            t5: "kubejs:item/ore/rocky_chunks/sphalerite"
        },
        {
            name: "tfc:rock/gravel/claystone",
            rock: "claystone",
            t1: "kubejs:item/ore/rocky_chunks/bauxite",
            t2: "kubejs:item/ore/rocky_chunks/limonite",
            t3: "kubejs:item/ore/rocky_chunks/native_copper",
            t4: "kubejs:item/ore/rocky_chunks/galena",
            t5: "kubejs:item/ore/rocky_chunks/sphalerite"
        },
        {
            name: "tfc:rock/gravel/limestone",
            rock: "limestone",
            t1: "kubejs:item/ore/rocky_chunks/galena",
            t2: "kubejs:item/ore/rocky_chunks/sphalerite",
            t3: "kubejs:item/ore/rocky_chunks/native_silver",
            t4: "kubejs:item/ore/rocky_chunks/native_copper",
            t5: "kubejs:item/ore/rocky_chunks/malachite"
        },
        {
            name: "tfc:rock/gravel/conglomerate",
            rock: "conglomerate",
            t1: "kubejs:item/ore/rocky_chunks/native_gold",
            t2: "kubejs:item/ore/rocky_chunks/cassiterite",
            t3: "kubejs:item/ore/rocky_chunks/native_silver",
            t4: "kubejs:item/ore/rocky_chunks/hematite",
            t5: "kubejs:item/ore/rocky_chunks/sulfur"
        },
        {
            name: "tfc:rock/gravel/dolomite",
            rock: "dolomite",
            t1: "kubejs:item/ore/rocky_chunks/native_silver",
            t2: "kubejs:item/ore/rocky_chunks/galena",
            t3: "kubejs:item/ore/rocky_chunks/sphalerite",
            t4: "kubejs:item/ore/rocky_chunks/native_copper",
            t5: "kubejs:item/ore/rocky_chunks/cinnabar"
        },
        {
            name: "tfc:rock/gravel/chert",
            rock: "chert",
            t1: "kubejs:item/ore/rocky_chunks/sulfur",
            t2: "kubejs:item/ore/rocky_chunks/uraninite",
            t3: "kubejs:item/ore/rocky_chunks/chromite",
            t4: "kubejs:item/ore/rocky_chunks/sphalerite",
            t5: "kubejs:item/ore/rocky_chunks/galena"
        },
        {
            name: "tfc:rock/gravel/chalk",
            rock: "chalk",
            t1: "kubejs:item/ore/rocky_chunks/sulfur",
            t2: "kubejs:item/ore/rocky_chunks/native_copper",
            t3: "kubejs:item/ore/rocky_chunks/limonite",
            t4: "kubejs:item/ore/rocky_chunks/sphalerite",
            t5: "kubejs:item/ore/rocky_chunks/malachite"
        },
        {
            name: "tfc:rock/gravel/rhyolite",
            rock: "rhyolite",
            t1: "kubejs:item/ore/rocky_chunks/cassiterite",
            t2: "kubejs:item/ore/rocky_chunks/native_gold",
            t3: "kubejs:item/ore/rocky_chunks/native_silver",
            t4: "kubejs:item/ore/rocky_chunks/graphite",
            t5: "kubejs:item/ore/rocky_chunks/uraninite"
        },
        {
            name: "tfc:rock/gravel/basalt",
            rock: "basalt",
            t1: "kubejs:item/ore/rocky_chunks/magnetite",
            t2: "kubejs:item/ore/rocky_chunks/hematite",
            t3: "kubejs:item/ore/rocky_chunks/chromite",
            t4: "kubejs:item/ore/rocky_chunks/garnierite",
            t5: "kubejs:item/ore/rocky_chunks/bauxite"
        },
        {
            name: "tfc:rock/gravel/andesite",
            rock: "andesite",
            t1: "kubejs:item/ore/rocky_chunks/native_copper",
            t2: "kubejs:item/ore/rocky_chunks/native_gold",
            t3: "kubejs:item/ore/rocky_chunks/magnetite",
            t4: "kubejs:item/ore/rocky_chunks/sphalerite",
            t5: "kubejs:item/ore/rocky_chunks/galena"
        },
        {
            name: "tfc:rock/gravel/dacite",
            rock: "dacite",
            t1: "kubejs:item/ore/rocky_chunks/native_gold",
            t2: "kubejs:item/ore/rocky_chunks/native_silver",
            t3: "kubejs:item/ore/rocky_chunks/native_copper",
            t4: "kubejs:item/ore/rocky_chunks/cassiterite",
            t5: "kubejs:item/ore/rocky_chunks/graphite"
        },
        {
            name: "tfc:rock/gravel/quartzite",
            rock: "quartzite",
            t1: "kubejs:item/ore/rocky_chunks/native_gold",
            t2: "kubejs:item/ore/rocky_chunks/native_silver",
            t3: "kubejs:item/ore/rocky_chunks/cassiterite",
            t4: "kubejs:item/ore/rocky_chunks/uraninite",
            t5: "kubejs:item/ore/rocky_chunks/graphite"
        },
        {
            name: "tfc:rock/gravel/slate",
            rock: "slate",
            t1: "kubejs:item/ore/rocky_chunks/native_copper",
            t2: "kubejs:item/ore/rocky_chunks/galena",
            t3: "kubejs:item/ore/rocky_chunks/sphalerite",
            t4: "kubejs:item/ore/rocky_chunks/sulfur",
            t5: "kubejs:item/ore/rocky_chunks/malachite"
        },
        {
            name: "tfc:rock/gravel/phyllite",
            rock: "phyllite",
            t1: "kubejs:item/ore/rocky_chunks/native_copper",
            t2: "kubejs:item/ore/rocky_chunks/sphalerite",
            t3: "kubejs:item/ore/rocky_chunks/galena",
            t4: "kubejs:item/ore/rocky_chunks/limonite",
            t5: "kubejs:item/ore/rocky_chunks/malachite"
        },
        {
            name: "tfc:rock/gravel/schist",
            rock: "schist",
            t1: "kubejs:item/ore/rocky_chunks/hematite",
            t2: "kubejs:item/ore/rocky_chunks/magnetite",
            t3: "kubejs:item/ore/rocky_chunks/native_copper",
            t4: "kubejs:item/ore/rocky_chunks/native_gold",
            t5: "kubejs:item/ore/rocky_chunks/native_silver"
        },
        {
            name: "tfc:rock/gravel/gneiss",
            rock: "gneiss",
            t1: "kubejs:item/ore/rocky_chunks/native_gold",
            t2: "kubejs:item/ore/rocky_chunks/native_silver",
            t3: "kubejs:item/ore/rocky_chunks/cassiterite",
            t4: "kubejs:item/ore/rocky_chunks/graphite",
            t5: "kubejs:item/ore/rocky_chunks/uraninite"
        },
        {
            name: "tfc:rock/gravel/marble",
            rock: "marble",
            t1: "kubejs:item/ore/rocky_chunks/native_silver",
            t2: "kubejs:item/ore/rocky_chunks/galena",
            t3: "kubejs:item/ore/rocky_chunks/sphalerite",
            t4: "kubejs:item/ore/rocky_chunks/native_copper",
            t5: "kubejs:item/ore/rocky_chunks/cinnabar"
        }
    ];
    const oree = [
        {
            name: "cassiterite",
            ore: 'kubejs:item/ore/rocky_chunks/cassiterite'
        },
        {
            name: "native_copper",
            ore: 'kubejs:item/ore/rocky_chunks/native_copper'
        },
        {
            name: "native_silver",
            ore: 'kubejs:item/ore/rocky_chunks/native_silver'
        },
        {
            name: "native_gold",
            ore: 'kubejs:item/ore/rocky_chunks/native_gold'
        }]

    orea.forEach(ore => {

        create.splashing(
            [
                Item.of(ore.t1).withChance(0.02),
                Item.of(ore.t2).withChance(0.02),
                Item.of(ore.t3).withChance(0.02),
                Item.of(ore.t4).withChance(0.02),
                Item.of(ore.t5).withChance(0.02)

            ],
            Item.of(ore.name)
        ).id(`kubejs:orewash/${ore.rock}`);
    })
    orea.forEach(ore => {
        oree.forEach(deposit => {

            create.splashing(
                [
                    Item.of(deposit.ore).withChance(1),
                    Item.of(ore.t1).withChance(0.02),
                    Item.of(ore.t2).withChance(0.02),
                    Item.of(ore.t3).withChance(0.02),
                    Item.of(ore.t4).withChance(0.02),
                    Item.of(ore.t5).withChance(0.02)

                ],
                Item.of(`tfc:deposit/${deposit.name}/${ore.rock}`)
            ).id(`kubejs:orewash/${deposit.name}/${ore.rock}`);
        })
    })

})
