function convertidor (KH){
    let MS = 1000 / 3600;
    let conv = KH * MS;
    alert("se convirtio "+KH+" km/h en "+conv+" m/s");
}
let KH = parseFloat(prompt("indique cuantos km/h :"));
let rta = convertidor(KH);
console.log(rta);
