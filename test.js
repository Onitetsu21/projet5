/////////// Test of idGenerator function ///////////

function idGenerator(idLength){
    const chars = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789";
    let output = "a"
    for(let i=0; i <idLength; i++){
        output += chars[Math.floor(Math.random() * chars.length)]
    }
    return output
}
    function testIdRandomLength(){
        const isEqualToTen = idGenerator(10);
        if(isEqualToTen.length != 11){
            console.error("random ID Length doesn't match to param" + " isEqualToTen = " + isEqualToTen.length)
        }else{
            console.log("testIdRandomLength is OK")
        }
    }
    testIdRandomLength()
    
/////////// Test of createProduct function ///////////
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

    function testCreateProduct(){
        const productsForTest = {
            lenses: ["3mm", "5mm"],
            _id: "12345",
            name: "superName",
            price: 4000,
            description: "great description for test",
            imageUrl: "#"
        };
        createProduct(productsForTest);
        if(!document.querySelector(".titleProduct")){
            console.error("The createProduct function doesn't work")
        }else{
            console.log("testCreateProduct is OK")
        }
        document.querySelector("#productList").removeChild(document.querySelector(".product"))
    }
    testCreateProduct()

/////////// Test of createInfoProduct function ///////////

const productsForTest = {
    lenses: ["3mm", "5mm"],
    _id: "12345",
    name: "superName",
    price: 4000,
    description: "great description for test",
    imageUrl: "#"
};

function createInfoProduct(product){
    
    document.querySelector("#imgProduct").src = product.imageUrl;
    document.querySelector("#resumeProduct").innerHTML = product.description;
    document.querySelector("#titleProduct").innerHTML = product.name;
    document.querySelector("#priceProduct").innerHTML = product.price + " €";
    }    
    createInfoProduct(productsForTest)  

function testCreateInfoProduct(){
        if(!document.querySelector("#resumeProduct").innerHTML){
            console.error("The info of create doesn't appear")
            
        }else{
            console.log("testCreateInfoProduct is OK")
        }
    }
    testCreateInfoProduct();

/////////// Test of basketCount function ///////////  

const basketCountElt = document.querySelector("#basket_CountElt");

function basketCount(productNumber) {
    let products = productNumber;
    let count;
    if(!products) {
        count = 0;
    }else {
        count = productNumber
    }

    basketCountElt.innerHTML = count;
} 

const numberOfProduct = 10;

basketCount(numberOfProduct);

function basketCountTest(){
    if(!basketCountElt.innerHTML){
        console.error("the basket count doesn't work")
    }else{
        console.log("basketCountTest is OK")
    }
}

basketCountTest();

/////////// Test of totalPrice function ///////////
const elementsBasket = document.querySelector("#elementsBasket");
function totalPriceFunction(totalOfPrice){
    
    let totalPrice = document.createElement("div");
    totalPrice.className = "totalPrice";
    totalPrice.innerHTML = "Total : " + totalOfPrice + " €";
    elementsBasket.appendChild(totalPrice);
}
const sumPriceForTest = 1000;

totalPriceFunction(sumPriceForTest);

function totalPriceTest() {
    if(!elementsBasket.innerHTML){
        console.error("the count of total price doesn't work")
    }else{
        console.log("totalPrice test is OK")
    }
}
totalPriceTest();