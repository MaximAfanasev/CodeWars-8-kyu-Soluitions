// 'a,b,c'
// 'abc'
// 'a-b-c'
// 'a,b,c'
console.log(['a', 'b', 'c'].join(','))
console.log(['a', 'b', 'c'].join(''))
console.log(['a', 'b', 'c'].join('-'))
console.log(['a', 'b', 'c'].join())

// [2, 4, 6]
const f = a => {
  return a.filter(x => x % 2 === 0)
}
console.log(f([1, 2, 3, 4, 5, 6], 2))


// [1, 2, 3] [4, 5, 6] --> 21
const f2 = (a, b) => {
  return [...a, ...b].reduce((a, b) => a + b)
}
console.log(f2([1, 2, 3], [4, 5, 6]))

// [1, 2, 1, 1, 3, 2] --> [1, 2, 3]
const f3 = a => {
  return [...new Set(a)]
}
console.log(f3([1, 2, 1, 1, 3, 2]))

// ['0', '1', '2', '3', '4', '5'] f(7) --> '1'
arr6 = ['0', '1', '2', '3', '4', '5']
const f4 = a => {
  return arr6[a % 6]
}
console.log(f4(7))

// f([1,2,'a']) == '11' (двоичная система)
const f5 = a => {
  return a.filter(x => typeof x === 'number').reduce((a, b) => a + b).toString(2)
}
console.log(f5([1, 2, 'a']))

// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
const f6 = a => {
  return a.map(x => -x)
}
console.log(f6([1, -2, 3, -4, 5]))


// "Robin Singh" --> ["Robin", "Singh"]
const strToArr = a => {
  return a.split(' ')
}
console.log(strToArr("Robin Singh"))


// [undefined,null,false,true,true,false,null,undefined], 2
const countSheeps = a => {
  return a.filter(Boolean).length
}
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]))


// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [1, 3, 5, 7, 9]
const removeEveryOther = a => {
  return a.filter((x, i) => i % 2 === 0)
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// [82, 15, 6, 38, 35]
// [min, max, diff]
// [6, 82, -76]
const differenceInAges = a => {
  const m = Math.min(...a)
  const mm = Math.max(...a)
  return [m, mm, m - mm]
}
console.log(differenceInAges([82, 15, 6, 38, 35]))


// [1,3,5,7,9,11,12], [1,2,3,4,5,10,12]
// [1,2,3,4,5,7,9,10,11,12]
const mergeArrays = (arr1, arr2) => {
  const a = [...new Set([...arr1, ...arr2])]
  return a.sort((a, b) => a - b)
}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))


// [1,2,3,4] --> 2.5
const findAverage = a => {
  return a.reduce((a, b) => a + b) / a.length
}
console.log(findAverage([1, 2, 3, 4]))


// [1,2,3,4,5] --> 3 
function getAverage(a) {
  return Math.floor(a.reduce((a, b) => a + b) / a.length)
}
console.log(getAverage([1, 2, 3, 4, 5]))

// ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) --> 30
// ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])  --> 10
// ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])   --> 0
const points = a => {
  return a.reduce((x, y) => {
    return x += y[0] > y[2] ?
      3 : y[0] < y[2] ? 0 : 1
  }, 0)
}
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]))



// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// [10, -65]
const countPositivesSumNegatives = a => {
  return a.reduce((arr, n) => {
    if (n > 0) arr[0]++
    if (n < 0) arr[1] += n
    return arr
  }, [0, 0])
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))



// ['Algebra', 'history', 'Geometry', 'english']
// ['Algebra', 'english', 'Geometry', 'history']
const sorter = a => {
  return a.sort((a, b) => {
    const aa = a.toLowerCase()
    const bb = b.toLowerCase()
    if (aa < bb) return 1
    if (bb > aa) return -1
    return 0
  })
}
console.log(sorter(['Algebra', 'History', 'Geometry', 'English']))

// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i)
  }
  return z;
}
console.log(countBy(1, 10))

// [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106] aeiou
function isVow(a) {
  for (let i = 0; i < a.length; i++) {
    let char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1) {
      a[i] = char
    }
  }
  return a
}
console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]))

// [1,-4,7,12] => 1 + 7 + 12 = 20
function positiveSum(a) {
  return a.reduce((a, b) => a + (b > 0 ? b : 0))
}
console.log(positiveSum([1, -4, 7, 12]))

// [1,2,3,4,5], greater_than_9) -> false
const ff = function (v) {
  return v < 9
}

function all(a, fun) {
  return a.every(fun)
}
console.log(all([1, 2, 3, 4, 5], ff))

// 35231 => [1,3,2,5,3]
function digitize(a) {
  return a.split('').map(Number).reverse()
}
console.log(digitize('35231'))

// [1, 2, 2] --> 9
function squareSum(a) {
  return a.reduce((a, b) => a + b * b)
}
console.log(squareSum([1, 2, 2]))

// 2 -> 1+2 = 3
// 3 -> 1+2+3
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
console.log(summation(8))

//////////// REPEAT 06.11.2024

// "GCAT"  =>  "GCAU"
function DNAtoRNA(dna) {
  return dna.split('').map(x => x === 'T' ? x = 'U' : x).join('')
}

function DNAtoRNA2(dna) {
  return dna.replace(/T/g, 'U');
}
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA2("GCAT"))

// '45385593107843568' --> '01011110001100111'
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
console.log(fakeBin('45385593107843568'))

// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n) {
  return Array.from({
    length: n + 1
  }, (v, k) => 2 ** k);
}

function powersOfTwo2(n) {
  var arr = [];
  for (var i = 0; i <= n; ++i) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}
console.log(powersOfTwo(2))
console.log(powersOfTwo2(2))

// 11 -> 1011
let num3 = 11
let toBinary = n => +n.toString(2)
console.log(toBinary(num3))

// ('+', 4, 7) --> 11
function basicOp(o, a, b) {
  return eval(a + o + b);
}
console.log(basicOp('+', 4, 7))
