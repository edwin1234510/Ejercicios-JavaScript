function calcularDistancia(x1, y1, x2, y2) {
    let diferenciaX = x2 - x1;
    let diferenciaY = y2 - y1;
    let distancia = (diferenciaX ** 2 + diferenciaY ** 2) ** 0.5;
    return distancia;
}
let x1 = parseInt(prompt("ingrese el valor de x1 :"));
let y1 = parseInt(prompt("ingrese el valor de y1 :"));
let x2 = parseInt(prompt("ingrese el valor de x2 :"));
let y2 = parseInt(prompt("ingrese el valor de y2 :")); 
let distancia = calcularDistancia(x1, y1, x2, y2);
console.log("La distancia entre los puntos es: " + distancia);