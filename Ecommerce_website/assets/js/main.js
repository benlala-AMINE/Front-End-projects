const bars = document.getElementById("bars");
const closing = document.getElementById("close");
const menu = document.getElementById("menu");

bars.addEventListener('click', () => {
  menu.classList.add("active");
  bars.style.display = "none";
});

closing.addEventListener('click', () => {
  menu.classList.remove("active");
  bars.style.display = "block";
});


const scrolling = document.querySelector(".scroll")

if (window.matchMedia("(max-width: 600px)").matches) {
  scrolling.classList.add("swiper");
}
