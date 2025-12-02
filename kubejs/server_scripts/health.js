const $BodyDamageUtil = Java.loadClass('sfiomn.legendarysurvivaloverhaul.api.bodydamage.BodyDamageUtil')
const $BodyPartEnum = Java.loadClass("sfiomn.legendarysurvivaloverhaul.api.bodydamage.BodyPartEnum")
/**
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {number} time 单位是s
 */
function cooldown(event, time){
  //设置冷却为1，防止重复触发
  wait = 1
  //计时器计时time秒后，将冷却设为0
  event.server.scheduleInTicks(time * 20, func => {
    wait = 0
  })
}
/**
 * 
 * @param {Internal.LivingEntityHurtEventJS} e 
 */
function adrenaline(e){
  //首先给予玩家painkiller以及speed效果，持续600tick
  e.entity.potionEffects.add("legendarysurvivaloverhaul:painkiller", 600)
  e.entity.potionEffects.add("majruszsdifficulty:glass_regeneration", 100)
  e.entity.potionEffects.add("majruszsdifficulty:bleeding_immunity", 600)
  e.entity.potionEffects.add("minecraft:speed", 300,1)
  //600tick后，给予玩家slowness以及darkness效果，持续100tick
  e.server.scheduleInTicks(600, func => {
    e.entity.potionEffects.add("minecraft:slowness", 60, 9)
    e.entity.potionEffects.add("tfc:exhausted", 180, 2)
    e.entity.potionEffects.add("minecraft:darkness", 100)
    e.server.scheduleInTicks(100, func => {
      e.player.setStatusMessage(Component.translatable("message.kubejs.adrenaline_cooldwon"))
    })
  })
}

PlayerEvents.tick(e =>{
  const { player } = e
  // 每400tick恢复一次 HealthRatio 小于 1 的部位
  if (player.age % 800 != 0 || !player) return
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
// 当玩家血量低于20%时，有p的概率触发肾上腺素
let p = 0.01
// 冷却判断器
let wait = 0
//复活及登录时清除冷却，删除肾上腺素显示
PlayerEvents.loggedIn(e => {
  wait = 0
  e.player.paint({adrenaline: {remove: true}})
})
PlayerEvents.respawned(e => {
  wait = 0
  e.player.paint({adrenaline: {remove: true}})
  e.server.scheduleInTicks(600, func => {
    e.player.removeEffect("minecraft:slowness")
    e.player.removeEffect("tfc:exhausted")
    e.player.removeEffect("minecraft:darkness")
})
})
// 当玩家受伤时，判断是否触发肾上腺素
EntityEvents.hurt(e => {
  const { entity, player } = e
  //如果是玩家，且血量低于20%，且冷却中为0时进行一次判定
  if(entity.isPlayer() && (entity.getHealth() / entity.getMaxHealth() < 0.2) && wait == 0) {
    //每次判定固定增加0.1，最大增加到0.95
    p = Math.min(p + 0.1, 0.95)
    //进行随机判定，若小于p，则触发肾上腺素
    if (Math.random() < p) {
      //触发肾上腺素后，重置p为0.05
      p = 0.01
      //触发肾上腺素后，设置冷却为60s
      cooldown(e, 60)
      //触发肾上腺素效果
      adrenaline(e)
      //显示肾上腺素提示
      player.setStatusMessage(Component.translatable("message.kubejs.adrenaline"))
      //显示肾上腺素覆盖层
      player.paint({adrenaline: {type: 'atlas_texture', x: 0, y: 0, alignX: 'center', alignY: 'center', w: "$screenW", h: "$screenH", draw: "always", texture: "kubejs:item/adrenaline"}})
      //每20ticks播放一次心跳音效
      let loop = e.server.scheduleRepeatingInTicks(20, func => {
        player.sendData("kubejs_player_playsound", {soundEvent: "minecraft:entity.warden.heartbeat", volume: 1.0, pitch: 0.8})
      })
      //600tick后，删除肾上腺素覆盖层以及关闭心跳声
      e.server.scheduleInTicks(600, func => {
        player.paint({adrenaline: {remove: true}})
        loop.clear()
      })
      //取消本次伤害
      e.cancel()
    } else if(wait != 1) {
      //若未触发肾上腺素，且冷却中为0时，设置冷却为60s
      cooldown(e, 60)
    }
  }
})
