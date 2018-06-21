function telephoneCheck(str) {
  
 //Determines if there is a country code. If there is, checks if it is a 1.
  if (/^[\d][\s]*[(]*[\d]{3,}.*[\d]{3,}.*[\d]{4,}/.test(str)){
    if (str[0]==1){
      str=str.replace(str[0],"");
        str=str.trim()
      }
    
    else {
      return false
      
    }
  }
  
//Checks if a ( is followed by )
  if (str[0]=="("){
    if (str[4]!=")"){
      return false
    }
  }
  
//Checks if a ) comes after a (
  if (str[3]==")"){
    if (str[0]!="("){
      return false
    }
  }

  
//Allows the regular expression that follows to check if the number is too long
str=str+"-" 

return (/^[(]*[\d]{3,3}[)]*[\s|-]*[\d]{3,3}[-|\s]*[\d]{4,4}[-]$/.test(str))
  
}

console.log(telephoneCheck("1 555)555-5555"));
