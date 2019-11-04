let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]
favFoods.onshow=function(){
  lstFood.clear()   
  for (i = 0; i <= goodFoods.length - 1; i++) 
    lstFood.addItem(goodFoods[i])
}

lstFood.onclick=function(choice){
  if (typeof(choice) == "object")
  return
  let favFood = goodFoods[choice]
  lblFood.value = `You picked ${favFood} -that is a great choice!`
}

btnToDessert.onclick=function(){
  ChangeForm(dessertVoting)
}
