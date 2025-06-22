/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("nav");
window.addEventListener("scroll", () => {
  console.log(header.className);

  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
});

// ============= active link ===============
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  const scrollPos = window.scrollY + 100; // Adjust for navbar height

  sections.forEach((section) => {
    const id = section.id;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      links.forEach((link) => {
        const icon = link.querySelector("i");
        const match = link.getAttribute("href") === `#${id}`;
        icon.classList.toggle("activeBtn", match);
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ==================== swiper ===================


