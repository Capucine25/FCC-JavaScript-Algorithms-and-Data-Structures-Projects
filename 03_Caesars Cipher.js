function rot13(str) {
  
  var startDict=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var endDict= ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
  
  var newStr="";
  
  for (var i=0;i<str.length;i++){
    
    //Adds the changed letter to newStr
    if ((/\w/).test(str[i])){
      newStr=newStr.concat("",endDict[startDict.indexOf(str[i])]);
    }
    
    //Adds non alphabetic character to newStr
    else {
      newStr = newStr.concat([str[i]]);
    }
      
  }
    
  return newStr;
}
