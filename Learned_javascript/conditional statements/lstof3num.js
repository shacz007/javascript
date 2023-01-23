

let num1 = prompt("ENTER NUMBER 1");
let num2 = prompt("Enter number 2");
let num3 = prompt("Enter number 3");

if(num1<num2 && num1<num3){
    alert(num1);
    document.write(num1);
}
else if(num2<num1 && num2<num3){
    alert(num2);
    document.write(num2);
}
else{
    alert(num3);
    document.write("LEAST NUMBER IN GIVEN  3 NUMBERS is"- num3);
}