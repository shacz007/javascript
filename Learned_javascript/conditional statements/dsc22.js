let num1 = prompt("ENTER NUM 1");
let num2 = prompt("ENTER NUM 2");
let num3 = prompt("ENTER NUM 3");

let sortedNumber1;
let sortedNumber2;
let sortedNumber3;

if (num1 >= num2 && num1 >= num3) {
  sortedNumber1 = num1;
  if (num2 >= num3) {
    sortedNumber2 = num2;
    sortedNumber3 = num3;
  } else {
    sortedNumber2 = num3;
    sortedNumber3 = num2;
  }
} else if (num2 >= num1 && num2 >= num3) {
  sortedNumber1 = num2;
  if (num1 >= num3) {
    sortedNumber2 = num1;
    sortedNumber3 = num3;
  } else {
    sortedNumber2 = num3;
    sortedNumber3 = num1;
  }
} else {
  sortedNumber1 = num3;
  if (num1 >= num2) {
    sortedNumber2 = num1;
    sortedNumber3 = num2;
  } else {
    sortedNumber2 = num2;
    sortedNumber3 = num1;
  }
}

document.write(sortedNumber1,", ", sortedNumber2,", ", sortedNumber3);  // 54321 12345 11111













/*var a = 20;
var b = 685;
var c = 90;

if(a<b && a<c && b<c){
    console.log(a,b,c)
}
else if(b<c && b<a && c<a){
    console.log(b,c,a)
}
else if(c<a && c<b && a<b){
    console.log(c,a,b)
}
else if(a<c && a<b && c<b){
    console.log(a,c,b)
}
else if(b<a && b<c && a<c){
    console.log(b,a,c)
}
else{
    console.log(c,b,a)
}*/









/*if(a<b<c){
    console.log(a,b,c)
}
else if(b<c<a){
    console.log(b,c,a)
}
else if(c<a<b){
    console.log(c,a,b)
}
else if(a<c<b){
    console.log(a,c,b)
}
else if(b<a<c){
    console.log(b,a,c)
}
else{
    console.log(c,b,a)
}
*/