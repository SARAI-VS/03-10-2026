function mostrarTexto(texto) {
    const caja = document.getElementById("texto-foto");
    const descrpcion = document.getElementById("descripcion-foto");
    descrpcion.textContent = texto;
    caja.classList.add("mostrar");
}