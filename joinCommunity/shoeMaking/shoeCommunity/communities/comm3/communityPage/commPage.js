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
                            <p class="eventName">Shoezako</p>

                            <div>
                                <p class="eventAbout">About</p>
                                <p class="description">Shoezako is an international shoe festival that shows different
                                                        varieties of shoe from diferent countries in the world.</p>
                            </div>

                            <a href="commPage.html"><button class="gotIt">Got it</button></a>
    `;
});

secondEvent.addEventListener("click", function() {
    subInfoHold.style.display = "none";
    bodyTag.style.backgroundColor = "#e6e1e11e";

    eventCard2.style.display = "block";
    eventCard2.innerHTML = `<h3 class="upcomingTitle">  Upcoming Event  </h3><hr class="lin">
                            <p class="eventName">Multi-communal franchising</p>

                            <div>
                                <p class="eventAbout">About</p>
                                <p class="description">Multi-communal franchising is a commited parade that showcases
                                                        different variety of shoes in festival and brings 
                                                        investors from different parts of the world.</p>
                            </div>

                            <a href="commPage.html"><button class="gotIt">Got it</button></a>
    `;
})