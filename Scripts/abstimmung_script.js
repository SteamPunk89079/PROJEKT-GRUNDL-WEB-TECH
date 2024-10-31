
const home_button = document.getElementById("home_button")
const karte_button = document.getElementById("karte_button");
const musik_angebot_button = document.getElementById("musik_angebot_button");
const abstimmung_button = document.getElementById("abstimmung_button");

const mintons_bttn = document.getElementById("new_mintons_button");
const chrome_bttn = document.getElementById("chrome_button");
const simpli_bttn = document.getElementById("simplicissimus_button");
const cubi_bttn = document.getElementById("kubiculum_button");
const ziegels_bttn = document.getElementById("ziegels_button");
const irish_pub_bttn = document.getElementById("irish_pub_button");



home_button.addEventListener('click', function(){

    window.location.href = "../index.html";
})

karte_button.addEventListener('click', function() {
    window.location.href = "../index.html";
});

musik_angebot_button.addEventListener('click', function() {

    window.location.href = "../Pages/musik_angebot_page.html";
});

abstimmung_button.addEventListener('click', function() {

});


mintons_bttn.addEventListener('click', function (){
    window.location.href = "../Location_pages/new_mintons_page.html"
});
chrome_bttn.addEventListener('click', function(){
    window.location.href = "../Location_pages/chrome_page.html";
});

simpli_bttn.addEventListener('click', function (){
    window.location.href = "../Location_pages/simplicissimus_page.html"
});
cubi_bttn.addEventListener('click', function(){
    window.location.href = "../Location_pages/kubiculum_page.html";
});

ziegels_bttn.addEventListener('click', function (){
    window.location.href = "../Location_pages/ziegels_page.html"
});
irish_pub_bttn.addEventListener('click', function(){
    window.location.href = "../Location_pages/irish_pub_page.html";
});
