////////// Boutton backTo au menu ///////////
backToMenu.addEventListener("click", function() {
    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/index.html";
});

////////// Rajout des products sur la page basket /////////// 
    let elementsBasket ;
    elementsBasket = document.querySelector('#elementsBasket');

    let basketALL;
     basketALL = JSON.parse(sessionStorage.getItem("alixOcrP5"));
     let sumPrice = 0;
     for(let i = 0; i < basketALL.length; i++){
        
         const basket_product = document.createElement("div");
         basket_product.className = "basket_product";
         elementsBasket.appendChild(basket_product)
        

            let imgproduct_basket = document.createElement("img");
            imgproduct_basket.src = basketALL[i].imageUrl;
            imgproduct_basket.alt = "Image du product";
            imgproduct_basket.className = "imgProduct_basket";
            basket_product.appendChild(imgproduct_basket)

            let nameproduct_basket = document.createElement("div");
            nameproduct_basket.className = "nameProduct_basket"
            nameproduct_basket.innerHTML = basketALL[i].name;
            basket_product.appendChild(nameproduct_basket)


                let selectLens = document.createElement("div");
                selectLens.className = "persoLens";
                basket_product.appendChild(selectLens);
                if(!basketALL[i].selectedLens){
                    selectLens.innerHTML = basketALL[i].lenses[0]
                }else{
                    selectLens.innerHTML = basketALL[i].selectedLens;
                }
                    
                    
            let priceproduct_basket = document.createElement("div");
            priceproduct_basket.className = "priceProduct_basket"
            priceproduct_basket.innerHTML = basketALL[i].price + " €";
            basket_product.appendChild(priceproduct_basket)
            
            sumPrice += basketALL[i].price;
            sessionStorage.setItem('sumPrice', JSON.stringify(sumPrice));
            
            ////////// Enlever un product du basket /////////// 
            let removeProduct = document.createElement("img");
            removeProduct.src = "C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/images/croix.png"
            removeProduct.className = "removeProduct_button";
            basket_product.appendChild(removeProduct);
            removeProduct.addEventListener('click', function () {
                sumPrice -= basketALL[i].price;
                sessionStorage.setItem('sumPrice', JSON.stringify(sumPrice));
                totalPrice.innerHTML = "Total : " + sumPrice + " €";
                sessionStorage.setItem("totalPrice", JSON.stringify(totalPrice.innerHTML));
                basketALL.splice(i, 1);
                
                sessionStorage.setItem('alixOcrP5', JSON.stringify(basketALL));
                elementsBasket.removeChild(basket_product);
                basket_countElt.innerHTML = basketALL.length;
                
            });

     };

////////// Total du prix des products du basket /////////// 
let totalPrice = document.createElement("div");
totalPrice.className = "totalPrice";
totalPrice.innerHTML = "Total : " + sumPrice + " €";
elementsBasket.appendChild(totalPrice);

sessionStorage.setItem("totalPrice", JSON.stringify(totalPrice.innerHTML));

////////// compteur du bouton basket /////////// 
const basket_countElt = document.querySelector("#basket-count");
const basket_button = document.querySelector("#basket_button");
let basketCount = sessionStorage.getItem("alixOcrP5");
if(!basketCount){
    basketCount = 0;

}else{
    basketCount = JSON.parse(basketCount).length;
}
basket_countElt.innerHTML = basketCount;



////////// finaliser commande en envoyant vers la page de formulaire /////////// 
let idCommand = 0;

let idGenerator = function (){
    let id = Math.floor(Math.random() * 1000000)
    console.log(id);
    return id
    
}

let formContent = [];
let finishCommand = document.querySelector(".finish_button");

finishCommand.addEventListener("click", function () {

    let idCommand = idGenerator(); 
    sessionStorage.setItem("idCommand", JSON.stringify(idCommand));

    let nameFormulaire = document.querySelector("#name").value;
    let surnameFormulaire = document.querySelector("#surname").value;
    let emailFormulaire = document.querySelector("#mail").value;
    let adressFormulaire = document.querySelector("#adress").value;
    let townFormulaire = document.querySelector("#town").value;

    const order = {
        nameFormulaire : nameFormulaire,
        surnameFormulaire : surnameFormulaire,
        emailFormulaire : emailFormulaire,
        adressFormulaire : adressFormulaire,
        townFormulaire : townFormulaire,
        idCommand : idCommand,
        sumPrice : sumPrice
    }

    formContent.push(nameFormulaire + " " + surnameFormulaire + " " + emailFormulaire + " "+ adressFormulaire + " "+ townFormulaire + " ");
    sessionStorage.setItem("formContent", JSON.stringify(formContent));

    
    var request = new XMLHttpRequest();
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        request.open("POST", "http://localhost:3000/api/cameras/order");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(order));
        
    }
    
    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/confirmation.html";
    console.log(order)
});




