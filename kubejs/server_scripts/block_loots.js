ServerEvents.blockLootTables(event => {
    event.addBlock("kubejs:tfc/dried_sinew", loot => {
        loot.addPool(pool => {
            pool.addItem('kubejs:tfc/crushed_sinew')
                .addCondition({
                    "condition": "minecraft:match_tool",
                    "predicate": {
                        "tag": "tfc:hammers"
                    }
                });

            pool.addItem("kubejs:tfc/dried_sinew")
                .addCondition({
                    "condition": "minecraft:inverted",
                    "term": {
                        "condition": "minecraft:match_tool",
                        "predicate": {
                            "tag": "tfc:hammers"
                        }
                    }
                });
        });
    });
});
ServerEvents.entityLootTables(event => {
    // 定义要添加掉落的所有原版生物ID列表
    const mobsToAddIron=[
        { name: 'alexsmobs:crocodile', min: 2, max: 3 }, // 鳄鱼掉2～3个
        { name: 'alexsmobs:moose', min: 2, max: 5 }, // alex驼鹿掉2～5个
        { name: 'alexsmobs:kangaroo', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'alexsmobs:bison', min: 2, max: 3 }, // 野牛掉2～3个
        { name: 'tfc:yak', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'tfc:musk_ox', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'tfc:wildebeest', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'tfc:cow', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'alexsmobs:rhinoceros', min: 3, max: 7 }, // alex犀牛掉3～7个
        { name: 'alexsmobs:moose', min: 2, max: 5 }, // alex驼鹿掉2～5个
        { name: 'tfc:caribou', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'tfc:mule', min: 1, max: 2 }, // 马/驴/骡子掉1～2个
        { name: 'tfc:donkey', min: 1, max: 2 }, // 马/驴/骡子掉1～2个
        { name: 'tfc:goat', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'alexsmobs:crocodile', min: 2, max: 3 }, // 鳄鱼掉2～3个
        { name: 'alexsmobs:caiman', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'alexsmobs:kangaroo', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'naturalist:giraffe', min: 5, max: 8 }, // 长颈鹿掉5～8个
        { name: 'alexsmobs:snow_leopard', min: 1, max: 2 }, // 剩余生物掉1～2个
        { name: 'tfc:horse', min: 1, max: 2 }, // 马/驴/骡子掉1～2个
        { name: 'tfc:panda', min: 2, max: 3 }, // 剩余生物掉1～2个
        { name: 'tfc:black_bear', min: 2, max: 3 }, // 各种熊掉2～3个
        { name: 'tfc:grizzly_bear', min: 2, max: 3 }, // 各种熊掉2～3个
        { name: 'alexsmobs:tiger', min: 3, max: 4 }, // 剩余生物掉1～2个
        { name: 'tfc:polar_bear', min: 2, max: 3 }, // 各种熊掉2～3个
        { name: 'alexsmobs:elephant', min: 6, max: 12 } // 亚历克斯大象掉3～6个
    ];
    mobsToAddIron.forEach(mob => {
        event.modifyEntity(mob.name, table => {
            table.addPool(pool => {
                //pool.randomChance(0.5);//抽取这个池子的概率
                //pool.setBinomialRolls(mob.max,0.7)//抽几次   每次抽到的概率
                pool.addItem('kubejs:tfc/sinew', 1, { min: mob.min, max: mob.max });
            });
        });
    });
});