/* filter returns an array just like map, but inside the callback you must return an expression 
that evaluates to true or false. If the expression evaluates to true, the value will be added 
to the returned array.

You can think of the callback to filter as a sort of testing function. If the element in the
 array passes the test, filter keeps the element; otherwise, filter tosses it out. */

 let arr = [2,33,65,88,15,2,94,56,34]

 let result = arr.filter((element)=>{
    return element%2==0;
 })
 console.log(result);

 console.log("************************************");

 let brr = ["a","aa","A","b","c","t","a"]
 let letter = "a";
 

 let result1 = brr.filter((elements)=>{
         
    return  elements == letter;
 })

 console.log(result1);


 console.log("*****************************************");

 let m = [{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}]
 let n = "isHilarious";

 let k = m.filter((element,index,array)=>{
     if(element.isHilarious == true){
         return element;
    }
 })

 console.log(k);





