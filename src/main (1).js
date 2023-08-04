const form = document.getElementById('formulario');
const campo = document.getElementById('campo');

window.localStorage.clear()

form.addEventListener('submit', function(e) {
    e.preventDefault()
    window.localStorage.setItem('nomeUsuario', campo.value);

    window.location.href = 'home.html'
});