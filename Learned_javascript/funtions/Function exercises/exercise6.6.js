
function factorial(x){
    if (x==0){
        return 1;
    }
    else{
     return x * factorial(--x);
    }
}
let a = factorial(6);
console.log(a);