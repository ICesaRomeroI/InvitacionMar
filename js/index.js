document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("idrPersonalizado"); 
  var campoTexto = document.getElementById("campoTexto");

  checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
          campoTexto.style.display = "block";
      } else {
          campoTexto.style.display = "none";
      }
  });

  // Manejo de eventos para los otros checkboxes
  var otrosCheckboxes = document.querySelectorAll('input[name="respuesta"]');
  otrosCheckboxes.forEach(function (otroCheckbox) {
      otroCheckbox.addEventListener("change", function () {
          // Si no es el checkbox "Mensaje Personalizado", oculta el campo de texto
          if (otroCheckbox.id !== "idrPersonalizado") {
              campoTexto.style.display = "none";
          }
      });
  });
});