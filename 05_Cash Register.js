function checkCashRegister(price, cash, cid) {
  var change=cash-price;
  var typeOfMoney=[0.01,0.05,0.10,0.25,1,5,10,20,100]
  var changeToGive=[]


  //Adds money type to cid array
  for (i=0;i<(cid.length);i++){
    cid[i].push(typeOfMoney[i])
    
  //Also creates an array in which to add to change to give
  changeToGive.push([cid[i][0],0])
  }

  //
  for (var i=(cid.length-1);i>=0;i--){
    while ((change-cid[i][2])>=0){
      console.log(cid[i])
      console.log(changeToGive[i][1])
        changeToGive[i][1]+=cid[i][2]
        change-=cid[i][2]
        cid[i][1]-=cid[i][2]
      }
    }
  
  return changeToGive
}
