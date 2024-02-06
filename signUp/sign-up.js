const button = document.getElementById("firstBtn")

function store(){
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const car = [
        {
            user: username,
            pass: password,
        }
    ]
    
    let string = "";
    car.map((x) => {
    string += ` ${x.user}`
    })

    window.localStorage.setItem('username', string);  
}  

function sign() {
    const username = document.getElementById("name");
    const password = document.getElementById("password");
    const formContainer = document.getElementById("form");
    
    if (username.value.length > 0 && password.value.length > 0 ) {
        button.style.display = "none";
    
        const secondButton = document.createElement("div");
        secondButton.classList.add("secondBtn");
    
        secondButton.innerHTML = `<a href="../profile/profile.html"><button class="inner"> Get Started </button></a>`;
        formContainer.appendChild(secondButton);
    }else{
        alert("Wrong username and password")
    
        username.value = "";
        password.value = "";
    }
}

window.onload = function() {
    button.onclick = sign;
}