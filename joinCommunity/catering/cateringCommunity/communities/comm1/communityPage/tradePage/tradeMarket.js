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

const companyHolder = document.getElementById("tradeCompanies");
const tradeHeading = document.getElementById("tradeHeading");
const tradeLinks = document.getElementById("tradeLinkHolders");

const company1 = document.getElementById("tradeComp1");
const company2 = document.getElementById("tradeComp2");
const company3 = document.getElementById("tradeComp3");

const holder = document.getElementById("holderOfComapnyInfo");
holder.style.display = "none";

// comapny 1
const comp1Info = document.getElementById("company1Info")

company1.addEventListener("click", function() {
    holder.style.display = "block";
    comp1Info.style.display = "grid";
    comp2Info.style.display = "none";
    comp3Info.style.display = "none";
    companyHolder.style.display = "none";
    tradeHeading.style.display = "none";
    tradeLinks.style.display = "none";
})

const input = document.getElementById("shareInput");
const displayShare = document.getElementById("ownshare");
const displayPrice = document.getElementById("ownprice");   
const sellShareBtn = document.getElementById("sellBtn");

displayShare.innerHTML = localStorage.getItem("food1stshareValue");
displayPrice.innerHTML = localStorage.getItem("food1stvalue1");
input.value = localStorage.getItem("food1stinputValue")

input.addEventListener("keyup", function() {
    localStorage.setItem('food1stvalue1', functionForPrice(Number.parseInt(input.value, 10)));
    localStorage.setItem('food1stshareValue', functionForShare(Number.parseInt(input.value, 10)));
    localStorage.setItem('food1stinputValue', input.value);

    displayShare.innerHTML = localStorage.getItem("food1stshareValue");
    displayPrice.innerHTML = localStorage.getItem("food1stvalue1");
    input.value = localStorage.getItem("food1stinputValue")
})

sellShareBtn.addEventListener("click", function() {
    if (input.value > 0) {
    alert(`You have `+ displayPrice.innerHTML+0)
    displayShare.innerHTML = `0`;
    displayPrice.innerHTML = `$0`;
    localStorage.removeItem('food1stshareValue');
    localStorage.removeItem('food1stvalue1');
    localStorage.removeItem('food1stinputValue');
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
        return `$` + value*150;
    }else{
        return `$ 0`;
    }
}


// company 2
const comp2Info = document.getElementById("company2Info")

company2.addEventListener("click", function() {
    holder.style.display = "block";
    comp1Info.style.display = "none";
    comp2Info.style.display = "grid";
    comp3Info.style.display = "none";
    companyHolder.style.display = "none";
    tradeHeading.style.display = "none";
    tradeLinks.style.display = "none";
})

const input2 = document.getElementById("shareInput2");
const displayShare2 = document.getElementById("ownshare2");
const displayPrice2 = document.getElementById("ownprice2");   
const sellShareBtn2 = document.getElementById("sellBtn2");

displayShare2.innerHTML = localStorage.getItem("food1stshareValue2");
displayPrice2.innerHTML = localStorage.getItem("food1stvalue2");
input2.value = localStorage.getItem("food1stinputValue2")

input2.addEventListener("keyup", function() {
    localStorage.setItem('food1stvalue2', functionForPrice2(Number.parseInt(input2.value, 10)));
    localStorage.setItem('food1stshareValue2', functionForShare2(Number.parseInt(input2.value, 10)));
    localStorage.setItem('food1stinputValue2', input2.value);
    
    displayShare2.innerHTML = localStorage.getItem("food1stshareValue2");
    displayPrice2.innerHTML = localStorage.getItem("food1stvalue2");
    input2.value = localStorage.getItem("food1stinputValue2")
})

sellShareBtn2.addEventListener("click", function() {
    if (input2.value > 0) {
    alert(`You have `+ displayPrice2.innerHTML+0)
    displayShare2.innerHTML = `0`;
    displayPrice2.innerHTML = `$0`;
    // localStorage.clear()
    localStorage.removeItem('food1stshareValue2');
    localStorage.removeItem('food1stvalue2');
    localStorage.removeItem('food1stinputValue2');
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
        return `$` + value*90;
    }else{
        return `$ 0`;
    }
}

    // company 3
    const comp3Info = document.getElementById("company3Info");

    company3.addEventListener("click", function() {
        holder.style.display = "block";
        comp1Info.style.display = "none";
        comp2Info.style.display = "none";
        comp3Info.style.display = "grid";
        companyHolder.style.display = "none";
        tradeHeading.style.display = "none";
        tradeLinks.style.display = "none";
    })

    const input3 = document.getElementById("shareInput3");
    const displayShare3 = document.getElementById("ownshare3");
    const displayPrice3 = document.getElementById("ownprice3");   
    const sellShareBtn3 = document.getElementById("sellBtn3");

    displayShare3.innerHTML = localStorage.getItem("food1stshareValue3");
    displayPrice3.innerHTML = localStorage.getItem("food1stvalue3");
    input3.value = localStorage.getItem("food1stinputValue3")

    input3.addEventListener("keyup", function() {
        localStorage.setItem('food1stvalue3', functionForPrice3(Number.parseInt(input3.value, 10)));
        localStorage.setItem('food1stshareValue3', functionForShare3(Number.parseInt(input3.value, 10)));
        localStorage.setItem('food1stinputValue3', input3.value);
        
        displayShare3.innerHTML = localStorage.getItem("food1stshareValue3");
        displayPrice3.innerHTML = localStorage.getItem("food1stvalue3");
        input3.value = localStorage.getItem("food1stinputValue3")
    })

    sellShareBtn3.addEventListener("click", function() {
        if (input3.value > 0) {
        alert(`You have `+ displayPrice3.innerHTML+0)
        displayShare3.innerHTML = `0`;
        displayPrice3.innerHTML = `$0`;
        // localStorage.clear()
        localStorage.removeItem('food1stshareValue3');
        localStorage.removeItem('food1stvalue3');
        localStorage.removeItem('food1stinputValue3');
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