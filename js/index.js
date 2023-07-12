let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
}

window.oncscroll = () => {
    navbar.classList.remove('active');
}
/*let slides = document.querySelectorAll('.home .slides-container .slide ');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index= (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index= (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

