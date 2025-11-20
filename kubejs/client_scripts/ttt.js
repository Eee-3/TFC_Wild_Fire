// client
// zh_cn "tooltip.hot":"&c烫烫烫"
ItemEvents.tooltip(event => {
    event.addAdvancedToAll((item, advanced, text) => {

        if((TFC.misc.getHeat(item).getTemperature() > 300)&&(TFC.misc.getHeat(item).getTemperature() < 1500)){
            text.add(Text.translate('tooltip.hot'))
        }
    })
    event.addAdvancedToAll((item, advanced, text) => {
        if(TFC.misc.getHeat(item).getTemperature() > 1499){
            text.add(Text.translate('tooltip2.hot'))
        }
    })
})