
function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, ''); 
}

const texto = "Hola Mundo";
const resultado = eliminarVocales(texto);
console.log(`Cadena sin vocales: ${resultado}`);