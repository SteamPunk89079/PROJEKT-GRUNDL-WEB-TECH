




const karte_button = document.getElementById("karte_button");
const musik_angebot_button = document.getElementById("musik_angebot_button");
const abstimmung_button = document.getElementById("abstimmung_button");


karte_button.addEventListener('click', function() {

    window.location.href = "Pages/karte_page.html";
});

musik_angebot_button.addEventListener('click', function() {

    window.location.href = "Pages/musik_angebot_page.html";
});

abstimmung_button.addEventListener('click', function() {

    window.location.href = "Pages/abstimmung_page.html";
});
