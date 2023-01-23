let add2 =(a,b) => {
    return a+b
   console.log(e); //*********anything given after return is invalid**** */
};

add2(25,60);

let arr=[];
for(let i=0;i<10;i++){
    let result = add2(i,i*3);
    arr.push(result);
}
console.log(arr);