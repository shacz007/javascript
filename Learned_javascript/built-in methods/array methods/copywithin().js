arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);
console.log(arr);

// [ 5.6, 4, 'hello', 5.6, true ]

a = ["grapefruit", 4, "hello", 5.6, true];
a.copyWithin(0, 2, 4);
console.log(a);

// [ 'hello', 5.6, 'hello', 5.6, true ]

b = ["grapefruit", 4, "hello", 5.6, true];
b.copyWithin(0, 2, 5);
console.log(b);

// [ 'hello', 5.6, true, 5.6, true ]




