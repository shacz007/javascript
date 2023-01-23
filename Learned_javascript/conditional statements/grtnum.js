let a = prompt("ENTER A NUM FOR A");
a=Number(a);
let b = prompt("ENTER A NUM FOR B");
b=Number(b);

if  (a>b){
   document.write(a,"a is greater digit");
}
else if(b>a)
{
    document.write(b,"is greater digit");
}
else{
    document.write("Entered digits are equal")
}