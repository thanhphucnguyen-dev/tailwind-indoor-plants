/*-----------------TOGGLE BUTTON---------------- */
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line");
    });
});

/* --------------------SHOW SCROLL UP--------------------*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");
    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener("scroll", scrollUp);


/* --------------------CHANGE BACKGROUND HEADER--------------------------*/
const scrollHeader = () => {
    const scrollUpBtn = document.getElementById("navbar");
    if(this.scrollY >= 250) {
        scrollUpBtn.classList.add("border-b", "border-yellow-500");
    }else {
        scrollUpBtn.classList.remove("border-b", "border-yellow-500");
    }
}
window.addEventListener("scroll", scrollHeader);

/* --------------------SWIPER---------------------------*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    grapCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
  });