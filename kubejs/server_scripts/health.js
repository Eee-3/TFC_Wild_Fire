const $BodyDamageUtil = Java.loadClass('sfiomn.legendarysurvivaloverhaul.api.bodydamage.BodyDamageUtil')
const $BodyPartEnum = Java.loadClass("sfiomn.legendarysurvivaloverhaul.api.bodydamage.BodyPartEnum")
/**
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {number} time 单位是s
 */
function cooldown(event, time){
  wait = 1
  event.server.scheduleInTicks(time * 20, func => {
    wait = 0
  })
}
/**
 * 
 * @param {Internal.LivingEntityHurtEventJS} e 
 */
function adrenaline(e){
  e.entity.potionEffects.add("legendarysurvivaloverhaul:painkiller", 600)
  e.entity.potionEffects.add("minecraft:speed", 300)
  e.server.scheduleInTicks(600, func => {
    e.entity.potionEffects.add("minecraft:slowness", 60, 9)
    e.entity.potionEffects.add("minecraft:darkness", 100)
  })
}

PlayerEvents.tick(e =>{
  const { player } = e
  // 每400tick恢复一次 HealthRatio 小于 1 的部位
  if (player.age % 400 != 0 || !player) return
  // if (player.age % 20 != 0 || !player) return
  if (player.getHealth() == player.getMaxHealth()) {
    let parts = [$BodyPartEnum.HEAD, $BodyPartEnum.CHEST, $BodyPartEnum.LEFT_ARM, $BodyPartEnum.RIGHT_ARM, $BodyPartEnum.LEFT_LEG, $BodyPartEnum.RIGHT_LEG, $BodyPartEnum.LEFT_FOOT, $BodyPartEnum.RIGHT_FOOT];
    // 先筛出没回满血的部位
    let needHealParts = parts.filter(part => $BodyDamageUtil.getHealthRatio(player, part) < 1);
    if (needHealParts.length === 0) return;
    // 随机抽取一个部位进行恢复
    let randomPart = needHealParts[Math.floor(Math.random() * needHealParts.length)];
    // 恢复1点血量，持续200tick
    $BodyDamageUtil.applyHealingTimeBodyPart(player, randomPart, 1, 200);
  }
})
//肾上腺素
let p = 0.05
let wait = 0
PlayerEvents.loggedIn(e => {
  wait = 0
  e.player.paint({adrenaline: {remove: true}})
})
PlayerEvents.respawned(e => {
  wait = 0
  e.player.paint({adrenaline: {remove: true}})
  loop.clear()
})
EntityEvents.hurt(e => {
  const { entity, player } = e
  if(entity.isPlayer() && (entity.getHealth() / entity.getMaxHealth() < 0.1) && wait == 0) {
    p = Math.min(p + 0.1, 0.95)
    if (Math.random() < p) {
      p = 0.05
      cooldown(e, 60)
      adrenaline(e)
      player.setStatusMessage(Text.translatable("message.kubejs.adrenaline"))
      player.paint({adrenaline: {type: 'atlas_texture', x: 0, y: 0, alignX: 'center', alignY: 'center', w: "$screenW", h: "$screenH", draw: "always", texture: "kubejs:item/adrenaline"}})
      let loop = e.server.scheduleRepeatingInTicks(20, func => {
        player.sendData("kubejs_player_playsound", {soundEvent: "minecraft:entity.warden.heartbeat", volume: 1.0, pitch: 0.8})
      })
      e.server.scheduleInTicks(600, func => {
        player.paint({adrenaline: {remove: true}})
        loop.clear()
      })
      e.cancel()
    } else if(wait != 1) {
      cooldown(e, 60)
    }
  }
})
