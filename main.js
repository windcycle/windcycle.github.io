// Navbar Icon (Mobile)
let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
}
// Carousel Slider
window.oncscroll = () => {
    navbar.classList.remove('active');
}
let slides = document.querySelectorAll('.home .slides-container .slide ');
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

// Parallax Scroll
let layer_1 = document.querySelector('.layer-1');
let layer_2 = document.querySelector('.layer-2');
let layer_3 = document.querySelector('.layer-3');
let layer_4 = document.querySelector('.layer-4');
let layer_5 = document.querySelector('.layer-5');
window.onscroll = function(){
    let Y = window.scrollY;
    
    layer_1.style.transform = 'translateY('+ Y/1.5 + 'px)';
    layer_2.style.transform = 'translateY('+ Y/2 + 'px)';
    layer_3.style.transform = 'translateY('+ Y/1.5 + 'px)';
    layer_4.style.transform = 'translateY('+ Y/2 + 'px)';
    layer_5.style.transform = 'translateY('+ Y/3 + 'px)';
}
