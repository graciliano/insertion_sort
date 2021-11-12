// Algorito de ordenação por inserção
const array = [2, 5, 7 , 9 , 1 , 3]
var numero
var token

console.log(array)

array.forEach(function(valor, i) {
  numero = valor
  token = i - 1

  while(token >= 0 && numero < array[token]) {
    array[token+1] = array[token]
    token--
  }
  array[token+1] = numero
})

console.log(array)
