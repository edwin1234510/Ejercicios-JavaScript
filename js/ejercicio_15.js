//Escribir un programa que calcule la longitud y el área de una circunferencia.
const pi = 3.1416;
let radio = parseFloat(prompt("ingrese el radio de la circuferencia : "));
function calcular(radio){
    let area = pi * radio* radio;
    let longitud = 2 * pi * radio;
    alert(`el area es ${area} y  la longitud es ${longitud}`);
}
let rta = calcular(radio);