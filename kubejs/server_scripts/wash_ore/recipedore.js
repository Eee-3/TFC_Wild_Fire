
ServerEvents.recipes(event => {
    const { tfc ,create} = event.recipes;
    wash_ore.forEach(ore => {
        event.shapeless(`3x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/poor_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)//贫瘠
        event.shapeless(`5x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/normal_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)//普通
        event.shapeless(`7x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/rich_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)//富集
        event.shapeless(`2x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/small_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2)//颗粒
        tfc.quern(`kubejs:item/ore/dirty_dust/${ore.ore}`, `kubejs:item/ore/rocky_chunks/${ore.ore}`)//手推磨磨粉
        create.milling([`kubejs:item/ore/dirty_dust/${ore.ore}`,Item.of(`kubejs:item/ore/dirty_pile/${ore.ore}`).withChance(0.2)],`kubejs:item/ore/rocky_chunks/${ore.ore}`)//机械动力磨粉
    })
})