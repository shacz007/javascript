let arr = ["grapefruit", 4, "hello", 5.6, true];

 printStuff = (elt,ind,mat,call) => {
console.log(elt ," - " ,ind," * ",mat,"+", call);
}

arr.forEach(printStuff); 