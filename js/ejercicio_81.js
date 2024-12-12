
function encontrarMayor(arreglo) {
    let mayor = arreglo[0]; 
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i]; 
        }
    }
    return mayor;
}
let numeros = [3, 7, 2, 9, 5];
let resultado = encontrarMayor(numeros);
console.log(`El número mayor es: ${resultado}`);
