document.addEventListener("DOMContentLoaded", function(){
let button = document.querySelectorAll('button');
let screen = document.getElementById("toscreen");

// console.log(button);
// console.log(screen);

for(item of button){
    item.addEventListener("click", (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText === "="){
            let x = screen.innerText;
            let y = eval(x);
            console.log(x);
            console.log(y);
            screen.innerText = y;
        }
        else if(buttonText === "AC"){
            screen.innerText = "";
        }
        else if(buttonText === "C"){
            screen.innerText = screen.innerText.slice(0,screen.innerText.length-1)
        }
        else{
            screen.innerText = screen.innerText + buttonText
        }
    })
}

})
