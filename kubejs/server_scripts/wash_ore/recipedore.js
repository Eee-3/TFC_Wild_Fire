
ServerEvents.recipes(event => {
    const { tfc, create } = event.recipes;
    const recipedid = 'kubejs:wash_ore/recipedeore/';


    wash_ore.forEach(ore => {
        event.shapeless(`3x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/poor_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2).keepIngredient({ tag: '#tfc:hammers' })
            .id(`${recipedid}hammers/poor/${ore.ore}`)//贫瘠
        event.shapeless(`5x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/normal_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2).keepIngredient({ tag: '#tfc:hammers' })
            .id(`${recipedid}hammers/normal/${ore.ore}`)//普通
        event.shapeless(`7x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/rich_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2).keepIngredient({ tag: '#tfc:hammers' })
            .id(`${recipedid}hammers/rich/${ore.ore}`)//富集
        event.shapeless(`2x kubejs:item/ore/rocky_chunks/${ore.ore}`,
            [`${ore.mod}/small_${ore.ore}`, '#tfc:hammers'],
        ).damageIngredient({ tag: '#tfc:hammers' }, 2).keepIngredient({ tag: '#tfc:hammers' })
            .id(`${recipedid}hammers/small/${ore.ore}`)//颗粒






        if (ore.type == '/type_') {
            event.shapeless(`kubejs:item/ore/dust_brick/${ore.ore}`, `9x kubejs:item/ore/refined_dust/${ore.ore}`).id(`${recipedid}shapeless/1/dust_brick/refined_dust/${ore.ore}`)//小团矿
            event.shapeless(`kubejs:item/ore/dust_lump/${ore.ore}`, `4x kubejs:item/ore/purified_dust/${ore.ore}`).id(`${recipedid}shapeless/2/dust_lump/powder/${ore.ore}`)//小团矿
            event.shapeless(`kubejs:item/ore/dust_lump/${ore.ore}`, `2x kubejs:item/ore/refined_dust/${ore.ore}`).id(`${recipedid}shapeless/3/dust_lump/powder/${ore.ore}`)//小团矿
            event.shapeless(Item.of(`kubejs:item/ore/dust_clump/${ore.ore}`), `4x kubejs:item/ore/dust_lump/${ore.ore}`).id(`${recipedid}shapeless/1/dust_lump/${ore.ore}`)//大团矿
            event.shapeless(Item.of(`4x kubejs:item/ore/dust_lump/${ore.ore}`), `kubejs:item/ore/dust_clump/${ore.ore}`).id(`${recipedid}shapeless/2/dust_lump/${ore.ore}`)//大团矿反向
            if (ore.mod == 'tfc_ie_addon:ore') {
                event.shapeless(`kubejs:item/ore/dust_lump/${ore.ore}`, `4x tfc_ie_addon:powder/${ore.ore}`).id(`${recipedid}shapeless/1/dust_lump/powder/${ore.ore}`)
                event.shapeless(`kubejs:item/ore/dirty_dust/${ore.ore}`, `4x kubejs:item/ore/dirty_pile/${ore.ore}`).id(`${recipedid}shapeless/1/dirty_pile/powder/${ore.ore}`)
            }//小团矿
            if (ore.mod == 'firmalife:ore') {
                event.shapeless(`kubejs:item/ore/dirty_dust/${ore.ore}`, `4x kubejs:item/ore/dirty_pile/${ore.ore}`).id(`${recipedid}shapeless/1/dirty_pile/powder/${ore.ore}`)
                event.shapeless(`kubejs:item/ore/dust_lump/${ore.ore}`, `4x firmalife:powder/${ore.ore}`).id(`${recipedid}shapeless/1/dust_lump/powder/${ore.ore}`)
            }//小团矿
            if (ore.mod == 'tfc:ore') {
                event.shapeless(`kubejs:item/ore/dirty_dust/${ore.ore}`, `4x kubejs:item/ore/dirty_pile/${ore.ore}`).id(`${recipedid}shapeless/1/dirty_pile/powder/${ore.ore}`)
                event.shapeless(`kubejs:item/ore/dust_lump/${ore.ore}`, `4x tfc:powder/${ore.ore}`).id(`${recipedid}shapeless/1/dust_lump/powder/${ore.ore}`)
            }//小团矿
        }




        tfc.quern(`kubejs:item/ore/dirty_dust/${ore.ore}`, `kubejs:item/ore/chunks/${ore.ore}`)
            .id(`${recipedid}quern/chunks/${ore.ore}`)//手推磨磨粉
        create.milling([`kubejs:item/ore/dirty_dust/${ore.ore}`, Item.of(`kubejs:item/ore/dirty_pile/${ore.ore}`).withChance(0.2)], `kubejs:item/ore/chunks/${ore.ore}`)
            .id(`${recipedid}milling/chunks/${ore.ore}`)//机械动力磨粉


        /*event.custom({
            "type": "immersiveengineering:arc_furnace",
            "results": [
                {
                    "item": `tfc:metal/ingot/${ore.metal}`
                }
            ],
            "additives": [],
            "input": {
                "item": `kubejs:item/ore/dust_brick/${ore.ore}`
            },
            "time": 100,
            "energy": 51200
        })
*/




    })
})