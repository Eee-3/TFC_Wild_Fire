let metals = [
    "wrought_iron",
    "constantan",
    "bronze",
    "bismuth_bronze",
    "black_bronze",
    "brass",
    "copper",
    "gold",
    "nickel",
    "rose_gold",
    "electrum",
    "silver",
    "sterling_silver",
    "tin",
    "zinc",
    "cast_iron",
    "steel",
    "black_steel",
    "blue_steel",
    "red_steel",
    "unknown",
    "chromium",
    "stainless_steel",
    "weak_steel",
    "weak_blue_steel",
    "weak_red_steel",
    "high_carbon_steel",
    "high_carbon_black_steel",
    "high_carbon_blue_steel",
    "high_carbon_red_steel",
]

TFCFluidEvents.modify(e => {

    if (e.name.includes("metal/"))
    {
        let metal = e.name.split('/')[1]

        if (metals.indexOf(metal) == -1)
            return

        e.setStillTexture(`kubejs:block/molten/molten_${metal}_still`)

        e.setFlowingTexture(`kubejs:block/molten/molten_${metal}_flowing`)

        e.setTintColor(0xFFFFFFFF)
    }
})
//牦牛奶
TFCFluidEvents.modify(e => {

    if (e.name.includes("yak_milk")){

        e.setStillTexture(`kubejs:block/milk/yak_milk_still`)

        e.setFlowingTexture(`kubejs:block/milk/yak_milk_flowing`)

        e.setTintColor(0xFFFFFFFF)
    }
})
//山羊奶
TFCFluidEvents.modify(e => {

    if (e.name.includes("goat_milk")){

        e.setStillTexture(`kubejs:block/milk/goat_milk_still`)

        e.setFlowingTexture(`kubejs:block/milk/goat_milk_flowing`)

        e.setTintColor(0xFFFFFFFF)
    }
})
//椰奶
TFCFluidEvents.modify(e => {

    if (e.name.includes("coconut_milk")){

        e.setStillTexture(`kubejs:block/milk/coconut_milk_still`)

        e.setFlowingTexture(`kubejs:block/milk/coconut_milk_flowing`)

        e.setTintColor(0xFFFFFFFF)
    }
})
//凝固的奶

//牦牛奶
TFCFluidEvents.modify(e => {

    if (e.name.includes("curdled_yak_milk")){

        e.setStillTexture(`kubejs:block/curdled_milk/yak_milk_still`)

        e.setFlowingTexture(`kubejs:block/curdled_milk/yak_milk_flowing`)

        e.setTintColor(0xFFFFFFFF)
    }
})
//山羊奶
TFCFluidEvents.modify(e => {

    if (e.name.includes("curdled_goat_milk")){

        e.setStillTexture(`kubejs:block/curdled_milk/goat_milk_still`)

        e.setFlowingTexture(`kubejs:block/curdled_milk/goat_milk_flowing`)

        e.setTintColor(0xFFFFFFFF)
    }
})