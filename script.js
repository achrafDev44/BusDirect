//-- Formulaire Réserver--//
const reserveForm = document.getElementById("reserveForm");
const passengerName = document.getElementById("passengerName");
const passengerSeat = document.getElementById("passengerSeat");
const passengerError = document.getElementById("passengerError");
const passengerMsg = document.getElementById("passengerMsg");
//--Formulaire Modifier--//
const editForm = document.getElementById("editForm");
const editPassenger = document.getElementById("editPassenger");
const editSeat = document.getElementById("editSeat");
const editMsg = document.getElementById("editMsg");
// --Formulaire supprimer--//
const deleteForm = document.getElementById("deletForm");
const deletePassenger = document.getElementById("deletePassenger");
const deleteError = document.getElementById("deleteError");
// --Menu Mobile--//
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("hidden");
  mainNav.classList.toggle("flex");
  menuBtn.setAttribute("aria-expanded", !mainNav.classList.contains("hidden"));
});