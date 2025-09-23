ItemEvents.modelProperties(event => {
    event.register('kubejs:rock_powder', new ResourceLocation('has_tank'), (item) => {
          const nbt = itemStack.getOrCreateTag().getInt("tank");
        if (item.hasNBT()) {
           
        }
      
        if (nbt.tank.Amount >= 1 ) {
            return 1
        }
        return 1; 
    });

    event.register('kubejs:rock_powder', new ResourceLocation('no_tank'), (item) => {
        if (!item.hasNBT()) {
            return 0;
        }
        
    });
});