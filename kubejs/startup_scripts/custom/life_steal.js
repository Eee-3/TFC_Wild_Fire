let $RangedAttrubute = Java.loadClass('net.minecraft.world.entity.ai.attributes.RangedAttribute')
StartupEvents.registry('attribute', e => {
    e.createCustom('kubejs:life_steal', () => {
        return new $RangedAttrubute('attribute.kubejs.life_steal', 0, 0, 100).setSyncable(true)
    })
})
ForgeModEvents.onEvent('net.minecraftforge.event.entity.EntityAttributeModificationEvent', e => {
    if (!e.has('player', 'kubejs:life_steal')) {
      e.add('player', 'kubejs:life_steal')
    }
})//吸血