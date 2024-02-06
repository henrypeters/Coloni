const header = document.querySelector("header");
const logoName = document.getElementById("logo");
const link1 = document.getElementById("link0");
const link2 = document.getElementById("link1");
const link3 = document.getElementById("link2");
const link4 = document.getElementById("link3");
const link5 = document.getElementById("link4");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    logoName.classList.toggle("logoChange", window.scrollY > 0);
    link1.classList.toggle("linkChange", window.scrollY > 0)
    link2.classList.toggle("linkChange2", window.scrollY > 0);
    link3.classList.toggle("linkChange3", window.scrollY > 0);
    link4.classList.toggle("linkChange4", window.scrollY > 0);
    link5.classList.toggle("linkChange5", window.scrollY > 0);
});


const acceptBtn = document.getElementById("accept");
const infoMessage = document.getElementById("info");
const generalMessage = document.getElementById("job-apply")
const theLargeImage = document.getElementById("large-image")
theLargeImage.style.display = "none";

acceptBtn.addEventListener("click", function() {
    infoMessage.style.display = "none";
    theLargeImage.style.display = "block";

    const acceptance = document.getElementById("acceptText");
    const courierInfo = document.getElementById("infoCourier");
    const varSmallImages = document.getElementById("smImgs");

    let text = `<p class="amount">The amount to be paid is <i>$400</i></p>`;
    let transport = `<p class="courierInfo">Send the product through the following courier platforms;</p>`;

    acceptance.innerHTML = ` ${text} `;
    courierInfo.innerHTML = ` ${transport} `;
    varSmallImages.innerHTML = `<div id="small-images">
                                    <img src="../../../../../../../../images/companyName/fedex.jpg" onclick="setLargeImage(0)" id="sm-1">
                                    <img src="../../../../../../../../images/companyName/dhl-logo-freelogovectors.net_.webp"  onclick="setLargeImage(1)" id="sm-2">
                                    <img src="../../../../../../../../images/companyName/deliveroo.jpg"  onclick="setLargeImage(2)" id="sm-3">
                                </div>`;

    const buttonHolder = document.createElement("div");
    const declineBtn = document.createElement("div");
    const acceptBtn = document.createElement("button");

    buttonHolder.classList.add("button-holder");
    declineBtn.classList.add("refuse");
    acceptBtn.classList.add("good");

    declineBtn.innerHTML = `<a href="tehilahJob.html"><button> Back </button></a>`
    acceptBtn.innerHTML = `<p> Accept </p>`

    generalMessage.appendChild(acceptance);
    generalMessage.appendChild(courierInfo);
    generalMessage.appendChild(theLargeImage);
    generalMessage.appendChild(varSmallImages);
    buttonHolder.appendChild(declineBtn);
    buttonHolder.appendChild(acceptBtn);
    generalMessage.appendChild(buttonHolder);
    
    generalMessage.style.marginBottom ="40px";

    acceptBtn.addEventListener("click", function() {
        acceptance.style.display = "none";
        courierInfo.style.display = "none";
        varSmallImages.style.display = "none";
        theLargeImage.style.display = "none";
        declineBtn.style.display = "none";
        acceptBtn.style.display = "none";

        let attitude = `GOODLUCK !!!!`;

        const greet = document.createElement("div");
        greet.classList.add("greet")
        greet.innerHTML = ` ${attitude} `;

        const understandBtn = document.createElement("div");
        understandBtn.classList.add("understand")

        understandBtn.innerHTML = `<a href="../../commPage.html#job"><button> Understood </button></a>`

        generalMessage.appendChild(greet);
        generalMessage.appendChild(understandBtn)
    })
})

const arr_of_pics = ["../../../../../../../../images/companyName/fedex.jpg", "../../../../../../../../images/companyName/dhl-logo-freelogovectors.net_.webp",
 "../../../../../../../../images/companyName/deliveroo.jpg",]

const largePicHolder =  document.getElementById("large-image");
largePicHolder.src = arr_of_pics[0]
largePicHolder.style.display = "none";

function setLargeImage (index) { 
    largePicHolder.src = arr_of_pics[index]
}