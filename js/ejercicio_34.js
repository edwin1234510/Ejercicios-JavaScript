function calcularTiempoLlenado(radio, altura, caudal) {
    const PI = 3.1416;
    let volumen = PI * (radio ** 2) * altura * 1000;
    let tiempoSegundos = volumen / caudal;
    let tiempoMinutos = tiempoSegundos / 60;
    return tiempoMinutos;
}
let radio = 0.5;   
let altura = 2;    
let caudal = 10; 
let rta = calcularTiempoLlenado(radio, altura, caudal);
console.log("El tiempo estimado para llenar el depósito es: " + rta + " minutos.");