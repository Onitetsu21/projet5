const request = new XMLHttpRequest();

let panier = [];

///////// Fonction création de produit /////////

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
                });

    
        document.querySelector("#produitListe").appendChild(productContainer); 
     
};

////////// compteur du bouton panier /////////// 
const panier_countElt = document.querySelector("#panier-count")
const panier_button = document.querySelector("#panier_button")
panier_button.addEventListener('click', function (){
    
    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/panier.html";
});

let panierCount = sessionStorage.getItem("alixOcrP5");
if(!panierCount){
    panierCount = 0;

}else{
    panierCount = JSON.parse(panierCount).length;
}
panier_countElt.innerHTML = panierCount;


/////////// Requête serveur ///////////
request.onreadystatechange = function () {
    
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);

        for(let i = 0; i < response.length; i++) {
                createProduct(response[i]);
        }              
    }
}

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
