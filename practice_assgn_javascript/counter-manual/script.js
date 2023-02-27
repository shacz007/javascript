document.addEventListener("DOMContentLoaded",()=>{

    //take control of screen
    let display = document.getElementById("display")

    // take control of btns
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let clear = document.getElementById("clear");
    
    //minus count functionality when minus btn clicked
    minus.addEventListener("click",()=>{
    let z = eval(Number(display.innerHTML) - 1)
    display.innerHTML = z;
    })

    // add 1 when the plus btn is clicked
    plus.addEventListener("click",()=>{
        let z = eval(Number(display.innerHTML) + 1)
        display.innerHTML = z
    })

    // set to zero when the clear button is clicked
    clear.addEventListener("click",()=>{
        display.innerText = "0"
    })
})