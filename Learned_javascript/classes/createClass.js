class Person {
    constructor(fname, lname = "siddrampur") {
        this.fname = fname;
        this.lname = lname;
    }
}
 let a = new Person("sachin")
 let b = new Person("sagar")
 let c = new Person("sagarika")
 console.log("hello",a.fname,a.lname);
 console.log("hello",b.fname,b.lname);
 console.log("hello",c.fname,c.lname);