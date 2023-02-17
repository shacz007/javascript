let arr = [1,5,67,8]
arr.forEach((value,index,arr)=>{
    console.log(value);
    console.log(index);
    console.log(arr);
        console.log("value is " + value,"at index " + index,"of an array "+arr);
        console.log("*****************************");
});

console.log("###############################");
let a = ["man", "women"]

let ref = a.forEach(function(value,index,arr){
    return arr,value,index;
})

console.log(ref);


console.log("######################");

let b = [1,2,3]
function double(b){
    let doubledArr = [];
    b.forEach(function(val){
        doubledArr.push(val*2);
    })
    return doubledArr;
    // console.log(doubledArr);
}
let c = double(b);
console.log(c);

let d = double([3,3,3]);
console.log(d);