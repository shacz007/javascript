let arr = [];
for (let i = 0; i < 3; i++) {          //try giving i = 0;
    arr.push([]);
    for ( j = 1; j < 5; j++) {
        arr[i].push(j);
    }
 }
console.log(arr);
 console.table(arr);
 
 /*
let arrOfArrays = [];
for (let i = 0; i < 3; i++){
arrOfArrays.push([]);
for (let j = 0; j < 7; j++) {
arrOfArrays[i].push(j);
}
} */