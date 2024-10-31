
const home_button = document.getElementById("home_button")
const karte_button = document.getElementById("karte_button");
const musik_angebot_button = document.getElementById("musik_angebot_button");
const abstimmung_button = document.getElementById("abstimmung_button");

home_button.addEventListener('click', function(){

    window.location.href = "../index.html";
})

karte_button.addEventListener('click', function() {

    window.location.href = "../Pages/karte_page.html";
});

musik_angebot_button.addEventListener('click', function() {

});

abstimmung_button.addEventListener('click', function() {

    window.location.href = "../Pages/abstimmung_page.html";
});