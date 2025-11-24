ServerEvents.recipes(event => {
    const create = event.recipes.create

    // 融合后的岩石洗矿完整信息数组
    const orea = [
        {
            name: "tfc:rock/gravel/granite",
            rock: "granite",
            t1: "tfcorewashing:rocky_chunks_gold",
            t2: "tfcorewashing:rocky_chunks_silver",
            t3: "tfcorewashing:rocky_chunks_cassiterite",
            t4: "tfcorewashing:rocky_chunks_graphite",
            t5: "tfcorewashing:rocky_chunks_uraninite"
        },
        {
            name: "tfc:rock/gravel/diorite",
            rock: "diorite",
            t1: "tfcorewashing:rocky_chunks_copper",
            t2: "tfcorewashing:rocky_chunks_hematite",
            t3: "tfcorewashing:rocky_chunks_magnetite",
            t4: "tfcorewashing:rocky_chunks_sphalerite",
            t5: "tfcorewashing:rocky_chunks_galena"
        },
        {
            name: "tfc:rock/gravel/gabbro",
            rock: "gabbro",
            t1: "tfcorewashing:rocky_chunks_magnetite",
            t2: "tfcorewashing:rocky_chunks_hematite",
            t3: "tfcorewashing:rocky_chunks_chromite",
            t4: "tfcorewashing:rocky_chunks_garnierite",
            t5: "tfcorewashing:rocky_chunks_limonite"
        },
        {
            name: "tfc:rock/gravel/shale",
            rock: "shale",
            t1: "tfcorewashing:rocky_chunks_sulfur",
            t2: "tfcorewashing:rocky_chunks_copper",
            t3: "tfcorewashing:rocky_chunks_malachite",
            t4: "tfcorewashing:rocky_chunks_uraninite",
            t5: "tfcorewashing:rocky_chunks_sphalerite"
        },
        {
            name: "tfc:rock/gravel/claystone",
            rock: "claystone",
            t1: "tfcorewashing:rocky_chunks_bauxite",
            t2: "tfcorewashing:rocky_chunks_limonite",
            t3: "tfcorewashing:rocky_chunks_copper",
            t4: "tfcorewashing:rocky_chunks_galena",
            t5: "tfcorewashing:rocky_chunks_sphalerite"
        },
        {
            name: "tfc:rock/gravel/limestone",
            rock: "limestone",
            t1: "tfcorewashing:rocky_chunks_galena",
            t2: "tfcorewashing:rocky_chunks_sphalerite",
            t3: "tfcorewashing:rocky_chunks_silver",
            t4: "tfcorewashing:rocky_chunks_copper",
            t5: "tfcorewashing:rocky_chunks_malachite"
        },
        {
            name: "tfc:rock/gravel/conglomerate",
            rock: "conglomerate",
            t1: "tfcorewashing:rocky_chunks_gold",
            t2: "tfcorewashing:rocky_chunks_cassiterite",
            t3: "tfcorewashing:rocky_chunks_silver",
            t4: "tfcorewashing:rocky_chunks_hematite",
            t5: "tfcorewashing:rocky_chunks_sulfur"
        },
        {
            name: "tfc:rock/gravel/dolomite",
            rock: "dolomite",
            t1: "tfcorewashing:rocky_chunks_silver",
            t2: "tfcorewashing:rocky_chunks_galena",
            t3: "tfcorewashing:rocky_chunks_sphalerite",
            t4: "tfcorewashing:rocky_chunks_copper",
            t5: "tfcorewashing:rocky_chunks_cinnabar"
        },
        {
            name: "tfc:rock/gravel/chert",
            rock: "chert",
            t1: "tfcorewashing:rocky_chunks_sulfur",
            t2: "tfcorewashing:rocky_chunks_uraninite",
            t3: "tfcorewashing:rocky_chunks_chromite",
            t4: "tfcorewashing:rocky_chunks_sphalerite",
            t5: "tfcorewashing:rocky_chunks_galena"
        },
        {
            name: "tfc:rock/gravel/chalk",
            rock: "chalk",
            t1: "tfcorewashing:rocky_chunks_sulfur",
            t2: "tfcorewashing:rocky_chunks_copper",
            t3: "tfcorewashing:rocky_chunks_limonite",
            t4: "tfcorewashing:rocky_chunks_sphalerite",
            t5: "tfcorewashing:rocky_chunks_malachite"
        },
        {
            name: "tfc:rock/gravel/rhyolite",
            rock: "rhyolite",
            t1: "tfcorewashing:rocky_chunks_cassiterite",
            t2: "tfcorewashing:rocky_chunks_gold",
            t3: "tfcorewashing:rocky_chunks_silver",
            t4: "tfcorewashing:rocky_chunks_graphite",
            t5: "tfcorewashing:rocky_chunks_uraninite"
        },
        {
            name: "tfc:rock/gravel/basalt",
            rock: "basalt",
            t1: "tfcorewashing:rocky_chunks_magnetite",
            t2: "tfcorewashing:rocky_chunks_hematite",
            t3: "tfcorewashing:rocky_chunks_chromite",
            t4: "tfcorewashing:rocky_chunks_garnierite",
            t5: "tfcorewashing:rocky_chunks_bauxite"
        },
        {
            name: "tfc:rock/gravel/andesite",
            rock: "andesite",
            t1: "tfcorewashing:rocky_chunks_copper",
            t2: "tfcorewashing:rocky_chunks_gold",
            t3: "tfcorewashing:rocky_chunks_magnetite",
            t4: "tfcorewashing:rocky_chunks_sphalerite",
            t5: "tfcorewashing:rocky_chunks_galena"
        },
        {
            name: "tfc:rock/gravel/dacite",
            rock: "dacite",
            t1: "tfcorewashing:rocky_chunks_gold",
            t2: "tfcorewashing:rocky_chunks_silver",
            t3: "tfcorewashing:rocky_chunks_copper",
            t4: "tfcorewashing:rocky_chunks_cassiterite",
            t5: "tfcorewashing:rocky_chunks_graphite"
        },
        {
            name: "tfc:rock/gravel/quartzite",
            rock: "quartzite",
            t1: "tfcorewashing:rocky_chunks_gold",
            t2: "tfcorewashing:rocky_chunks_silver",
            t3: "tfcorewashing:rocky_chunks_cassiterite",
            t4: "tfcorewashing:rocky_chunks_uraninite",
            t5: "tfcorewashing:rocky_chunks_graphite"
        },
        {
            name: "tfc:rock/gravel/slate",
            rock: "slate",
            t1: "tfcorewashing:rocky_chunks_copper",
            t2: "tfcorewashing:rocky_chunks_galena",
            t3: "tfcorewashing:rocky_chunks_sphalerite",
            t4: "tfcorewashing:rocky_chunks_sulfur",
            t5: "tfcorewashing:rocky_chunks_malachite"
        },
        {
            name: "tfc:rock/gravel/phyllite",
            rock: "phyllite",
            t1: "tfcorewashing:rocky_chunks_copper",
            t2: "tfcorewashing:rocky_chunks_sphalerite",
            t3: "tfcorewashing:rocky_chunks_galena",
            t4: "tfcorewashing:rocky_chunks_limonite",
            t5: "tfcorewashing:rocky_chunks_malachite"
        },
        {
            name: "tfc:rock/gravel/schist",
            rock: "schist",
            t1: "tfcorewashing:rocky_chunks_hematite",
            t2: "tfcorewashing:rocky_chunks_magnetite",
            t3: "tfcorewashing:rocky_chunks_copper",
            t4: "tfcorewashing:rocky_chunks_gold",
            t5: "tfcorewashing:rocky_chunks_silver"
        },
        {
            name: "tfc:rock/gravel/gneiss",
            rock: "gneiss",
            t1: "tfcorewashing:rocky_chunks_gold",
            t2: "tfcorewashing:rocky_chunks_silver",
            t3: "tfcorewashing:rocky_chunks_cassiterite",
            t4: "tfcorewashing:rocky_chunks_graphite",
            t5: "tfcorewashing:rocky_chunks_uraninite"
        },
        {
            name: "tfc:rock/gravel/marble",
            rock: "marble",
            t1: "tfcorewashing:rocky_chunks_silver",
            t2: "tfcorewashing:rocky_chunks_galena",
            t3: "tfcorewashing:rocky_chunks_sphalerite",
            t4: "tfcorewashing:rocky_chunks_copper",
            t5: "tfcorewashing:rocky_chunks_cinnabar"
        }
    ];
    const oree = [
        {
            name: "cassiterite",
            ore: 'tfcorewashing:rocky_chunks_cassiterite'
        },
        {
            name: "native_copper",
            ore: 'tfcorewashing:rocky_chunks_copper'
        },
        {
            name: "native_silver",
            ore: 'tfcorewashing:rocky_chunks_silver'
        },
        {
            name: "native_gold",
            ore: 'tfcorewashing:rocky_chunks_gold'
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
