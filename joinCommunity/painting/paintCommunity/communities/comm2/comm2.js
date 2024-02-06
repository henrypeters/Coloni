

const header = document.querySelector("header");
const logoName = document.getElementById("logo");
const link1 = document.getElementById("link0");
const link2 = document.getElementById("link1");
const link3 = document.getElementById("link2");
const link4 = document.getElementById("link3");
const link5 = document.getElementById("link4");

const membersBtn = document.getElementById("viewMembers");
const sectionMembers = document.getElementById("memberSection");
const themeBody = document.getElementById("theme")

const designHead = document.getElementById("memberTittle");
    const designRemove = document.getElementById("remove");
    const designHeadAndTittle = document.getElementById("tittleRemoveHolder")
    const holderForMember1 = document.getElementById("memberHolder1");
    const holderForMember2 = document.getElementById("memberHolder2");
    const memberdiv1 = document.getElementById("memberWrap1");
    const memberdiv2 = document.getElementById("memberWrap2");
    const memberdiv3 = document.getElementById("memberWrap3");
    const memberdiv4 = document.getElementById("memberWrap4");
    const memberdiv5 = document.getElementById("memberWrap5");
    const memberdiv6 = document.getElementById("memberWrap6");
    const memberdiv7 = document.getElementById("memberWrap7");
    const memberdiv8 = document.getElementById("memberWrap8");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    logoName.classList.toggle("logoChange", window.scrollY > 0);
    link1.classList.toggle("linkChange", window.scrollY > 0)
    link2.classList.toggle("linkChange2", window.scrollY > 0);
    link3.classList.toggle("linkChange3", window.scrollY > 0);
    link4.classList.toggle("linkChange4", window.scrollY > 0);
    link5.classList.toggle("linkChange5", window.scrollY > 0);
});
