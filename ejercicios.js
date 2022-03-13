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
  
