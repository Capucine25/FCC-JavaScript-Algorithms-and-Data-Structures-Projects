function checkCashRegister(price, cash, cid) {
  var change=cash-price;
  var typeOfMoney=[0.01,0.05,0.10,0.25,1,5,10,20,100]
  var changeToGive=[];
  //Adds money type to cid array
  for (i=0;i<(cid.length);i++){
    cid[i].push(typeOfMoney[i])
  }
 
  for (var i=(cid.length-1);i>=0;i--){
    while ((change-cid[i][2])>=0){
      console.log(changeToGive.hasOwnProperty("QUARTER"))
      if (changeToGive.hasOwnProperty(cid[i][0])){
        changeToGive[cid[i][0]][1]+=cid[i][2]
        change-=cid[i][2]
      }
      else
        {changeToGive.push(cid[i][0], cid[i][2])
          change-=cid[i][2]
      }
    }
  }
  
  return changeToGive
}
