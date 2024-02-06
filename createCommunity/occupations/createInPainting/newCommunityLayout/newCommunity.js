const logoName = document.getElementById("logo");
const link1 = document.getElementById("link0");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

window.addEventListener("scroll", function() {
    logoName.classList.toggle("logoChange", window.scrollY > 0);
    link1.classList.toggle("linkChange", window.scrollY > 0)
    link2.classList.toggle("linkChange2", window.scrollY > 0);
    link3.classList.toggle("linkChange3", window.scrollY > 0);
});

// name of community
const inputHolder = document.getElementById("inputName");

const nameOfCommunityInput = document.getElementById("commNameInput");
const show = document.getElementById("display");
const button = document.getElementById("btn");
const inputAndButtonHolder = document.getElementById("header");

show.value = localStorage.getItem("comnamePaint")
button.style.display = "none";

if (show.value === "") {
    console.log("name of community is empty");
}else{
    button.style.display = "block"
}

nameOfCommunityInput.addEventListener("keyup", function() {
    localStorage.setItem('comnamePaint', nameOfCommunityInput.value);
    show.value = localStorage.getItem("comnamePaint");
    button.style.display = "block";
})
    
const nextButton = document.getElementById("next");

nextButton.style.display = "none";

button.addEventListener("click", function(){
    nameOfCommunityInput.value = "";
    nextButton.style.display = "block";
})