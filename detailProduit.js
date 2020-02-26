retourMenu.addEventListener("click", function() {
    window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/index.html";
});


const produitSelected = JSON.parse(sessionStorage.getItem("detailProduit"));

document.querySelector("#imgProduit").src = produitSelected.imageUrl;
document.querySelector("#resumeProduit").innerHTML = produitSelected.description;
document.querySelector("#titreProduit").innerHTML = produitSelected.name;
document.querySelector("#prixProduit").innerHTML = produitSelected.price + " €";


// let optionLens = "";
let personnalisationLens = document.querySelector('.persoLens');

// let personnalisationLens = document.createElement("select");
//     personnalisationLens.className = "persoLens";
//     panier_produit.appendChild(personnalisationLens);

        selectedLens = produitSelected.lenses[0]
        personnalisationLens.addEventListener("change", function (){
            produitSelected.selectedLens = personnalisationLens.value;
            
        console.log(produitSelected)    
        })
       
        
        for(let i = 0; i < produitSelected.lenses.length; i++){
        let optionLens = document.createElement("option")
        optionLens.className = "optionLens"
        optionLens.innerHTML += produitSelected.lenses[i];
        personnalisationLens.appendChild(optionLens);

        };

// let optionLens = "";
// let personnalisationLens = document.querySelector('.persoLens');
// for(let i = 0; i < produitSelected.lenses.length; i++){
//     optionLens = document.createElement("option")
//     optionLens.className = "optionLens"
//     personnalisationLens.appendChild(optionLens);
//     optionLens.innerHTML += produitSelected.lenses[i];
// }


    

let commandButton = document.querySelector(".commander_button")
commandButton.addEventListener('click', function () {
    let panierStored = sessionStorage.getItem("alixOcrP5");
    if(!panierStored){
        panierStored = [];
    }else{
        
        panierStored = JSON.parse(panierStored);
        console.log(panierStored.length)
        panier_countElt.innerHTML = panierStored.length + 1;
        
    }  
    panierStored.push(produitSelected);

    sessionStorage.setItem('alixOcrP5', JSON.stringify(panierStored));
});



////////// compteur du bouton panier /////////// 

    
    let panier_countElt = document.querySelector("#panier-count");
    let panier_button = document.querySelector("#panier_button");
    let panierCount = sessionStorage.getItem("alixOcrP5");
    if(!panierCount){
        panierCount = 0;

    }else{
        
        panier_countElt.innerHTML = JSON.parse(panierCount).length;
        panierCount = JSON.parse(panierCount);
    }
    

    panier_button.addEventListener('click', function (){
        window.location = "file:///C:/A_DOCS/OPENCLASSROOMS/PROJET/Projet5-js/work/panier.html";
        })
        