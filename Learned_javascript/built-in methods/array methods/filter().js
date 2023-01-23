 let a =["abc",2,new Date(),"dage",22, "bambiom", "65"];
// let a = ["man","tan","ban","san","can"]

checkString = (element,index)=>{
    return typeof element==="string";

}
let new_array = a.filter(checkString);
console.log(new_array);
console.log(a);