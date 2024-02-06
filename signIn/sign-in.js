const firstButton = document.getElementById("firstBtn");
const secondButton = document.getElementById("secondBtn");
const input = document.getElementById("password");
const infor = document.getElementById("info")

input.addEventListener("keyup", function() {
    if (input.value.length > 0) {
        infor.innerHTML = ``
        firstButton.style.display = "none";
        secondButton.style.display = "block";
    }else{
        firstButton.style.display = "block";
        secondButton.style.display = "none";
    }
})

firstButton.addEventListener("click", function() {
    infor.innerHTML = `<p class="red"> Please fill in  the field </p>`
})

secondButton.style.display = "none";