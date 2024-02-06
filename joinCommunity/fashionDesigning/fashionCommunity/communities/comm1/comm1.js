

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

membersBtn.addEventListener("click", function() {
    const memCon = document.getElementById("memberHolder");
    const memTitle = document.getElementById("tittle");

    const membersMessage = document.getElementById("memberMessage");
    const memberCard = document.createElement("div");
    memberCard.classList.add("memberCard")

    let head = `Our Members`;
    let remove = `../../../../../images/icons/delete.png`;
    let img1 = `../../../../../images/male/man2.jpg`;
    let img2 = `../../../../../images/female/woman3.jpg`;
    let img3 = `../../../../../images/male/man1.jpg`;
    let img4 = `../../../../../images/female/woman4.jpg`;
    let name1 = `James`
    let name2 = `Erica`
    let name3 = `Kevin`
    let name4 = `Elizabeth`
    let name5 = `Micheal`
    let name6 = `Tina`
    let name7 = `Simon`
    let name8 = `John`

    

    designHead.innerHTML = ` ${head} `
    designRemove.innerHTML = `<img src="${remove}">`
    memberdiv1.innerHTML = ` <img src="${img1}"> <p>${name1}</p>`;
    memberdiv2.innerHTML = `<img src="${img2}"> <p>${name2}</p>`;
    memberdiv3.innerHTML = `<img src="${img3}"> <p>${name3}</p>`;
    memberdiv4.innerHTML = `<img src="${img4}"> <p>${name4}</p>`;
    memberdiv5.innerHTML = `<img src="${img4}"> <p>${name4}</p>`;
    memberdiv6.innerHTML = `<img src="${img1}"> <p>${name1}</p>`;
    memberdiv7.innerHTML = `<img src="${img3}"> <p>${name3}</p>`;
    memberdiv8.innerHTML = `<img src="${img2}"> <p>${name2}</p>`;

    memberCard.appendChild(designHead)
    holderForMember1.appendChild(memberdiv1)
    holderForMember1.appendChild(memberdiv2)
    holderForMember1.appendChild(memberdiv3)
    holderForMember1.appendChild(memberdiv4)
    holderForMember2.appendChild(memberdiv5)
    holderForMember2.appendChild(memberdiv5)
    holderForMember2.appendChild(memberdiv6)
    holderForMember2.appendChild(memberdiv7)
    holderForMember2.appendChild(memberdiv8)
    memberCard.appendChild(holderForMember1);
    designHeadAndTittle.appendChild(holderForMember2);
    designHeadAndTittle.appendChild(designRemove);
    memberCard.appendChild(designHeadAndTittle);
    membersMessage.appendChild(memberCard);

    sectionMembers.style.marginTop = "40%"

    memCon.style.display = "none"
    memTitle.style.display = "none"
    membersBtn.style.display = "none"

    designRemove.addEventListener("click", function() {
        const notification = this.parentNode.parentNode;
        const parent = notification.parentNode;
    
        parent.removeChild(notification);

        sectionMembers.style.marginTop = "8%";
        themeBody.style.marginTop = "2%"

        memCon.style.display = "flex";
        memTitle.style.display = "block";
        membersBtn.style.display = "block"
    })
})