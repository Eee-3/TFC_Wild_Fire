ServerEvents.recipes(event => {
    const metal_support = [
        { name: "copper", number: 1 },
        { name: "bismuth_bronze", number: 2 },
        { name: "black_bronze", number: 2 },
        { name: "cast_iron", number: 2 },
        { name: "bronze", number: 2 },
        { name: "black_steel", number: 5 },
        { name: "blue_steel", number: 6 },
        { name: "red_steel", number: 6 },
        { name: "steel", number: 4 },
        { name: "wrought_iron", number: 3 }
    ]
    metal_support.forEach(metal => {
        event.recipes.tfc.welding(
            `15x kubejs:${metal.name}_support`,
            `tfc:metal/rod/${metal.name}`,
            `tfc:metal/ingot/${metal.name}`,
            metal.number
        )
    });





})