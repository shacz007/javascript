/* Word scrambler

Create a function that returns a value of a word and scrambles the letter order with
Math.random():

1. Create a string that will hold a word value of your choice.
2. Create a function that can intake a parameter of the string word value.
3. Just like an array, strings also have a length by default. You can use this
length to set the loop maximum value. You will need to create a separate
variable to hold this value as the length of the string will be decreasing as the
loop continues. 

4. Create an empty temporary string variable that you can use to hold the new
scrambled word value.
5. Create a for loop that will iterate the number of letters within the string
parameter starting at 0 and iterating until the original length value of the
string is reached.
6. Create a variable that will randomly select one letter using its index value,
with Math.floor() and Math.random() multiplied by the current length of the
string.
7. Add the new letter to the new string and remove it from the original string.
8. Using console.log() output the newly constructed string from the random
letters and output to the console both the original string and the new one as
the loop continues.
9. Update the original string by selecting the substring from the index value
and adding it to the remaining string value from the index plus one onward.
Output the new original string value with the removed characters.
10. As you loop through the content you will see a countdown of the remaining
letters, the new scrambled version of the word as it is built, and the
decreasing letters in the original word.
11. Return the final result and invoke the function with the original string word
as an argument. Output this to the console. */



// let word = "costly";
let newString="sachin";
console.log(newString);
let c = newString.charAt(2);
// console.log(c);

let sizeOFstring = newString.length;
// console.log(sizeOFstring);

let arr = []
while (arr.length < sizeOFstring) {
    Random = Math.floor(Math.random() * sizeOFstring);
    // console.log(Random);
    let indexValue = arr.indexOf(Random);
    console.log(Random,indexValue);
    if (indexValue == -1) {
        arr.push(Random);
    }
}
    console.log(arr);

/*     at this point the program is generating the
 random numbers limited to the string limit without repition */

 let splitstring = newString.split("");
 console.log(splitstring);

//  now the string is split and an empty array is generated with random numbers
// further match the split string with randomly generated array and join the array to clg scrambled string
// [arr] should  === [splitstring]

let arr1=[]
for(element of arr){
     paired = splitstring[element];
     console.log(paired);
     arr1.push(paired);
    }
console.log(arr1);
newString = arr1.join("");
console.log(newString);
    

