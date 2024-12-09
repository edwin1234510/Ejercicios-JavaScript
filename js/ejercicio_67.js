//Escribir un programa que pida al usuario un número entero y muestre por pantalla un
//triángulo rectángulo como el de más abajo, de altura el número introducido.
// Pedir al usuario un número entero
let altura = parseInt(prompt("Ingresa un número entero para la altura del triángulo:"));
for (let i = 1; i <= altura; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "*";
    }
    console.log(fila);
}

