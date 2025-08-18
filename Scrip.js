// Números de WhatsApp disponibles
const numbers = [
  "5491123365501",
  "5491159255356"
];

// Seleccionar aleatoriamente un número
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

// Mensaje predeterminado
const message = "hola me creas un usuario";

// Construcción del link
const whatsappLink = `https://wa.me/${randomNumber}?text=${encodeURIComponent(message)}`;

// Asignar al botón
document.getElementById("whatsappBtn").href = whatsappLink;
