/* You can use any loop on objects, as soon as you convert the object to an array. This
can be done in three ways:
• Convert the keys of the object to an array
• Convert the values of the object to an array
• Convert the key-value entries to an array (containing arrays with two
elements: object key and object value) */

let car={
    model:"passat",
    make:"volkswagen",
    year:1999,
    color: black,
};

/* If we want to loop over the keys of the object, we can use the for in loop, as we saw
in the previous section, but we can also use the for of loop if we convert it to an
array first. We do so by using the Object.keys(nameOfObject) built-in function. This
takes an object and grabs all the properties of this object and converts them to an
array. */
let arrKeys = Object.keys(car);
console.log(arrKeys);