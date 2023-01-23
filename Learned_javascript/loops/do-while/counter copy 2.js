let counter = 0;
let enter ; 
let step;

do{
    enter = prompt("enter a value");
    enter = Number(enter);
    console.log(enter);
    
    document.write("<p>"+enter+"</p>");

    step = counter + enter;
    // console.log(step);
    counter=step;
    
    // console.log(counter);   
       
}
while(counter<=100);
document.write("<p>="+counter+"</p>");
