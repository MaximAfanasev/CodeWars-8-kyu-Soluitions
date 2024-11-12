// Даны две точки P и Q, выведите симметричную точку точки P относительно Q [2, 2]
const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b];
console.log(symmetricPoint([0,0], [1,1]))

// (P-1)! + 1/P*P
const amIWilson = p => [5, 13, 563].indexOf(p) > -1
console.log(amIWilson(5))

// 111 --> 121
function nearestSq(n) {
  return Math.round(n ** 0.5) ** 2
}
console.log(nearestSq(111))

// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
function oddCount(n) {
  return Math.floor(n / 2)
}
console.log(oddCount(15))

function squareSum(a) {
  return a.reduce((a, b) => a + b * b)
}
console.log(squareSum([1, 2, 2])) // 9