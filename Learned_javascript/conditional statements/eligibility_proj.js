let age = prompt("Enter your age here");
age = Number(age);
console.log(typeof age);

/*if (age>0 && age<19){
    message="No entry";
}else if(age>=19 && age<21){
    message="Allowed but no alcohol";
}else{
    message="Allowed and has access to alcohol";
}
*/

 if(age >=19 && age<21){
    message="you are allowed and have NO alcohol access"}
    else if(age >=21 && age<100){
        message="You are allowed and have access to alcohol";}
    else{
    message="No Entry";
}
document.write(message);
