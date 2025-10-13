ServerEvents.recipes(event => {
    const create = event.recipes.create

    const inputcailiao = 'kubejs:trachyandesite_alloy'//粗安山合金
    create.sequenced_assembly('create:andesite_alloy',inputcailiao,
        [
            create.pressing(inputcailiao, inputcailiao),
            create.pressing(inputcailiao, inputcailiao)
        ]
    ).transitionalItem(inputcailiao).loops(1)//敲粗安山合金为安山合金


})