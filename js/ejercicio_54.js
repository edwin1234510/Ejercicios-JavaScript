function restar(num1,num2){
    if(num1 > num2){
        let resta = num1 - num2;
        alert("la resta es : "+resta);
    }
    else{
        alert("la operacion no es posible");
    }
}
let num1 = parseInt(prompt("ingrese el primer número : "));
let num2 = parseInt(prompt("ingrese el segundo número : "));
let rta = restar(num1,num2);
console.log(rta);