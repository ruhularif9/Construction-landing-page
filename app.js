
//  Smooth Scroll for Navbar 
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.hash !== "") {
      e.preventDefault();
      const section = document.querySelector(link.hash);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add shadow to navbar on scroll 
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-shadow");
  } else {
    navbar.classList.remove("nav-shadow");
  }
});

//  Highlight Active Menu Link 
window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section[id]").forEach(section => {
    const secTop = section.offsetTop - 200;
    if (pageYOffset >= secTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

//  Reveal Animation When Elements Come Into View -
const revealElements = document.querySelectorAll(".card, .list, .owner-image, .project-details-img");

function revealOnScroll() {
  const triggerBottom = window.innerHeight - 100;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on page load
