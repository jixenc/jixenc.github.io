
function caracterAHexadecimal(numero) {
    let caracterADecimal = parseInt(document.getElementById('numero').value);
    let decimalAHexadecimal = caracterADecimal.toString(16).toUpperCase(); // A la base 16]
    document.getElementById('resultado').innerHTML = decimalAHexadecimal;
  
    console.log('El número decimal %s en hexadecimal es %s', caracterADecimal, decimalAHexadecimal);
    
}