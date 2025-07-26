ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/lychee/block_interacting';

    const recipes = [
        {
            item_in: { tag: 'wildfire:metal/hammers' },
            block_in: 'create:rose_quartz_block',
            comment: '你需要一把金属锤子才能砸碎它。',
            post: [
                { type: 'damage_item', damage: 1.0 },
                { type: 'drop_item', item: 'create:rose_quartz', count: 3 },
                { type: 'drop_item', item: 'create:rose_quartz', count: 1, contextual: {type: 'chance', chance: 0.5}},
                { type: "execute", command: "playsound minecraft:block.deepslate.break player @p ~ ~ ~", hide: true, },
                { type: 'place', block: '*' }
            ],
            id: `${id_prefix}rose_quartz`
        },

    ];

    const anvils = [
        'andesite',
        'basalt',
        'dacite',
        'diorite',
        'gabbro',
        'granite',
        'rhyolite'
    ]
    anvils.forEach((anvil) => {
        recipes.push({
            item_in: { tag: 'tfc:hammers' },
            block_in: `tfc:rock/raw/${anvil}`,
            comment: '找到一块火成喷出岩然后用你的锤子右键打造你的第一个原始人砧。',
            post: [
                { type: 'damage_item', damage: 1.0 },
                { type: 'place', block: `tfc:rock/anvil/${anvil}` },
                { type: "execute", command: "playsound minecraft:block.stone.break player @p ~ ~ ~", hide: true, },
            ],
            id: `${id_prefix}anvil/${anvil}`
        })
    });

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    })
})


