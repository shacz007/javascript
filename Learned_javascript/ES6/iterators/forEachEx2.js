/* Write a function called addKeyAndValue which accepts three parameters, 
an array (of objects), a key and a value. This function should 
return the array of objects after each key and value have been added
 to each object in the array.
 */

//  addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true)

let a = [{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}];
// var b = "isInstructor";
var c=true;

a.forEach(function(element,index, ){
    a[index].isInstructor=c;

});
console.log(a);