//Evaluating a number game

let n = prompt("Enter a number between 1 to 10")
n=Number(n);
document.write("your entered number is "+ n)

let m = Math.random();
m=Math.floor(m*10);

if(m==n){
    message="congrats! the number you've entered is correct";
}
else{
    message ="sorry, the number you've entered does not match"
}
document.write("<p>"+message+"</p>")
document.write("<p>"+"you should have entered "+m+"</p>")

