
ServerEvents.recipes(e => {

const metalaa = [
  { name: "copper", temperature: 1080, metal: "copper" },
  { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
  { name: "black_bronze", temperature: 1050, metal: "black_bronze" },
  { name: "bronze", temperature: 950, metal: "bronze" },
  { name: "black_steel", temperature: 1485, metal: "black_steel" },
  { name: "blue_steel", temperature: 1538, metal: "blue_steel" },
  { name: "red_steel", temperature: 1538, metal: "red_steel" },
  { name: "steel", temperature: 1540, metal: "steel" },
  { name: "wrought_iron", temperature: 1535, metal: 'cast_iron' }
];


  function applyForgingBonus(metala, weaponName) {
    return (inputGrid, result) => {
      const head = inputGrid.findAll().find(stack =>
        stack.id.toString().startsWith(`kubejs:${metala.name}_${weaponName}_weapon_part`)
      );
      const headTag = head.getOrCreateTag();
      let level = headTag.getInt("tfc:forging_bonus");
      level = Math.min(level, 4);
      const resultTag = result.getOrCreateTag();
      resultTag.contains("tfc:forging_bonus")
        ? resultTag.remove("tfc:forging_bonus")
        : resultTag.putInt("tfc:forging_bonus", level);
      return result;
    };
  }
   function applyForgingBonus2(metala, weaponName) {
    return (inputGrid, result) => {
      const head = inputGrid.findAll().find(stack =>
        stack.id.toString().startsWith(`tfc:metal/javelin_head/${metala.name}`)
      );
      const headTag = head.getOrCreateTag();
      let level = headTag.getInt("tfc:forging_bonus");
      level = Math.min(level, 4);
      const resultTag = result.getOrCreateTag();
      resultTag.contains("tfc:forging_bonus")
        ? resultTag.remove("tfc:forging_bonus")
        : resultTag.putInt("tfc:forging_bonus", level);
      return result;
    };
  }

  // 生成所有武器配方
  metalaa.forEach(metala => {
    // 长棍
    e.shaped(
      `kubejs:${metala.name}_quarterstaff`, ["  A", " B ", "A  "],
      {
        A: `kubejs:${metala.name}_quarterstaff_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_quarterstaff_shaped`)
      .modifyResult(applyForgingBonus(metala, "quarterstaff"));

    // 匕首
    e.shaped(
      `kubejs:${metala.name}_dagger`, ["A", "B"],
      {
        A: `kubejs:${metala.name}_dagger_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_dagger_shaped`)
      .modifyResult(applyForgingBonus(metala, "dagger"));

    // 格挡匕首
    e.shaped(
      `kubejs:${metala.name}_parrying_dagger`, ["A", "C", "B"],
      {
        A: `kubejs:${metala.name}_parrying_dagger_weapon_part`,
        B: 'spartanweaponry:handle',
        C: `tfc:metal/rod/${metala.name}`
      }
    ).id(`kubejs:${metala.name}_parrying_dagger_shaped`)
      .modifyResult(applyForgingBonus(metala, "parrying_dagger"));

    // 长刀
    e.shaped(
      `kubejs:${metala.name}_longsword`, ["  A", " D ", "B  "],
      {
        A: `kubejs:${metala.name}_longsword_weapon_part`,
        B: 'spartanweaponry:handle',
        D: `kubejs:${metala.name}_handguard_weapon_part`
      }
    ).id(`kubejs:${metala.name}_longsword_shaped`)
      .modifyResult(applyForgingBonus(metala, "longsword"));

    // 大剑
    e.shaped(
      `kubejs:${metala.name}_greatsword`, ["A", "D", "B"],
      {
        A: `kubejs:${metala.name}_greatsword_weapon_part`,
        B: 'spartanweaponry:handle',
        D: `kubejs:${metala.name}_handguard_weapon_part`
      }
    ).id(`kubejs:${metala.name}_greatsword_shaped`)
      .modifyResult(applyForgingBonus(metala, "greatsword"));

    // 军刀
    e.shaped(
      `kubejs:${metala.name}_saber`, ["A", "D", "B"],
      {
        A: `kubejs:${metala.name}_saber_weapon_part`,
        B: 'spartanweaponry:handle',
        D: `kubejs:${metala.name}_handguard_weapon_part`
      }
    ).id(`kubejs:${metala.name}_saber_shaped`)
      .modifyResult(applyForgingBonus(metala, "saber"));

    // 迅捷剑
    e.shaped(
      `kubejs:${metala.name}_rapier`, ["  A", " C ", "B  "],
      {
        A: `kubejs:${metala.name}_rapier_weapon_part`,
        B: 'spartanweaponry:handle',
        C: `tfc:metal/rod/${metala.name}`
      }
    ).id(`kubejs:${metala.name}_rapier_shaped`)
      .modifyResult(applyForgingBonus(metala, "rapier"));

    // 太刀
    e.shaped(
      `kubejs:${metala.name}_katana`, ["  A", " D ", "B  "],
      {
        A: `kubejs:${metala.name}_katana_weapon_part`,
        B: 'spartanweaponry:handle',
        D: `kubejs:${metala.name}_handguard_weapon_part`
      }
    ).id(`kubejs:${metala.name}_katana_shaped`)
      .modifyResult(applyForgingBonus(metala, "katana"));

    // 战斧
    e.shaped(
      `kubejs:${metala.name}_battleaxe`, [" A", "B "],
      {
        A: `kubejs:${metala.name}_battleaxe_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_battleaxe_shaped`)
      .modifyResult(applyForgingBonus(metala, "battleaxe"));

    // 长柄锤
    e.shaped(
      `kubejs:${metala.name}_battle_hammer`, [" A", "B "],
      {
        A: `kubejs:${metala.name}_battle_hammer_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_battle_hammer_shaped`)
      .modifyResult(applyForgingBonus(metala, "battle_hammer"));

    // 大锤
    e.shaped(
      `kubejs:${metala.name}_warhammer`, [" A", "B "],
      {
        A: `kubejs:${metala.name}_warhammer_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_warhammer_shaped`)
      .modifyResult(applyForgingBonus(metala, "warhammer"));

    // 骑枪
    e.shaped(
      `kubejs:${metala.name}_lance`, [" A", "E "],
      {
        A: `kubejs:${metala.name}_lance_weapon_part`,
        E: 'spartanweaponry:pole'
      }
    ).id(`kubejs:${metala.name}_lance_shaped`)
      .modifyResult(applyForgingBonus(metala, "lance"));

    // 长柄刀
    e.shaped(
      `kubejs:${metala.name}_glaive`, ["A", "E"],
      {
        A: `kubejs:${metala.name}_glaive_weapon_part`,
        E: 'spartanweaponry:pole'
      }
    ).id(`kubejs:${metala.name}_glaive_shaped`)
      .modifyResult(applyForgingBonus(metala, "glaive"));

    // 戟
    e.shaped(
      `kubejs:${metala.name}_halberd`, [" A", "E "],
      {
        A: `kubejs:${metala.name}_halberd_weapon_part`,
        E: 'spartanweaponry:pole'
      }
    ).id(`kubejs:${metala.name}_halberd_shaped`)
      .modifyResult(applyForgingBonus(metala, "halberd"));

    // 飞刀
    e.shaped(
      `kubejs:${metala.name}_throwing_knife`, ["A ", " B"],
      {
        A: `kubejs:${metala.name}_throwing_knife_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_throwing_knife_shaped`)
      .modifyResult(applyForgingBonus(metala, "throwing_knife"));

    // 印第安投斧
    e.shaped(
      `kubejs:${metala.name}_tomahawk`, [" A", "B "],
      {
        A: `kubejs:${metala.name}_tomahawk_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_tomahawk_shaped`)
      .modifyResult(applyForgingBonus(metala, "tomahawk"));

    // 战镰
    e.shaped(
      `kubejs:${metala.name}_scythe`, [" A", "E "],
      {
        A: `kubejs:${metala.name}_scythe_weapon_part`,
        E: 'spartanweaponry:pole'
      }
    ).id(`kubejs:${metala.name}_scythe_shaped`)
      .modifyResult(applyForgingBonus(metala, "scythe"));

    // 页锤
    e.shaped(
      `kubejs:${metala.name}_flanged_mace`, ["A ", " B"],
      {
        A: `kubejs:${metala.name}_flanged_mace_weapon_part`,
        B: 'spartanweaponry:handle'
      }
    ).id(`kubejs:${metala.name}_flanged_mace_shaped`)
      .modifyResult(applyForgingBonus(metala, "flanged_mace"));
    // 标枪
    e.shaped(
      `kubejs:${metala.name}_javelin`, ["A", "E"],
      {
        A: `tfc:metal/javelin_head/${metala.name}`,
        E: 'spartanweaponry:pole'
      }
    ).id(`kubejs:${metala.name}_javelin_shaped`)
      .modifyResult(applyForgingBonus2(metala, "javelin"));
    // 矛
    e.shaped(
      `kubejs:${metala.name}_spear`, [" A", "E "],
      {
        A: `tfc:metal/javelin_head/${metala.name}`,
        E: 'spartanweaponry:pole'
      }
    ).id(`kubejs:${metala.name}_spear_shaped`)
      .modifyResult(applyForgingBonus2(metala, "spear"));
    // 长矛
    e.shaped(
      `kubejs:${metala.name}_pike`, ["  A", " E ", "E  "],
      {
        A: `tfc:metal/javelin_head/${metala.name}`,
        E: 'spartanweaponry:pole'
      }
    ).id(`kubejs:${metala.name}_pike_shaped`)
      .modifyResult(applyForgingBonus2(metala, "pike"));

  });

})

