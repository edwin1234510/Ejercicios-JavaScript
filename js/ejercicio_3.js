// Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

let a = prompt("ingrese el primer número");
let b = prompt("ingrese el segundo número");
    try{
        if(a != 0 && b != 0){
            dividir = a / b;
        }
        else{
            throw "no es posible dividir por cero";
        }
    } catch(error){
        alert(error);
    }