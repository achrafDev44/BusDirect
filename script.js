// Formulaire Réserver 
const reserveForm = document.querySelector("#reserveForm");
const passengerName = document.querySelector("#passengerName");
const passengerSeat = document.querySelector("#passengerSeat");
const allSeats = document.querySelectorAll("#seats button");
const TOTAL_SEATS = 20;
let reservations = [];
// Formulaire Modifier
const editForm = document.querySelector("#editForm");
const editPassenger = document.querySelector("#editPassenger");
const editName = document.querySelector("#editName");
const editSeat = document.querySelector("#editSeat");
const editError = document.querySelector("#editError");
const editMsg = document.querySelector("#editMsg");
//----------Partie Modifier----------//
function fillPassengerList(select){
  // on utiliser ce ligne pour vider la liste et remettre la premiere  option //
  select.innerHTML = '<option value="">--Choisir un passager--</option>';
    for (let i = 0; i < reservations.length; i++) {
      const option = document.createElement("option");
      option.value = reservations[i].name;
      option.textContent = reservations[i].name + " · siège " + reservations[i].seat;
      select.appendChild(option);
    }
}

function updatePassengerLists(){
  fillPassengerList(editPassenger);
}
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
//Change la couleur du siège en vert et dit qui est libre.
function showSeatFree(number){
  const seat = allSeats[number-1];
  seat.classList.remove("border-red-300", "bg-red-50", "text-red-700");
  seat.classList.add("border-green-300", "bg-green-50", "text-green-700");
  seat.innerHTML = number + "<br>Libre";
}

// Retrouve la réservation d'un passager 
function findReservation(name){
  for (let i = 0; i < reservations.length; i++) {
    if (reservations[i].name === name) {
      return reservations[i];
    }
  }
  return null;
}

// Dit si un nom existe déjà 
function nameExists(name){
  for (let i = 0; i < reservations.length; i++) {
    if (reservations[i].name.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  }
  return false;
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
  updatePassengerLists();
  
  console.log("Nom :", name);
  console.log("Siège attribué :", seat);
})
//------ Partie modifier ---------//
editPassenger.addEventListener("change", function () {
  editName.value = editPassenger.value;
});

// Quand on clique sur Modifier //
editForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
});


