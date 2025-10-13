document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const dotsNav = document.querySelector(".carousel-dots");

  let currentIndex = 0;

  // Crear puntos
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    if (index === 0) dot.classList.add("active");
    dotsNav.appendChild(dot);
  });

  const dots = Array.from(dotsNav.children);

  function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentIndex = index;
  }

  // Auto desplazamiento suave
  let autoSlide = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;
    moveToSlide(currentIndex);
  }, 3500);

  // Control manual con dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      moveToSlide(index);
      clearInterval(autoSlide);
      autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
      }, 3500);
    });
  });
});

// Petición de oración UX
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("oracionForm");
  const mensaje = document.getElementById("mensajeGracias");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simular envío
    form.reset();
    mensaje.style.display = "block";

    // Pequeño efecto de vibración del botón al enviar
    const btn = form.querySelector(".btn-enviar");
    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "scale(1)", 200);

    // Desaparece el mensaje después de unos segundos
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 6000);
  });
});


// ===============================
// TABOCAP Asesor Virtual (UX/UI)
// ===============================
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "¡Buenos días! ☀️";
  if (hour < 18) return "¡Buenas tardes! 🌤️";
  return "¡Buenas noches! 🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("greeting").innerText = getGreeting();

  // Apertura automática después de 2 segundos
  setTimeout(() => {
    const toggle = document.getElementById("toggleChat");
    toggle.checked = true;
  }, 2000);
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  const chat = document.getElementById("chatMessages");

  const userMsg = document.createElement("div");
  userMsg.className = "user-message fade-in";
  userMsg.textContent = message;
  chat.appendChild(userMsg);
  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  const botMsg = document.createElement("div");
  botMsg.className = "bot-message fade-in";

  setTimeout(() => {
    if (message.toLowerCase().includes("horario")) {
      botMsg.innerHTML =
        "🕐 Nuestros servicios:<br>• Domingo 9:00 a.m.<br>• Miércoles 7:00 p.m.";
    } else if (message.toLowerCase().includes("llegar")) {
      botMsg.innerHTML =
        "📍 Estamos en Cartagena, barrio El Bosque. ¡Te esperamos con gozo en el Señor!";
    } else if (message.toLowerCase().includes("oración")) {
      botMsg.innerHTML =
        "🙏 Puedes dejar tu petición aquí. Nuestro equipo orará contigo y por ti.";
    } else {
      botMsg.innerHTML =
        "✨ Gracias por escribir. Que Dios te bendiga. ¿Deseas conocer nuestras actividades o ministerios?";
    }
    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 800);
}

function sendQuick(option) {
  const input = document.getElementById("userInput");
  input.value = option;
  sendMessage();
}

// Efecto de bienvenida con sonido y saludo animado
const wave = document.querySelector(".wave-hand");
const avatar = document.getElementById("tabocapAvatar");
const welcomeSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_b2f1a6aefe.mp3?filename=soft-bell-131164.mp3");

// Reproducir efecto y animar
setTimeout(() => {
  if (wave && avatar) {
    wave.classList.add("animate");
    avatar.classList.add("bounce");
    welcomeSound.volume = 0.5;
    welcomeSound.play();
  }
}, 2300); // unos milisegundos después de la apertura automática
