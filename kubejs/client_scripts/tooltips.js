// tooltips[0]为itemid，tooltips[1]为简体中文，tooltips[2]为英文
let tooltips = [
    ["minecraft:dirt", "原版泥土无法获取，玻璃罩建议使用沃土", "Dirt is not obtainable, use the rich soil instead"],
    ["tfc_ie_addon:mineral/quartz_shard", "石英块可以拆", "Quartz shard can be dismantled"],
    ["kubejs:alumina_dioxide", "在 §e2980°c§r 下熔化成 100mb 铝", "Fluids can be melted at §e2980°c§r to 100mb of aluminium"],
    ["createmetallurgy:industrial_crucible", "§4此物品已禁用, 且可能会导致崩溃§r", "§4This item is disabled and may cause a crash."]
]
tooltips.forEach(([key, zh_cn, en_us]) => {
    // 添加 key
    ItemEvents.tooltip(e => {
        e.add(key, Text.translate(key))
    })
    // 添加简体中文本地化
    ClientEvents.lang("zh_cn", e => {
        e.add(key, zh_cn)
    })
    // 添加英文本地化
    ClientEvents.lang("en_us", e => {
        e.add(key, en_us)
    })
})
