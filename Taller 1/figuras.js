// Codigo Del Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado
}



// Codigo Del Cuadrado
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 



// Codigo Del Circulo
function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}


//Aqui Creamos interactividad Entre HTML y JS

//Funciones Para el Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro de el cuadrado es " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area= areaCuadrado(value);
    alert("El area de el cuadrado es " + area + "cm2");
}

//HAcer LAs Funciones PAra Triangulo Y Circulo