// 阻止工具放在错误的位置 工具检测 '#minecraft:tools'
BlockEvents.rightClicked(event => {
    const {item, block, player} = event
    if(!item.hasTag('tfc:hammers')) return
    if(!block.hasTag('tfc:anvils')) return
    if(!player.shiftKeyDown) return

    let wrong_recipe = false

    let Items = /**@type {Array} */ (block.getEntityData()['inventory']['Items'])
    Items.forEach(slot => {
        if(slot.Slot == 1){
            if(Item.of(slot.id).hasTag('minecraft:tools')){
                wrong_recipe = true
            }
        }
    })
    if(wrong_recipe) event.cancel()
})

ServerEvents.recipes(event => {
    const { welding } = event.recipes.tfc

    /**
     * 焊接修复配方函数
     * @param {string} toolId 工具id
     * @param {string} materialId 修复用的材料id
     * @param {number} tier 砧的等级
     */
    function welding_repair(toolId, materialId, tier){
        tier = tier != null? tier: 0
        let toolStack = Item.of(toolId)
        let name = toolId.replace(':','/')
        // 真配方（隐藏）
        welding(
            TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair']).copyForgingBonus(),
            toolStack,
            materialId,
            tier
        ).id(`jeihide:welding/${name}`)
        
        let inputToolStack = toolStack
        let outputToolStack = toolStack
        inputToolStack.setDamageValue(inputToolStack.maxDamage*0.6)
        outputToolStack.setDamageValue(outputToolStack.maxDamage*0.4)
        // 假配方（展示）
        welding(
            TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
            inputToolStack.weakNBT(),
            materialId,
            tier
        ).id(`tfc:welding/${name}`)
    }

    // 配方
    welding_repair('kubejs:wrought_iron_tong', 'minecraft:iron_nugget', 3)
})

