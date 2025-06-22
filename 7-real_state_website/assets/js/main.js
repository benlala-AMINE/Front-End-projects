/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("nav");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".swiper", {
  spaceBetween: 32,
  slidesPerView: 1,
  grabCursor: true,
  centeredSlides: true,
  slidesPerview: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
});

/*=============== VALUE ACCORDION ===============*/
document.querySelectorAll(".arrow").forEach((arrow) => {
  arrow.addEventListener("click", function () {
    const item = this.closest(".items");
    const content = item.querySelector(".content");
    const isOpen = content.classList.contains("open");

    // Close all contents
    document.querySelectorAll(".content").forEach((c) => {
      c.classList.remove("open");
      c.style.maxHeight = null;
    });

    // Remove rotation from all arrows
    document.querySelectorAll(".arrow").forEach((a) => {
      a.classList.remove("rotate");
    });

    // Toggle current content
    if (!isOpen) {
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
      this.classList.add("rotate");
    }
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust for fixed header
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
