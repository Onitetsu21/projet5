let backToMenu = function(e){
    e.addEventListener("click", function() {
        window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/index.html";
    });
}
backToMenu_Button = document.querySelector("#backToMenu")
backToMenu(backToMenu_Button);


const productSelected = JSON.parse(sessionStorage.getItem("detailProduct"));

document.querySelector("#imgProduct").src = productSelected.imageUrl;
document.querySelector("#resumeProduct").innerHTML = productSelected.description;
document.querySelector("#titleProduct").innerHTML = productSelected.name;
document.querySelector("#priceProduct").innerHTML = productSelected.price + " €";



let personnalisationLens = document.querySelector('.persoLens');


        selectedLens = productSelected.lenses[0]
        personnalisationLens.addEventListener("change", function (){
            productSelected.selectedLens = personnalisationLens.value;
        })
       
        for(let i = 0; i < productSelected.lenses.length; i++){
            let optionLens = document.createElement("option")
            optionLens.className = "optionLens"
            optionLens.innerHTML += productSelected.lenses[i];
            personnalisationLens.appendChild(optionLens);
        };
 
        
       

let commandButton = document.querySelector(".commander_button")
let basket_countElt = document.querySelector("#basket-count");

let basket_button = document.querySelector("#basket_button");
let basket = sessionStorage.getItem("alixOcrP5");



let basketCount = function (e) {
    let products = e;
    let count;
    if(!products) {
        count = 0;
    }else {
        count = JSON.parse(products).length;
    }

    basket_countElt.innerHTML = count;
} 
basketCount(basket);


commandButton.addEventListener('click', function () {
    let basketStored = sessionStorage.getItem("alixOcrP5");
    if(!basketStored){
        basketStored = [];
    }else{
        basketCount(basketStored);
        basketStored = JSON.parse(basketStored);       
    }  
    basketStored.push(productSelected);
    
    sessionStorage.setItem('alixOcrP5', JSON.stringify(basketStored));
    
});


basket_button.addEventListener('click', function (){
    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/basket.html";
});

////////// compteur du bouton basket /////////// 

    
    // let basket_countElt = document.querySelector("#basket-count");
    // let basket_button = document.querySelector("#basket_button");
    // let basketCount = sessionStorage.getItem("alixOcrP5");
    // if(!basketCount){
    //     basketCount = 0;

    // }else{
        
    //     basket_countElt.innerHTML = JSON.parse(basketCount).length;
    //     basketCount = JSON.parse(basketCount);
    // }
    

    basket_button.addEventListener('click', function (){
        window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/basket.html";
        })
        