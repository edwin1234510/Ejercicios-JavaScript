
function sumarEnBinario(num1, num2) {
    const suma = num1 + num2; 
    return suma.toString(2); 
}


const numero1 = 5; 
const numero2 = 3; 
const resultado = sumarEnBinario(numero1, numero2);
console.log(`La suma de ${numero1} y ${numero2} en binario es: ${resultado}`);