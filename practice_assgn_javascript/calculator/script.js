document.addEventListener("DOMContentLoaded", function(){
let button = document.querySelectorAll('button');
console.log(button);
button.addEventListener("click", function(){
    let screen = document.getElementById("toscreen");
    screen.innerHTML = screen.innerHTML + button1.value
})
})