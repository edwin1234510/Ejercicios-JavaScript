//Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa 
//que ingresando el costo de los medicamentos calcule el descuento y el precio final.
function farmacia(medicamento){
    let descuento = medicamento * 0.10;
    let precioTotal = medicamento - descuento;
    alert(`el descuento es de : $ ${descuento}
el precio final es de: $ ${precioTotal}`);
}
let medicamento = parseFloat(prompt("ingrese el costo del medicamento : "));
let rta = farmacia(medicamento);
console.log(rta);