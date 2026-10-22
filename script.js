// Formulaire Réserver 
const reserveForm = document.querySelector("#reserveForm");
const passengerName = document.querySelector("#passengerName");
const passengerSeat = document.querySelector("#passengerSeat");
 const allSeats = document.querySelectorAll("#seats button");
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
// faire  color rouge et vert //
function showSeatBusy(number , name){
  const seat = allSeats[number-1];
  seat.classList.remove("border-green-300", "bg-green-50" , "text-green-700");
  seat.classList.add("border-red-300", "bg-red-50", "text-red-700");
  seat.innerHTML = number + "<br>" + name ;
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
  showSeatBusy(seat,name);
  reserveForm.reset();
  
  console.log("Nom :", name);
  console.log("Siège attribué :", seat);
})
