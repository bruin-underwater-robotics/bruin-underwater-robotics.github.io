---
---

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  navbar = document.getElementById("burNavbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // navbar.style.padding = "30px 30px";
    navbar.style.backgroundColor = "rgba(255,255,255,1)";
    navbar.style.borderBottom = "0.5px solid rgba(128,128,128,0.87)";
    navbar_links = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navbar_links.length; i++) {
      navbar_links[i].style.color = "rgba(106,106,106,1)";
      navbar_links[i].onmouseover = function() { this.style.color = "rgba(33,33,33,1)"; }
      navbar_links[i].onmouseout = function() { this.style.color = "rgba(106,106,106,1)"; }
    }
  } else {
    // navbar.style.padding = "80px 10px";
    navbar.style.backgroundColor = "rgba(33,33,33,0.3)";
    navbar.style.borderBottom = "0px";
    navbar_links = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navbar_links.length; i++) {
      if(navbar_links[i].classList.contains("dropdown-item")) {
        continue;
      }
      navbar_links[i].style.color = "rgba(255,255,255,1)";
      navbar_links[i].onmouseover = function() { this.style.color = "rgb(199, 238, 255)"; }
      navbar_links[i].onmouseout = function() { this.style.color = "rgba(255,255,255,1)"; }
    }
  }
} 