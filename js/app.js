// Se crea las siguientes variables para poder realizar el sifrado cesar
var element = prompt('CIFRADO CÉSAR\nEscriba la palabra: ');//Sirve para 
//que el usuario defina la letra o la palabra
var op = 0;//Sirve para poder elegir una opción
//Es un pequeño menú para que sea mas interactivo con el usuario
var strMenu = ' Escoga una opción\n1. Cifrar\n2. Decifrar\n';
op = parseInt(prompt(strMenu));
//Se crea 2 funciones para poder cifrar y decifrar el elemento

if (op === 1) {
  function cipher(element) {

    var x = 0; //Se define esta variable para poder almacenar la posición de la letra en el código ASCII
    var n = 33; // Se define la siguiente variable para poder almacenar el valor fijo
    var result = 0; // resultado de la operación.

    x = element.charCodeAt(4); // Se obtiene el código ASCII de las letras
    result = (x - 65 + n) % 26 + 65; // Se aplica la formula del cifrado cesar
    return String.fromCharCode(result); // Se obtine  como resultado la nueva letra

  }
  //  console.log(cipher('ABCDE'));
} else {

  function decipher(result) {

    var x = 0; //Se define esta variable para poder almacenar la posición de la letra en el código ASCII
    var n = 0; // Se define la siguiente variable para poder almacenar el valor fijo
    var result2; // resultado de la operación.
    x = result.charCodeAt(4); // Se obtiene el código ASCII de las letras
    result2 = (x + 65 - n) % 26 + 65; // Se aplica la formula del cifrado cesar
    return String.fromCharCode(result2); // Se obtine  como resultado la nueva letra

  }
}