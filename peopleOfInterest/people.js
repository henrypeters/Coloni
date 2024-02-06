const all = document.getElementById("allLink");
const catering = document.getElementById("cateringLink");
const drawing = document.getElementById("drawingLink");
const painting = document.getElementById("paintingLink");
// const carpentry = document.getElementById("carpentryLink");
const shoeMaking = document.getElementById("shoeMakingLink");

const allContainer = document.getElementById("allPeopleCard");
const cateringContainer = document.getElementById("cateringHolder");
const drawingContainer = document.getElementById("drawingHolder");
const paintingContainer = document.getElementById("paintingHolder");
// const carpentryContainer = document.getElementById("carpentryHolder");
const shoeContainer = document.getElementById("shoeHolder");

all.addEventListener("click", function() {
    all.style.color = "#075ad8";
    all.style.borderBottom = "2px solid #075ad8";

    catering.style.color = "#333"
    drawing.style.color = "#333";
    painting.style.color = "#333";
    // carpentry.style.color = "#333";
    shoeMaking.style.color = "#333";
    catering.style.borderBottom = "none"
    drawing.style.borderBottom = "none"
    painting.style.borderBottom = "none"
    // carpentry.style.borderBottom = "none"
    shoeMaking.style.borderBottom = "none"

    // allContainer.style.display = "block";
    cateringContainer.style.display = "block";
    drawingContainer.style.display = "block";
    paintingContainer.style.display = "block";
    carpentryContainer.style.display = "block";
    shoeContainer.style.display = "block";
})

catering.addEventListener("click", function() {
    catering.style.color = "#075ad8";
    catering.style.borderBottom = "2px solid #075ad8";

    all.style.color = "#333"
    drawing.style.color = "#333";
    painting.style.color = "#333";
    // carpentry.style.color = "#333";
    shoeMaking.style.color = "#333";
    all.style.borderBottom = "none"
    drawing.style.borderBottom = "none";
    painting.style.borderBottom = "none";
    // carpentry.style.borderBottom = "none";
    shoeMaking.style.borderBottom = "none";

    cateringContainer.style.display = "block";
    drawingContainer.style.display = "none";
    paintingContainer.style.display = "none";
    // carpentryContainer.style.display = "none";
    shoeContainer.style.display = "none";
})

drawing.addEventListener("click", function() {
    drawing.style.color = "#075ad8";
    drawing.style.borderBottom = "2px solid #075ad8";

    all.style.color = "#333"
    catering.style.color = "#333"
    painting.style.color = "#333";
    // carpentry.style.color = "#333";
    shoeMaking.style.color = "#333";
    all.style.borderBottom = "none"
    catering.style.borderBottom = "none"
    painting.style.borderBottom = "none";
    // carpentry.style.borderBottom = "none";
    shoeMaking.style.borderBottom = "none";


    cateringContainer.style.display = "none";
    drawingContainer.style.display = "block";
    paintingContainer.style.display = "none";
    // carpentryContainer.style.display = "none";
    shoeContainer.style.display = "none";
})

painting.addEventListener("click", function() {
    painting.style.color = "#075ad8";
    painting.style.borderBottom = "2px solid #075ad8";

    all.style.color = "#333";
    catering.style.color = "#333";
    drawing.style.color = "#333";
    // carpentry.style.color = "#333";
    shoeMaking.style.color = "#333";
    all.style.borderBottom = "none";
    catering.style.borderBottom = "none";
    drawing.style.borderBottom = "none";
    // carpentry.style.borderBottom = "none";
    shoeMaking.style.borderBottom = "none";

    cateringContainer.style.display = "none";
    drawingContainer.style.display = "none";
    paintingContainer.style.display = "block";
    // carpentryContainer.style.display = "none";
    shoeContainer.style.display = "none";
})

// carpentry.addEventListener("click", function() {
//     carpentry.style.color = "#075ad8";  
//     carpentry.style.borderBottom = "2px solid #075ad8";

//     all.style.color = "#333";
//     catering.style.color = "#333";
//     drawing.style.color = "#333";
//     painting.style.color = "#333";
//     shoeMaking.style.color = "#333";
//     all.style.borderBottom = "none";     
//     catering.style.borderBottom = "none";     
//     drawing.style.borderBottom = "none";     
//     painting.style.borderBottom = "none";     
//     shoeMaking.style.borderBottom = "none"; 
    
//     cateringContainer.style.display = "none";
//     drawingContainer.style.display = "none";
//     paintingContainer.style.display = "none";
//     carpentryContainer.style.display = "block";
//     shoeContainer.style.display = "none";
// })

shoeMaking.addEventListener("click", function() {
    shoeMaking.style.color = "#075ad8";
    shoeMaking.style.borderBottom = "2px solid #075ad8";

    all.style.color = "#333";
    catering.style.color = "#333";
    drawing.style.color = "#333";
    painting.style.color = "#333";
    // carpentry.style.color = "#333";
    all.style.borderBottom = "none";
    catering.style.borderBottom = "none";
    drawing.style.borderBottom = "none";
    painting.style.borderBottom = "none";
    // carpentry.style.borderBottom = "none";

    cateringContainer.style.display = "none";
    drawingContainer.style.display = "none";
    paintingContainer.style.display = "none";
    // carpentryContainer.style.display = "none";
    shoeContainer.style.display = "block";
})