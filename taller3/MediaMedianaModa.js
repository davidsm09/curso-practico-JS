//MEDIA

function calcularMediaAritmetica(lista) {
    //let sumaLista = 0;
    //for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    //}

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


//MEDIANA




function esPar(numeros) {
    if (numeros % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(listaNumeros){

    var listaOrdenada = listaNumeros.sort(function(a,b) {
        return a - b;
    });

    const mitadLista1 = parseInt(listaOrdenada.length / 2);

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
    return mediana;
}


// MODA

const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];

  //Tarea pasar a funcion para que calcule cualquier lista
