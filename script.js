const planBus = document.querySelector("#plan-bus");
const selectorSiege = document.querySelector("#numero-siege");
const formReservation = document.querySelector("#form-reservation");
const listeReservation = document.querySelector("#modifier-reservation");
const reservations = [];
//  Creation de 20 sieges
for (let i = 1; i<= 20;i++){
    const siege = document.createElement("button");
    siege.type ="button";
    siege.textContent=`siege ${i}`;
    siege.className="rounded-lg bg-green-500 p-4 font-bold text-white";
    planBus.appendChild(siege);
}
// ajoute les siege dans Option
for(let i = 1;i<=20;i++){
    const option = document.createElement("option");
    option.value = i;
    option.text = `Siege ${i}`;
    selectorSiege.appendChild(option);
}
