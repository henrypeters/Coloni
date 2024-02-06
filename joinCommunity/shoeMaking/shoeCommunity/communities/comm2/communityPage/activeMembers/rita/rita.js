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

const project = document.getElementById("project-Links");
const post = document.getElementById("post-Links")
const video = document.getElementById("videos-Links");
const profile = document.getElementById("profile-Links");

const messagesHolder = document.getElementById("holder");
const projectContainer = document.getElementById("project")
const postContainer = document.getElementById("postsContent");
const videoContainer = document.getElementById("videoContent");
const profileContainer = document.getElementById("profileContent");
postContainer.style.display = "none";
videoContainer.style.display = "none";
profileContainer.style.display = "none";

project.addEventListener("click", function() {
    // 
    project.style.color = "#075ad8";
    project.style.borderBottom = "1px solid #075ad8"; 
    // 
    post.style.color = "#333";
    video.style.color = "#333";
    profile.style.color = "#333"
    post.style.borderBottom = "none";
    video.style.borderBottom = "none";
    profile.style.borderBottom = "none";

    postContainer.style.display = "none";
    videoContainer.style.display = "none";
    profileContainer.style.display = "none";
    projectContainer.style.display = "block";
})

post.addEventListener("click", function() {
    // 
    post.style.color = "#075ad8";
    post.style.paddingBottom = "10px"
    post.style.borderBottom = "1px solid #075ad8";
    // 
    project.style.color = "#333"
    video.style.color = "#333"
    profile.style.color = "#333"
    project.style.border = "none";
    video.style.border = "none";
    profile.style.border = "none";

    projectContainer.style.display = "none";
    videoContainer.style.display = "none";
    profileContainer.style.display = "none";
    postContainer.style.display = "block";
})

video.addEventListener("click", function() {
    // 
    video.style.color = "#075ad8";
    video.style.paddingBottom = "10px";
    video.style.borderBottom = "1px solid #075ad8";
    // 
    project.style.color = "#333";
    post.style.color = "#333";
    profile.style.color = "#333";
    project.style.border = "none";
    post.style.border = "none";
    profile.style.border = "none";

    projectContainer.style.display = "none";
    postContainer.style.display = "none";
    profileContainer.style.display = "none";
    videoContainer.style.display = "block";
})

profile.addEventListener("click", function() {
    // 
    profile.style.color = "#075ad8";
    profile.style.paddingBottom = "10px";
    profile.style.borderBottom = "1px solid #075ad8";
    // 
    project.style.color = "#333";
    post.style.color = "#333";
    video.style.color = "#333";
    project.style.border = "none";
    post.style.border = "none";
    video.style.border = "none";

    projectContainer.style.display = "none";
    postContainer.style.display = "none";
    videoContainer.style.display = "none";
    profileContainer.style.display = "block";
})

const likeImg  = document.getElementById("like");
const viewComments = document.getElementById("comment");
const addComment = document.getElementById("addComments");
const infoCommentsHold = document.getElementById("postInfoAndAction");
const addSection = document.getElementById("addingComment");
addSection.style.display = "none";

likeImg.addEventListener("click", function() {
    likeImg.innerHTML = `<a  href="rita.html"> <img src="../../../../../../../../images/icons/heart - Copy.png"> </a>`;
})

function forView() {
    const sectionForComment = document.getElementById("commentSection");
    sectionForComment.innerHTML = `<h1>Comments</h1>

                                    <div class="cardHolder">

                                        <div class="card">
                                            <p>
                                            Keep on making good progress.💖
                                            <div class="writer">anonymous</div>
                                            </p>
                                        </div>

                                        <div class="card">
                                            <p>
                                            This is really creative.💯
                                            </p>
                                            <div class="writer">anonymous</div>
                                        </div>
                                        
                                        </div>`;
}

viewComments.addEventListener("click", forView)

addComment.addEventListener("click", function() {
    infoCommentsHold.style.display = "none"
    addSection.style.display = "block";

    const commentInput = document.getElementById("inputData");
    const pTagCard = document.getElementById("pTag");
    const pCovering = document.getElementById("display");

    commentInput.style.display = "block";
    pTagCard.innerHTML = localStorage.getItem("value")

    commentInput.addEventListener("keyup", function() {
        localStorage.setItem('value', commentInput.value);
        pTagCard.innerHTML = localStorage.getItem("value");
    })
    
    viewComments.addEventListener("click", function() {
        infoCommentsHold.style.display = "block";
        commentInput.style.display = "none";
        pCovering.style.marginTop = "-15px"
    })
})
