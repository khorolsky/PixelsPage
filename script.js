
let answers = document.querySelectorAll(".faq__container");

answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    }

    else {
      event.classList.add("active");
    }
  });
});

let burger = document.querySelector('.header__main-burger');
let nav = document.querySelector('.nav-menu');

burger.onclick = function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
};




var typed = new Typed('.speed', {
  strings: ["Brand", "SOLANA", "Party", "PFP", "BTC", "DROP", "MERCH", "FRENDS", "LAMBO", "COIN"],
  typeSpeed: 100,
  backSpeed: 309,
  loop: true,
  startDelay: 6000,
});



$('.roadmap__text').typeIt({
  strings: ['Beginning', "1) Creating art", "2) Launching the website", "3) Creating social media", 'Building', "4) Building community", "5) Mint phase", "6) First FREE Party for Holders and Blue Chips ", "7) Branding and merch-boxes for holders", "8) Limited BTC collection", "9) ???Secret event???", 'Endless Circus', "10) Aggressive marketing", "11) Party with Elon Musk(but it's not exact)", "12) ???Secret???", "13) ???Secret???"],
  speed: 100,
  loop: false,
  autoStart: false
});


