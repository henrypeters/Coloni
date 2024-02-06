const namOfCommunity = document.getElementById("nameOfCommunity");
const doneButton = document.getElementById("buttonHolder2");
const editButton = document.getElementById("buttonHolder")
const line = document.getElementById("hr");
const members = document.getElementById("memberSection")

namOfCommunity.innerHTML = localStorage.getItem("comname");

const comNameContent = document.getElementById('communityContent');
const alertForNoName = document.getElementById("noCommName")

if (namOfCommunity.innerHTML === "") {
    // namOfCommunity.innerHTML = `No name yet`;
    // doneButton.style.display = "none";
    // editButton.style.marginTop = "400px"
    // line.style.display = "none";
    // members.style.display = "none";
    // theResult.style.display = "none"
    comNameContent.style.display = "none";
    alertForNoName.style.display = "block"
}else{
    comNameContent.style.display = "block";
    alertForNoName.style.display = "none";
}




const theResult = document.getElementById("output");
const getImage = localStorage.getItem("my-image");

const img = new Image();
img.src = getImage;

theResult.appendChild(img);

const founder = document.getElementById("the-founder");

founder.innerHTML = localStorage.getItem("username");

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
cristineName.innerHTML = localStorage.getItem("addCristine")

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