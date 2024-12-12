
function convertirANumeroTexto(num) {
    const numerosTexto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];

    if (num >= 0 && num <= 5) {
        return numerosTexto[num]; 
    } else {
        return "Número fuera de rango"; 
    }
}
console.log(convertirANumeroTexto(3)); 
console.log(convertirANumeroTexto(0));
console.log(convertirANumeroTexto(5)); 
console.log(convertirANumeroTexto(6)); 