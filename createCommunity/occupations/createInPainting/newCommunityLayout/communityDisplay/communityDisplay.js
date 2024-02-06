const namOfCommunity = document.getElementById("nameOfCommunity");
const members = document.getElementById("memberSection")

namOfCommunity.innerHTML = localStorage.getItem("comnamePaint");

const comNameContent = document.getElementById('communityContent');
const alertForNoName = document.getElementById("noCommName")

if (namOfCommunity.innerHTML === "") {
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

const charityImg = document.getElementById("img1")
const paulImg = document.getElementById("img2")
const jeremyImg = document.getElementById("img3")
const tabithaImg = document.getElementById("img4")
const alexImg = document.getElementById("img5")
const felixImg = document.getElementById("img6")
const tehilahImg = document.getElementById("img7")
const praiseImg = document.getElementById("img8")

const charityName = document.getElementById("name1")
const paulName = document.getElementById("name2")
const jeremyName = document.getElementById("name3")
const tabithaName = document.getElementById("name4")
const alexName = document.getElementById("name5")
const felixName = document.getElementById("name6")
const tehilahName = document.getElementById("name7")
const praiseName = document.getElementById("name8")

charityName.innerHTML = localStorage.getItem("addCharity");
paulName.innerHTML = localStorage.getItem("addPaul");
jeremyName.innerHTML = localStorage.getItem("addJeremy");
tabithaName.innerHTML = localStorage.getItem("addTabitha");
alexName.innerHTML = localStorage.getItem("addAlex");
felixName.innerHTML = localStorage.getItem("addFelix");
tehilahName.innerHTML = localStorage.getItem("addTehilah");
praiseName.innerHTML = localStorage.getItem("addPraise");

if (charityName.innerHTML === "") {
    charityImg.style.display = "none";
}

if (paulName.innerHTML === "") {
    paulImg.style.display = "none";
}

if (jeremyName.innerHTML === "") {
    jeremyImg.style.display = "none";
}

if (tabithaName.innerHTML === "") {
    tabithaImg.style.display = "none";
}

if (alexName.innerHTML === "") {
    alexImg.style.display = "none";
}

if (felixName.innerHTML === "") {
    felixImg.style.display = "none";
}

if (tehilahName.innerHTML === "") {
    tehilahImg.style.display = "none";
}

if (praiseName.innerHTML === "") {
    praiseImg.style.display = "none";
}