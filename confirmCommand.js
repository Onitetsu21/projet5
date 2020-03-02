

let idCommand = document.querySelector(".idCommand");
let idCommandSession = sessionStorage.getItem("idCommand");
idCommand.innerHTML = JSON.parse(idCommandSession);

let totalPrice = document.querySelector(".confirmCommand_totalPrice");
let totalPriceSession = sessionStorage.getItem("sumPrice");
totalPrice.innerHTML = JSON.parse(totalPriceSession);