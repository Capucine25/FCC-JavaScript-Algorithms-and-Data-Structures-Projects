function checkCashRegister(price, cash, cid) {
  var change=cash=price;
  var typeOfMoney=[0.01,0.05,0.10,0.25,1,2,5,10,20,100]
  var changeToGive=[];
  //Adds money type to cid array
  for (i=0;i<(cid.length);i++){
    cid[i].push(typeOfMoney[i])
  }
 
  for (var i=0;i<cdi.length;i++){
    while (change-cid[i][2]>0){
      if (changetoGive.hasOwnProperty(cdi[i][0])){
        
      }
      else
        {changeToGive.push(cid[i][0], cid[i][2])
          
        }
    }
  }
  
  console.log(cash-price)
}
