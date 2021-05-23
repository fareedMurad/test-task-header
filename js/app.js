// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// scroll effects
let header_area = document.querySelector('.header-area');
let nav_logo = document.querySelector('#nav-logo');
window.onscroll = () => {
  let current_scrollbar_position = window.scrollY;
  if (current_scrollbar_position > 50) {
    header_area.classList.add('highlighted');
    nav_logo.src = '/assets/images/Logo CASEO - Green.png'
  } else {
    header_area.classList.remove('highlighted');
    nav_logo.src = '/assets/images/Logo CASEO - Green.svg'
  }
};
