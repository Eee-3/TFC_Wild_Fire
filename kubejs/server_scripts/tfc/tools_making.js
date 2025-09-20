const metals = [
  "bismuth_bronze",
  "black_bronze",
  "black_steel",
  "blue_steel",
  "bronze",
  "copper",
  "red_steel",
  "wrought_iron"
]
const tools = [
  "hoe",
  "axe",
  "mace",
  "hammer",
  "chisel",
  "shovel",
  "javelin",
  "pickaxe",
  "propick"
]
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
const weaponry = [//A是金属头,B是棍子 C是金属棒 D是护手 E长手柄
  { name: "quarterstaff", number: 200, recipesd: ["A", "B", "A"] },        // 长棍
  { name: "dagger", number: 100, recipesd: ["A", "B"] },              // 匕首
  { name: "parrying_dagger", number: 100, recipesd: ["A", "C", "B"] },     // 格挡匕首
  { name: "longsword", number: 300, recipesd: ["A", "D", "B"] },           // 长刀
  { name: "greatsword", number: 400, recipesd: ["A", "D", "B"] },          // 大剑
  { name: "saber", number: 300, recipesd: ["A", "D", "B"] },               // 军刀
  { name: "rapier", number: 200, recipesd: ["A", "C", "B"] },              // 迅捷剑
  { name: "katana", number: 300, recipesd: ["A", "D", "B"] },              // 太刀
  { name: "battleaxe", number: 400, recipesd: ["A", "B"] },           // 战斧
  { name: "battle_hammer", number: 200, recipesd: ["A", "B"] },       // 长柄锤
  { name: "warhammer", number: 400, recipesd: ["A", "B"] },           // 大锤
  { name: "javelin", number: 400, recipesd: ["A", "E"] },             // 标枪
  { name: "spear", number: 100, recipesd: ["A", "E"] },               // 矛
  { name: "pike", number: 100, recipesd: ["A", "E", "E"] },                // 长矛
  { name: "lance", number: 400, recipesd: ["A", "E"] },               // 骑枪
  { name: "glaive", number: 200, recipesd: ["A", "E"] },              // 长柄刀
  { name: "halberd", number: 400, recipesd: ["A", "E"] },             // 戟
  { name: "throwing_knife", number: 100, recipesd: ["A", "B"] },      // 飞刀
  { name: "tomahawk", number: 200, recipesd: ["A", "B"] },            // 印第安投斧
  { name: "scythe", number: 400, recipesd: ["A", "E"] },              // 战镰
  { name: "flanged_mace", number: 300, recipesd: ["A", "B"] },        // 页锤
  //{ name: "boomerang", number: 100 ,recipesd:["A","B"]}            // 回旋镖
];
ServerEvents.recipes(e => {
  tools.forEach(tool => {
    metals.forEach(metal => {
      //weak
      e.recipes.kubejs.shaped(
        `tfc:metal/${tool}/${metal}`,
        [
          "AB ",
          "C  "
        ], {
        A: "#bsa:bindings/weak",
        B: `tfc:metal/${tool}_head/${metal}`,
        C: "#forge:rods/wooden"
      }
      ).id(`kubejs:crafting/metal/${tool}/${metal}/weak`)
      //medium
      e.recipes.kubejs.shaped(
        `tfc:metal/${tool}/${metal}`,
        [
          "AB ",
          "C  "
        ], {
        A: "#bsa:bindings/medium",
        B: `tfc:metal/${tool}_head/${metal}`,
        C: "#forge:rods/wooden"
      }
      ).id(`kubejs:crafting/metal/${tool}/${metal}/medium`)
      //strong
      e.recipes.kubejs.shaped(
        `tfc:metal/${tool}/${metal}`,
        [
          "AB ",
          "C  "
        ], {
        A: "#bsa:bindings/strong",
        B: `tfc:metal/${tool}_head/${metal}`,
        C: "#forge:rods/wooden"
      }
      ).modifyResult((inputGrid, result) => {
        const head = inputGrid.findAll().find(stack => stack.id.toString().startsWith('tfc:metal/'))
        const headTag = head.getOrCreateTag();
        let level = headTag.getInt("tfc:forging_bonus") + 1;
        level = Math.min(level, 4);
        const resultTag = result.getOrCreateTag();
        resultTag.contains("tfc:forging_bonus") ? resultTag.remove("tfc:forging_bonus") : resultTag.putInt("tfc:forging_bonus", level);
        return result
      }).id(`kubejs:crafting/metal/${tool}/${metal}/strong`)

    });
  });

  metalaa.forEach(function (metala) {
    // 遍历所有武器类型
    weaponry.forEach(weaponrya => {
      // 构建配方键映射
      var keyMap = {};
      // 为配方中的每个独特组件创建映射
      var uniqueKeys = [];
      for (var i = 0; i < weaponrya.recipesd.length; i++) {
        var key = weaponrya.recipesd[i];
        // 检查当前key是否已存在于uniqueKeys中
        if (uniqueKeys.indexOf(key) === -1) {
          uniqueKeys.push(key);
        }
      }

      uniqueKeys.forEach(key => {
        switch (key) {
          case 'A':
            keyMap[key] = `kubejs:${metala.name}_${weaponrya.name}_weapon_part`;
            break;
          case 'B':
            keyMap[key] = 'spartanweaponry:handle';
            break;
          case 'C':
            keyMap[key] = `tfc:metal/rod/${metala.name}`;
            break;
          case 'D':
            keyMap[key] = `kubejs:${metala.name}_handguard_weapon_part`;
            break;
          case 'E':
            keyMap[key] = 'spartanweaponry:pole';
            break;
        }
      });


      e.shaped(
        `kubejs:${metala.name}_${weaponrya.name}`,
        weaponrya.recipesd,
        keyMap
      ).id(`kubejs:${metala.name}_${weaponrya.name}_shaped`)
        .modifyResult((inputGrid, result) => {
          const head = inputGrid.findAll().find(stack => stack.id.toString().startsWith(`kubejs:${metala.name}_${weaponrya.name}_weapon_part`))
          const headTag = head.getOrCreateTag();
          let level = headTag.getInt("tfc:forging_bonus")
          level = Math.min(level, 4);
          const resultTag = result.getOrCreateTag();
          resultTag.contains("tfc:forging_bonus") ? resultTag.remove("tfc:forging_bonus") : resultTag.putInt("tfc:forging_bonus", level);
          return result
        });
    });
  });

})

