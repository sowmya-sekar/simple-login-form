let button = document.querySelector("button");

button.addEventListener("click", () => {
    
    func()
})

function func() {
    const phone = document.getElementById("num").value;
    const phonePattern = /^\+91\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("!!enter valid phone number");
        
    }
    const name=document.getElementById("name").value;
    
}

