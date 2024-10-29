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