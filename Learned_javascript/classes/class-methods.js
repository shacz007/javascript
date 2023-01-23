class Person{
      constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname  = lastname;
      }
      greet(){
        console.log("hello" , this.firstname, this.lastname);
      }
}

let a = new Person("sachin","siddrampur");
a.greet();
let b = new Person("man","dan");
console.log("hello",b.firstname,b.lastname);

/*please chck the difference*/