


///////// Fonction création de product /////////

function createProduct(product){

    const productContainer = document.createElement("div");
    productContainer.className = "product";

        const img = document.createElement("img");
        img.src = product.imageUrl;
        img.alt = "Image du product";
        img.className = "imgProduct";
        img.addEventListener('click', function () {
            sessionStorage.setItem("detailProduct", JSON.stringify(product));
            window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/detailproduct.html";
        })
        productContainer.appendChild(img);

        const productContenu = document.createElement("div");
        productContenu.className = "product_contenu";
        productContainer.appendChild(productContenu);

            const productTitle = document.createElement("h2");
            productTitle.className = "titleProduct";
            productContenu.appendChild(productTitle);
            productTitle.innerHTML = product.name;

            const descriptionProduct = document.createElement("p");
            descriptionProduct.className = "resumeProduct";
            productContenu.appendChild(descriptionProduct);
            descriptionProduct.innerHTML = product.description;

            const priceAndCommandSection = document.createElement("div");
            priceAndCommandSection.className = "priceCommanderSection"
            productContenu.appendChild(priceAndCommandSection);

                const price = document.createElement("h4");
                price.className = "priceProduct";
                priceAndCommandSection.appendChild(price);
                price.innerHTML = product.price + " €";

                const commandButton = document.createElement("div");
                commandButton.className = "commander_button";
                commandButton.innerHTML = "COMMANDER";
                priceAndCommandSection.appendChild(commandButton);

                
                commandButton.addEventListener('click', function () {
                    sessionStorage.setItem("detailProduct", JSON.stringify(product));
                    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/detailproduct.html";
                });

    
        document.querySelector("#productList").appendChild(productContainer); 
     
};

////////// compteur du bouton basket /////////// 

const basket_countElt = document.querySelector("#basket-count")
const basket_button = document.querySelector("#basket_button")
basket_button.addEventListener('click', function (){
    
    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/basket.html";
});

let basket = sessionStorage.getItem("alixOcrP5");
function basketCount(productNumber) {
    let products = productNumber;
    let count;
    if(!products) {
        count = 0;
    }else {
        count = JSON.parse(products).length;
    }

    basket_countElt.innerHTML = count;
} 
basketCount(basket);


/////////// Requête serveur + création des produits ///////////
const request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/cameras");
request.send();
request.addEventListener("readystatechange", function () {
    
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);

        for(let i = 0; i < response.length; i++) {
                createProduct(response[i]);
                
        }              
    }
});


