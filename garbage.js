// 
const form = document.getElementById("form")
const parentDiv = document.getElementById("result")

const nextButton2 = document.getElementById("next2");
nextButton2.style.display = "block";

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const reader = new FileReader();

    const name = document.getElementById("image").files[0].name;

    reader.addEventListener('load', function() {
        if (this.result && localStorage) {
            window.localStorage.setItem("name", this.result);
            parentDiv.style.display = "block"
            parentDiv.innerHTML = ''
            showImages()
            form.style.display = "none"
            nextButton2.style.display = "block";
        }else{
            alert("not successful")
        }

        nextButton2.addEventListener("click", function(){
            yourImage.style.display = "none"
        })
    })

    reader.readAsDataURL(document.getElementById("image").files[0])

    console.log(name) 

})

function showImages() {
    // for (let i = 0; i < window.localStorage.length; i++){
        let res = window.localStorage.getItem(window.localStorage.key("name"))
        const image = new Image();
        image.src = res;

        parentDiv.appendChild(image)

    // }
}

showImages()




























// 
const memPic = document.getElementById("members");

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

// if (cristineName.innerHTML === "") {
//     cristineImg.style.display = "none";
// }


// cristineName.innerHTML = localStorage.getItem("addCristine");

nextButton2.addEventListener("click", function() {
    yourImage.style.display = "none";
    memPic.style.display = "block";
})

