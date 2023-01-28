// create a recursive function***************************************************

/* Create a recursive function that counts up to 10. Invoke the function with different
start numbers as the arguments that are passed into the function. The function
should run until the value is greater than 10. */

function count(x){
    console.log(x);
    if (x<10){
        count(++x);
    }
}
count(5);
