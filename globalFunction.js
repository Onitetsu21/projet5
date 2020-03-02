                    //////// Fonctions globales du site /////////

/////////////Fonction compteur de panier//////////////

let basketCount = function () {
    let products = JSON.parse(this);
    let count;
    if(!products) {
        count = 0;
    }else {
        count = products.length;
    }
    basket_CountElt.innerHTML = count;
    basket_button.addEventListener('click', function (){
    
        window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/basket.html";
    });

}


// const basket_countElt = document.querySelector("#basket-count")
// const basket_button = document.querySelector("#basket_button")


// let basketCount = sessionStorage.getItem("alixOcrP5");
// if(!basketCount){
//     basketCount = 0;

// }else{
//     basketCount = JSON.parse(basketCount).length;
// }
// basket_countElt.innerHTML = basketCount;

/////////////Fonction retour aux produits/////////////

