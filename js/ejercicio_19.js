//Escribir un programa que calcule el área y el volumen de un cilindro
let r = parseFloat(prompt("ingrese el radio :"));
let h = parseFloat(prompt("ingrese la altura :"));
const pi = 3.1416;
function cilindro(r,h){
    let volumen = pi * r * r * h;
    let area = 2 * pi * r * h + 2 * pi * r * r;
    alert(`el volumen del cilindro es : ${volumen} y el area es : ${area}`);
}
let rta = cilindro(r,h);