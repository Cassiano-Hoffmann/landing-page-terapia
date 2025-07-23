AOS.init()

// JavaScript
function aceitarCookies() {
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function() {
  // Sempre mostra o banner ao carregar
  document.getElementById("cookie-banner").style.display = "block";
};


// function aceitarCookies() {
//   localStorage.setItem("cookie-aceito", "true");
//   document.getElementById("cookie-banner").style.display = "none";
// }

// window.onload = function() {
//   if (localStorage.getItem("cookie-aceito") === "true") {
//     document.getElementById("cookie-banner").style.display = "none";
//   }
// };

const toRoll = document.getElementById("header")
const pixelsAmount = '50'

document.addEventListener("scroll", function() {

    if (window.scrollY > pixelsAmount) {
        toRoll.classList.add("scrolled")
    } else {
        toRoll.classList.remove("scrolled")
    }
})

document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .sidebar').classList.add('open')
})

document.querySelector('.close-menu button').addEventListener('click', e => {
    document.querySelector('header .sidebar').classList.remove('open')
})

document.querySelector('.sidebar .backdrop').addEventListener('click', e => {
    document.querySelector('header .sidebar').classList.remove('open')
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  });

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('', { origin: 'top' });

ScrollReveal().reveal('.img-home', { origin: 'bottom' });

ScrollReveal().reveal('', { origin: 'left' });

ScrollReveal().reveal('.phrase-content, .informative h2', { origin: 'right' });

const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question) => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.classList.toggle('open');
      });
    });