    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      header.classList.toggle('scrolled', window.scrollY > 0);
    });

    //logo teks bisa ngerefresh
    function refreshPage() {
      location.reload();
    }

    document.getElementById("logo").addEventListener("click", refreshPage);