/* Create a class to track the employees of a company:
1. Use first names, last names, and the number of years worked as values in the
constructor.
2. Create two or more people with values for their first names, last names, and
the number of years they've worked at the company. Add the people into an
array.
3. Set up a prototype to return the details of the person's first and last names
and how long they've worked at the company.
4. Iterate the contents of the array to output the results into the console, adding
some text to make the output a full sentence. */

let people = [];
class Emp{
    constructor(firstname,lastname,numOfyears){
        this.firstname = firstname;
        this.lastname = lastname;
        this.numOfyears = numOfyears;
    }  
    
}

let person1 = new Emp("sachin","siddrampur" ,5);
people.push(person1);
let person2  = new Emp("sagar","mista",4);
people.push(person2);
let person3 = new Emp("jhon","doe",1);
people.push(person3);

console.log(people);

Emp.prototype.details = function () {
    return this.firstname+" "+this.lastname+" has worked for "+this.numOfyears+"years"
}

people.forEach((peson)=>{
    console.log(peson.details());
})
// console.log(people[0]);




/* class Emp{
    constructor(firstname,lastname,numOfyears){
        this.firstname = firstname;
        this.lastname = lastname;
        this.numOfyears = numOfyears;
    }  
    
}
Emp.prototype.call=function (){
        
}

let person1 = new Emp("sachin","siddrampur" ,5);
let person2  = new Emp("sagar","mista",4);
let person3 = new Emp("jhon","doe",1);

let people =[person1,person2,person3];
console.log(people); 

Emp.prototype.details = function(){
    return this.firstname+ " "+ this.lastname+" has worked for "+this.numOfyears+"years"
}

// console.log(person2.details());

people.forEach((person)=>{
    console.log(person.details());
}) */ 

