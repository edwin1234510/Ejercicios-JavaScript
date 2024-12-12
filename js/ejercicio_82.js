
function invertirCadena(cadena) {
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i]; 
    }
    return cadenaInvertida;
}

let texto = "Hola";
let resultado = invertirCadena(texto);
console.log(`La cadena invertida es: ${resultado}`);
