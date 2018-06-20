function palindrome(str) {
  

//Makes all letters lowercase letters
 str = str.toLowerCase();

//Deletes all non alphanumerical characters 
  str=str.replace(/[\W|_]/g, "");

//Checks if str is a palindrome
  for (var i=0;i<str.length;i++){
    if (str[i]!=str[str.length-i-1])
      {return false;}
  }
  return true;
}
