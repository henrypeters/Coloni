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

const cardDisplayPrice1 = document.getElementById("cardPrice1");
const cardDisplayPrice2 = document.getElementById("cardPrice2");
const cardDisplayPrice3 = document.getElementById("cardPrice3");

cardDisplayPrice1.innerHTML = localStorage.getItem("3rdvalue1");
cardDisplayPrice2.innerHTML = localStorage.getItem("3rdvalue2");
cardDisplayPrice3.innerHTML = localStorage.getItem("3rdvalue3");

if (cardDisplayPrice1.innerHTML === "") {
    cardDisplayPrice1.innerHTML = `$0`
}else{
    console.log("filled item")
}

if (cardDisplayPrice2.innerHTML === "") {
    cardDisplayPrice2.innerHTML = `$0`
}else{
    console.log("filled item")
}

if (cardDisplayPrice3.innerHTML === "") {
    cardDisplayPrice3.innerHTML = `$0`
}else{
    console.log("filled item")
}

const comapnyHolder = document.getElementById("portfContainer")
const textAndLinkContainer = document.getElementById("tradeContainer")
const companyTrade1 = document.getElementById("trade1");
const companyTrade2 = document.getElementById("trade2");
const companyTrade3 = document.getElementById("trade3");

const infoCompanyHolder = document.getElementById("holderOfComapnyInfo");
infoCompanyHolder.style.display = "none";

// company 1
const comp1Info = document.getElementById("company1Info")

companyTrade1.addEventListener("click", function() {
    textAndLinkContainer.style.display = "none";
    comapnyHolder.style.display = "none"
    infoCompanyHolder.style.display = "block";
    comp1Info.style.display = "grid";
    comp2Info.style.display = "none";
    comp3Info.style.display = "none";
})

const input = document.getElementById("shareInput");
const displayShare = document.getElementById("ownshare");
const displayPrice = document.getElementById("ownprice");   
const sellShareBtn = document.getElementById("sellBtn");

displayShare.innerHTML = localStorage.getItem("3rdshareValue");
displayPrice.innerHTML = localStorage.getItem("3rdvalue1");
input.value = localStorage.getItem("3rdinputValue")

input.addEventListener("keyup", function() {
    localStorage.setItem('3rdvalue1', functionForPrice(Number.parseInt(input.value, 10)));
    localStorage.setItem('3rdshareValue', functionForShare(Number.parseInt(input.value, 10)));
    localStorage.setItem('3rdinputValue', input.value);

    displayShare.innerHTML = localStorage.getItem("3rdshareValue");
    displayPrice.innerHTML = localStorage.getItem("3rdvalue1");
    input.value = localStorage.getItem("3rdinputValue")
})

sellShareBtn.addEventListener("click", function() {
    if (input.value > 0) {
    alert(`You have `+ displayPrice.innerHTML+0)
    displayShare.innerHTML = `0`;
    displayPrice.innerHTML = `$0`;
    localStorage.removeItem('3rdshareValue');
    localStorage.removeItem('3rdvalue1');
    localStorage.removeItem('3rdinputValue');
    input.value = ""
    }else{
        alert(`You have $0`)
    }
    
})

function functionForShare(value) {
    if(input.value > 0) {
        return value;
    }else{
        return `0`;
    }
}

function functionForPrice(value) {
    if(input.value > 0) {
        return `$` + value*110;
    }else{
        return `$ 0`;
    }
}

// company 2
const comp2Info = document.getElementById("company2Info")

companyTrade2.addEventListener("click", function() {
    textAndLinkContainer.style.display = "none";
    comapnyHolder.style.display = "none"
    infoCompanyHolder.style.display = "block";
    comp1Info.style.display = "none";
    comp2Info.style.display = "grid";
    comp3Info.style.display = "none";
})

const input2 = document.getElementById("shareInput2");
const displayShare2 = document.getElementById("ownshare2");
const displayPrice2 = document.getElementById("ownprice2");   
const sellShareBtn2 = document.getElementById("sellBtn2");

