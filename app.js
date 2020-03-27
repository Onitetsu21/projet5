


///////// Fonction création de product /////////

function createProduct(product){

    const productContainer = document.createElement("div");
    productContainer.className = "product";

        const img = document.createElement("img");
        img.src = product.imageUrl;
        img.alt = "Image du product";
        img.className = "imgProduct";
        img.addEventListener('click', function () {
            localStorage.setItem("detailProduct", JSON.stringify(product));
            window.location = "detailproduct.html";
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
                    localStorage.setItem("detailProduct", JSON.stringify(product));
                    window.location = "detailproduct.html";
                });

    
        document.querySelector("#productList").appendChild(productContainer); 
     
};

////////// compteur du bouton panier /////////// 

const basket_countElt = document.querySelector("#basket-count")
const basket_button = document.querySelector("#basket_button")
basket_button.addEventListener('click', function (){
    
    window.location = "basket.html";
});

let basket = localStorage.getItem("alixOcrP5");
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

async function getCameras(){
    let result = await fetch("http://localhost:3000/api/cameras");
    result = result.json()
    return result
}

getCameras().then(function(res){
    console.log(res)
    for(let i = 0; i < res.length; i++) {
        createProduct(res[i]);
    }
}).catch(function(err){
    console.log("requête GET ne marche pas")  
} )




