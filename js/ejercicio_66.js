let cantidad = parseFloat(prompt("Ingresa la cantidad a invertir:"));
let interes = parseFloat(prompt("Ingresa el interés anual en porcentaje:"));
let años = parseInt(prompt("Ingresa el número de años:"));
let capital = cantidad;
for (let i = 1; i <= años; i++) {
    capital = capital + (capital * interes / 100); 
    alert("Año " + i + ": " + capital); 
}