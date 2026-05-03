/* ========================================
   WhatsApp Integration — Empório dos Bichos
   ======================================== */

const WHATSAPP_NUMBER = '5521972609360';
const WHATSAPP_DEFAULT_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços do Empório dos Bichos. 🐾';

/**
 * Generate WhatsApp URL with optional pre-filled message
 */
function getWhatsAppUrl(message) {
  const msg = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

/**
 * Open WhatsApp conversation
 */
function openWhatsApp(message) {
  window.open(getWhatsAppUrl(message), '_blank');
}

/**
 * Generate service-specific WhatsApp message
 */
function agendarServico(serviceName) {
  const message = `Olá! Gostaria de agendar o serviço de ${serviceName}. Podem me ajudar? 🐾`;
  openWhatsApp(message);
}

// Initialize WhatsApp floating button
document.addEventListener('DOMContentLoaded', () => {
  const floatBtn = document.getElementById('whatsappFloat');
  if (floatBtn) {
    floatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp();
    });
  }
});
