
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function clickPrecioFinal() {
    const inputPrecio = document.getElementById("precio");
    const precioValue = inputPrecio.value;

    const inputDescuento = document.getElementById("descuento");
    const descuentoValue = inputDescuento.value;

    const precioFinal = calcularPrecioConDescuento(precioValue, descuentoValue);

    const resultadoP = document.getElementById("mostrarPrecio");
    resultadoP.innerText = "Tu precio es: $" + precioFinal;
}



/*console.log({
    precioOriginal,
    descuento,
    precioConDescuento,
    porcentajePrecioConDescuento
})*/