displayShare2.innerHTML = localStorage.getItem("3rdshareValue2");
displayPrice2.innerHTML = localStorage.getItem("3rdvalue2");
input2.value = localStorage.getItem("3rdinputValue2")

input2.addEventListener("keyup", function() {
    localStorage.setItem('3rdvalue2', functionForPrice2(Number.parseInt(input2.value, 10)));
    localStorage.setItem('3rdshareValue2', functionForShare2(Number.parseInt(input2.value, 10)));
    localStorage.setItem('3rdinputValue2', input2.value);
    
    displayShare2.innerHTML = localStorage.getItem("3rdshareValue2");
    displayPrice2.innerHTML = localStorage.getItem("3rdvalue2");
    input2.value = localStorage.getItem("3rdinputValue2")
})

sellShareBtn2.addEventListener("click", function() {
    if (input2.value > 0) {
    alert(`You have `+ displayPrice2.innerHTML+0)
    displayShare2.innerHTML = `0`;
    displayPrice2.innerHTML = `$0`;
    // localStorage.clear()
    localStorage.removeItem('3rdshareValue2');
    localStorage.removeItem('3rdvalue2');
    localStorage.removeItem('3rdinputValue2');
    input2.value = ""
    }else{
        alert(`You have $0`)
    }
    
})

function functionForShare2(value) {
    if(input2.value > 0) {
        return value;
    }else{
        return `0`;
    }
}

function functionForPrice2(value) {
    if(input2.value > 0) {
        return `$` + value*70;
    }else{
        return `$ 0`;
    }
}

// company 3
const comp3Info = document.getElementById("company3Info");

companyTrade3.addEventListener("click", function() {
    textAndLinkContainer.style.display = "none";
    comapnyHolder.style.display = "none"
    infoCompanyHolder.style.display = "block";
    comp1Info.style.display = "none";
    comp2Info.style.display = "none";
    comp3Info.style.display = "grid";

    // holder.style.display = "block";
    // comp1Info.style.display = "none";
    // comp2Info.style.display = "none";
    // companyHolder.style.display = "none";
    // tradeHeading.style.display = "none";
    // tradeLinks.style.display = "none";
})

const input3 = document.getElementById("shareInput3");
const displayShare3 = document.getElementById("ownshare3");
const displayPrice3 = document.getElementById("ownprice3");   
const sellShareBtn3 = document.getElementById("sellBtn3");

displayShare3.innerHTML = localStorage.getItem("3rdshareValue3");
displayPrice3.innerHTML = localStorage.getItem("3rdvalue3");
input3.value = localStorage.getItem("3rdinputValue3")

input3.addEventListener("keyup", function() {
    localStorage.setItem('3rdvalue3', functionForPrice3(Number.parseInt(input3.value, 10)));
    localStorage.setItem('3rdshareValue3', functionForShare3(Number.parseInt(input3.value, 10)));
    localStorage.setItem('3rdinputValue3', input3.value);
    
    displayShare3.innerHTML = localStorage.getItem("3rdshareValue3");
    displayPrice3.innerHTML = localStorage.getItem("3rdvalue3");
    input3.value = localStorage.getItem("3rdinputValue3")
})

sellShareBtn3.addEventListener("click", function() {
    if (input3.value > 0) {
    alert(`You have `+ displayPrice3.innerHTML+0)
    displayShare3.innerHTML = `0`;
    displayPrice3.innerHTML = `$0`;
    // localStorage.clear()
    localStorage.removeItem('3rdshareValue3');
    localStorage.removeItem('3rdvalue3');
    localStorage.removeItem('3rdinputValue3');
    input3.value = ""
    }else{
        alert(`You have $0`)
    }
    
})

function functionForShare3(value) {
    if(input3.value > 0) {
        return value;
    }else{
        return `0`;
    }
}

function functionForPrice3(value) {
    if(input3.value > 0) {
        return `$` + value*90;
    }else{
        return `$ 0`;
    }
}