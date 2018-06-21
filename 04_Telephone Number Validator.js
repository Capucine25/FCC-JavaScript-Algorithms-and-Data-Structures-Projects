function telephoneCheck(str) {
  
 //Determines if there is a country code.
  if (/[\d].*[\d]{3,}.*[\d]{3,}.*[\d]{4,}/.test(str)){
    if (str[0]==1){
      str=str.replace(str[0],"");
        str=str.trim()
      }
    
    else 
      {return false}
  }
  
console.log(str)
return (/[\d]{3,}[\d]{3,}[-]*[\d]{4,}/.test(str))
  
}

console.log(telephoneCheck("1 5555555-555"));
