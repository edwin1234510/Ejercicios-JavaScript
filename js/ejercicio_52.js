function salarios(minuscula,horas){
    if (minuscula == "p"){
        let planta = horas * 20000;
        alert("planta -- su pago es de : $ "+planta);
    }
    if (minuscula == "a"){
        let admi = horas * 10000;
        alert("administrativo -- su pago es de : $ "+admi);
    }
}
let opcion = prompt("indique si es de: planta (p) o administrativo (a)");
let horas = parseInt(prompt("cuantas horas trabajo : "));
let minuscula = opcion.toLowerCase();
let rta = salarios(minuscula,horas);
console.log(rta);