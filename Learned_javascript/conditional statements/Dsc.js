let a= prompt("ENTER NUMBER A");
a=Number(a);
let b= prompt("ENTER NUMBER B");
b=Number(b);
let c= prompt("ENTER NUMBER C");
c=Number(c);

if(a<b && a<c && b<c){
    document.write(a," ",b," ",c)
}
else if(b<c && b<a && c<a){
    document.write(b," ",c ," ,",a)
}
else if(c<a && c<b && a<b){
    document.write(c," ", a," ",b)
}
else if(a<c && a<b && c<b){
    document.write(a," ",c," ",b)
}
else if(b<a && b<c && a<c){
    document.write(b," ",a," ",c)
}
else{
    document.write(c," ",b," ",a)
}




















/*let a= prompt("ENTER NUMBER A");
let b= prompt("ENTER NUMBER B");
let c= prompt("ENTER NUMBER C");

if(a>b && b>c){
    document.write(a," ",b," ",c)
}
else if(a>c && c>b){
    document.write(a," ",c," ",b)
}
else if(b>c && c>a){
    document.write(b," ",c," ",a)
}
else if(b>a && a>c){
    document.write(b," ",a," ",c)
}
else if(c>a && a>b){
    document.write(c," ",a," ",b)
}
else{
    document.write(c," ",b," ",a)
}*/



/*if(a>b && b>c){
    document.write(a,b,c);
}
else if(b>c && c>a){
    document.write(b,c,a);
}
else if(c>a && a>b){
    document.write(c,a,b);
}
else if(a>c && c>b){
    document.write(a,c,b);
}
else if(b>a && a>c){
    document.write(b , a , c);
}
else{
    document.write(c,b,a)
}*/