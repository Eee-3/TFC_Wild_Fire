MafuyuEvents.modifyVariedModel(event => {
    const itemStack = event.getItemStack();
    if (!itemStack) return; // 物品堆不存在时直接返回

    if (!itemStack.id.includes('kubejs:rock_powder')) return;

    const nbt = itemStack.nbt;
    if (!nbt) return;

    if (!nbt.contains("null") && nbt.contains("tank")) {
        event.setModelPath("kubejs:rock_powder_blank");
    }


});
MafuyuEvents.modifyVariedModel(event => {
    const itemStack = event.getItemStack();
    if (!itemStack) return; // 物品堆不存在时直接返回

    if (!itemStack.id.includes('minecraft:netherite_pickaxe')) return;

    const nbt = itemStack.nbt;
    if (!nbt) return;

    if (!nbt.contains("null") && nbt.contains("neme")) {
        event.setModelPath("kubejs:emergency_hammer");
    }


});
