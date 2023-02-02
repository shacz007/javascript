let array=[]
function randomPusher(){
    // for (const a of array) {
        let x = Math.floor((Math.random() * 10))
        console.log(x);
        
        if(!array.includes(x) && array.length<=11){
            array.push(x)
            
        /* }
        else if(array.includes(x)){
            array.push(" ")
        }
        else {
            return console.log('Mission Accomplished');
        } */
       
        randomPusher()
    }
}
// randomPusher()
// console.log(array.join("").split(""));





let arr = [];
if (arr.length === 0) {
  console.log("The array is empty");
} else {
  console.log("The array is not empty");
}