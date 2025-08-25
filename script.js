// Navbar style on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Highlight menu item on hover
document.querySelectorAll('#navbar li a').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.parentElement.classList.add('active');
  });
  link.addEventListener('mouseleave', function() {
    this.parentElement.classList.remove('active');
  });
});

// Feedback form handler
const feedbackForm = document.querySelector(".feedback form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your feedback!");
    feedbackForm.reset();
  });
}
