function telephoneCheck(str) {
  
 //Determines if there is a country code.
  if (/^[\d][\s]*[(]*[\d]{3,}.*[\d]{3,}.*[\d]{4,}/.test(str)){
    if (str[0]==1){
      str=str.replace(str[0],"");
        str=str.trim()
      }
    
    else 
      {return false}
  }
  
//Permet de s'assurer que le numero n'est pas trop long  
str=str+"-" 
console.log(str)


return (/^[(]*[\d]{3,3}[)]*[\s|-]*[\d]{3,3}[-|\s]*[\d]{4,4}[-]$/.test(str))
  
}

console.log(telephoneCheck("(275)76227382"));
