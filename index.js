const hamburgerPopup = document.querySelector('.nav-toggle');
const menuIcons = document.querySelectorAll('.menu_icons > a');

hamburgerPopup.addEventListener('click', () => {
  document.body.classList.toggle('hamburger-open');
});

menuIcons.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('hamburger-open');
  });
});