
////////////////////////////// Requêtes serveur ////////////////////////
// const ici = new URL (window.location);
// // ici.pathname = "/";
// ici.hash = "#index";
// console.log(ici.toString());

const request = new XMLHttpRequest();

let panier = [];


    ////// Fonctions /////

function createProduct (product){

    

    const productContainer = document.createElement("div");
    productContainer.className = "produit";

        const img = document.createElement("img");
        img.src = product.imageUrl;
        img.alt = "Image du produit";
        img.className = "imgProduit";
        img.addEventListener('click', function () {
            sessionStorage.setItem("detailProduit", JSON.stringify(product));
            window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/detailProduit.html";
        })
        productContainer.appendChild(img);

        const produitContenu = document.createElement("div");
        produitContenu.className = "produit_contenu";
        productContainer.appendChild(produitContenu);

            const productTitle = document.createElement("h2");
            productTitle.className = "titreProduit";
            produitContenu.appendChild(productTitle);
            productTitle.innerHTML = product.name;

            const descriptionProduct = document.createElement("p");
            descriptionProduct.className = "resumeProduit";
            produitContenu.appendChild(descriptionProduct);
            descriptionProduct.innerHTML = product.description;

            const priceAndCommandSection = document.createElement("div");
            priceAndCommandSection.className = "prixCommanderSection"
            produitContenu.appendChild(priceAndCommandSection);

                const price = document.createElement("h4");
                price.className = "prixProduit";
                priceAndCommandSection.appendChild(price);
                price.innerHTML = product.price + " €";

                const commandButton = document.createElement("div");
                commandButton.className = "commander_button";
                commandButton.innerHTML = "COMMANDER";
                priceAndCommandSection.appendChild(commandButton);

                
                commandButton.addEventListener('click', function () {
                    sessionStorage.setItem("detailProduit", JSON.stringify(product));
                    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/detailProduit.html";
                // let panierStored = sessionStorage.getItem("alixOcrP5");
                // if(!panierStored){
                //     panierStored = [];
                // }else{
                //     panierStored = JSON.parse(panierStored);
                //     panier_countElt.innerHTML = panierStored.length + 1;
                // }  
                // panierStored.push(product);

                // sessionStorage.setItem('alixOcrP5', JSON.stringify(panierStored));

            });

    
        document.querySelector("#produitListe").appendChild(productContainer); 
     
}
    const panier_countElt = document.querySelector("#panier-count")
    const panier_button = document.querySelector("#panier_button")
    panier_button.addEventListener('click', function (){
        
        window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/panier.html";
    })

    let panierCount = sessionStorage.getItem("alixOcrP5");
    if(!panierCount){
        panierCount = 0;

    }else{
        panierCount = JSON.parse(panierCount).length;
    }
    panier_countElt.innerHTML = panierCount;


    /////// Requête serveur ///////

request.onreadystatechange = function () {
    
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);

        for(let i = 0; i < response.length; i++) {

                createProduct(response[i]);

                // const allProduct = response;
              

        }  
            let imgProduit = [];
            
            for(let i = 0; i < response.length; i++)
                imgProduit = document.querySelectorAll("img");
                console.log(imgProduit);

                // imgProduit.addEventListener('click', function (){
                //     console.log("produit selectionné :" + img.imgProduit.src)
                // });  
              
    }
}

request.open("GET", "http://localhost:3000/api/cameras");
request.send();





/*  LORSQUE l'ON CLIQUE sur "commander" 
        ON STOCK les informations du produit dans le panier
        ON SAUVEGARDE la sélection dans un cookie
            ON AFFICHE les données du cookie dans le widget panier
    LORSQUE l'ON EST sur la page panier
        ON RECUPERE les données stockées dans les cookies du panier
            ON AFFICHE ces données sous formes de tableau
    LORSQUE l'ON CLIQUE sur "finaliser la commande" 
        ON AFFICHE un formulaire d'envoie
            LORSQUE l'ON finalise 
                ON ENVOI les données du formulaire + les cookies du panier au serveur sous un ID de commande
                
*/













////////////////////////////// Produits ////////////////////////////////

//  class produit {
//     constructor (id, name, price, description, imageUrl) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.description = description;
//         this.imageUrl = imageUrl;
//     }
// };

// try {
//     var descriptionProduit1 = document.getElementById("resumeProduit1").innerHTML;
//     var imageProduit1 = document.getElementById("image-produit1").src;
// } catch (error) {
    
// }finally{
    
// }
// try {
//     var descriptionProduit2 = document.getElementById("resumeProduit2").innerHTML;
//     var imageProduit2 = document.getElementById("image-produit2").src;
// } catch (error) {
    
// }finally{
    
// }
// try {
//     var descriptionProduit3 = document.getElementById("resumeProduit3").innerHTML;
//     var imageProduit3 = document.getElementById("image-produit3").src;
// } catch (error) {
    
// }finally{
    
// }
// var descriptionProduit1 = document.getElementById("resumeProduit1").innerHTML;
// var imageProduit1 = document.getElementById("image-produit1").src;

// var descriptionProduit2 = document.getElementById("resumeProduit2").innerHTML;
// var imageProduit2 = document.getElementById("image-produit2").src;

// var descriptionProduit3 = document.getElementById("resumeProduit3").innerHTML;
// var imageProduit3 = document.getElementById("image-produit3").src;

// var produit1 = new produit (01, "Appareil Photo 1", 150, descriptionProduit1, imageProduit1);
// var produit2 = new produit (02, "Appareil Photo 2", 250, descriptionProduit2, imageProduit2 );
// var produit3 = new produit (03, "Appareil Photo 3", 750, descriptionProduit3, imageProduit3 );



////////////////////////////// Panier bouton ////////////////////////////////

// const panier = document.getElementById("panier-count");
// const addPanier = document.getElementById("commander_button");

// var numCmdButton = addPanier.lenght;


//     ///// Compteur panier /////
// var panierCount = 0;

// addPanier.addEventListener("click", panierFunction);

// function panierFunctionCount(e) {
//     panierCount++;
//     document.getElementById("panier-count").innerHTML = panierCount + "";
    
//     e.preventDefault();
//     e.stopPropagation();
// }

//     ///// rajout du produit au panier /////
// let tabCommande = [this.produit.id, this.produit.name, this.produit.price, this.produit.description, this.produit.imageUrl]
// addPanier.addEventListener("click", panierFunctionAdd);

// function panierFunctionAdd (e) {
//     document.getElementById("elementPanier").innerHTML = tabCommande;
// }
//