const messageForProfileKey = document.getElementById("accessKeyMessage");
const messageForProfile = document.getElementById("viewProfileMessage");
const notify = document.getElementById("intro");

const sendBtn = document.getElementById("sendProfile");

messageForProfile.style.display = "none";

function viewProfile(){
    messageForProfileKey.style.display = "none";
    messageForProfile.style.display = "block";
    notify.style.display = "none"

    const key = document.getElementById("retrieveInput").value; //gets key from user
    const records = window.localStorage.getItem(key); //searches for the key in localStorage
    const paragraph = document.createElement("p");
    const infor = document.createTextNode(records);
    paragraph.appendChild(infor)
    element = document.getElementById("profileValrableHolder");
    element.appendChild(paragraph)

    sendBtn.addEventListener("click", function() {
        const notification = this.parentNode.parentNode;
        const parent = notification.parentNode;
    
        parent.removeChild(notification);

        // let accept = `Welcome To Sanchez community`;

        // const designAccept = document.getElementById("acceptance");

        // designAccept.innerHTML = `<p class="accept"> ${accept} </p>`

        alert("Welcome To Layses community")
    })
}