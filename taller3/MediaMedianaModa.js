

function calcularMediaAritmetica(lista) {
  
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


//MEDIANA






function calcularMediana(){
    const listaNumeros = document.getElementById("input-lista").value;
  
    let arrayNumbers = Array.from(listaNumeros.split(","), Number);

    var listaOrdenada = arrayNumbers.sort(function(a,b) {
        return a - b;
    });


    const mitadLista1 = parseInt(listaOrdenada.length / 2);

    function esPar(numeros) {
        if (numeros % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
        ]);

    mediana = promedioElemento1y2;
    } else {
    mediana = listaOrdenada[mitadLista1];
    }

    const resultadoM = document.getElementById("resultado");
    resultadoM.innerText = "la mediana es " + mediana;

}


// MODA

  
function calcularModa() {
    entradaModa = document.getElementById("input-lista");
    modaValue = entradaModa.value;
  
    let arrayValor = Array.from(modaValue.split(","), Number);
  
    const listaContador = {};
  
    arrayValor.map(function (elemento) {
      if (listaContador[elemento]) {
        // listaContador[elemento] = listaContador[elemento] + 1;
        listaContador[elemento] += 1;
      } else {
        listaContador[elemento] = 1;
      }
    });
  
    const listaArray = Object.entries(listaContador).sort(function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    });
  
    const moda = listaArray[listaArray.length - 1];
    
    const mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerText = "La moda es de: " + moda;
  }