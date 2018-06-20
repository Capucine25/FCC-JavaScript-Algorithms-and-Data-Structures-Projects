function roman(num,romanNum){
  
//Ends the recursion if there is not more letters to add
//And returns an array containing the roman letters needed
  if (num==0)
    {return romanNum;}
  
  //Every if looks if a letter, or a combination of 2 letters
  //is necessary
  if (num-1000 >= 0){
    romanNum.push("M");
    num=num-1000;
    return roman(num,romanNum);
  }
  
  if (num-900>=0) {
    romanNum.push("CM");
    num=num-900;
    return roman(num,romanNum);
  }
  
  if (num-500>=0){
    romanNum.push("D");
    num=num-500;
    return roman(num,romanNum);
  }
  
  if (num-400>=0){
    romanNum.push("CD");
    num=num-400;
    return roman(num,romanNum);
  }
 
  if (num-100>=0){
    romanNum.push("C")
    num=num-100
    return roman(num,romanNum)
  }
}


function convertToRoman(num) {
  
  var romanNum=[]
  var romanArray=roman(num, romanNum)
  
  //Joins the array to make a string
  return romanArray;
}

console.log(convertToRoman(1100));
