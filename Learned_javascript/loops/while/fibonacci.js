let num1 = 0;
let num2 = 1;
let calc;

fibonacciArray = [];

while(fibonacciArray.length<10){
    fibonacciArray.push(num1);
    calc = num1 + num2;
    num1=num2;
    num2 =calc;
}
console.log(fibonacciArray);

