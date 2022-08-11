const h1 = document.querySelector('h1');
const input1 = document.querySelector('#inputid1');
const input2 = document.querySelector('#inputid2');
const btn = document.querySelector('#btnCalcular');
const respuesta = document.querySelector('#respuesta');


function btnOnClick() {
    const suma = input1.value + input2.value;
    respuesta.innerText = "tu suma es de:" + suma;
}