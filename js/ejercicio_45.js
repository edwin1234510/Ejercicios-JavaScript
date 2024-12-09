//Determinar si un número es positivo y menor que 100
function Determinar(num){
    if ( num >= 0){
        if(num < 100){
            alert("el numero es positivo y menor a 100");
        }
        else{
            alert("el numero es positivo, pero no es menor a 100");
        }
    }
    else{
        alert("el numero es negativo");
    }
}
let num = parseInt(prompt("ingrese un numero : "));
let rta = Determinar(num);
console.log(rta);
