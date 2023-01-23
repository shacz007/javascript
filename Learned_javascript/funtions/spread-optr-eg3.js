/* This operator avoids having to copy a long array or string into a function, which
saves time and reduces code complexity. You can call a function with multiple
spread operators. It will use all the elements of the arrays as input. Here's an
example: */
function addFourNumbers(x, y, z, a) {
console.log(x + y + z + a);
}
let arr = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr, ...arr2);

