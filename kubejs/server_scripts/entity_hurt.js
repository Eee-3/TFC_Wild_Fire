EntityEvents.hurt(e => {
  const { source, damage, entity } = e;
  const player = source.player;

  if (player && !entity.isPlayer()) {
    const lifeSteal = player.getAttributeValue("kubejs:life_steal");
    const remainingHealth = player.maxHealth - player.health;

    if (lifeSteal > 0 && remainingHealth > 0) {
      const healAmount = Math.min(remainingHealth, Math.min(damage, entity.getHealth()) * lifeSteal / 100);
      
      if (healAmount > 0) {
        // For debugging purposes, remove in production
        // player.tell(`目前血量为${player.getHealth()},你吸取了${healAmount.toFixed(2)}点生命值`);
        player.heal(healAmount);
      }
    }
  }
});