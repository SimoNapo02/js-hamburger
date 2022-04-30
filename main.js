// faccio diventare variabile gli elementi
const button = document.getElementById("open-menu");
const BtnClose = document.getElementById("close-menu")

// aggiungo al menu l'azione click di apertura e chiusura
BtnOpen.addEventListener( 'click',
    function(){
        document.getElementById("hamburger-menu").classList.add("active")
    }
);
BtnClose.addEventListener( 'click',
    function(){
        document.getElementById("hamburger-menu").classList.remove("active")
    }
);