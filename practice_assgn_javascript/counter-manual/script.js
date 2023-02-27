document.addEventListener("DOMContentLoaded",()=>{

    const music = new Audio("https://assets.mixkit.co/active_storage/sfx/275/275.wav");
    const music1 = new Audio("https://assets.mixkit.co/active_storage/sfx/1114/1114.wav")
    //take control of screen
    let display = document.getElementById("display");

    // take control of btns
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let clear = document.getElementById("clear");
    
    //minus count functionality when minus btn clicked
    minus.addEventListener("click",()=>{
    music.play();
    let z = eval(Number(display.innerHTML) - 1);
    display.innerHTML = z;
    });

    // add 1 when the plus btn is clicked
    plus.addEventListener("click",()=>{
        music.play();
        let z = eval(Number(display.innerHTML) + 1);
        display.innerHTML = z;
    });

    // set to zero when the clear button is clicked
    clear.addEventListener("click",()=>{
        music1.play();
        display.innerText = "0";
    });
})