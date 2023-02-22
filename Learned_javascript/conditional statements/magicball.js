 var Q = prompt("ENTER YOUR QUESTION")
 document.write(Q+"?");
 
 let m = Math.random();
 m=m*10;
 m= Math.floor(m);
document.write("<p>"+m+"</p>");
 
 
 switch(m){
    case 0:
       message=( "NO");
        break;
    case 1:
       message=(  "YES");
        break;
    case 2:
       message=(  "probably");
        break;
    case 3:
       message=(  "doubtful");
        break;
    case 4:
       message=(  "50-50");
        break;
    case 5:
       message=(  "without a doubt");
        break;
    case 6:
       message=("could be");
        break;
    case 7:
       message=("100%");
        break;
    case 8:
       message=("not a chance");
        break;
    case 9:
       message=("ask again");
        break;
 }
 document.write("<p>"+message+"</p>");



