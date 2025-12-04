const $HeatCapability = Java.loadClass('net.dries007.tfc.common.capabilities.heat.HeatCapability')
const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
const $TFCConfig = Java.loadClass('net.dries007.tfc.config.TFCConfig')

/**
 * 消耗物品耐久度
 * @param {Internal.ItemStack} item 
 * @param {number} damageCount 
 */
function damageItem(item, damageCount) {
    if (!item.isDamageableItem()) { return }
    if (item.hasNBT() && item.nbt.contains("tfc:forging_bonus")) {
        let forgingBonus = item.nbt.getInt("tfc:forging_bonus")
        let anvilMaxDurabilityMultiplier = $TFCConfig.SERVER.anvilMaxDurabilityMultiplier.get()
        let probability = anvilMaxDurabilityMultiplier * forgingBonus * 0.25
        if (Math.random() > probability) {
            damageCount = 0
        }
    }
    item.setDamageValue(item.damageValue + damageCount)
    if (item.damageValue >= item.maxDamage) {
        item.shrink(1)
    }
}

/**
 * 丢出玩家背包的某格物品
 * @param {Internal.Player} player 
 * @param {number} inventoryIndex 
 * @param {Internal.ItemStack} item 
 */
function DropInventoryItem(player, inventoryIndex, item) {
    let dropItem = item.copy()
    player.drop(dropItem, false)
    player.inventory.setItem(inventoryIndex, Item.empty)
}

/**
 * 给予玩家伤害
 * @param {Internal.MinecraftServer} server 
 * @param {Internal.Player} player 
 * @param {string} damageType 
 * @param {number} damage 
 */
function damagePlayer(server, player, damageType, damage) {
    let playerName = player.name.getString()
    server.runCommandSilent(`damage ${playerName} ${damage} ${damageType}`)
}

PlayerEvents.tick(event => {
    const { player, server } = event

    // 计时器 1s执行一次
    let playerData = player.persistentData
    if (!playerData.hotTimer) playerData.hotTimer = 0
    playerData.hotTimer++
    if (playerData.hotTimer < 20) return
    playerData.hotTimer = 0

    // 如果玩家不是生存模式不执行烫伤逻辑
    if (player.isCreative() || player.isSpectator()) return

    var tong = /**@type {Internal.ItemStack} */ (null)
    var mittens = /**@type {Internal.ItemStack} */ (null)

    let hurtPlayer = false
    let damageMittens = false
    let damageTong = false

    // 检测饰品栏物品
    $CuriosApi.getCuriosHelper().findFirstCurio(player, 'kubejs:glove').ifPresent(slot => {
        mittens = slot.stack()
    })
    // 检测以及处理主手物品
    if (!player.mainHandItem.isEmpty()) {
        if (player.mainHandItem.hasTag('kubejs:tongs')) {
            tong = player.mainHandItem
        }
        else if (player.mainHandItem.id == 'kubejs:glove') {
            mittens = player.mainHandItem
        }
    }
    // 检测以及处理副手物品
    if (!player.offHandItem.isEmpty()) {
        if (player.offHandItem.hasTag('kubejs:tongs')) {
            tong = player.offHandItem
        }
        else if (player.offHandItem.id == 'kubejs:glove') {
            mittens = player.offHandItem
        }
        else {
            let dropHotItem = false
            if (player.offHandItem.hasTag('kubejs:hot_items')) {
                if (mittens != null) {
                    damageMittens = true
                }
                else dropHotItem = true
            }

            player.offHandItem.getCapability($HeatCapability.CAPABILITY).ifPresent(iHeat => {
                if (iHeat.getTemperature() > 300){
                    if (mittens != null && iHeat.getTemperature() < 1300) {
                    damageMittens = true
                }
                else dropHotItem = true
                }
            })


            if (dropHotItem) {
                let dropItem = player.offHandItem.copy()
                player.drop(dropItem, false)
                player.setOffHandItem(Item.empty)
                hurtPlayer = true
            }
        }
    }

    // 处理玩家背包内的物品
    for (let i = 0; i < 36; i++) {
        let item = player.inventory.getItem(i)
        if (item.isEmpty()) continue
        if (item.hasTag('kubejs:hot_items')) {
            if (tong != null) {
                damageTong = true

            }
            else if (mittens != null) {
                damageMittens = true
            }
            else {
                DropInventoryItem(player, i, item)
                hurtPlayer = true
            }
            continue
        }
        item.getCapability($HeatCapability.CAPABILITY).ifPresent(iHeat => {
            if (iHeat.getTemperature() > 300) {
                if (tong != null) {
                    damageTong = true
                }
                else if (mittens != null && iHeat.getTemperature() < 1300) {
                    damageMittens = true
                }
                else {
                    DropInventoryItem(player, i, item)
                    hurtPlayer = true
                }
            }
        })
    }

    // 统一处理 物品耐久 和 玩家伤害
    if (damageMittens) {
        damageItem(mittens, 1)
    }
    if (damageTong) {

        damageItem(tong, 1)
    }
    if (hurtPlayer) {
        damagePlayer(server, player, 'kubejs:empyrosis', 1)
    }

})