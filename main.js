// faccio diventare variabile gli elementi
const hamburgerMenu = document.getElementsByClassName ("hamburger-menu") [0];
const openMenu = document.getElementById("open-menu");

// aggiungo al menu l'azione click di apertura e chiusura
openMenu.addEventListener("click", function()
{
   hamburgerMenu.style = "display: block";
});
const closenMenu = document.getElementById("close-menu");
closenMenu.addEventListener("click", function()
{
   hamburgerMenu.style = "display: none";
});