////////// Boutton backTo au menu ///////////

function backToMenu(HTML_button){
    HTML_button.addEventListener("click", function() {
        window.location = "index.html";
    });
}
backToMenu_Button = document.querySelector("#backToMenu")
backToMenu(backToMenu_Button);

////////// création du produit ///////////

const productSelected = JSON.parse(localStorage.getItem("detailProduct"));

function createInfoProduct(product){
    
document.querySelector("#imgProduct").src = product.imageUrl;
document.querySelector("#resumeProduct").innerHTML = product.description;
document.querySelector("#titleProduct").innerHTML = product.name;
document.querySelector("#priceProduct").innerHTML = product.price + " €";

let personnalisationLens = document.querySelector('.persoLens');

        selectedLens = product.lenses[0]
        personnalisationLens.addEventListener("change", function (){
            product.selectedLens = personnalisationLens.value;
        })
       
        for(let i = 0; i < product.lenses.length; i++){
            let optionLens = document.createElement("option")
            optionLens.className = "optionLens"
            optionLens.innerHTML += product.lenses[i];
            personnalisationLens.appendChild(optionLens);
        };
}
createInfoProduct(productSelected);

let commandButton = document.querySelector(".commander_button")

////////// compteur panier ///////////

let count = 0
const basket_countElt = document.querySelector("#basket-count");
const basket_button = document.querySelector("#basket_button");

function basketCount() {
    let basket = JSON.parse(localStorage.getItem("alixOcrP5"));
    basket_countElt.innerHTML = basket.length;
} 

if(!JSON.parse(localStorage.getItem("alixOcrP5"))){

}else{
    basketCount();
}

basket_button.addEventListener('click', function (){
    window.location = "basket.html";
});

////////// Boutton commander ///////////

commandButton.addEventListener('click', function () {
    let basketStored = localStorage.getItem("alixOcrP5");
    if(!basketStored){
        basketStored = [];
    }else{
        basketCount(basketStored);
        basketStored = JSON.parse(basketStored);       
    }  
    basketStored.push(productSelected);
    
    localStorage.setItem('alixOcrP5', JSON.stringify(basketStored));
    basketCount();
});





        