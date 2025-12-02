ItemEvents.modification(event => {
  event.modify('brewery:whiskey_carrasconlabel', item => {
    item.foodProperties = food => {
        food.effect('brewinandchewin:tipsy',20*20,2,1)
        food.effect('brewery:healingtouch',20*20,2,0)
    }
  })
})