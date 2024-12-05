let edad,ingreso;
edad = prompt("Que edad tienes :");
ingreso = prompt("Cantidad de ingresos mensuales :");
function verificar(edad,ingreso){
    if(edad > 16){
        if(ingreso >= 1000){
            alert("Si debe tributar");
        }
        else{
            alert("No debe tributar");
        }
    }
    else{
        alert("no cuenta con la edad minima");
    }
}
let observar = verificar(edad,ingreso);
