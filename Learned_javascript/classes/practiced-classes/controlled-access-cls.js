class Maria{
    #typeofacc; 
    constructor(account_type,number){
        this.#account_type = account_type;
        console.log(this.#account_type) 
         // this.#number = number;
    }   
    get #account_type(){
        return this.#typeofacc;
    }
    
    set #account_type(typeofacc){
        this.#typeofacc = typeofacc;
    }  
}
new Maria("sb");

// let p = new Maria("shift");
// console.log(p.account_type());



/* class Boo{
    constructor(firstname){
        if(firstname.startsWith("s") ){
            this.firstname = firstname;
        }else{
            this.firstname = "s" + firstname;
        }
    }
}
let p = new Boo("Sanvi"); // sSanvi
console.log(p); */

