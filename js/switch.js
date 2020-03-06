var signo = prompt('¿Cual es tu signo');

switch(signo.toLowerCase()) {
  case"aries":
  console.log("Tendrás un lindo dia hoy");
  break; 

  case"tauro":
  console.log("Serás muy rico")
  break;

  case"sagitario":
  console.log("tendrás un nuevo trabajo");
  break
  default:
  console.log('Ingrese un signo correcto')
}