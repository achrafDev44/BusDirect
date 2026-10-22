// Formulaire Réserver 
const reserveForm = document.querySelector("#reserveForm");
const passengerName = document.querySelector("#passengerName");
const passengerSeat = document.querySelector("#passengerSeat");

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
// Première siège libre//
function getFirstFreeSeat(){
    for(let number = 1; number <= TOTAL_SEATS; number++){
        if (isSeatTaken(number) === false){
            return number;
        }
    }
    return 0;
}
// Quand l'utilisateur clic sur confirmer //
reserveForm.addEventListener("submit" , function (event){
  event.preventDefault();
  const name = passengerName.value.trim();
  const chosenSeat = passengerSeat.value;
  // Choisir le siège//
  let seat = 0;
  if (chosenSeat !== "") {
    seat = Number(chosenSeat);
  } else {
    seat = getFirstFreeSeat();
  }
  // Vérifier les informations de réservation //
  if (name === "" || seat === 0 || isSeatTaken(seat)){
    return;
  }
  // Enregistrer la réservation //
  reservations.push({name :name,seat: seat});
  
  console.log("Nom :", name);
  console.log("Siège attribué :", seat);
})
