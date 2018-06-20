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
  
  else if (num-900>=0) {
    romanNum.push("CM");
    num=num-900;
    return roman(num,romanNum);
  }
  
  else if (num-500>=0){
    romanNum.push("D");
    num=num-500;
    return roman(num,romanNum);
  }
  
  else if (num-400>=0){
    romanNum.push("CD");
    num=num-400;
    return roman(num,romanNum);
  }
 
  else if (num-100>=0){
    romanNum.push("C");
    num=num-100;
    return roman(num,romanNum);
  }
  
  else if (num-90>=0){
    romanNum.push("XC");
    num=num-90;
    return roman(num,romanNum);
  }
  
  else if (num-50>=0){
    romanNum.push("L");
    num=num-50;
    return roman(num,romanNum);
  }
  
  else if (num-40>=0){
    romanNum.push("XL");
    num=num-40;
    return roman(num,romanNum);
  }
  
  else if (num-10>=0){
    romanNum.push("X");
    num=num-10;
    return roman(num,romanNum);
  }
  
  else if (num-9>=0){
    romanNum.push("IX");
    num=num-9;
    return roman(num,romanNum);
  }
  
  else if (num-5>=0){
    romanNum.push("V");
    num=num-5;
    return roman(num,romanNum);
  }
  
  else if (num-4>=0){
    romanNum.push("IV");
    num=num-4;
    return roman(num,romanNum);
  }
  
  else if (num-1>=0){
    romanNum.push("I");
    num=num-1;
    return roman(num,romanNum);
  }
}


function convertToRoman(num) {
  
  var romanNum=[]
  var romanArray=roman(num, romanNum)
  
  //Joins the array to make a string
  return romanArray.join("");
}

console.log(convertToRoman(1100));
