//descuento Normal
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


//DEscuento con cupon

function calcularPrecioConDescuentoCupon(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    const precioConDescuentoCupon = precioConDescuento - cupon;

    if(precioConDescuentoCupon){
        return (`Precio total con cupon es: $ ${precioConDescuentoCupon}.`);
    }else {
        return (`Error: Inserte un cupon válido.`);
    } 
}


const cupons = ["codigo1", "codigo2", "codigo3"];

function onclickButtonPriceCupon() {
    const inputPrice1 = document.getElementById("precio");
    const priceValue1 = inputPrice1.value;


    const inputDiscount1 = document.getElementById("descuento");
    const discountValue1 = inputDiscount1.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    let descuento;

    switch(couponValue) {
        case "codigo1":
            descuento = 10;
        break;
        case "codigo2":
            descuento = 15;
        break;
        case "codigo3":
            descuento = 30;
        break;
    }


    const precioConDescuentoCupon = calcularPrecioConDescuentoCupon(priceValue1, discountValue1, descuento);

    const ResultPC = document.getElementById("ResultPC");
    ResultPC.innerText = precioConDescuentoCupon;
}


/*console.log({
    precioOriginal,
    descuento,
    precioConDescuento,
    porcentajePrecioConDescuento
})*/