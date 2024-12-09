//Escribir un programa que calcule el volumen de una esfera.
const pi = 3.1416;
let radio = parseFloat(prompt("ingrese el radio del cilindro"));
function calcular(radio){
    let v = 3 / 4 * pi * radio * radio * radio;
    alert("el volumen de una esfera es : "+v);
}
let rta = calcular(radio);