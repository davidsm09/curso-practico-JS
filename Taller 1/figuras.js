// Codigo Del Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado
}



// Codigo Del Triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo(base, altura) {
    return (Number(base) * Number(altura)) / 2;
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
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `El perimetro es de ${perimetro} cm`
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `El area es de ${area} cm2`
}


//Funciones Para el Triangulo

function calcularPerimetroTriangulo () {
    const lado1 = document.querySelector("#lado1").value
    const lado2 = document.querySelector("#lado2").value
    const base = document.querySelector("#base").value

    const perimetroT = perimetroTriangulo(lado1, lado2, base);
    const respuestaT = document.getElementById("respuestaT");
    respuestaT.textContent = `El perimetro es de ${perimetroT} cm`
}
function calcularAreaTriangulo () {
    const altura = document.querySelector("#altura").value
    const base = document.querySelector("#base").value

    const areaT = areaTriangulo(base, altura);
    const respuestaT = document.getElementById("respuestaT");
    respuestaT.textContent = `El area es de ${areaT} cm`
}



//Funciones Para el Circulo

function calcularDiametroCirculo() {
    const inputCirculo = document.getElementById("input-circulo");
    const radio = inputCirculo.value;

    const diametroC = diametroCirculo(radio);
    const respuestaC = document.getElementById("respuestaC");
    respuestaC.textContent = `El diametro es de ${diametroC} cm`
}

function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById("input-circulo");
    const radio = inputCirculo.value;

    const perimetroC = perimetroCirculo(radio);
    const respuestaC = document.getElementById("respuestaC");
    respuestaC.textContent = `El perimetro es de ${perimetroC} cm`
}

function calcularAreaCirculo() {
    const inputCirculo = document.getElementById("input-circulo");
    const radio = inputCirculo.value;
    
    const areaC = areaCirculo(radio);
    const respuestaC = document.getElementById("respuestaC");
    respuestaC.textContent = `El area es de ${areaC} cm2`
}

//Triangulo Isósceles
function trianguloIso(){
    let isolado1 = document.getElementById("isolado1");
    let iLado1 = parseFloat(isolado1.value);

    let isolado2 = document.getElementById("isolado2");
    let iLado2 = parseFloat(isolado2.value);

    let isobase = document.getElementById("isobase");
    let iBase = parseFloat(isobase.value);

    if(iLado1 != iLado2){
        const respuestaTiso = document.getElementById("respuestaTiso");
        respuestaTiso.textContent = ("No se puede calcular debido a que los lados son diferentes");
    }else{
        const pequenoLado2 = iBase /2; 
        const pequenoBase = iLado1;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;
         
        let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const grandeAltura = pequenoLado1;
        const respuestaTiso = document.getElementById("respuestaTiso");
        respuestaTiso.textContent = (`La altura del triangulo es: ${grandeAltura}cm`);
    }
}
