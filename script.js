const planBus = document.querySelector("#plan-bus");
const selectSiege = document.querySelector("#numero-siege");
const formReservation = document.querySelector("#form-reservation");

const inputNom = document.querySelector("#nom-passager");
const message = document.querySelector("#message-reservation");

const formModification = document.querySelector("#form-modification");
const reservationAModifier = document.querySelector("#reservation-a-modifier");
const nomModification = document.querySelector("#nom-modification");
const siegeModification = document.querySelector("#siege-modification");

const formSuppression = document.querySelector("#form-suppression");
const siegeSuppression = document.querySelector("#siege-suppression");
const messageSuppression = document.querySelector("#message-suppression");
const reservations = [];
//  Creation de 20 sieges
for (let i = 1; i<= 20;i++){
    const siege = document.createElement("button");
    siege.type ="button";
    siege.textContent=`siege ${i}`;
    // id unique du chaque siege
    siege.id=`siege-${i}`;
    siege.className="rounded-lg bg-green-500 p-4 font-bold text-white";
    planBus.appendChild(siege);
}

function afficherReservations(){
    reservationAModifier.innerHTML = '<option value ="">Choisir une reservation</option>';
    reservations.forEach(function(reservation,index){
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `Siege${reservation.siege}-${reservation.nom}`;
        reservationAModifier.appendChild(option);
    });
}

// ajoute les siege dans Option
for(let i = 1;i<=20;i++){
    const option = document.createElement("option");
    option.value = i;
    option.text = `Siege ${i}`;
    selectSiege.appendChild(option);
}
// ajoute les sieges dans le formulaire modification
for(let i = 1;i <= 20;i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent =`Siege${i}`;
    siegeModification.appendChild(option);
}
formReservation.addEventListener("submit",function(event){
    event.preventDefault();
    const nom = inputNom.value.trim();
    // recupere le nuemero de siege
    const siege = Number(selectSiege.value);
    if(nom === "" || siege === 0){
        message.textContent = "Remplir tout les champs.";
        return
    }
    // voir si le siege deja reserve
    const siegeOccupe = reservations.some(function (reservation){
        return reservation.siege === siege;
    });
    if (siegeOccupe){
        message.textContent = "ce siege réserve.";
        return
    }
    reservations.push({
        nom: nom,
        siege: siege
    });

    // rouge et vert
    const siegeElement = document.querySelector(`#siege-${siege}`);
    // remove = supprimer la class
    siegeElement.classList.remove("bg-green-500");
    // add = ajouter la class
    siegeElement.classList.add("bg-red-500");
    siegeElement.innerHTML = `Siege ${siege}<br>${nom}`;

    afficherReservations();
    message.textContent ="réservation succes";
    // effacer le nom de passager apres reservation
    inputNom.value = "";
    selectSiege.value= "";
});


