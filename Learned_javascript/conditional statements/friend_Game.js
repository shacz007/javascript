let names  = prompt("enter the name to be searched");

switch(names){
    case "sachin":
        message="Typed in name is a friend ";
        break;
    case "sagar":
        message="Typed in name is a friend ";
        break;
    case "rohit":
        message="typed in name is a friend";
        break;
        default:
            message="Entered name is not a friend";
            break;
}
document.write(message);