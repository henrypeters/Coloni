const theResult = document.getElementById("output");

const getImage = localStorage.getItem("my-image");

const img = new Image();

img.src = getImage;

theResult.appendChild(img);

const changeImage = document.getElementById("inputHolder");

changeImage.addEventListener("click", function() {
    window.location.href = "../imgSelector.html";
})