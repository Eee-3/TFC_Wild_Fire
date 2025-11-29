// 阻止工具放在错误的位置 工具检测 '#minecraft:tools'
BlockEvents.rightClicked(event => {
    const { item, block, player } = event
    if (!item.hasTag('tfc:hammers')) return
    if (!block.hasTag('tfc:anvils')) return
    if (!player.shiftKeyDown) return

    let wrong_recipe = false

    let Items = /**@type {Array} */ (block.getEntityData()['inventory']['Items'])
    Items.forEach(slot => {
        if (slot.Slot == 1) {
            if (Item.of(slot.id).hasTag('minecraft:tools')) {
                wrong_recipe = true
            }
        }
    })
    if (wrong_recipe) event.cancel()
})

ServerEvents.recipes(event => {
    const { welding } = event.recipes.tfc

    /**
     * 焊接修复配方函数
     * @param {string} toolId 工具id
     * @param {string} materialId 修复用的材料id
     * @param {number} tier 砧的等级
     * @param {"percentage" | "value"} repairType 
     */
    function welding_repair(toolId, materialId, tier, repairType) {
        tier = typeof tier != 'undefined' ? tier : 0
        repairType = typeof repairType != 'undefined' ? repairType : "percentage"

        let name = toolId.replace(':', '/')
        const toolStack = Item.of(toolId)
        const inputToolStack = Item.of(toolId)
        const outputToolStack = Item.of(toolId)
        if (repairType == "percentage") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_percentage']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(outputToolStack.maxDamage * 0.4)
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
        else if (repairType == "value") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_value']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(Math.max(0, inputToolStack.damageValue - 400))
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
    }

    // 配方
    const repairdamage = [
        { type: 1, num: 25 },
        { type: 2, num: 15 },
        { type: 3, num: 10 },
        { type: 4, num: 7.5 }
    ]

    const metal = [
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
    const weaponry = [
        { name: "quarterstaff", number: 200, num: 15 },        // 长棍
        { name: "dagger", number: 100, num: 25 },              // 匕首
        { name: "parrying_dagger", number: 150, num: 20 },     // 格挡匕首
        { name: "longsword", number: 250, num: 12.5 },           // 长刀
        { name: "greatsword", number: 350, num: 7.5 },          // 大剑
        { name: "saber", number: 250, num: 12.5 },               // 军刀
        { name: "rapier", number: 250, num: 12.5 },              // 迅捷剑
        { name: "katana", number: 250, num: 12.5 },              // 太刀
        { name: "battleaxe", number: 400, num: 7.5 },           // 战斧
        { name: "battle_hammer", number: 200, num: 15 },       // 长柄锤
        { name: "warhammer", number: 400, num: 7.5 },           // 大锤
        { name: "javelin", number: 400, num: 7.5 },             // 标枪
        { name: "spear", number: 100, num: 25 },               // 矛
        { name: "pike", number: 100, num: 25 },                // 长矛
        { name: "lance", number: 400, num: 7.5 },               // 骑枪
        { name: "glaive", number: 350, num: 7.5 },              // 长柄刀
        { name: "halberd", number: 400, num: 7.5 },             // 戟
        { name: "throwing_knife", number: 100, num: 25 },      // 飞刀
        { name: "tomahawk", number: 200, num: 15 },            // 印第安投斧
        { name: "scythe", number: 400, num: 7.5 },              // 战镰
        { name: "flanged_mace", number: 300, num: 10 },        // 页锤
        { name: "boomerang", number: 100, num: 25 }            // 回旋镖
    ];
    weaponry.forEach(weapon => {
        metal.forEach(metal => {
            //100
            welding_repair(`kubejs:${metal.name}_${weapon.name}`, `kubejs:${metal.name}_fragments`, weapon.num)
        })
    })
   


    //100
    welding_repair('kubejs:wrought_iron_tong', 'minecraft:iron_nugget', 3)
    welding_repair('tfc:metal/knife/wrought_iron', 'minecraft:iron_nugget', 3, 'value')
})