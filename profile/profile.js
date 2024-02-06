const profileInputData = document.getElementById("profileInput");
const profileKeyInput = document.getElementById("profileKey");
const inputsHolder = document.getElementById("inputSection");
const title = document.getElementById("textTitle");
const buttonToStore = document.getElementById("storeBtn")
const holderOfProfileKeyAndProfileMessage = document.getElementById("profileProcedures");
const messageForProfileKey = document.getElementById("accessKeyMessage");
const messageForProfile = document.getElementById("viewProfileMessage");

buttonToStore.style.display = "none";
holderOfProfileKeyAndProfileMessage.style.display = "none"


function eventAfterKeyUp() {
    if(profileInputData.value.length > 0 && profileKeyInput.value.length > 0) {
            buttonToStore.style.display = "block";
            buttonToStore.addEventListener("click", accessProfileThroughKey);  
    }else{
        console.log("wrong value")
    }

}

function accessProfileThroughKey() {
    inputsHolder.style.display = "none";
    title.style.display = "none";

    holderOfProfileKeyAndProfileMessage.style.display = "block";
    messageForProfile.style.display = "none"

    const inputForProfileKey = document.getElementById('profileKey').value;
    const profile = document.querySelector("#profileInput").value;

    const profileDetail1 = [
        {
            profile: profile
        }
    ]


    let string = "";
    profileDetail1.map((x) => {
    string += ` ${x.profile} `;
    })

    window.localStorage.setItem(inputForProfileKey, string);    
}

function viewProfile() {
    
    messageForProfileKey.style.display = "none";
    messageForProfile.style.display = "block";

    const key = document.getElementById("retrieveInput").value; //gets key from user
    const records = window.localStorage.getItem(key); //searches for the key in localStorage
    const paragraph = document.createElement("p");
    paragraph.classList.add("pProfile")
    const infor = document.createTextNode(records);
    paragraph.appendChild(infor)
    element = document.getElementById("profileValrableHolder");
    element.appendChild(paragraph)
}

profileKeyInput.addEventListener("keyup", eventAfterKeyUp);