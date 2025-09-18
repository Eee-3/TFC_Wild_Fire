PlayerEvents.inventoryChanged(event => {














})
ItemEvents.textureOverride(event => {
  event.overrideCustom('kubejs:rock_powder', (item, context) => {
    const nbt = item.getTag();
    
    if (nbt && nbt.contains("tank")) {
      const tank = nbt.getCompound("tank");
      
      if (tank.contains("FluidName")) {
        const fluidName = tank.getString("FluidName");
        
        // 根据流体类型返回不同的纹理路径
        switch(fluidName) {
          case "tfc:metal/zinc":
            return "kubejs:item/rock_powder_overlay";
          default:
            return "kubejs:item/rock_powder_default";
        }
      }
    }
    
    // 默认纹理
    return "kubejs:item/rock_powder";
  });
});