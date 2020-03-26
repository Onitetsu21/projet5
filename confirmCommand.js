

let idCommand = document.querySelector(".idCommand");
let idCommandSession = localStorage.getItem("idCommand");
idCommand.innerHTML = JSON.parse(idCommandSession);

let totalPrice = document.querySelector(".confirmCommand_totalPrice");
let totalPriceSession = localStorage.getItem("sumPrice");
totalPrice.innerHTML = JSON.parse(totalPriceSession);