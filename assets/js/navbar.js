---
---

navbar = document.getElementById("burNavbar");
navbar_toggler = document.getElementById("burNavbarToggler");
navbar_toggler_icon = document.getElementById("burNavbarTogglerIcon");
navbar_links = document.getElementsByClassName("nav-link");

window.onscroll = function() {scrollFunction()};
navbar_toggler.onclick = function() {navbarToggleFunction()};

navbar_open = false;
navbar_toggled = false;

hamburger_light = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
hamburger_dark = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";

function brightenNavbar() {
  navbar.style.backgroundColor = "rgba(255,255,255,1)";
  navbar.style.borderBottom = "0.5px solid rgba(128,128,128,0.87)";
  navbar_toggler.style.border = "0px solid black";
  navbar_toggler_icon.style.backgroundImage = hamburger_dark;
  for (var i = 0; i < navbar_links.length; i++) {
    navbar_links[i].style.color = "rgba(106,106,106,1)";
    navbar_links[i].onmouseover = function() { this.style.color = "rgba(33,33,33,1)"; }
    navbar_links[i].onmouseout = function() { this.style.color = "rgba(106,106,106,1)"; }
  }
}

function darkenNavbar() {
  if(window.innerWidth < 600) {
    navbar.style.backgroundColor = "rgba(0,0,0,0)";
  } else {
    navbar.style.backgroundColor = "rgba(0,0,0,0)";
  }
  navbar.style.borderBottom = "0px";
  navbar_toggler.style.border = "1.5px solid rgba(100,100,100,0.4)";
  navbar_toggler_icon.style.backgroundImage = hamburger_light;
  for (var i = 0; i < navbar_links.length; i++) {
    if(navbar_links[i].classList.contains("dropdown-item")) {
      continue;
    }
    navbar_links[i].style.color = "rgba(255,255,255,1)";
    navbar_links[i].onmouseover = function() { this.style.color = "rgb(84, 207, 255)"; }
    navbar_links[i].onmouseout = function() { this.style.color = "rgba(255,255,255,1)"; }
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    brightenNavbar();
  } else {
    if(navbar_open) { return; }
    darkenNavbar();
  }
} 

function navbarToggleFunction(){
  navbar_toggled = true;
  if (!navbar_open) {
    brightenNavbar();
  } else if(document.body.scrollTop < 80 && document.documentElement.scrollTop < 80) {
    darkenNavbar();
  }
  navbar_open = !navbar_open;
};
