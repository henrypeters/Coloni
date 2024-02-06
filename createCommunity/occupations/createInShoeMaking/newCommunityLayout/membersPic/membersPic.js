const richardImg = document.getElementById("img1")
const jamesImg = document.getElementById("img2")
const ericaImg = document.getElementById("img3")
const elizabethImg = document.getElementById("img4")
const maryImg = document.getElementById("img5")
const johnImg = document.getElementById("img6")
const samuelImg = document.getElementById("img7")
const ritaImg = document.getElementById("img8")

const richardName = document.getElementById("name1")
const jamesName = document.getElementById("name2")
const ericaName = document.getElementById("name3")
const elizabethName = document.getElementById("name4")
const maryName = document.getElementById("name5")
const johnName = document.getElementById("name6")
const samuelName = document.getElementById("name7")
const ritaName = document.getElementById("name8")

richardName.innerHTML = localStorage.getItem("addRichard");
jamesName.innerHTML = localStorage.getItem("addJames");
ericaName.innerHTML = localStorage.getItem("addErica");
elizabethName.innerHTML = localStorage.getItem("addElizabeth");
maryName.innerHTML = localStorage.getItem("addMary");
johnName.innerHTML = localStorage.getItem("addJohn");
samuelName.innerHTML = localStorage.getItem("addSamuel");
ritaName.innerHTML = localStorage.getItem("addRita");

if (richardName.innerHTML === "") {
    richardImg.style.display = "none";
}

if (jamesName.innerHTML === "") {
    jamesImg.style.display = "none";
}

if (ericaName.innerHTML === "") {
    ericaImg.style.display = "none";
}

if (elizabethName.innerHTML === "") {
    elizabethImg.style.display = "none";
}

if (maryName.innerHTML === "") {
    maryImg.style.display = "none";
}

if (johnName.innerHTML === "") {
    johnImg.style.display = "none";
}

if (samuelName.innerHTML === "") {
    samuelImg.style.display = "none";
}

if (ritaName.innerHTML === "") {
    ritaImg.style.display = "none";
}



const communityName = document.getElementById("commButton");

communityName.innerHTML = localStorage.getItem("comnameShoe")