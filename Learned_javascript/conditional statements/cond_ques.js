//....................................Queestion.1
/*const q = '1';
switch (q) {
case '1':
answer = "one";
break;
case 1:
answer = 1;
break;
case 2:
answer = "this is the one";
break;
default:
answer = "not working";
}
console.log(answer);*/
/*..................................question 2.....................
const q = 1;
switch (q) {
case '1':
answer = "one";
case 1:
answer = 1;
break;
case 2:
answer = "this is the one";
break;
default:
answer = "not working";
}
console.log(answer);*/

//0........................question 3............
/*let login = false;
let outputHolder = "";
let userOkay = login ? outputHolder = "logout" : outputHolder =
"login";
console.log(userOkay);*/

//.........................quesoin 4........
/*const userNames = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
htmlOutput = "Welcome, that is a user";}
else {
    htmlOutput = "Denied, not a user ";
    }
    console.log(htmlOutput + ": " + userInput);*/
    

    /*...........This code will check if the value of userInput is in
     the userNames array. If it is, it will set the value of htmlOutput 
     to "Welcome, that is a user". If it is not, it will set the value of 
     htmlOutput to "Denied, not a user".

Then it will log htmlOutput and userInput to the console.
 For example, if userInput is "John", the code will log "Welcome, that is
  a user: John" to the console. If userInput is "Jane", the code will log 
  "Denied, not a user: Jane" to the console.

The indexOf() method is used to check if a value is in an array.
 It returns the index of the value if it is found in the array, or -1 if it is not found.
  So, if userInput is "John", userNames.indexOf(userInput) will return 1,
   which is greater than -1, so the if statement will be true and the htmlOutput
    will be set to "Welcome, that is a user".*/

//.................question 5.............
/*let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
output = "Dinner time";
} else if (myTime >= 22) {
output = "Time to go to sleep";
} else {
output = "You should be sleeping";
}
console.log(output);
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

output is first respnse*/

//.........................question 6.............
/*
let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a);//t
console.log(a > b && b > a);//f
console.log(d > b || b > a);//t
console.log(d > b && b > a);//t

*/

//**************question8************** * IMPORTAANT

/*let val = 100;
let message = (val > 100) ? `${val} was greater than 100` :
`${val} was LESS or Equal to 100`;
console.log(message);
let check = (val % 2) ? `Odd` : `Even`;
check = `${val} is ${check}`;
console.log(check);*/

/*In programming, the % symbol is used to represent the modulo operator.
 The modulo operator returns the remainder of a division operation. For example:

Copy code
7 % 3  // returns 1
10 % 2 // returns 0
11 % 3 // returns 2
The modulo operator is often used to check if a number is odd or even.
 If the result of a modulo operation is 0, the number is even. If the
  result is not 0, the number is odd. For example:

Copy code
if (num % 2 == 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}
The modulo operator can also be used to wrap a value around a range. 
For example, the following code will print the numbers from 0 to 9, 
repeating indefinitely:

Copy code
let num = 0;
while (true) {
  console.log(num % 10);
  num++;
}*/

//.................................queestion 9...................

let num = 0;
while (true) {
  console.log(num % 10);
  num++;
}

//infinte loop