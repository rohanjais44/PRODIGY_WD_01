// Change navbar style on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Optionally highlight active menu item on click or hover
const menuLinks = document.querySelectorAll('#navbar li a');
menuLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.parentElement.classList.add('active');
  });
  link.addEventListener('mouseleave', function() {
    this.parentElement.classList.remove('active');
  });
});
