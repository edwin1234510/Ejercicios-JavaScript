let puntos,empleados;
empleados = parseInt(prompt("ingrese el numero de empleados : "));
for(let i = 1;i <= empleados; i++){
    puntos = parseFloat(prompt("ingrese los puntos del empleado "+i+" :"));
    if(puntos === 0.0){
        let valor = 2.400 * puntos;
        alert("nivel inaceptable del empleado "+i+" recive : "+valor+" €");
    }
    if(puntos >= 0.4 && puntos < 0.6){
        let valor = 2.400 * puntos;
        alert("nivel inaceptable del empleado "+i+" recive : "+valor+" €");
    }   
    if(puntos >= 0.6){
        let valor = 2.400 * puntos;
        alert("nivel meritorio del empleado "+i+" recive : "+valor+" €");
    } 
}
