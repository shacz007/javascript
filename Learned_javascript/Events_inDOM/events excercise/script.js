let wish=()=>{
        // 1.Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.

        // 2.Replace the text "Change me" with "Hello World!".
        let change = document.getElementById("change_heading");
        change.innerText = "hellok";
        // 1.Create a new div element.

        // 2.Give your new div a class of purple and style it so that it has a background color of purple.

        // 3.Append your new div to the page to the section tag.
        let ref = document.getElementById("kk")
// take references to both points where you want to push and what you want to push
        let create = document.createElement("div");
        create.className = "purple"
        ref.appendChild(create);

// 4.When a user hovers over one of the colored 
// boxes change the text to display the color that is being hovered over.
        let changColor = document.querySelector("section");
        changColor.addEventListener("mouseover", function (event){
                var selectedColor = document.querySelector(".selected");
                selectedColor.innerText = event.target.className;
        })



}
window.onload=wish()    