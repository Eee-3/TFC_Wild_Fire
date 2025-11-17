StartupEvents.registry('item', event => {
    // 高级驾驶舱 - 贴图路径调整为 ad 目录下
    event.create('kubejs:advanced_cabin')
        .texture('kubejs:item/ad/advanced_cabin')

    // 高级镀层 - 贴图路径调整为 ad 目录下
    event.create('kubejs:advanced_plating')
        .texture('kubejs:item/ad/advanced_plating')

    // 基础驾驶舱 - 贴图路径调整为 ad 目录下
    event.create('kubejs:basic_cabin')
        .texture('kubejs:item/ad/basic_cabin')

    // 基础水晶面板 - 贴图路径调整为 ad 目录下
    event.create('kubejs:basic_crystal_pannel')
        .texture('kubejs:item/ad/basic_crystal_pannel')

    // 基础镀层 - 贴图路径调整为 ad 目录下
    event.create('kubejs:basic_plating')
        .texture('kubejs:item/ad/basic_plating')

    // 基础螺旋桨 - 贴图路径调整为 ad 目录下
    event.create('kubejs:basic_propeller')
        .texture('kubejs:item/ad/basic_propeller')

    // 哥伦布螺旋桨 - 贴图路径调整为 ad 目录下
    event.create('kubejs:columbus_propeller')
        .texture('kubejs:item/ad/columbus_propeller')

    // 探索者驾驶舱 - 贴图路径调整为 ad 目录下
    event.create('kubejs:explorer_cabin')
        .texture('kubejs:item/ad/explorer_cabin')

    // 耀斑镀层 - 贴图路径调整为 ad 目录下
    event.create('kubejs:flare_plating')
        .texture('kubejs:item/ad/flare_plating')

    // 全息前面板 - 贴图路径调整为 ad 目录下
    event.create('kubejs:hologram_frontpanel')
        .texture('kubejs:item/ad/hologram_frontpanel')

    // 月球水晶面板 - 贴图路径调整为 ad 目录下
    event.create('kubejs:moon_crystal_panel')
        .texture('kubejs:item/ad/moon_crystal_panel')

    // 月球螺旋桨 - 贴图路径调整为 ad 目录下
    event.create('kubejs:moon_propeller')
        .texture('kubejs:item/ad/moon_propeller')

    // 金星镀层 - 贴图路径调整为 ad 目录下
    event.create('kubejs:venus_plating')
        .texture('kubejs:item/ad/venus_plating')
    // 注册“高级镀层_未完成”物品，贴图路径新增 ad 中间目录
    event.create('kubejs:advanced_plating_unfinished')
        .texture('kubejs:item/ad/advanced_plating_unfinished')

    // 注册“基础水晶面板_未完成”物品，贴图路径新增 ad 中间目录
    event.create('kubejs:basic_crystal_pannel_unfinished')
        .texture('kubejs:item/ad/basic_crystal_pannel_unfinished')

    // 注册“基础镀层_未完成”物品，贴图路径新增 ad 中间目录
    event.create('kubejs:basic_plating_unfinished')
        .texture('kubejs:item/ad/basic_plating_unfinished')

    // 注册“耀斑镀层_未完成”物品，贴图路径新增 ad 中间目录
    event.create('kubejs:flare_plating_unfinished')
        .texture('kubejs:item/ad/flare_plating_unfinished')

    // 注册“全息前面板_未完成”物品，贴图路径新增 ad 中间目录
    event.create('kubejs:hologram_frontpanel_unfinished')
        .texture('kubejs:item/ad/hologram_frontpanel_unfinished')

    // 注册“月球水晶面板_未完成”物品，贴图路径新增 ad 中间目录
    event.create('kubejs:moon_crystal_panel_unfinished')
        .texture('kubejs:item/ad/moon_crystal_panel_unfinished')

    // 注册“金星镀层_未完成”物品，贴图路径新增 ad 中间目录
    event.create('kubejs:venus_plating_unfinished')
        .texture('kubejs:item/ad/venus_plating_unfinished')

    event.create('kubejs:healing_paste', 'heal_item')
        .texture('kubejs:item/healing_paste')
        .useDuration(itemstack => 30)
        .useAnimation("bow")
        .finishUsing((itemstack, level, entity) => {
            let effects = entity.potionEffects
            effects.add('minecraft:regeneration', 6, 1, false, false)
        })
    event.create('kubejs:weak_bandage', 'heal_item')
        .texture('kubejs:item/weak_bandage')
        .useDuration(itemstack => 30)
        .useAnimation("bow")
        .finishUsing((itemstack, level, entity) => {
            let effects = entity.potionEffects
            effects.add('minecraft:regeneration', 10, 0, false, false)
        })
})
