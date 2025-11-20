JEIEvents.removeRecipes(event => {
    // 移除配方显示
    const toolId = [
        'kubejs:wrought_iron_tong'
    ]
    toolId.forEach(id => {
        event.remove('tfc:welding', `jeihide:welding/${id.replace(':','/')}`)
    })
})