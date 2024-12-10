// Seleccionar elementos
const hamburger = document.querySelector('.nav-hamburger');
const closeIcon = document.querySelector('.nav-close');
const overlay = document.querySelector('.nav-overlay');
const links = document.querySelectorAll('.nav-overlay-links a');

// Abrir menú
hamburger.addEventListener('click', () => {
  overlay.classList.add('show');
  hamburger.style.display = 'none';
  closeIcon.style.display = 'block';
});

// Cerrar menú
closeIcon.addEventListener('click', () => {
  overlay.classList.remove('show');
  closeIcon.style.display = 'none';
  hamburger.style.display = 'block';
});

// Cerrar menú al hacer clic en un enlace
links.forEach(link => {
  link.addEventListener('click', () => {
    overlay.classList.remove('show');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
  });
});

// Lightbox Functionality
document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);
  
      const img = document.createElement('img');
      img.src = item.src;
      lightbox.appendChild(img);
  
      lightbox.addEventListener('click', () => {
        lightbox.remove();
      });
    });
  });
  
  document.getElementById('phone-number').addEventListener('click', function() {
    const phoneNumber = this.textContent; // Obtener el número de teléfono
    navigator.clipboard.writeText(phoneNumber).then(function() {
      alert('Número copiado al portapapeles');
    }).catch(function(error) {
      alert('Error al copiar el número: ' + error);
    });
  });