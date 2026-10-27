const planBus = document.querySelector("#plan-bus");
const selectorSiege = document.querySelector("#numero-siege");
const formReservation = document.querySelector("#form-reservation");
const listeReservation = document.querySelector("#modifier-reservation");
const inputNom = document.querySelector("#nom-passager");
const message = document
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
function afficherReservations(){
    listeReservation.innerHTML="";
    if(reservations.length ===0){
        listeReservation.innerHTML = `<p class ="text-slate-500> auncune reservation </p>`;
        return;
    }
    reservations.forEach((reservation, index) => {
        const carte = document.createElement("div");
        carte.innerHTML = "rounded-lg border p-4";
        carte.innerHTML = `
            <p class ="font-bold">passager : ${reservations.nom}</p>
            <p>Siege : ${reservation.siege}</p>
            <button type="button" class="mt-rounded-lg bg-blue-600 px-4 py-4 text-white onclick="modifierResevation(${index})>modifier</button>`;
        listeReservations.appendChild(carte);
        
    })
}

