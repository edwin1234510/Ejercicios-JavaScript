//Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
function calcular(num1, num2, num3){
    if(num1 > num2 && num1 > num3 && num2 > num3){
        alert(`${num1} , ${num2} , ${num3}`);
    }
    if(num1 > num2 && num1 > num3 && num3 > num2){
        alert(`${num1} , ${num3} , ${num2}`);
    }
    if(num2 > num1 && num2 > num3 && num1 > num3){
        alert(`${num2} , ${num1} , ${num3}`);
    }
    if(num2 > num1 && num2 > num3 && num3 > num1){
        alert(`${num2} , ${num3} , ${num1}`);
    }
    if(num3 > num1 && num3 > num2 && num2 > num1){
        alert(`${num3} , ${num2} , ${num1}`);
    }
    if(num3 > num1 && num3 > num2 && num1 > num2){
        alert(`${num3} , ${num1} , ${num2}`);
    }
}
let num1 = parseInt(prompt("ingrese el primer número : "));
let num2 = parseInt(prompt("ingrese el segundo número : "));
let num3 = parseInt(prompt("ingrese el tercer número : "));
let rta = calcular(num1, num2, num3);
console.log(rta);