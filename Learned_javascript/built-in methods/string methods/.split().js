/*********converting string to an array*****with split method******** */
let a = "men will be men";

let b = a.split()
let c = a.split("")
let d = a.split(" ")

console.log(b);
console.log(c);
console.log(d);

/*********************************outputs******************* 
[ 'men will be men' ]

[
  'm', 'e', 'n', ' ',
  'w', 'i', 'l', 'l',
  ' ', 'b', 'e', ' ',
  'm', 'e', 'n'
]

[ 'men', 'will', 'be', 'men' ]

*/