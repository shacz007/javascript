let arr = ["anda","cha","rs","r", "javabckishore","paganinininininin", "12313565"]

let newarr = [];

let n = 0;

for(i=1;n<arr.length;i++){
    arr.map(function (value){
        // console.log("value is ", value);
        let k = value.length;
        // console.log("value length is ",k);
        // console.log("compare value i is ", i);
        // console.log("n is ", n);

        if(k == i){
            newarr.push(value)
            n = n + 1;
            // console.log(newarr);
        }
})
}
console.log(newarr);