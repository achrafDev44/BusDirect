// Formulaire Réserver 
const reserveForm = document.getElementById("reserveForm");
const passengerName = document.getElementById("passengerName");
const passengerSeat = document.getElementById("passengerSeat");

const TOTAL_SEATS = 20;
let reservations = [];
// Quand l'utilisateur clic sur confirmer //
reserveForm.addEventListener("submit" , function (event){
    event.preventDefault();
    const name = passengerName.value.trim();
    const chosenSeat = passengerSeat.value;
    console.log("Nom :",name, "Siège :", chosenSeat)



})
