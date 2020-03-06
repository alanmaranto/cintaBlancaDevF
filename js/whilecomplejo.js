var alan = {
    nombre: 'Alan',
    edad: 18,
    peso: 80
  }
  
  var perro = {
    color: 'cafe',
    orejas: 2,
    raza: 'chihuahua',
    nombre: 'manchas'
  }
  
  console.log('Al inicio de año ' + alan.nombre + ' pesa ' + alan.peso)
  
  var dias = 365;
  var variaciónPeso = 0.3
  
  function aumentarDePeso(masa) {
    return masa.peso += variaciónPeso
  }
  
  function reducirDePeso(masa){
    return masa.peso -= variaciónPeso
  }
  
  function comer(){
    return Math.random() <0.3
  }
  
  function realizaDeporte(){
    return Math.random() <0.4
  }
  
  var dia = 0
  var meta = alan.peso - 5;
  
  while(alan.peso > meta){
    if(comer()){
      aumentarDePeso(alan)
    }
    if(realizaDeporte()){
      reducirDePeso(alan)
    }
    dia +=1
  }
  
  console.log('Pasaron ' +dia + ' dias hasta que ' +alan.nombre + ' adelgazó ')