const biancaImg = document.getElementById("img1")
const kevinImg = document.getElementById("img2")
const philipImg = document.getElementById("img3")
const bridgetImg = document.getElementById("img4")
const samImg = document.getElementById("img5")
const mirandaImg = document.getElementById("img6")
const joyImg = document.getElementById("img7")
const cristineImg = document.getElementById("img8")

const biancaName = document.getElementById("name1")
const kevinName = document.getElementById("name2")
const philipName = document.getElementById("name3")
const bridgetName = document.getElementById("name4")
const samName = document.getElementById("name5")
const mirandaName = document.getElementById("name6")
const joyName = document.getElementById("name7")
const cristineName = document.getElementById("name8")

biancaName.innerHTML = localStorage.getItem("addBianca");
kevinName.innerHTML = localStorage.getItem("addKevin");
philipName.innerHTML = localStorage.getItem("addPhilip");
bridgetName.innerHTML = localStorage.getItem("addBridget");
samName.innerHTML = localStorage.getItem("addSam");
mirandaName.innerHTML = localStorage.getItem("addMiranda");
joyName.innerHTML = localStorage.getItem("addJoy");
cristineName.innerHTML = localStorage.getItem("addCristine");

if (biancaName.innerHTML === "") {
    biancaImg.style.display = "none";
}

if (kevinName.innerHTML === "") {
    kevinImg.style.display = "none";
}

if (philipName.innerHTML === "") {
    philipImg.style.display = "none";
}

if (bridgetName.innerHTML === "") {
    bridgetImg.style.display = "none";
}

if (samName.innerHTML === "") {
    samImg.style.display = "none";
}

if (mirandaName.innerHTML === "") {
    mirandaImg.style.display = "none";
}

if (joyName.innerHTML === "") {
    joyImg.style.display = "none";
}

if (cristineName.innerHTML === "") {
    cristineImg.style.display = "none";
}



const communityName = document.getElementById("commButton");

communityName.innerHTML = localStorage.getItem("comname")