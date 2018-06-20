//Work in progress

function roman(num,romanNum){
  
  //Looks if M is neccessary
  if (num-1000 >= 0){
    romanNum.push("M");
    num=num-1000;
    roman(num, romanNum);
  }

//Ends the recursion if there is not more letters to add
  if (num==0)
    {return romanNum;}
}


function convertToRoman(num) {
  
  var romanNum=[];
  romanArray=roman(num,romanNum);
  
  //Joins the array to make a string

  return romanArray
}

console.log(convertToRoman(2000));
