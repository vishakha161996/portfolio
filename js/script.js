// ------------------------ Smooth scroll ------------------------
let navlinks = document.querySelectorAll("header nav a");

for (const link of navlinks) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}



// ------------------------ Scroll to top ------------------------
// Get the scroll-to-top button element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
 
// Add a click event listener to the button
scrollToTopBtn.addEventListener('click', scrollToTop);
 
// Function to scroll to top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}