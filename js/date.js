var fecha = new Date();
console.log(fecha)
hora = fecha.getHours()
day = fecha.getUTCDay()
console.log(day)

function saludame(hora) {
  if (hora <= 5) {
    return 'Es muy temprano'
  } else if (hora >= 6 && hora <= 11) {
    return 'Buenos dias'
  } else if (hora >= 12 && hora <= 18) {
    return 'Buenas tardes'
  } else {
    return 'Buenas noches'
  }
}

console.log(saludame(hora))