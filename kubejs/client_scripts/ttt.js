// client
// zh_cn "tooltip.hot":"§c烫烫烫"
ItemEvents.tooltip(event => {
    event.addAdvancedToAll((item, advanced, text) => {
        if(TFC.misc.getHeat(item) != null){
            
            if(TFC.misc.getHeat(item).getTemperature() > 300){
                if(item.hasTag('kubejs:nohot')){return;}
                else text.add(Text.translate('tooltip.hot'))
            }
        }
        else if(item.hasTag('kubejs:hot_items')){
            text.add(Text.translate('tooltip.hot'))
        }
    })
})
