/* Create a class which will allow you to work out the combined price of a number of
items, and interact with it to work out the total cost of different orders.
1. Create a class that contains the prices of two menu items as private field
declarations.
2. Use the constructor in the class to get the argument values (how many of
each item are being bought).
3. Create a method to calculate and return the total cost depending on how
many of each item the user selects.
4. Use a getter property to grab the value output by the calculation method.
5. Create two or three objects with different combinations of menu selections,
and output the total cost in the console. */

/* class Menu{
    #dosa = 10;
    #idli = 5;
    constructor(dosaOrdered,idliOrdered){
        this.dosaOrdered = dosaOrdered;
        this.idliOrdered = idliOrdered;
    }
    bill(){
        return (this.#dosa*this.dosaOrdered) + (this.#idli*this.idliOrdered);
    }
     get total(){
        return this.total();
    } 
}

let person1 = new Menu(2,3);
let person2 = new Menu(1,1);
console.log(person1.bill());
console.log(person1);

console.log("**************************************###################");

console.log(person2.bill());
console.log(person2); */

class Menu{
    #dosa = 10;
    #idli = 5; 
    constructor(dosaOrdered,idliOrdered){
        this.dosaOrdered = dosaOrdered;
        this.idliOrdered = idliOrdered;
    }
    bill(){
        return (this.#dosa*this.dosaOrdered) + (this.#idli*this.idliOrdered);
    }
   /*  get total(){
        return this.total();
    } */
    
}

let person1 = new Menu(2,3);
let person2 = new Menu(1,1);
console.log(person1.bill());
console.log(person1);

console.log("**************************************###################");

console.log(person2.bill());
console.log(person2);