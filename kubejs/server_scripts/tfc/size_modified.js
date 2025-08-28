TFCEvents.data(e => {
  const small_light_items = [
    'cuisinedelight:suspicious_mix',
    'cuisinedelight:ham_fried_rice',
    'cuisinedelight:fried_rice',
    'cuisinedelight:mixed_fried_rice',
    'cuisinedelight:meat_with_seafood',
    'cuisinedelight:meat_with_vegetables',
    'cuisinedelight:seafood_with_vegetables',
    'cuisinedelight:fried_pasta',
    'cuisinedelight:mixed_pasta',
    'cuisinedelight:meat_fried_rice',
    'cuisinedelight:meat_pasta',
    'cuisinedelight:meat_platter',
    'cuisinedelight:seafood_fried_rice',
    'cuisinedelight:seafood_pasta',
    'cuisinedelight:seafood_platter',
    'cuisinedelight:vegetable_fried_rice',
    'cuisinedelight:vegetable_pasta',
    'cuisinedelight:vegetable_platter',
    'cuisinedelight:fried_mushroom',
    'cuisinedelight:fried_meat_and_melon',
    'cuisinedelight:scrambled_egg_and_tomato',
  ]
  small_light_items.forEach(item => {
    e.itemSize(item, 'small', 'light')
  })
  const huge_very_heavy_items = [
    "immersive_aircraft:phull",
    "immersive_aircraft:engine",
    "immersive_aircraft:boiler",
    "immersive_aircraft:airship",
    "immersive_aircraft:cargo_airship",
    "immersive_aircraft:warship",
    "immersive_aircraft:biplane",
    "immersive_aircraft:gyrodyne",
    "immersive_aircraft:quadrocopter",
    "immersive_aircraft:rotary_cannon",
    "immersive_aircraft:heavy-crossbow",
    "immersive_aircraft:telescope",
    "immersive_aircraft:bomb_bay",
    "immersive_aircraft:enhanced_propeller",
    "immersive_aircraft:eco_engine",
    "immersive_aircraft:nether_engine",
    "immersive_aircraft:steel_boiler",
    "immersive_aircraft:hull_reinforcement",
    "siegemachines:mortar",
    "siegemachines:culverin",
    "siegemachines:catapult",
    "siegemachines:trebuchet",
    "siegemachines:ballista",
    "siegemachines:battering-ram",
    "siegemachines:siege_ladder",
    "siegemachines:cannonball",
    "siegemachines:barrel"]
  huge_very_heavy_items.forEach(item => {
    e.itemSize(item, 'huge', 'very_heavy')

  })

  const large_heavy_items = [
    "siegemachines:turret_base",
    "siegemachines:beam",
    "siegemachines:giant_arrow"
  ]

  large_heavy_items.forEach(item => {
    e.itemSize(item, 'large', 'heavy')

  })








})

