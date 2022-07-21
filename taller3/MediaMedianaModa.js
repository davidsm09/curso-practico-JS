//MEDIA

function calcularMediaAritmetica() {
     const lista = document.getElementById("input-lista");
     const listavalue = lista.value;

    const sumaLista = listavalue.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / listavalue.length;
   
    const resultado = document.getElementById("resultado");
    resultado.innerText = "el promedio es " + promedioLista;
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

  
  function calcularModa(lista){
    const listaCount = {};
    lista.map(
        function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento]+=1
            }
            else{
                listaCount[elemento]=1;
            }       
        }
    );
    const listaArray = Object.entries(listaCount).sort( 
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]; 
        }
    );
    const moda = listaArray[listaArray.length - 1];
    return "La moda es: " +moda[0] + " que se repité " + moda[1] + " veces";
} 
