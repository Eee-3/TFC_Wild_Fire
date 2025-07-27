
StartupEvents.registry('block', (event) => {

    /* event.create('test').soundType('glass').hardness(1).defaultCutout().renderType('cutout').textureAll('texturepath') */
        
    const blocks = [
        {
            name: 'andesite_chassis',
            material: 'wood',
            hardness: 2,
            renderType: 'solid'
        },
    ];

    blocks.forEach((block) => {
        event.create(block.name).soundType(block.material).hardness(block.hardness).renderType(block.renderType);
    });

    
});








