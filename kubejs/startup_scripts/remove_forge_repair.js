const $AnvilUpdateEvent = Java.loadClass("net.minecraftforge.event.AnvilUpdateEvent");
ForgeEvents.onEvent($AnvilUpdateEvent, event => {
    const left = event.left;
    const right = event.right;
    if (!left || !right) return;

    // 支持标签，用标签时注意加#
    const materialMap = {
        'wooden': '#minecraft:planks',
        'stone': "#minecraft:stone_tool_materials",
        'iron': 'minecraft:iron_ingot',
        'golden': 'minecraft:gold_ingot',
        'diamond': 'minecraft:diamond',
        'netherite': 'minecraft:netherite_ingot',
        'leather': 'minecraft:leather',
        'chainmail': 'minecraft:iron_ingot',
    };

    // 工具类型
    const toolTypes = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe'];
    // 盔甲类型
    const armorTypes = ['helmet', 'chestplate', 'leggings', 'boots'];

    for (const [material, repairItem] of Object.entries(materialMap)) {
        // 检查工具 (没有皮革和锁链)
        if (material !== 'leather' && material !== 'chainmail') {
            for (const tool of toolTypes) {
                if (left.id === `minecraft:${material}_${tool}`) {
                    if (checkMaterialMatch(right, repairItem)) {
                        event.setCanceled(true);
                        return;
                    }
                }
            }
        }

        // 检查盔甲（木质和石质没有盔甲）
        if (material !== 'wooden' && material !== 'stone') {
            for (const armor of armorTypes) {
                if (left.id === `minecraft:${material}_${armor}`) {
                    if (checkMaterialMatch(right, repairItem)) {
                        event.setCanceled(true);
                        return;
                    }
                }
            }
        }
    }

    function checkMaterialMatch(rightItem, expected) {
        if (typeof expected === 'string' && expected.startsWith('#')) {
            const tagName = expected.substring(1);
            return rightItem.hasTag(tagName);
        }
        return rightItem.id === expected;
    }
});