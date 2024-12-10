const regex = /\"(\\.|[^"\\])*\"/;
const texto = 'Esta es una "cadena con comillas" y una cadena con comillas escapadas: \\"texto\\".';
const resultado = texto.match(regex);
console.log(resultado);