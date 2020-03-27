

let idCommand = document.querySelector(".idCommand");
let idCommandSession = localStorage.getItem("idCommand");
idCommand.innerHTML = JSON.parse(idCommandSession);

let totalPrice = document.querySelector(".confirmCommand_totalPrice");
let totalPriceSession = localStorage.getItem("sumPrice");
totalPrice.innerHTML = JSON.parse(totalPriceSession);

localStorage.removeItem("idCommand"); 
localStorage.removeItem("sumPrice");
localStorage.removeItem("detailProduct");
localStorage.removeItem("alixOcrP5");  