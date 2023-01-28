/* let val = 10;
function tester(val){
val += 10;
if(val < 100){
return tester(val);
}
console.log(val);
return val;
}
tester(val);
console.log(val); */
// ***********************************************************


/* var addFive1 = function addFive1(num) {
    return num + 2;
    };
    let addFive2 = (num) => num + 2;
    console.log(addFive1(14)); */


// ***********************************************************

(function () {
    console.log("Welcome");
    })();
    (function () {
    let firstName = "Laurence";
    })();
    let result = (function () {
    let firstName = "Laurence";
    return firstName;
    })();
    console.log(result);
    (function (firstName) {
    console.log("My Name is " + firstName);
    })("Laurence");