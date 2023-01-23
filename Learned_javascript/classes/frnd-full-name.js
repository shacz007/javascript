class Person {
    constructor(fname, lname = "siddrampur") {
        this.fname = fname;
        this.lname = lname;
    }
    fullname(){
        console.log(this.fname,this.lname);
    }
    
}
 let a = new Person("sachin")
 a.fullname();
 let b = new Person("sagar")
 b.fullname();
 let c = new Person("sagarika")
 c.fullname();


 