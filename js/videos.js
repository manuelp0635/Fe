    const videos = document.querySelectorAll(".carousel-video");
    let current = 0;

    function changeVideo() {
      videos[current].classList.remove("active");
      current = (current + 1) % videos.length;
      videos[current].classList.add("active");
    }

    setInterval(changeVideo, 5000); // cambia cada 5 segundos