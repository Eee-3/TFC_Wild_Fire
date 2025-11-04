StartupEvents.registry('item', event => {
    event.create('brass_cartridge_nest').texture('kubejs:item/gun/brass_cartridge_nest'); // 黄铜弹巢
    event.create('cast_iron_firing_hammer').texture('kubejs:item/gun/cast_iron_firing_hammer'); // 铸铁击锤
    event.create('cast_iron_gun_barrel').texture('kubejs:item/gun/cast_iron_gun_barrel'); // 铸铁枪管
    event.create('standard_type_muzzle_brake_parts_steel').texture('kubejs:item/gun/standard_type_muzzle_brake_parts_steel'); // 制式制退器配件（钢）
    event.create('standard_type_muzzle_brake_parts_copper').texture('kubejs:item/gun/standard_type_muzzle_brake_parts_copper'); // 制式制退器配件（铜）
    event.create('standard_type_handguard_parts_steel').texture('kubejs:item/gun/standard_type_handguard_parts_steel'); // 制式护手配件（钢）
    event.create('standard_type_handguard_parts_copper').texture('kubejs:item/gun/standard_type_handguard_parts_copper'); // 制式护手配件（铜）
    event.create('standard_type_gun_body_parts_steel').texture('kubejs:item/gun/standard_type_gun_body_parts_steel'); // 制式枪身配件（钢）
    event.create('standard_type_gun_body_parts_copper').texture('kubejs:item/gun/standard_type_gun_body_parts_copper'); // 制式枪身配件（铜）
    event.create('standard_type_pistol_slide_parts_steel').texture('kubejs:item/gun/standard_type_pistol_slide_parts_steel'); // 制式手枪滑套配件（钢）
    event.create('standard_type_pistol_slide_parts_copper').texture('kubejs:item/gun/standard_type_pistol_slide_parts_copper'); // 制式手枪滑套配件（铜）
    event.create('standard_type_magazine_parts_steel').texture('kubejs:item/gun/standard_type_magazine_parts_steel'); // 制式弹匣配件（钢）
    event.create('standard_type_magazine_parts_copper').texture('kubejs:item/gun/standard_type_magazine_parts_copper'); // 制式弹匣配件（铜）
    event.create('standard_type_grip_parts_steel').texture('kubejs:item/gun/standard_type_grip_parts_steel'); // 制式握把配件（钢）
    event.create('standard_type_grip_parts_copper').texture('kubejs:item/gun/standard_type_grip_parts_copper'); // 制式握把配件（铜）
    event.create('standard_type_gunstock_parts_steel').texture('kubejs:item/gun/standard_type_gunstock_parts_steel'); // 制式枪托配件（钢）
    event.create('standard_type_gunstock_parts_copper').texture('kubejs:item/gun/standard_type_gunstock_parts_copper'); // 制式枪托配件（铜）
    event.create('rock_powder_blank') //粗粗安山合金模型
    event.create('emergency_hammer') //应急安全锤模型
    event.create('cast_iron_indenter', 'basic').texture('kubejs:item/create/cast_iron_indenter')//铸铁压头

    event.create('mold_mechanical', 'tfc:mold').capacity(100).texture('kubejs:item/tfc/mold_mechanical')//零件模具
    event.create('unfired_mold_mechanical', 'basic').texture('kubejs:item/tfc/unfired_mold_mechanical')//没烧的零件模具

    event.create('mold_simple_key', 'tfc:mold').capacity(100).texture('kubejs:item/tfc/mold_simple_key')//简易钥匙模具
    event.create('unfired_mold_simple_key', 'basic').texture('kubejs:item/tfc/unfired_mold_simple_key')//没烧的简易钥匙模具


    // 快烧好的弓臂

    /* const bowArm = 'burned_bow_arm';
     const oiledBowArm = `oiled_${bowArm}`;
   
     // 注册普通弓臂物品
     event.create(bowArm)
       .displayName(`${bowArm.replace(/_/g, ' ')}`)
       .texture(`yourmodid:item/${bowArm}`);
   
     // 注册浸油弓臂物品
     event.create(oiledBowArm)
       .displayName(`浸油的 ${bowArm.replace(/_/g, ' ')}`)
       .texture(`yourmodid:item/${oiledBowArm}`);*/


    const $Item = Java.loadClass('net.minecraft.world.item.Item')
    const $Item$Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')


    event.createCustom("kubejs:burned_bow_arm", () =>
        new JavaAdapter($Item, {
            /**
             * @param {Internal.ItemStack} stack
             * @param {Internal.Level} level
             * @param {Internal.Entity} entity
             * @param {number} slot
             * @param {boolean} isSelected
             */
            m_6883_: function (stack, level, entity, slot, isSelected) {
                let tag = stack.getOrCreateTag()
                if (!tag.contains('fired_bow'))
                    tag.putInt('fired_bow', 0)

                var maxVal = tag.getInt('fired_bow')
                var currentVal = (stack.serializeNBT()['ForgeCaps']['tfc:item_heat']['heat'] - 200) / 30 + 1

                tag.putInt('fired_bow', Math.max(maxVal, currentVal))
            }
        }, new $Item$Properties())
    )


})


