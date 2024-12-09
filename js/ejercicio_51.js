//Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
//los $130.000 el descuento será del 15%, de lo contrario no hay descuento.
let contador = 0;
function Calcular(cantidad){
    let valor;
    for( let i = 1; i <= cantidad; i++){
        valor = parseInt(prompt("ingrese el precio del pago "+i+" : "));
        contador += valor;
    }
    if(contador > 130){
        let descuento = contador * 0.15;
        let valortTotal = contador - descuento;
        alert("se le aplico el 15% de descuento : "+valortTotal)
    }
    if(contador < 130){
        alert("no cuenta con descuento : "+contador)
    }
}
let cantidad = parseInt(prompt("ingrese cuantos pagos se debe hacer : "));
let rta = Calcular(cantidad);
console.log(rta);