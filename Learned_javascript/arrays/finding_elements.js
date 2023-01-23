/*if you want to check whether the element is present in 
we use .find() method
find() is acyually a function more than method.

This function will be executed on every element in the array until it finds
a match, and if it does not, then it will return undefined.*/

let a=[1,2,3,4,5]
let find_Value= a.find(function (e){
    return e===1;
})
    //normal function

    let find_Value2=a.find(e => e===7);
    
    //fat arrow fn
    console.log(find_Value);
    console.log(find_Value2);

/*if you also want to find out the index of particular element in array
we use indexof() method*/

 //let index=a.indexOf(5)

     console.log(a.indexOf(3));
     console.log(a.indexOf(8));
     console.log(a.indexOf(-1));

console.log(a.find(e=> e===1));
console.log(a.indexOf(1));

/*the next occurence of the same element is found by indexOf method by mentioning
the number you want to search and adding indexnumero with comma to search beyond that occurence.*/

let c=[1,2,2,7,3,2,5,1,5,9,8,9,9,7,6,6]
console.log(c.indexOf(7,4));

/*lastindexOf() - if there 2 same elements in the array with same name or number 
only the first occurence is detected by the indexOf() method, to find the last 
occurence of the same mentioned element we use lastindexOf()*/

let animals = ["dog", "horse", "cat", "platypus", "dog"];
console.log( animals.lastIndexOf("dog"));



