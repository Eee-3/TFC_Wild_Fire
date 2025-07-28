TFCEvents.data(e => {
    e.fauna(climate => {
        climate.minTemp(13)
        climate.minRain(100)
        climate.minForest("edge")
    },
    fauna => { },
    "alexsmobs:tiger")

    e.fauna(climate => {
        climate.maxTemp(-5)
        climate.minRain(150)
        climate.maxRain(420)
        climate.maxForest("normal")
    },
    fauna => { },
    "alexsmobs:snow_leopard")

    e.fauna(climate => {
        climate.maxTemp(19)
        climate.minRain(100)
    },
    fauna => { 
        fauna.chance(10)
        fauna.distanceBelowSeaLevel(6)
    },
    "alexsmobs:orca")

    e.fauna(climate => {
        climate.minTemp(15)
    },
    fauna => {
        fauna.distanceBelowSeaLevel(0)
    },
    "alexsmobs:crocodile")
    e.fauna(climate => {
    },
    fauna => { },
    "untamedwilds:bear")
})
