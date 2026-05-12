    const track = document.getElementById("track");
    const items = document.querySelectorAll(".carousel-item");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let index = 0;
    const total = items.length;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      index = (index + 1) % total; // loop infinito
      updateCarousel();
    }

    function prevSlide() {
      index = (index - 1 + total) % total;
      updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // AUTOPLAY
    let autoplay = setInterval(nextSlide, 3000);

    // PAUSA AL HOVER
    document.querySelector(".carousel").addEventListener("mouseenter", () => {
      clearInterval(autoplay);
    });

    document.querySelector(".carousel").addEventListener("mouseleave", () => {
      autoplay = setInterval(nextSlide, 3000);
    });