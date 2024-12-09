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
    if(num1 == num2 && num2 == num1){
        alert(`son iguales ${num1} y ${num2}`);
    }
    if(num2 == num3 && num3 == num2){
        alert(`son iguales ${num2} y ${num3}`);
    }
    if(num1 == num3 && num3 == num1){
        alert(`son iguales ${num1} y ${num3}`);
    }
    if(num1 == num2 && num1 == num3 && num2 == num3 && num3 == num2 && num2 == num1 && num3 == num1){
        alert(`son iguales todos ${num1} , ${num2} , ${num3}`);
    }
}
let num1 = parseInt(prompt("ingrese el primer número : "));
let num2 = parseInt(prompt("ingrese el segundo número : "));
let num3 = parseInt(prompt("ingrese el tercer número : "));
let rta = calcular(num1, num2, num3);
console.log(rta);