//Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
//uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

function inversoAditivo(numeros) {
    return numeros.map(num => -num); 
}

const numeros = [5, -3, 0, 7, -8];
const resultado = inversoAditivo(numeros);
console.log(`El inverso aditivo de los números es: ${resultado}`);