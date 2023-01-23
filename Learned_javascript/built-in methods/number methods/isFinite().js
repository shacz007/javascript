/*****checking if some thing is Finite******** */

/* It is a very popular one and has been made into a global
method as well, and its name is isFinite(). It returns false for NaN, Infinity, and
undefined, and true for all other values */

let a = 25;
console.log(isFinite(a));//true

let b ="manage";
console.log(isFinite(b));//false

console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));
