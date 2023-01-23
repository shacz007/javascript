/* let myWork = [];

for(i=0;i<10;i++){
    myWork.push({name:"lesson"});
}
console.log(i);
console.log(myWork); */
var objects = {};
let arr = []

for (var x = 0; x <= 10; x++) {
  objects[x]= {"lesson": x};
}
console.log(objects);
arr.push(objects)