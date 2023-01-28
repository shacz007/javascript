let a =["abc",2,new Date(),"dage",22, "bambiom", "65"];
// let a = ["man","tan","ban","san","can"]

checkString = (element,index)=>{
    return typeof element==="string";

}
let new_array = a.filter(checkString);
console.log(new_array);
console.log(a);

console.log(a.every(checkString));

// retturns true or false after checking if every eelment 
let an=1
console.log(typeof an);
let arr = ["man"];
console.log(arr[0]);
let mapped_arr = arr.map((x) =>{ return typeof x == String  }); 
console.log(mapped_arr);