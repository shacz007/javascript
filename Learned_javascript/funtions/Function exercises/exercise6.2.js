let descr = ["mad","Bad","Good","cool","kind","superman","Helping","nice!"];
// let _names = "sachin";
 function dofunc (name){
      const question = name;//prompt("what is your name?")
      const character = Math.trunc(Math.random()*descr.length);
     console.log(descr[character]+ " " + question);
     //   console.log(_names + Math.trunc(Math.random()*descr.length));
 } 
 dofunc("sachin");
 