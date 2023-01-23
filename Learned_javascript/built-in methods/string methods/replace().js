/* to replace the paerts of the string*/ 

let a  = "hello bro what is up my man";
let b = a.replace("man", "bro");
console.log(b);

// output - hello bro what is up my bro


//if the word is not present the replacement will never take place

//it will just log back the orginal strings

// ******************************************************************

//if there are mutiple words of same string, only the first occurrence will be replaced

// **********************************************

/*replaceAll() willl replace all thee occureences*/


let c  = "hello man what is up my man";
let d = c.replaceAll("man", "bro");
console.log(d);

// hello bro what is up my bro - output