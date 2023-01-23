var words = ["rock","paper","scissors"]
var computer = words[Math.floor(Math.random()*words.length)];

document.write("<div>"+computer+"</div>" + "entered by computer");

var person = prompt("enter rock or paper or scicssors");

document.write("<div>"+person+"</div>"+ " entered by person");

if(computer=="rock" && person == "paper"){
    message=("person wins");
}else if(computer=="paper"&&person=="scissors"){
    message=("person wins");
}else if(computer == "scissors"&&person=="rock"){
    message=("person wins");
}else if(computer==person){
    message=("its a tie");
}else{
    message=("computer wins");
}

document.write("<h1>"+message+"</h1>");