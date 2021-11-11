const numbers = [2, 5, 7 , 9 , 1 , 3]
var num
var token

console.log(numbers);

for (let i = 1; i < numbers.length; i++) {
  num = numbers[i]
  token = i - 1

  while(token >= 0 && num < numbers[token]) {
    numbers[token+1] = numbers[token]
    token--
  }
  numbers[token+1] = num
}

console.log(numbers);
