//Escribir un programa que calcule el volumen de un elipsoide. 
const pi = 3.1416;
function volumen(a,b,c){
    let v = 4/3 * pi * a * b * c;
    alert("el volumen del elipsoide es : "+v);
}
let a = parseInt(prompt("ingrese el valor de a : "));
let b = parseInt(prompt("ingrese el valor de b : "));
let c = parseInt(prompt("ingrese el valor de c : "));
let rta = volumen(a,b,c);
console.log(rta);