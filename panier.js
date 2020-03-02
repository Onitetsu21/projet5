////////// Boutton retour au menu ///////////
retourMenu.addEventListener("click", function() {
    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/index.html";
});

////////// Rajout des produits sur la page panier /////////// 
    let elementsPanier ;
    elementsPanier = document.querySelector('#elementPanier');

    let panierALL;
     panierALL = JSON.parse(sessionStorage.getItem("alixOcrP5"));
     let sumPrice = 0;
     for(let i = 0; i < panierALL.length; i++){
        
         const panier_produit = document.createElement("div");
         panier_produit.className = "panier_produit";
         elementsPanier.appendChild(panier_produit)
        

            let imgProduit_panier = document.createElement("img");
            imgProduit_panier.src = panierALL[i].imageUrl;
            imgProduit_panier.alt = "Image du produit";
            imgProduit_panier.className = "imgProduit_panier";
            panier_produit.appendChild(imgProduit_panier)

            let nameProduit_panier = document.createElement("div");
            nameProduit_panier.className = "nameProduit_panier"
            nameProduit_panier.innerHTML = panierALL[i].name;
            panier_produit.appendChild(nameProduit_panier)


                let selectLens = document.createElement("div");
                selectLens.className = "persoLens";
                panier_produit.appendChild(selectLens);
                if(!panierALL[i].selectedLens){
                    selectLens.innerHTML = panierALL[i].lenses[0]
                }else{
                    selectLens.innerHTML = panierALL[i].selectedLens;
                }
                    
                    
            let priceProduit_panier = document.createElement("div");
            priceProduit_panier.className = "priceProduit_panier"
            priceProduit_panier.innerHTML = panierALL[i].price + " €";
            panier_produit.appendChild(priceProduit_panier)
            
            sumPrice += panierALL[i].price;
            sessionStorage.setItem('sumPrice', JSON.stringify(sumPrice));
            
            ////////// Enlever un produit du panier /////////// 
            let removeProduit = document.createElement("img");
            removeProduit.src = "C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/images/croix.png"
            removeProduit.className = "removeProduit_button";
            panier_produit.appendChild(removeProduit);
            removeProduit.addEventListener('click', function () {
                sumPrice -= panierALL[i].price;
                sessionStorage.setItem('sumPrice', JSON.stringify(sumPrice));
                totalPrice.innerHTML = "Total : " + sumPrice + " €";
                sessionStorage.setItem("totalPrice", JSON.stringify(totalPrice.innerHTML));
                panierALL.splice(i, 1);
                
                sessionStorage.setItem('alixOcrP5', JSON.stringify(panierALL));
                elementsPanier.removeChild(panier_produit);
                panier_countElt.innerHTML = panierALL.length;
                
            });

     };

////////// Total du prix des produits du panier /////////// 
let totalPrice = document.createElement("div");
totalPrice.className = "totalPrice";
totalPrice.innerHTML = "Total : " + sumPrice + " €";
elementsPanier.appendChild(totalPrice);

sessionStorage.setItem("totalPrice", JSON.stringify(totalPrice.innerHTML));

////////// compteur du bouton panier /////////// 
const panier_countElt = document.querySelector("#panier-count");
const panier_button = document.querySelector("#panier_button");
let panierCount = sessionStorage.getItem("alixOcrP5");
if(!panierCount){
    panierCount = 0;

}else{
    panierCount = JSON.parse(panierCount).length;
}
panier_countElt.innerHTML = panierCount;



////////// finaliser commande en envoyant vers la page de formulaire /////////// 
let idCommand = 0;

let idGenerator = function (){
    let id = Math.floor(Math.random() * 1000000)
    console.log(id);
    return id
    
}

let formContent = [];
let finishCommand = document.querySelector(".finaliser_button");

finishCommand.addEventListener("click", function () {

    let idCommand = idGenerator(); 
    sessionStorage.setItem("idCommand", JSON.stringify(idCommand));

    let nomFormulaire = document.querySelector("#name").value;
    let prenomFormulaire = document.querySelector("#surname").value;
    let emailFormulaire = document.querySelector("#mail").value;
    let adressFormulaire = document.querySelector("#adress").value;
    let townFormulaire = document.querySelector("#town").value;

    const order = {
        nomFormulaire : nomFormulaire,
        prenomFormulaire : prenomFormulaire,
        emailFormulaire : emailFormulaire,
        adressFormulaire : adressFormulaire,
        townFormulaire : townFormulaire,
        idCommand : idCommand,
        sumPrice : sumPrice

    }

    formContent.push(nomFormulaire + " " + prenomFormulaire + " " + emailFormulaire + " "+ adressFormulaire + " "+ townFormulaire + " ");
    sessionStorage.setItem("formContent", JSON.stringify(formContent));

    // window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/confirmation.html";

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(order));
    console.log(order)
});




