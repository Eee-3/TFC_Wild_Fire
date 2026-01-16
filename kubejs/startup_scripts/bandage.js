const $LivingEntityUseItemEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish')  
ForgeEvents.onEvent($LivingEntityUseItemEvent, event => {
    const item = event.getItem()
    const entity = event.getEntity()
    let BandageItems = ['scguns:enchanted_bandage', 'legendarysurvivaloverhaul:bandage', 'legendarysurvivaloverhaul:medikit', 'kubejs:weak_bandage', 'kubejs:rags']
    BandageItems.forEach(useitem => {
        if (item.getId() == useitem) {
            entity.removeEffect('majruszsdifficulty:bleeding')
            entity.removeEffect('alexsmobs:exsanguination')
            entity.removeEffect('scguns:lacerated')
            entity.removeEffect('warriorsofpastepoch:rough_wound')
            entity.removeEffect('warriorsofpastepoch:bleeding_wound')
        }
    });
})