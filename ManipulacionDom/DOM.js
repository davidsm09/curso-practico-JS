const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#inputid1');
const input2 = document.querySelector('#inputid2');
const btn = document.querySelector('#btnCalcular');
const respuesta = document.querySelector('#respuesta');

form.addEventListener('submit', sumar);

function sumar(event) {
    event.preventDefault();
    const suma = input1.value + input2.value;
    respuesta.innerText = "tu suma es de:" + suma;
} 

