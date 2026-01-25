ServerEvents.recipes(e => {
    e.shaped('kubejs:wooden_tong',
      [
        "a ",
        "ba"
      ],
      {
        a: '#tfc:firepit_sticks',
        b: 'farmersdelight:rope'

      })
const metalhot = [
    { metal: 'bismuth_bronze', num: 2 },
    { metal: 'black_bronze', num: 2 },
    { metal: 'bronze', num: 2 },
    { metal: 'copper', num: 1 },
  ];
  const metalhotinf = [
    { metal: 'black_steel', num: 5 },
    { metal: 'blue_steel', num: 6 },
    { metal: 'red_steel', num: 6 },
  ];
  const metalhotpro = [
    { metal: 'wrought_iron', num: 3 },
    { metal: 'steel', num: 4 },
    { metal: 'cast_iron', num: 1 },
    { metal: 'gold', num: 1 },
    { metal: 'rose_gold', num: 1 },
    { metal: 'brass', num: 2 },
    { metal: 'bismuth', num: 1 },
    { metal: 'silver', num: 1 },
    { metal: 'sterling_silver', num: 1 },
    { metal: 'nickel', num: 1 },
    { metal: 'zinc', num: 1 },
  ];


  const metalhotf = [
    { metal: 'chromium', num: 1 },
    { metal: 'stainless_steel', num: 4 }
  ];
  metalhotinf.forEach(metal => {

    e.shaped(`kubejs:${metal.metal}_tong`,
      [
        "a ",
        "ba"
      ],
      {
        a: `kubejs:${metal.metal}_tong_part`,
        b: 'kubejs:material_component_black_steel'

      })
      .modifyResult((inputItems, result) => {
        const items = inputItems.findAll(`kubejs:${metal.metal}_tong_part`)
        let tong_part = items[0].copy()
        let tong_part1 = items[1].copy()
        const forging_bonustag = tong_part.getOrCreateTag();
        const forging_bonustag1 = tong_part1.getOrCreateTag();
        let level = forging_bonustag.getInt("tfc:forging_bonus");
        let level1 = forging_bonustag1.getInt("tfc:forging_bonus");
        let mainpart = Math.floor((level + level1) / 2);
        const resultTag = result.getOrCreateTag();
        resultTag.contains("tfc:forging_bonus") ? resultTag.remove("tfc:forging_bonus") : resultTag.putInt("tfc:forging_bonus", mainpart);
        return result
      }).id(`kubejs:tfc/tongs/${metal.metal}_tong`);//向下取整锻造
  })
  metalhotf.forEach(metal => {

    e.shaped(`kubejs:${metal.metal}_tong`,
      [
        "a ",
        " a"
      ],
      {
        a: `kubejs:${metal.metal}_tong_part`

      })
      .modifyResult((inputItems, result) => {
        const items = inputItems.findAll(`kubejs:${metal.metal}_tong_part`)
        let tong_part = items[0].copy()
        let tong_part1 = items[1].copy()
        const forging_bonustag = tong_part.getOrCreateTag();
        const forging_bonustag1 = tong_part1.getOrCreateTag();
        let level = forging_bonustag.getInt("tfc:forging_bonus");
        let level1 = forging_bonustag1.getInt("tfc:forging_bonus");
        let mainpart = Math.floor((level + level1) / 2);
        const resultTag = result.getOrCreateTag();
        resultTag.contains("tfc:forging_bonus") ? resultTag.remove("tfc:forging_bonus") : resultTag.putInt("tfc:forging_bonus", mainpart);
        return result
      }).id(`kubejs:tfc/tongs/${metal.metal}_tong`);//向下取整锻造
  })
  metalhotpro.forEach(metal => {

    e.shaped(`kubejs:${metal.metal}_tong`,
      [
        "a ",
        " a"
      ],
      {
        a: `kubejs:${metal.metal}_tong_part`
      })
      .modifyResult((inputItems, result) => {
        const items = inputItems.findAll(`kubejs:${metal.metal}_tong_part`)
        let tong_part = items[0].copy()
        let tong_part1 = items[1].copy()
        const forging_bonustag = tong_part.getOrCreateTag();
        const forging_bonustag1 = tong_part1.getOrCreateTag();
        let level = forging_bonustag.getInt("tfc:forging_bonus");
        let level1 = forging_bonustag1.getInt("tfc:forging_bonus");
        let mainpart = Math.floor((level + level1) / 2);
        const resultTag = result.getOrCreateTag();
        resultTag.contains("tfc:forging_bonus") ? resultTag.remove("tfc:forging_bonus") : resultTag.putInt("tfc:forging_bonus", mainpart);
        return result
      }).id(`kubejs:tfc/tongs/${metal.metal}_tong`);//向下取整锻造
  })
  metalhot.forEach(metal => {

    e.shaped(`kubejs:${metal.metal}_tong`,
      [
        "a ",
        "ba"
      ],
      {
        a: `kubejs:${metal.metal}_tong_part`,
        b: "farmersdelight:rope"
      })
      .modifyResult((inputItems, result) => {
        const items = inputItems.findAll(`kubejs:${metal.metal}_tong_part`)
        let tong_part = items[0].copy()
        let tong_part1 = items[1].copy()
        const forging_bonustag = tong_part.getOrCreateTag();
        const forging_bonustag1 = tong_part1.getOrCreateTag();
        let level = forging_bonustag.getInt("tfc:forging_bonus");
        let level1 = forging_bonustag1.getInt("tfc:forging_bonus");
        let mainpart = Math.floor((level + level1) / 2);
        const resultTag = result.getOrCreateTag();
        resultTag.contains("tfc:forging_bonus") ? resultTag.remove("tfc:forging_bonus") : resultTag.putInt("tfc:forging_bonus", mainpart);
        return result
      }).id(`kubejs:tfc/tongs/${metal.metal}_tong`);//向下取整锻造
  })
})