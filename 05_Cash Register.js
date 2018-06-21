function checkCashRegister(price, cash, cid) {
  var change=(cash-price)*100;
  var typeOfMoney=[1,5,10,25,100,500,1000,2000,10000]
  var baseCid=cid.slice(0)
  var changeToGive=[]

  
  //Case if exact money is given
    if (change==0){
      return ({status: "CLOSED", change: cid})
    }


  //Adds money type to cid array
  for (i=0;i<(cid.length);i++){
    cid[i].push(typeOfMoney[i])
    
  //And multiplies the money in cdi by 100 to have only integers
   cid[i][1]=cid[i][1]*100
    
  //And creates an array in which to add to change to give
  changeToGive.push([cid[i][0],0])
  
  
  }
  
  //Calculate the change to give 
  for (var i=(cid.length-1);i>=0;i--){
    while ((change-cid[i][2])>=0 && cid[i][1]){
        changeToGive[i][1]+=cid[i][2]
        change-=cid[i][2]
        
        //Removes the money given from the cid array
        cid[i][1]-=cid[i][2]
      }
    }
  
  //Removes the type of money that doesn't need to be given
    changeToGive=changeToGive.filter(type=> type[1])
    
//Case if there is not enough money in the register
  if (change>0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

//Case if there is not money left in the register after giving change
  

  
  return (changeToGive)
}
