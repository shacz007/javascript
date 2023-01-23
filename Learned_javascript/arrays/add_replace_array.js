//.push method to add elements to array at the end
let fruits = ["mango","orange","apple","strawwberry","pineapple","guava"];
console.log(fruits);
fruits.push("tangerine");
fruits.push("lime");
console.log(fruits);

//.splice method to add elements to array in between
let shapes=["triangle","rectangle","pentagon","hexagon","square"];
console.log(shapes);
shapes.splice(1,0,"rhombus","cone","cyclindrical","cube")

/*first numeric in above code represents the index number from where 
elements need to be added and 2nd numberic represents how many elements 
need to be deleted after the index if it is 0 then no elements are deleted 
if its other than 0, then that many values are needed to be deleted*/

console.log(shapes);
shapes.splice(3,1,"gumpodi");
console.log(shapes);

let shapes1=shapes;
shapes1.splice(1,1);
console.log(shapes1);

//we can add 2 or more arrays together by using .concat synt-> a.concat(b);

let a=[1,"ruby",3,"saga"];
let b=[2,"mana",6,"mingalava"];
let c= a.concat(b);
console.log(c);

//we can use .concat to do more than just add 2 arrays, it can also add elements to array

let d= c.concat(1,2,3,4,5,6);
console.log(d);






