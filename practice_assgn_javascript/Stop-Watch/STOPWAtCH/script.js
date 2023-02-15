let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector(".timerDisplay");
let currentInterval = null;

document.getElementById("start").addEventListener("click", ()=>{
    if(currentInterval !== null){
        clearInterval(currentInterval);
    }
    currentInterval = setInterval(displayTimer,10);
});

document.getElementById("pause").addEventListener("click", ()=>{
    clearInterval(currentInterval);
});

document.getElementById("reset").addEventListener("click", ()=>{
    clearInterval(currentInterval);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = "00 : 00 : 00 : 000"
});

function displayTimer(){
    milliseconds = milliseconds + 10 ;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes =0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds :  milliseconds < 100 ? "0" + milliseconds : milliseconds;


timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}