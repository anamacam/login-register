const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton"); // Corregido el nombre del botón
const signInForm = document.getElementById("signin"); // Corregido el ID del formulario de inicio de sesión
const signUpForm = document.getElementById("signup"); // Corregido el ID del formulario de registro

signUpButton.addEventListener('click', function(){
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function(){
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

