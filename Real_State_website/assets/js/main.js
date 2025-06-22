/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("nav");
window.addEventListener("scroll", () => {
  console.log(header.className);

  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
});




