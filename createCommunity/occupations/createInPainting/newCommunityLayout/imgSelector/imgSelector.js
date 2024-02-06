// const theResult = document.getElementById("output");

// const fileEl = document.getElementById("file-el");

// fileEl.addEventListener("change", function() {
//     window.location.href = "./imgSelector.html";
//     const fr = new FileReader();

//     fr.readAsDataURL(fileEl.files[0]);

//     fr.addEventListener("load", function() {

//         const url = fr.result;

//         localStorage.setItem("my-image", url);
//     })

//     // to avoid the user from refreshing the page by himself
// })

// const getImage = localStorage.getItem("my-image");

// const img = new Image();

// img.src = getImage;

// theResult.appendChild(img);

const btn = document.getElementById("uploadBtn");
const fileEl = document.getElementById("file-el");

btn.addEventListener("click", function() {
    window.location.href = "./imgSelector2/imgSelector2.html";
})

fileEl.addEventListener("change", function() {

    const fr = new FileReader();

    fr.readAsDataURL(fileEl.files[0]);

    fr.addEventListener("load", function() {

        const url = fr.result;

        localStorage.setItem("my-image", url);
    })

    // to avoid the user from refreshing the page by himself
})