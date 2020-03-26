
////////// Variables de départ ///////////

let elementsBasket ;
elementsBasket = document.querySelector('#elementsBasket');

let basketALL;
basketALL = JSON.parse(sessionStorage.getItem("alixOcrP5"));

let count = 0

let sumPrice = 0;
sessionStorage.setItem('sumPrice', JSON.stringify(sumPrice));
    
////////// Boutton backTo au menu ///////////

function backToMenu(HTML_button){
    HTML_button.addEventListener("click", function() {
        window.location = "index.html";
    });
}
backToMenu_Button = document.querySelector("#backToMenu")
backToMenu(backToMenu_Button);

////////// Rajout des produits sur la page basket /////////// 

function createBasketProducts(products_basket){
    for(let i = 0; i < products_basket.length; i++){
        
        const basket_product = document.createElement("div");
        basket_product.className = "basket_product";
        elementsBasket.appendChild(basket_product)
        
            let imgproduct_basket = document.createElement("img");
            imgproduct_basket.src = products_basket[i].imageUrl;
            imgproduct_basket.alt = "Image du product";
            imgproduct_basket.className = "imgProduct_basket";
            basket_product.appendChild(imgproduct_basket)

            let nameproduct_basket = document.createElement("div");
            nameproduct_basket.className = "nameProduct_basket"
            nameproduct_basket.innerHTML = products_basket[i].name;
            basket_product.appendChild(nameproduct_basket)


                let selectLens = document.createElement("div");
                selectLens.className = "persoLens";
                basket_product.appendChild(selectLens);
                if(!products_basket[i].selectedLens){
                    selectLens.innerHTML = products_basket[i].lenses[0]
                }else{
                    selectLens.innerHTML = products_basket[i].selectedLens;
                }
                    
                    
            let priceproduct_basket = document.createElement("div");
            priceproduct_basket.className = "priceProduct_basket"
            priceproduct_basket.innerHTML = products_basket[i].price + " €";
            basket_product.appendChild(priceproduct_basket)

            sumPrice += products_basket[i].price;
            count += 1;
            
            sessionStorage.setItem('sumPrice', JSON.stringify(sumPrice));

            ////////// Enlever un product du basket /////////// 

            let removeProduct = document.createElement("img");
            removeProduct.src = "images/croix.png"
            removeProduct.className = "removeProduct_button";
            basket_product.appendChild(removeProduct);
            removeProduct.addEventListener('click', function () {

                sumPrice = 0;
                count = 0;
                sessionStorage.setItem('sumPrice', JSON.stringify(sumPrice));
                
                products_basket.splice(i, 1);
                sessionStorage.setItem('alixOcrP5', JSON.stringify(products_basket));
                
                for(let j = 0; j < products_basket.length + 1; j++){
                let basket_product_select = document.querySelector(".basket_product")   
                elementsBasket.removeChild(basket_product_select) 
                };
                createBasketProducts(basketALL);

                elementsBasket.removeChild(document.querySelector(".totalPrice"));
                totalPriceFunction();
                
                basketCount();
            });
    }
}
createBasketProducts(basketALL);

     

////////// Total du prix des products du basket /////////// 


function totalPriceFunction(){
        let totalPrice = document.createElement("div");
        totalPrice.className = "totalPrice";
        totalPrice.innerHTML = "Total : " + JSON.parse(sessionStorage.getItem("sumPrice")) + " €";
        elementsBasket.appendChild(totalPrice);
}

totalPriceFunction();

////////// compteur du bouton basket /////////// 

const basket_countElt = document.querySelector("#basket-count");
const basket_button = document.querySelector("#basket_button");
let basket = JSON.parse(sessionStorage.getItem("alixOcrP5"));


function basketCount() {
    basket_countElt.innerHTML = count;
} 
basketCount(basket);


////////// finaliser commande en envoyant vers la page de formulaire /////////// 
let idCommand = 0;
function idGenerator(idLength){
    const chars = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789";
    let output = "a"
    for(let i=0; i <idLength; i++){
        output += chars[Math.floor(Math.random() * chars.length)]
    }
    return output
}


const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let idCommand = idGenerator(10); 
    sessionStorage.setItem("idCommand", JSON.stringify(idCommand));

    let nameFormulaire = document.querySelector("#name").value.trim();
    let surnameFormulaire = document.querySelector("#surname").value.trim();
    let emailFormulaire = document.querySelector("#mail").value.trim();
    let adressFormulaire = document.querySelector("#adress").value.trim();
    let townFormulaire = document.querySelector("#town").value.trim();

    const order = {
        nameFormulaire : nameFormulaire,
        surnameFormulaire : surnameFormulaire,
        emailFormulaire : emailFormulaire,
        adressFormulaire : adressFormulaire,
        townFormulaire : townFormulaire,
        idCommand : idCommand,
        sumPrice : sumPrice,
        products: basket
    }

    

  
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(order));
   
    request.addEventListener("load", function(f){
        console.log("load ok")
    window.location = "confirmation.html";
    })
    request.addEventListener("error", function(error){
    console.log(error)
    })
    
    
    
    
});




