let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
  console.log("***************************************************************");
//   1.Write a function called printEmails which console.log's each email for the users.

function printEmails(){
    users.forEach(element => {
        console.log(element.email);
    });
}
printEmails();
console.log("***************************************************************");
// 2.Write a function called printHobbies which console.log's each hobby for each user.

function printHobbies(){
  return users.map(element=>{
          return element.hobbies
     })
    }
    console.log(printHobbies());
    console.log("***************************************************************");
// 3.Write a function called findHometownByState which returns 
// the first user which has a hometown of the state that is passed in

let findHometownByState=(state)=>{
    let k= users.filter((element)=>{return element.hometown.state===state && element.yearsExperience >=30} )
    return k
} 
let k=findHometownByState("NY");
console.log(k);
console.log("***************************************************************");
// 4.Write a function called allLanguages which returns an array of all of the unique values
let arr = []
function allLanguages(){
   users.map((element)=>{
      (element.favoriteLanguages.map((ele)=>{
           
            arr.push(ele)
         
      })
        
        ) 
  })
  
}
allLanguages()
console.log(arr);
let newarr=[...new Set(arr)]
console.log(newarr);
// console.log(allLanguages());


console.log("***************************************************************");
// 5.Write a function called hasFavoriteEditor which 
// returns a boolean if any of the users have the editor passed in

function hasFavoriteEditor(){
  users.filter((element)=>{
    if(element.favoriteEditor === "VS Code"){
      console.log(element.favoriteEditor);
      console.log(true); 
    }
    else{
      console.log(element.favoriteEditor);
      console.log(false);
    }
  })
};

hasFavoriteEditor();
console.log("***************************************************************");
/* 6.Write a function called findByUsername which takes in 
a string and returns an object in the users array that has that username */

function findByUsername(username){
  users.filter((element)=>{
    if(username === element.username){
      console.log(element);
    }
  })
}

findByUsername("jane")
findByUsername("david")

console.log("***************************************************************");