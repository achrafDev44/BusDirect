const planBus = document.querySelector("#plan-bus");
// Creation de 20 sieges
for (let i = 1; i<= 20;i++){
    const siege = document.createElement("button");
    siege.type ="button";
    siege.textContent=`siege ${i}`;
    siege.className="rounded-lg bg-green-500 p-4 font-bold text-white";
    planBus.appendChild(siege);
}
