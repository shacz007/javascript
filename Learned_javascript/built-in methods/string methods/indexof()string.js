/* Being able to find out what index a certain substring is at within your string is very
useful. For example, when you need to search for a certain word through the user
input of a log file and create a substring starting at that index. Here is an example of
how to find the index of a string */

let a = "board";
let b = a.indexOf("r");
console.log(b);

// out put is 3 since index of r is a number 0,1,2,'3'

let poem = "That's the to basic idea, but in practice there's more to it. ";
let c = poem.indexOf("to");
console.log(c);