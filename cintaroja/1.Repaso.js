
 let nombre = 'Alan'

 function mostrarNombre (nombre) {
   return nombre;
 }
 
 //ECMA 6
 
 // Arrow Functions
 
 const mostrarNoombre = nombre => nombre
 
 console.log(mostrarNombre(nombre))
 
 const farenheitToCentigrades = (fahrenheit) => {
   return Math.round((fahrenheit - 32) * (5/9)) + "ºC"
 }
 
 console.log(farenheitToCentigrades(33))
 
 // Condicionales
 
 // Funcion que halla el maximo entre dos numeros
 
 let maximoDos = (num1, num2) => {
   if (num1 > num2) {
     return num1
   } else if (num1 < num2) {
     return num2
   } else {
     return num1
   }
 }
 
 console.log(maximoDos(10,20))
 
 // Funcion que checa si un numero es negativo, positivo o cero
 
 const revisarNumero = (numero) => {
   if (numero === 0) {
     return 'El numero introducido es un cero'
   } else if (numero > 0) {
     return 'El numero es positivo'
   } else if (numero < 0) {
     return 'El numero es negatico'
   } else return 'Algo raro pasó'
 }
 
 console.log(revisarNumero('a'))
 
 // Ciclo
 
 // Funcion que imprime todos los numeros de 1 hasta n
 
 const imprimeNumeros = (n) => {
   for(let i=0; i<=n; i++){
     console.log(i)
   }
 }
 
 imprimeNumeros(11)
 
 const persona = {
   nombre: 'Alan',
   edad: 25,
 }
 
 const lista = [1, "3", true, persona]
 console.log(lista)
 console.log(lista[2])
 console.log(lista[3].edad)
 
 lista.push('alan')
 console.log(lista)