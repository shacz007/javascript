//var person = 11; 
//accesss for 5 rupeee

let person =41;




if(person>0 && person<=3){
   message="free access";
   cost=0;
}
else if(person>3 && person <= 16){
    message="you are aged between 3 and 12";
    cost = 5 ;
}
else if(person>16 && person <=65){
    message = "you are considered an adult";
    cost = 10;
}
else{
    message= "you are a senior citizen";
    cost= 7;
}
console.log(message);
console.log("your ticket cost is = ", cost);





/*let age = 10;
let cost = 0;
let message;
if (age < 3) {
cost = 0;
message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
cost = 5;
message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
cost = 10;
message ="A regular ticket costs 10 dollars.";
} else {
    cost = 7;
    message ="A ticket is 7 dollars.";
}
   
console.log(message);
console.log("Your Total cost "+cost);
*/