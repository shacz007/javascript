let a = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
"Laurence", "Mike", "Laurence", "Mike"]
let b = a.indexOf
newArray = a.filter((value,index,position)=> {
    console.log(value,index,position.indexOf(value));
    return a.indexOf(value)===index})
console.log(newArray);

// console.log(a.indexOf());

/* let b=[...new Set(a)] 
console.log(b); */   //this is inbuilt method to remove the duplicates

/* a.map((element,index)=>{
    console.log(index);
}) */