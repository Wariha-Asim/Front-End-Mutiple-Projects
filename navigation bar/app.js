
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseover', function () {
    this.style.color = 'black';
  });

  link.addEventListener('mouseout', function () {
    this.style.color = ''; 
  });
});