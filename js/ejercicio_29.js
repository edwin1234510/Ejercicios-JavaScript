//Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para 
//obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos. 
function calcular(exa1,exa2,exa3,exa4){
    if(exa1 <= 5 && exa2 <= 5 && exa3 <= 5 && exa4 <= 5){
        if(exa1 >= 1 && exa2 >= 0 && exa3 >= 0 && exa4 >= 0){
            let promedio = (exa1 + exa2 + exa3 + exa4) / 4;
            alert("el promedio de los examenes es de : "+promedio);
        }
        else{
            alert("no se acepta numeros negativos");
        }
    }
    else{
        alert("no se acepta notas mayores a 5");
    }
}
exa1 = parseFloat(prompt("nota del examen 1 :"));
exa2 = parseFloat(prompt("nota del examen 2 :"));
exa3 = parseFloat(prompt("nota del examen 3 :"));
exa4 = parseFloat(prompt("nota del examen 4 :"));
let rta = calcular(exa1,exa2,exa3,exa4);
console.log(rta);