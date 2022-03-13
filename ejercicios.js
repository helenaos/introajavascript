//ejercicio 1
const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];
//Dado un arreglo de números enteros, imprimir aquellos denominados primos

const Primo (numero) =>{
    for(let i=0; i<ejercicio1.length; i++){
        if(numero%2===1){
            console.log(`${numero} es primo`);
        }
    }
}

//ejercicio 2
//Ramón quiere hacer una fiesta privada en donde solo entre un número exclusivo
//de personas, ayudale al portero a solo dejar pasar a aquellas personas 
//mayores de edad que sean familiares de Ramón.

const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
const acceso = []

for(let indice2 = 0; indice2 < ejercicio2.length; indice2++){
  if(ejercicio2[indice2].edad >= 18 && ejercicio2[indice2].esFamiliar){
    acceso.push(ejercicio2[indice2].nombre)
  }
}

console.log(`Tienen acceso: ${acceso}`)

//Ejercicio 3
//Imprimir los primeros 50 números de la serie de Fibonacci
function serieFibonacci(limite) {
    const fibonacci = [0, 1]; // la serie comienza con 0 y 1
    for (let i = 2; i < limite; i++) { // igualamos a 2 porque es el index que nos falta
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // en el index 2 se pone la suma de lo que hay en index 1 + lo que hay en index 0
    }
    return fibonacci;
  }

  console.log(serieFibonacci(50));
  
