const header = document.querySelector("header");
const logoName = document.getElementById("logo");
const link1 = document.getElementById("link0");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    logoName.classList.toggle("logoChange", window.scrollY > 0);
    link1.classList.toggle("linkChange", window.scrollY > 0)
    link2.classList.toggle("linkChange2", window.scrollY > 0);
    link3.classList.toggle("linkChange3", window.scrollY > 0);
});

const btn = document.getElementById("addMembers");

btn.addEventListener("click", function() {
    localStorage.setItem('addErica', `Erica Stephen`);

    alert("You've added Erica Stephen into your community")
})