const image = document.getElementById("zoomableImage");

image.addEventListener("mousemove", function(e) {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left; // Get cursor X position relative to image
    const y = e.clientY - rect.top;  // Get cursor Y position relative to image

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Set the transform-origin based on cursor position
    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
});




const cards = document.querySelectorAll(".location_card");
    cards.forEach(card => {
        const video = card.querySelector("video");
        card.addEventListener('mouseenter', function (){
            video.play();
            console.log(card.getElementById(this)+" mouse entered");
        });

        card.addEventListener("mouseleave", function() {
            video.pause();
            console.log(card.getElementById(this)+" mouse exited");
        });
    });


const new_mintons_button = document.getElementById("new_mintons_button");    
const chrome_button = document.getElementById("chrome_button");
const simplicissimus_button = document.getElementById("simplicissimus_button");
const kubiculum_button = document.getElementById("kubiculum_button");
const irish_pub_button = document.getElementById("irish_pub_button");
const ziegels_button = document.getElementById("ziegels_button");

new_mintons_button.addEventListener('click', function(){
    window.location.href = "../Location_pages/new_mintons_page";
});
chrome_button.addEventListener('click', function(){
    window.location.href = "../Location_pages/chrome_page";
});
simplicissimus_button.addEventListener('click', function(){
    window.location.href = "../Location_pages/simplicissimus_page";
});
kubiculum_button.addEventListener('click', function(){
    window.location.href = "../Location_pages/kubiculum_page";
});
irish_pub_button.addEventListener('click', function(){
    window.location.href = "../Location_pages/irish_pub_page";
});
ziegels_button.addEventListener('click', function(){
    window.location.href = "../Location_pages/ziegels_page";
});