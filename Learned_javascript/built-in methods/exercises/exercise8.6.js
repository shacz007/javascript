/* Experiment with the Math object with these steps:

1. Output the value of PI into the console using Math.
2. Using Math get the ceil() value of 5.7, get the floor() value of 5.7, get the
round value of 5.7, and output it into the console.
3. Output a random value into the console.
4. Use Math.floor() and Math.random() to get a number from 0 to 10.
5. Use Math.floor() and Math.random() to get a number from 1 to 10.
6. Use Math.floor() and Math.random() to get a number from 1 to 100.
7. Create a function to generate a random number using the parameters of min
and max. Run that function 100 times, returning into the console a random
number from 1 to 100 each time. */

// 1
console.log(Math.PI); 

// 2
let a = 5.5;
console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log(Math.round(a));

// 3
console.log(Math.random());

// 4
console.log(Math.floor(Math.random()*11));

// 5
console.log(Math.floor(Math.random()*10)+1);

// 6
console.log(Math.floor(Math.random()*100)+1);
console.log("###########################################################################");
// 7
let arr = [];
let b;
for(let i = 0;i<100;i++){
    
     b=Math.floor(Math.random()*4);
    //   return b;
    arr.push(b);
    }
     console.log(arr);