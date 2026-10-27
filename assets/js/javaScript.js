const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("counter");

const maxCaracteres = 250;

mensaje.addEventListener("input", function () {
    const caracteresActuales = mensaje.value.length;

    contador.textContent = caracteresActuales + " / " + maxCaracteres;

    if (caracteresActuales >= maxCaracteres) {
        mensaje.classList.add("limit-reached");
    } else {
        mensaje.classList.remove("limit-reached");
    }
});