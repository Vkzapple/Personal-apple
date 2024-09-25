
window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      header.classList.toggle('scrolled', window.scrollY > 0);
    });

    //logo teks bisa ngerefresh
    function refreshPage() {
      location.reload();
    }

    document.getElementById("logo").addEventListener("click", refreshPage);

new Swiper('.card-wrapped', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }

});