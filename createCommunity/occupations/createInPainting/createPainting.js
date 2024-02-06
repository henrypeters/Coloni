const peopleContainer = document.getElementById("peopleHolder");
const communityContainer = document.getElementById("communities");

const linkOfPeople = document.getElementById("peopleLink");
const linkOfCommunity = document.getElementById("communityLink");

communityContainer.style.display = "none";

linkOfPeople.addEventListener("click", function(){
    communityContainer.style.display = "none";
    peopleContainer.style.display = "block"

    linkOfPeople.style.color = "#075ad8";
    linkOfPeople.style.padding = "10px";
    linkOfPeople.style.borderBottom = "2px solid #075ad8";

    linkOfCommunity.style.color = "black";
    linkOfCommunity.style.padding = "10px";
    linkOfCommunity.style.borderBottom = "none"
})

linkOfCommunity.addEventListener("click", function() {
    communityContainer.style.display = "block";
    peopleContainer.style.display = "none";

    linkOfCommunity.style.color = "#075ad8";
    linkOfCommunity.style.padding = "10px";
    linkOfCommunity.style.borderBottom = "2px solid #075ad8";

    linkOfPeople.style.color = "black";
    linkOfPeople.style.padding = "10px";
    linkOfPeople.style.border = "none"  
})

// community name
const nameOfCommunity = document.getElementById("communityName");

nameOfCommunity.innerHTML = localStorage.getItem("comnamePaint");

if (nameOfCommunity.innerHTML === "") {
    nameOfCommunity.innerHTML = `New Community`;
}else{
    console.log("filled item");
}