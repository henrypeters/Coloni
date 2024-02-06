const messageForProfileKey = document.getElementById("accessKeyMessage");
const messageForProfile = document.getElementById("viewProfileMessage");

messageForProfile.style.display = "none";

function viewProfile(){
    messageForProfileKey.style.display = "none";
    messageForProfile.style.display = "block";


    const key = document.getElementById("retrieveInput").value; //gets key from user
    const records = window.localStorage.getItem(key); //searches for the key in localStorage
    const paragraph = document.createElement("p");
    const infor = document.createTextNode(records);
    // paragraph.appendChild(infor);
    paragraph.appendChild(infor)
    element = document.getElementById("profileValrableHolder");
    // element.appendChild(paragraph)
    element.appendChild(paragraph)
}