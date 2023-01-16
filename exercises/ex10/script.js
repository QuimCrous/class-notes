// Ex 1 - Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado
let resultado = 0;
for (let index = 0; index < 100; index++) {
    resultado++;    
}

console.log(resultado);
console.log("====================");
// Ex 2 - Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.

const numbers = [10,-8,25,30,-19,157,-2];
let max = numbers[0];
let min = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > max) {
        max = numbers[index];
    }
    if (numbers[index] < min) {
        min = numbers[index];
    }   
}
console.log(max, min);

console.log("====================");
// Ex 3 - Utiliza un bucle while para imprimir los números pares del 2 al 20.
let counter = 2;
while (counter <=20) {
    if (counter % 2 === 0){
        console.log(counter);
    }
    counter++;
}

console.log("====================");
// Ex 4 - Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.

let numeroAdivinar = parseInt(prompt("Enter a number between 1 and 10:"));
let numeroIngresado = 0;
let counter2 = 0;
const numberArray = [1,2,3,4,5,6,7,8,9,10];

do {
    numeroIngresado = numberArray[numeroIngresado];
    console.log(numeroIngresado);
    counter2++;
} while (numeroIngresado!=numeroAdivinar);

console.log(counter2);
