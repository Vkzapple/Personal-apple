    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      header.classList.toggle('scrolled', window.scrollY > 0);
    });

      if (scrollValue > 0 && scrollValue < 1700) {
    header.classList.add("scrolled");
    header.classList.remove("scrolled-more");
  } else if (scrollValue > 1700) {
    header.classList.add("scrolled-more");
    header.classList.remove("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.remove("scrolled-more");
  }