let a=[1,2,3,4,5,6,7,8,9];
a.pop();
console.log(a);
//.pop() deletes last element from array

let b=[1,2,3,4,5,6,7,8,9]
b.shift();
delete b[3];//delete keyword can also be used to deleteelements from array
console.log(b);
//.shift() deletes the first element of the array

b.unshift(5);
console.log(b);

