//Escribir un programa que sume, resta, multiplique y divida dos números.
let a,b;
a = parseInt(prompt("ingrese el primer numero"));
b = parseInt(prompt("ingrese el segundo numero"));
function calcular(a,b){
    let suma = a + b;
    let resta = a - b;
    let divi = a / b;
    let multi = a / b;
    alert(`suma es : ${suma}
            resta es : ${resta}
            divicion es : ${divi}
            multiplicacion es : ${multi}`);
}
let rta = calcular(a,b);