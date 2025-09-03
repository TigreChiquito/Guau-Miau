
document.getElementById('loginForm').addEventListener('submit', function(event) {
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  const correoRegex = /^[a-zA-Z0-9._%+-]+@duoc\.cl$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  errorMsg.textContent = "";

  if (!correoRegex.test(correo)) {
    event.preventDefault();
    errorMsg.textContent = "El correo debe ser válido y tener dominio @duoc.cl";
    return;
  }

  if (!passwordRegex.test(password)) {
    event.preventDefault();
    errorMsg.textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
    return;
  }
  event.preventDefault(); 
  window.location.href = "registro.html"; 
});
