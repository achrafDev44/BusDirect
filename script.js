// Formulaire Réserver 
const reserveForm = document.getElementById("reserveForm");
const passengerName = document.getElementById("passengerName");
const passengerSeat = document.getElementById("passengerSeat");

const TOTAL_SEATS = 20;
let reservations = [];
// Vérifie si le siège est disponible.//
function isSeatTaken(number){
    for(let i = 0 ; i < reservations.length ; i++){
        if (reservations[i].seat === number){
            return true
        }
    }
    return false;
}
// Quand l'utilisateur clic sur confirmer //
reserveForm.addEventListener("submit" , function (event){
    event.preventDefault();
    const name = passengerName.value.trim();
    const chosenSeat = passengerSeat.value;
    console.log("Nom :",name, "Siège :", chosenSeat)



})
