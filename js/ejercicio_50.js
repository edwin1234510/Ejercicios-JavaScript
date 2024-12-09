function alerta(presion, temperatura){
    if(presion > 200){
        alert("presion : ALARMA");
    }
    if(presion < 200){
        alert("presion : NORMAL");
    }
    if(temperatura > 100){
        alert("temperatura : ALARMA");
    }
    if(temperatura < 100){
        alert("temperatura : NORMAL");
    }
}
let presion = parseFloat(prompt("ingrese la presión : "));
let temperatura = parseFloat(prompt("ingrese la temperatura : "));
let rta = alerta(presion, temperatura);
console.log(rta);
