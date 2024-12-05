//los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
//nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
//hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
//pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.

let sexo,nombre;
sexo = prompt("ingrese su genero: masculino(m), femenino(f)");
nombre = prompt("ingrese su nombre");
let primeraL = nombre.charAt(0);
function equipo(sexo,nombre,primeraL){
    if(sexo == "f" || sexo == "F"){
        if( primeraL <= "n" || primeraL <= "N"){
            alert("Perteneces la grupo (A) "+nombre);
        }
        else{
            alert("No perteneces la grupo A ");
        }
    }
    if(sexo == "m" || sexo == "M"){
        if( primeraL >= "m" || primeraL >= "N"){
            alert("Perteneces la grupo (B) "+nombre);
        }
        else{
            alert("No perteneces la grupo A ");
        }
    }
}
let rta = equipo(sexo,nombre,primeraL)