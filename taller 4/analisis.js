const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColsorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

function esPar(numero) {
    return (numero % 2 ===0);
        
}

function medianaSalariosCol(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}