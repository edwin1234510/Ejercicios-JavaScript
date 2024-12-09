//Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
//$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
//un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.
function deposito(saldo){
    if (saldo <= 100000){
        let intereses = saldo * 0.03;
        let saldofin = saldo + intereses;
        alert(`debe pagar de interés es de : ${intereses}
el saldo final es de ${saldofin}`);
    }
    if (saldo > 100000){
        let intereses = saldo * 0.04;
        let saldofin = saldo + intereses;
        alert(`debe pagar de interés es de : ${intereses}
el saldo final es de ${saldofin}`);
    }
}
let saldo = parseInt(prompt("ingrese el velor del saldo : "));
let rta = deposito(saldo);
console.log(rta);
