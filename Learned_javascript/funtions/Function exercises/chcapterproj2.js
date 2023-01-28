/* Set timeout order
Use the arrow format to create functions that output the values one and two to the
console. Create a third function that outputs the value three to the console, and then
invokes the first two functions.
Create a fourth function that outputs the word four to the console and also use
setTimeout() to invoke the first function immediately and then the third function. */

x=()=>{
    console.log("one");
    console.log("five");}
    

y=()=>  console.log("two");

z=()=> console.log("three");



setTimeout(x,1000);
setTimeout(y,2000);
setTimeout(z,3000);

