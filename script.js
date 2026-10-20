const menuBtn = document.getElementById("menuBtn"); 
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("hidden"); // إخفاء / إظهار القائمة
  mainNav.classList.toggle("flex"); //ترتيب الروابط عندما تكون القائمة ظاهرة
  menuBtn.setAttribute("aria-expanded", !mainNav.classList.contains("hidden"));
});
