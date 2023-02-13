function add(num1,num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2 ; 
}

function multi(num1,num2){
    return num1 * num2;
}

function div(num1,num2){
    return num1/num2;
}

const num1 = parseInt(prompt("enter number 1"));
const num2 = parseInt(prompt("enter number 2"));

window.alert("The addition of number equals: " + num1 + "+" + num2 + "=" + add(num1, num2))
window.alert("The substraction of number equals: "+ num1 + "-" + num2 + "=" +sub(num1, num2))
window.alert("The multiplication of number equals: "+ num1 + "x" + num2 + "=" +multi(num1, num2))
window.alert("The division of number equals: "+ num1 + "/" + num2 + "=" +div(num1, num2))