let finishCommand = document.querySelector(".finaliser_button");

let formulaire = document.querySelector("#formulaire");

let formContent = [];

let panier = JSON.parse(sessionStorage.getItem("alixOcrP5"));
let produitPanier = [];
for(let i = 0; i < panier.length; i++) {
    
    produitPanier.push(panier[i].name + " " + panier[i].selectedLens + " ");

}

let idCommand = 0;

let idGenerator = function (){
    let id = Math.floor(Math.random() * 1000000)
    console.log(id);
    return id
    
}


finishCommand.addEventListener("click", function () {
    let idCommand = idGenerator(); 

    let nomFormulaire = document.querySelector("#name").value;
    let prenomFormulaire = document.querySelector("#surname").value;
    let emailFormulaire = document.querySelector("#mail").value;

    let telFormulaire = document.querySelector("#tel").value;

    formContent.push(nomFormulaire + " " + prenomFormulaire + " " + emailFormulaire + " "+ telFormulaire + " ");

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(formContent + "id : " + idCommand + " produit : " + produitPanier + " " + totalPrice));

    console.log("envoie au serveur de la commande : " + formContent + "id : " + idCommand + " produit : " + produitPanier + " " + totalPrice)
});

let totalPrice = JSON.parse(sessionStorage.getItem("totalPrice"));
let totalPriceForm = document.querySelector(".totalPrice_form");
totalPriceForm.innerHTML = totalPrice;

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

    panier_button.addEventListener('click', function (){
        
        window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/panier.html";
    })