StartupEvents.registry("fluid", event => {
    event.create("uncommon_ink")
        .thickTexture(0X266a1f)
        .noBlock()
    event.create("rare_ink")
        .thickTexture(0X22634d)
        .noBlock()
    event.create("epic_ink")
        .thickTexture(0Xcb40bf)
        .noBlock()
    event.create("legendary_ink")
        .thickTexture(0Xf9ad1c)
        .noBlock()
})
StartupEvents.registry("block", event => {
    const color = ["black", "blue", "cyan", "green", "lime", "red", "white", "yellow"]
    const colorName = ["黑色", "蓝色", "青色", "绿色", "黄绿色", "红色", "白色", "黄色"]


    color.forEach((o, index) => {
        event.create(`mek_plastic_block/${o}_plastic_block`)
            .displayName(`${colorName[index]}塑料板`)
            .noValidSpawns(false) // 上面是否生成怪物
            .hardness(0.3) // 硬度
            .lightLevel(1)
    });
})
StartupEvents.registry("item", event => {
    const MODID = "kubejs:";
    const toolParts = [
        "javelin_head",
        "hammer_head",
        "hoe_head",
        "axe_head",
        "shovel_head",
        "knife_blade"
    ];
    //黑曜石碎片
    event.create("obsidian_shards", "basic").texture('kubejs:item/tfc/obsidian_shards');
    // 注册工具部件
    toolParts.forEach(part => {
        event.create(`kubejs:diamond_${part}`, "basic")
            .displayName(`diamond_${part}`)
            .tag('tfc:stone_tools')
            .texture(`kubejs:item/tfc/diamond/${part}`);
        event.create(`kubejs:obsidian_${part}`, "basic")
            .displayName(`obsidian_${part}`)
            .tag('tfc:stone_tools')
            .texture(`kubejs:item/tfc/obsidian/${part}`);
    });

    // 定义普通工具类型和对应的显示名称、默认耐久度等信息
    const commonToolTypes = [
        { type: "axe", diamondDurability: 600, obsidianDurability: 200 },
        { type: "hoe", diamondDurability: 600, obsidianDurability: 200 },
        { type: "shovel", diamondDurability: 600, obsidianDurability: 200 },

    ];

    // 注册普通钻石工具
    commonToolTypes.forEach(tool => {
        event.create(`kubejs:diamond_${tool.type}`, tool.type)
            .maxDamage(tool.diamondDurability)
            .tag('tfc:usable_on_tool_rack')
            .texture(`kubejs:item/tfc/diamond/${tool.type}`);


    });

    // 注册普通黑曜石工具
    commonToolTypes.forEach(tool => {
        event.create(`kubejs:obsidian_${tool.type}`, tool.type)
            .maxDamage(tool.obsidianDurability)
            .tag('tfc:usable_on_tool_rack')
            .fireResistant(true)
            .texture(`kubejs:item/tfc/obsidian/${tool.type}`);

    });

    event.create("kubejs:diamond_knife", "tfc:tool")    // 注册钻石小刀
        .displayName("diamond_knife")
        .maxDamage(600)
        .maxStackSize(1)
        .fireResistant(false)
        .tag("tfc:knife")
        .texture("kubejs:item/tfc/diamond/knife")
        .knife();

    event.create("kubejs:obsidian_knife", "tfc:tool")  // 注册黑曜石小刀
        .displayName("obsidian_knife")
        .maxDamage(200)
        .maxStackSize(1)
        .fireResistant(false)
        .tag("tfc:knife")
        .texture("kubejs:item/tfc/obsidian/knife")
        .knife();


    event.create("kubejs:diamond_hammer", "tfc:hammer")  // 注册钻石锤子
        .displayName("diamond_hammer")
        .maxDamage(600)
        .tag('tfc:usable_on_tool_rack')
        .fireResistant(false)
        .tag("kubejs:hammers")
        .texture("kubejs:item/tfc/diamond/hammer")
        .metalTexture("kubejs:block/trip_hammers/diamond");


    event.create("kubejs:obsidian_hammer", "tfc:hammer")    // 注册黑曜石锤子
        .displayName("obsidian_hammer")
        .maxDamage(200)
        .tag('tfc:usable_on_tool_rack')
        .fireResistant(true)
        .tag("kubejs:hammers")
        .texture("kubejs:item/tfc/obsidian/hammer")
        .metalTexture("kubejs:block/trip_hammers/obsidian");

    // 标枪额外属性配置
    const javelinConfig = {
        thrownDamage: 9,
        skeletonWeapon: true,
        throwingModel: "kubejs:models/item/throwing_javelin",
        guiModel: "kubejs:models/item/gui_javelin"
    };

    // 注册钻石标枪
    let diamondJavelin = event.create("kubejs:diamond_javelin", "tfc:javelin")
        .displayName("diamond_javelin")
        .maxDamage(600)
        .tag('tfc:usable_on_tool_rack')
        .fireResistant(false)
        .tag("kubejs:javelins")
        .texture("kubejs:item/tfc/diamond/javelin")
        .thrownDamage(6);



    // 注册黑曜石标枪
    let obsidianJavelin = event.create("kubejs:obsidian_javelin", "tfc:javelin")
        .displayName("obsidian_javelin")
        .maxDamage(200)
        .tag('tfc:usable_on_tool_rack')
        .fireResistant(true)
        .tag("kubejs:javelins")
        .texture("kubejs:item/tfc/obsidian/javelin")
        .thrownDamage(5);


});
//弓箭
StartupEvents.registry("item", event => {
    const ITEM_TEXTURE_PATH = "kubejs:item/tfc/";

    // 弓箭注册
    event.create("kubejs:unprocessed_bow_arm", "basic")
        .texture(ITEM_TEXTURE_PATH + "unprocessed_bow_arm");

    // 泡过水的弓臂
    event.create("kubejs:soaked_bow_arm", "basic")
        .texture(ITEM_TEXTURE_PATH + "soaked_bow_arm");

    // 正在烧制的弓臂
    event.create("kubejs:burning_bow_arm", "basic")
        .texture(ITEM_TEXTURE_PATH + "burning_bow_arm");

    // 烧制正好的弓臂
    event.create("kubejs:perfectly_burned_bow_arm", "basic")
        .texture(ITEM_TEXTURE_PATH + "perfectly_burned_bow_arm");

    // 烧过了头的弓臂
    event.create("kubejs:overburned_bow_arm", "basic")
        .texture(ITEM_TEXTURE_PATH + "overburned_bow_arm");

    // 烧糊了的弓臂
    event.create("kubejs:charred_bow_arm", "basic")
        .texture(ITEM_TEXTURE_PATH + "charred_bow_arm");

    // 浸过油的弓臂
    event.create("kubejs:oiled_bow_arm", "basic")
        .texture(ITEM_TEXTURE_PATH + "oiled_bow_arm");
});
