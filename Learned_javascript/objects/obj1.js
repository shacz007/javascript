let dog = {dogName : "javascript",
            weight : 2.4,
            //color : "Brown",
            breed :"pomerian",
            age :3, 
            burglarBiter : true};

            //let dogColor1 = dog["color"];


    //Accessing object properties
            console.log(dog.dogName);
            console.log(dog.age);
             dog.color= "blue";
            console.log(dog);
    

   //updating object properties
       dog.color = "mauji";
       dog.weight = 15;
       console.log(dog.color);
       console.log(dog.weight);

       console.log(dog);

       //changingDATATYPE of property in js is no issue, will update immediaately.

       dog.age= "fifteen";
       console.log(dog.age);

       /*using variables other than string literals 
       to refer to object properties*/
        
       let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);

dog[variable] = "labrador"
console.log(dog.breed);
