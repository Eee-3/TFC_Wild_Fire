/*
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "   ",
            "   ",
            "   "
        ],
        "key":{
            "":{
                "item":"",
                "count": 
            }
        },
        "result":{
            "item":"",
            "count":1
        }
    }
)
*/
ServerEvents.recipes(event => {

    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                "aaa",
                "  c"
            ],
            "key": {
                "a": {
                    "item": 'textile:linen_cloth',
                    "count": 2
                },
                "c": {
                    "item": 'minecraft:string',
                    "count": 10
                }

            },
            "result": {
                "item": "immersive_aircraft:sail",
                "count": 1
            }
        }
    ).id('kubejs:immersive_aircraft/sail')
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                "bbb",
                "cdc"
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/cast_iron",
                    "count": 1
                },
                "b": {
                    "item": "createdieselgenerators:engine_piston",
                    "count": 2
                },
                "c": {
                    "item": "create:fluid_pipe",
                    "count": 2
                },
                "d": {
                    "item": "immersive_aircraft:boiler"
                }

            },
            "result": {
                "item": "immersive_aircraft:engine",
                "count": 1
            }
        }
    ).id('kubejs:immersive_aircraft/engine')
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "  a",
                " b ",
                "a  "
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/wrought_iron",
                    "count": 2
                },
                "b": {
                    "item": "tfc:metal/rod/wrought_iron",
                    "count": 1
                },

            },
            "result": {
                "item": "immersive_aircraft:propeller",
                "count": 1
            }
        }
    ).id('kubejs:immersive_aircraft/propeller')
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " ab",
                "ab ",
                "cd "
            ],
            "key": {
                "a": {
                    "item": "vintageimprovements:iron_spring",
                    "count": 1
                },
                "b": {
                    "item": "minecraft:stick",
                    "count": 1
                },
                "c": {
                    "item": "minecraft:coal_block",
                    "count": 2
                },
                "d": {
                    "item": "create:shaft",
                    "count": 1
                }
            },
            "result": {
                "item": "immersive_aircraft:improved_landing_gear",
                "count": 1
            }
        }
    ).id('kubejs:immersive_aircraft/improved_landing_gear')
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "aaa",
            "bcb",
            "aaa"
        ],
        "key":{
            "a":{
                "item":"siegemachines:beam",
                "count": 2
            },
            "b":{
                "item":"tfc:metal/sheet/wrought_iron",
                "count": 1
            },
            "c":{
                "item":"siegemachines:beam",
                "count": 1
            }
        },
        "result":{
            "item":"immersive_aircraft:hull",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "ab ",
            "bcb",
            " ba"
        ],
        "key":{
            "a":{
                "item":"vintageimprovements:small_brass_spring",
                "count": 1
            },
            "b":{
                "item":"tfc:metal/sheet/brass",
                "count": 1
            },
            "c":{
                "item":"tfc:brass_mechanisms",
                "count": 2
            }
        },
        "result":{
            "item":"immersive_aircraft:enhanced_propeller",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            " a ",
            "bcb",
            "ded"
        ],
        "key":{
            "a":{
                "item":"minecraft:crossbow",
                "count": 1
            },
            "b":{
                "item":"create:cogwheel",
                "count": 1
            },
            "c":{
                "item":"create:vertical_gearbox",
                "count": 1
            },
            "d":{
                "item":"siegemachines:beam",
                "count": 1
            },
            "e":{
                "item":"siegemachines:turret_base",
                "count": 4
            }
        },
        "result":{
            "item":"immersive_aircraft:heavy_crossbow",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            " ba",
            "c b",
            "dc "
        ],
        "key":{
            "a":{
                "item":"design_decor:industrial_gear",
                "count": 2
            },
            "b":{
                "item":"tfc:metal/sheet/copper",
                "count": 1
            },
            "c":{
                "item":"tfc:metal/sheet/wrought_iron",
                "count": 1
            },
            "d":{
                "item":"design_decor:industrial_gear_large",
                "count": 2
            }
        },
        "result":{
            "item":"immersive_aircraft:industrial_gears",
            "count":1
        }
    }
)
/*event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            " a ",
            "aca",
            "bdb"
        ],
        "key":{
            "a":{
                "item":"tfc:metal/sheet/copper",
                "count": 2
            },
            "b":{
                "item":"tfc:metal/double_ingot/copper",
                "count": 2
            },
            "c":{
                "item":"tfcoreprocessing:kindle/coke_charcoal_briquette",
                "count": 1
            },
            "d":{
                "item":"tfc:metal/trapdoor/copper",
                "count": 1
            }
        },
        "result":{
            "item":"immersive_aircraft:boiler",
            "count":1
        }
    }
)*/
/*event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "eae",
            "aca",
            "bdb"
        ],
        "key":{
            "a":{
                "item":"tfc:metal/sheet/steel",
                "count": 2
            },
            "b":{
                "item":"tfc:metal/double_ingot/steel",
                "count": 2
            },
            "c":{
                "item":"tfcoreprocessing:kindle/coke_charcoal_briquette",
                "count": 1
            },
            "d":{
                "item":"tfc:metal/trapdoor/steel",
                "count": 1
            },
            "e":{
                "item":"immersive_aircraft:sturdy_pipes",
                "count": 1
            }
        },
        "result":{
            "item":"immersive_aircraft:steel_boiler",
            "count":1
        }
    }
)*/
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "  a",
            "bcb",
            "a  "
        ],
        "key":{
            "a":{
                "item":"create:fluid_pipe",
                "count": 1
            },
            "b":{
                "item":"create:andesite_alloy",
                "count": 2
            },
            "c":{
                "item":"create:fluid_pipe",
                "count": 2
            }
        },
        "result":{
            "item":"immersive_aircraft:sturdy_pipes",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            " ab",
            "cdb",
            " e "
        ],
        "key":{
            "a":{
                "item":"minecraft:compass",
                "count": 1
            },
            "b":{
                "item":"minecraft:repeater",
                "count": 1
            },
            "c":{
                "item":"minecraft:redstone_torch",
                "count": 1
            },
            "d":{
                "item":"create:flywheel",
                "count": 1
            },
            "e":{
                "tag":"tfc:axles",
                "count": 2
            }
        },
        "result":{
            "item":"immersive_aircraft:gyroscope",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            " a ",
            " b ",
            "cdc"
        ],
        "key":{
            "":{
                "item":"create:vertical_gearbox",
                "count": 1
            },
            "":{
                "item":"minecraft:spyglass",
                "count": 1
            },
            "":{
                "item":"vintageimprovements:andesite_sheet",
                "count": 2
            },
            "":{
                "item":"siegemachines:turret_base",
                "count": 2
            }
        },
        "result":{
            "item":"immersive_aircraft:telescope",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "aaa",
            "bcd",
            "aaa"
        ],
        "key":{
            "a":{
                "item":"tfc:metal/sheet/cast_iron",
                "count": 1
            },
            "b":{
                "item":"design_decor:industrial_gear",
                "count": 2
            },
            "c":{
                "item":"create:item_vault",
                "count": 4
            },
            "d":{
                "item":"design_decor:industrial_gear_large",
                "count": 2
            }
        },
        "result":{
            "item":"immersive_aircraft:bomb_bay",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "aba",
            "cdc",
            " e "
        ],
        "key":{
            "a":{
                "item":"create:potato_cannon",
                "count": 1
            },
            "b":{
                "item":"tfc:metal/double_ingot/copper",
                "count": 2
            },
            "c":{
                "item":"create:vertical_gearbox",
                "count": 1
            },
            "d":{
                "item":"immersive_aircraft:industrial_gears",
                "count": 1
            },
            "e":{
                "item":"siegemachines:turret_base",
                "count": 2
            }
        },
        "result":{
            "item":"immersive_aircraft:rotary_cannon",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "aba",
            "cdc",
            "efe"
        ],
        "key":{
            "a":{
                "item":"tfc:steel_pipe",
                "count": 2
            },
            "b":{
                "item":"tfc:metal/trapdoor/black_steel",
                "count": 1
            },
            "c":{
                "item":"tfc:metal/sheet/black_steel",
                "count": 2
            },
            "d":{
                "item":"immersive_aircraft:engine",
                "count": 1
            },
            "e":{
                "item":"tfc:metal/double_ingot/black_steel",
                "count": 1
            },
            "f":{
                "item":"tfc:blast_furnace",
                "count": 1
            }
        },
        "result":{
            "item":"immersive_aircraft:nether_engine",
            "count":1
        }
    }
)
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "aba",
            "cdc",
            "eee"
        ],
        "key":{
            "a":{
                "item":"immersive_aircraft:sturdy_pipes",
                "count": 2
            },
            "b":{
                "item":"tfc:metal/double_ingot/rose_gold",
                "count": 2
            },
            "c":{
                "item":"tfc:metal/sheet/rose_gold",
                "count": 1
            },
            "d":{
                "item":"immersive_aircraft:engine",
                "count": 1
            },
            "e":{
                "item":"tfc:metal/double_sheet/zinc",
                "count": 1
            }
        },
        "result":{
            "item":"immersive_aircraft:eco_engine",
            "count":1
        }
    }
)

})
