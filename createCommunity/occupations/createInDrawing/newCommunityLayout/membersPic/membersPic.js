const jemimaImg = document.getElementById("img1")
const alvinImg = document.getElementById("img2")
const georgeImg = document.getElementById("img3")
const preciousImg = document.getElementById("img4")
const anthonyImg = document.getElementById("img5")
const loganImg = document.getElementById("img6")
const blessingImg = document.getElementById("img7")
const euniceImg = document.getElementById("img8")

const jemimaName = document.getElementById("name1")
const alvinName = document.getElementById("name2")
const georgeName = document.getElementById("name3")
const preciousName = document.getElementById("name4")
const anthonyName = document.getElementById("name5")
const loganName = document.getElementById("name6")
const blessingName = document.getElementById("name7")
const euniceName = document.getElementById("name8")

jemimaName.innerHTML = localStorage.getItem("addJemima");
alvinName.innerHTML = localStorage.getItem("addAlvin");
georgeName.innerHTML = localStorage.getItem("addGeorge");
preciousName.innerHTML = localStorage.getItem("addPrecious");
anthonyName.innerHTML = localStorage.getItem("addAnthony");
loganName.innerHTML = localStorage.getItem("addLogan");
blessingName.innerHTML = localStorage.getItem("addBlessing");
euniceName.innerHTML = localStorage.getItem("addEunice");

if (jemimaName.innerHTML === "") {
    jemimaImg.style.display = "none";
}

if (alvinName.innerHTML === "") {
    alvinImg.style.display = "none";
}

if (georgeName.innerHTML === "") {
    georgeImg.style.display = "none";
}

if (preciousName.innerHTML === "") {
    preciousImg.style.display = "none";
}

if (anthonyName.innerHTML === "") {
    anthonyImg.style.display = "none";
}

if (loganName.innerHTML === "") {
    loganImg.style.display = "none";
}

if (blessingName.innerHTML === "") {
    blessingImg.style.display = "none";
}

if (euniceName.innerHTML === "") {
    euniceImg.style.display = "none";
}



const communityName = document.getElementById("commButton");

communityName.innerHTML = localStorage.getItem("comnameDraw")