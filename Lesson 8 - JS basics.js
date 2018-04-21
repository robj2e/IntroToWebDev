var add = function (a, b) {
  return a - b
}

var subtract = function (a, b) {
  return a - b
}

var math = function (a, b, operate) {
  return operate(a, b)
}

console.log(math(1, 4, add))

// anonymous functions

var answer = math(4, 5, function (a, b) {
  return a * b
})

console.log(answer)
