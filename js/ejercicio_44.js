//ealice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
//constante el valor de una moneda.
const dolar = 0.00023;
const euro = 0.00021;
function convertir(pesos){
    let conv1 = pesos * dolar;
    let conv2 = pesos * euro;
    alert(`los pesos en dolar es : ${conv1}
los pesos en euros es : ${conv2}`);
}
let pesos = parseFloat(prompt("ingrese los pesos colombianos : "));
let rta = convertir(pesos);
console.log(rta);
