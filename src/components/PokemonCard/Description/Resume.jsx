function removeWhitespace(input) {
  return input.replace(/[\s\f\n\r\t\v]+/g, ""); // Reemplaza todos los caracteres de espacio en blanco
}

let blinkInterval;

async function randomBlink(time) {
  const indicator = document.getElementById("nav-indicator");

  if (!indicator) return;

  let blinkInterval;

  blinkInterval = setInterval(() => {
    // Aleatorio para opacidad
    const randomOpacity = Math.random() < 0.5 ? 0.5 : 1; // Aleatorio entre 0 y 1
    indicator.style.opacity = randomOpacity;

    // Aleatorio para brillo
    const randomGlow = Math.random() < 0.5; // Decide si debe brillar o no

    if (randomGlow) {
      indicator.style.boxShadow = "0 0 20px 10px rgba(0, 0, 255, 0.7)"; // Brillo azul
    } else {
      indicator.style.boxShadow = "none"; // Sin brillo
    }
  }, 100);

  setTimeout(() => {
    indicator.style.opacity = 1; // Asegura que la luz quede encendida al detener el parpadeo
    indicator.style.boxShadow = "none";
    clearInterval(blinkInterval);
  }, time);
}

function calculateReadingDuration(text, wpm = 200) {
  const words = text.split(/\s+/).length; // Contar el número de palabras
  const durationInMinutes = words / wpm; // Duración en minutos
  const durationInMilliseconds = durationInMinutes * 60 * 1000; // Convertir a milisegundos
  return durationInMilliseconds;
}

export function speakText(text) {
  const time = calculateReadingDuration(text);
  text = removeWhitespace(text);
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES"; // Configura el idioma (ejemplo: español)
    utterance.pitch = 1; // Tono (1 es neutral)
    utterance.rate = 1; // Velocidad (1 es normal)
    randomBlink(time);
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Tu navegador no soporta la Web Speech API");
  }
}
