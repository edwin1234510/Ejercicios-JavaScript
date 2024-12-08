const regex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
const num = prompt("escriba el numero :");
console.log(regex.test(num));