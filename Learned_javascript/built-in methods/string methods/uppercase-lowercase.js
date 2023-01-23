let h = "hey!";
let i = h.toUpperCase();
console.log(i);

// output - HEY!

let m = "BRO";
let n = m.toLowerCase()
console.log(n);

// output - bro
// *********************************************

// lets say we just want first letter to be caps

let p = "maniac";
let q = p.charAt(0).toUpperCase().concat(p.slice(1))
console.log(q);