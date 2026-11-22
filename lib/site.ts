export const WHATSAPP_NUMBER = "584141450812";
export const WHATSAPP_DISPLAY = "+58 414-145-0812";
export const INSTAGRAM_URL = "https://instagram.com/digix.group";

export const waLink = (text = "¡Hola DIGIX! Quiero información sobre sus servicios.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
