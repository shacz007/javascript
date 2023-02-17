/*Write a function called printFirstAndLast
 which accepts an array (of objects) and console.logs
 a new string with the first character and the last character of each value.*/

var array = ['awesome','example','of','forEach']

 array.forEach(element => {
    var a = element[0];
    let b = element[element.length-1];
    let c = a.concat(b);
    console.log("1st method "+c);
    console.log("2nd method " + element[0]+element[element.length-1]);
});

