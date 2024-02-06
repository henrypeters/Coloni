const header = document.querySelector("header");
const logoName = document.getElementById("logo");
const link1 = document.getElementById("link0");
const link2 = document.getElementById("link1")
const link3 = document.getElementById("link2")
const link4 = document.getElementById("link3")

const infoHolder = document.getElementById("message")
const infoDisplayBtn = document.getElementById("displayBtn");
const secondinfoBtn = document.getElementById("displaySecondBtn")
infoHolder.style.display = "none";
secondinfoBtn.style.display = "none"

infoDisplayBtn.addEventListener("click", function() {
    infoHolder.style.display = "block";
    infoDisplayBtn.style.display = "none";
    secondinfoBtn.style.display = "block";

    secondinfoBtn.addEventListener("click", function() {
        infoHolder.style.display = "none";
        secondinfoBtn.style.display = "none";
        infoDisplayBtn.style.display = "block"
    })
})

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    logoName.classList.toggle("logoChange", window.scrollY > 0);
    link1.classList.toggle("linkChange", window.scrollY > 0);
    link2.classList.toggle("linkChange2", window.scrollY > 0);
    link3.classList.toggle("linkChange3", window.scrollY > 0);
    link4.classList.toggle("linkChange4", window.scrollY > 0);
});