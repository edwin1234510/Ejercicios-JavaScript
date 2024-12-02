//Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
//menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 


let edad = prompt("ingrese su edad :");

function verificar (edad){
    if (edad < 18){
        alert("No puede ingresar");
    }
    if (edad >= 18){
        alert("Bienvenido");
    }
}

let resultado = verificar(edad);
console.log(resultado);