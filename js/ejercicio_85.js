//Obtén una serie de número y devuelve la suma de todos los números positivos, si no
//tenemos números positivos la sume debe devolver 0.
function suma(cantidad){
    let contador = 0;
    for(let i = 1; i <= cantidad; i++){
        let num = parseInt(prompt("ingrese el numero : "));
        contador += num;
        if(num < 0){
            contador = 0;
            break;
        }
    }
    alert("la suma es : "+contador);
}
let cantidad = parseInt(prompt("ingrese la cantidad de numeros : "));
console.log(suma(cantidad));
