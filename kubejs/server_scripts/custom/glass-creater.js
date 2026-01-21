BlockEvents.rightClicked(event => {
  const { block, player, hand, item, level, faced } = event;
  // 校验1：手持物品是熟铁锭
 if (!item || !item.hasTag('tfc:saws')) return;
  // 校验2：右键的方块ID中包含"stripped"（任意去皮方块）
  if (!block.id.includes('stripped')) return;
  
  // 获取上方的方块
  const blockAbove = level.getBlock(block.x, block.y + 1, block.z);
  // 校验3：上方是农夫乐事的帆布地毯
  if (blockAbove.id !== 'farmersdelight:canvas_rug') return;
  
  // 1. 将去皮方块替换为白松工作台
  block.set('tfc:wood/planks/white_cedar_workbench');
  
  // 2. 将上方的布毯替换为空气
  blockAbove.set('minecraft:air');
  
  // 3. 消耗铁锭（仅生存模式）
  if (!player.isCreative()) {
    item.count--;
    player.setMainHandItem(item);
  }
  
  // 4. 播放音效（保持原版石头放置音效）
  level.playSound("tfc:block.anvil.hit");
  
  // 阻止原版右键事件触发
  event.cancel();
});