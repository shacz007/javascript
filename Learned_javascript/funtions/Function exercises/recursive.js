// **************************function inside a function
function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
    getRecursive(--nr);
    }
    }
    getRecursive(50);    