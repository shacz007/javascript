let a = prompt("enter the num a");
let b = prompt("enter the num b");
let c = prompt("entter the num c");

/*if (a<b && b<c){
    document.write(`${a} ,${b} ,${c} `)
}
else if(b<c && c<a){
    document.write(`${b},${c},${a}`)
}
else{
    document.write(`${c},${a},${b}`)
}*/





/*let a = 10;
let b =  30;
let c = 40;
 
if(a<b<c){
    console.log(a," ",b," ",c)
}
else if(b<c<a){
    console.log(b," ",c," ", a)
}
else{   
    console.log(c," ",a," ",b)
}*/




if(a<b && b<c){
    document.write(a," ",b," ",c) 
}
else if(a<c && c<b){
    document.write(a," ",c," ",b)
}
else if(b<a && a<c){
    document.write(b," ",a," ",c)
}
else if(b<c && c<a){
    document.write(b," ",c," ",a)
}
else if(c<a && a<b){
    document.write(c," ",a," ",b)
}
else{
    document.write(c," ",b," ",a)
}
