
function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}
let numero = parseInt(prompt("ingrese el número"));
let rta = determinarParidad(numero);
console.log(rta); 