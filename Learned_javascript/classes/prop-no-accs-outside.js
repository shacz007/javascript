/* This is how to add properties that aren't accessible from outside. We prefix them
with a # symbol: */

class Person {
    #firstname;
    #lastname;
   /*  constructor(fname, lname = "siddrampur") {
        this.#fname = fname;
        this.#lname = lname;
    }
  fullname(){
        console.log(this.fname,this.lname);
    }  */

    constructor(firstname, lastname) {
        if(firstname.startsWith("M")){
        this.#firstname = firstname;
        } else {
        this.#firstname = "M" + firstname;
        }
        this.#lastname = lastname;
        }
    
}
 let a = new Person("msachin","siddrampur")
 console.log(a.firstname,a.lastname);
 /* console.log(a.fname);
 a.fullname();
 let b = new Person("sagar")
 b.fullname();
 let c = new Person("sagarika")
 c.fullname(); */


 