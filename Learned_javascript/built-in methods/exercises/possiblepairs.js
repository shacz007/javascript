let array = [1, 2, 3, 4, 5, 6]
let n = 8

//using for of loop
for (let a of array){
   for(let x of array){
   if(a+x===n) {
    console.log(a,x);
   }
   }
    }