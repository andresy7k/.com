const btnIniciarSesion = document.getElementById('btnIniciarSesion');

btnIniciarSesion.addEventListener('click', () => {
  // Prevent default form submission behavior (if applicable)
  event.preventDefault();

  window.location.href = "index.html";
});