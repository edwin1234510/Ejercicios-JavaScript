//Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada 
//minuto cuesta $355 pesos y un IVA 20%. 
function llamada(minutos){
    let sinIVA = minutos * 355;
    let IVA = sinIVA * 0.20;
    let preciofin = sinIVA + IVA;
    alert("el costo de la llamada + el iva es : "+preciofin);
}
let minuto = parseFloat(prompt("indique los minutos de la llamada : "));
let rta = llamada(minuto);
console.log(rta);