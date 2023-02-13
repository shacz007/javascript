//generates random number without repetition***************************
let n = 10;
let arr = []
while (arr.length < n) {
    Random = Math.floor(Math.random() * n);
    // console.log(Random);
    let indexValue = arr.indexOf(Random);
    console.log(Random, indexValue);
    if (indexValue == -1) {
        arr.push(Random);
    }
}
console.log(arr);

//**********************************************************************************************************************************************



/* let arr = [];
console.log(arr);
do {
    Random = Math.floor(Math.random() * 5);
    console.log(Random);
    if (arr != Random)
        arr.push(Random);
    console.log(arr);
} while (arr.length < 5)
// console.log(arr);
 */

