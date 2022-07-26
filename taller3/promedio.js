
function calcularPromedio() {
    const listaNumeros = document.getElementById("input-lista").value;
  
    let arrayNumbers = Array.from(listaNumeros.split(","), Number);

   const sumaLista = arrayNumbers.reduce(
       function (valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento;
       }
   );

   const promedioLista = sumaLista / arrayNumbers.length;
  
   const resultado = document.getElementById("resultado");
   resultado.innerText = "el promedio es " + promedioLista;
}
