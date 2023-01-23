
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
// console.log(typeof notFound);
// console.log(someArray.length);

 while (notFound && someArray.length > 0) {
if (someArray[0] === "Jacky") {
          console.log("Found her!");
          notFound = false;
          console.log(typeof notFound);
} else {
    
    console.log("array length is "+someArray.length);
    
    someArray.shift();
    console.log(someArray);
}
} 

/* let arr=[1,2,3,[4,5,[9,7,[8]]]]  //output [1,2,3,4,5,6,7,8]
let result=[]
let checkFunction=(arr)=>{
    for(a of arr){
        if(typeof(a)==="number"){
            result.push(a)
        }
        else if(typeof(a)==="object"){
            checkFunction(a)
        }
    }
} 
checkFunction(arr) 
console.log(result);
*/
