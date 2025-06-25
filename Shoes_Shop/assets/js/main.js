const openBtn = document.getElementById("bars");
const closeBtn = document.getElementById("close");
const menu = document.querySelector(".small-menu");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

function functio(small) {
  var full = document.getElementById("imagebox");
  console.log(full);
  full.src = small.src;
}

