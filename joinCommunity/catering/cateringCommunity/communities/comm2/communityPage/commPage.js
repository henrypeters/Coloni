const header = document.querySelector("header");
const logoName = document.getElementById("logo");
const link1 = document.getElementById("link0");
const link2 = document.getElementById("link1");
const link3 = document.getElementById("link2");
const link4 = document.getElementById("link3");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    logoName.classList.toggle("logoChange", window.scrollY > 0);
    link1.classList.toggle("linkChange", window.scrollY > 0)
    link2.classList.toggle("linkChange2", window.scrollY > 0);
    link3.classList.toggle("linkChange3", window.scrollY > 0);
    link4.classList.toggle("linkChange4", window.scrollY > 0);
});

const eventCard1 = document.getElementById("event1card");
const eventCard2 = document.getElementById("event2card");
eventCard1.style.display = "none"
eventCard2.style.display = "none";

const bodyTag = document.querySelector("body");
const infoHold = document.getElementById("infos");
const subInfoHold = document.getElementById("sub-info");
const firstEvent = document.getElementById("firstOpt");
const secondEvent = document.getElementById("secondOpt");

firstEvent.addEventListener("click", function() {
    subInfoHold.style.display = "none";
    bodyTag.style.backgroundColor = "#e6e1e11e";

    eventCard1.style.display = "block";
    eventCard1.innerHTML = `<h3 class="upcomingTitle">  Upcoming Event  </h3><hr class="lin">
                            <p class="eventName">Food service conference</p>

                            <div>
                                <p class="eventAbout">About</p>
                                <p class="description">Food service conference is a conference that brings different
                                caterers from different part of Nigeria to showcase their talents and learn from
                                each other.</p>
                            </div>

                            <a href="commPage.html"><button class="gotIt">Got it</button></a>
    `;
});

secondEvent.addEventListener("click", function() {
    subInfoHold.style.display = "none";
    bodyTag.style.backgroundColor = "#e6e1e11e";

    eventCard2.style.display = "block";
    eventCard2.innerHTML = `<h3 class="upcomingTitle">  Upcoming Event  </h3><hr class="lin">
                            <p class="eventName">Praire Fire BBQ</p>

                            <div>
                                <p class="eventAbout">About</p>
                                <p class="description">Praire Fire BBQ is a food vendor based in China that prepares 
                                barbeque for the public at a lower cost.</p>
                            </div>

                            <a href="commPage.html"><button class="gotIt">Got it</button></a>
    `;
})