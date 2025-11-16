// tooltips[0]为itemid，tooltips[1]为简体中文，tooltips[2]为英文
let tooltips = [
    ["minecraft:dirt", "原版泥土无法获取，玻璃罐建议使用沃土", "Dirt is not obtainable, use the rich soil instead"],
    ["tfc_ie_addon:mineral/quartz_shard", "石英块可以拆", "Quartz shard can be dismantled"],
    ["kubejs:alumina_dioxide", "§7在§r§e2980°C§r温度下熔化成 100mb 铝", "Fluids can be melted at §e2980°C§r to 100mb of aluminium"],
    ["createmetallurgy:industrial_crucible", "§4此物品已禁用，且可能会导致崩溃§r", "This item is disabled and may cause a crash."],
    ["eidolon:enchanted_ash", "§8“试试洒在地上围成一个圈，它能驱散亡灵使其无法靠近”§r", "§8“Try sprinkling it on the ground to form a circle! It can repel the undead and keep them from approaching.”§r"],
    ["#tfc:water_wheels", "§8“这种水车需要在流动的§r§7河水§r§8处使用”§r", "§8“This kind of water wheel is best used where there is flowing §r§7river water§r§8.”§r"],
    ["butcher:hook", "§4此物品因恶性bug而禁用§r", "§4This item is disabled!"],
    ["tfc:gem/amethyst", "§8切制的§r", "§8polishing§r"], 
    ["tfc:gem/diamond", "§8切制的§r", "§8polishing§r"], 
    ["tfc:gem/emerald", "§8切制的§r", "§8polishing§r"], 
    ["tfc:gem/lapis_lazuli", "§8切制的§r", "§8polishing§r"], 
    ["tfc:gem/opal", "§8切制的§r", "§8polishing§r"], 
    ["tfc:gem/pyrite", "§8切制的§r", "§8polishing§r"],
    ["tfc:gem/ruby", "§8切制的§r", "§8polishing§r"],
    ["tfc:gem/sapphire", "§8切制的§r", "§8polishing§r"], 
    ["tfc:gem/topaz", "§8切制的§r", "§8polishing§r"]
]
tooltips.forEach(([key, zh_cn, en_us]) => {
    // 添加key
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