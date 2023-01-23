let car= {
    model:"passat",
    make : "volkswagen",
    year: 1999,
    color: "black"
};


for(let prop in car){
    console.log(prop);
}
console.log(car);

/* As you can see, all the names of the properties get printed, and not the values. This
is because the for in loop is getting the property names (keys) and not the values.
The for of is doing the opposite; it is getting the values and not the keys. */
