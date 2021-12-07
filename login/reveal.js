const field = document.getElementById("pass");
const button = document.getElementById("reveal");

button.addEventListener("click", (event)=>{
    event.preventDefault();
    if(field.type == "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
})