// Codigo Del Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es: " + areaCuadrado +"cm▵2");

console.groupEnd();




// Codigo Del Triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: " + ladoTriangulo1 +"cm",+ ladoTriangulo2 +"cm " + baseTriangulo + "cm ");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo +"cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo +"cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del triangulo es: " + areaTriangulo +"cm▵2");

console.groupEnd();


// Codigo Del Triangulo

console.group("Circulos");

const radioCirculo = 4;
console.log("el radio del circulo mide: " + radioCirculo +"cm");

const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo mide: " + diametroCirculo +"cm");

const PI = Math.PI;
console.log("PI es: " + radioCirculo);

const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro del circulo mide: " + perimetroCirculo +"cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del circulo mide: " + areaCirculo +"cm▵2");


console.groupEnd();