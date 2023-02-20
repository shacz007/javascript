/* Unlike forEach, map returns a new array of the values
 returned in the callback. The structure of the callback function to map is identical
  to forEach: once again,
 the three parameters are the value, index and array (in that order). */

 let arr = [1,2,3,4];;

 let a = arr.map(function (element,index,array){
        return element *2;
 })
console.log(a);

console.log("****************************************");


let brr = [3,3,3]

let b = brr.map((element,index)=>{
    return element * index;
})

console.log(b);

console.log("*****************************************");

let p = [{name: "Elie" , isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}]
let q =  "name";


    let c = p.map((element,index,array)=>{
        return element.name;
    })
    console.log(c);
