arr = ['a', 'b', 'c']

// 'a,b,c'
// 'abc'
// 'a-b-c'
// 'a,b,c'

console.log(arr.join(','))
console.log(arr.join(''))
console.log(arr.join('-'))
console.log(arr.join())



const arr2 = [1, 2, 3, 4, 5, 6]
const divider = 2
// [2, 4, 6]
const f = a => {
	return a.filter(x => x%2 === 0)
}

console.log(f(arr2, divider))


// [1, 2, 3] [4, 5, 6] --> 21

const arr3 = [1, 2, 3]
const arr4 = [4, 5, 6]

const f2 = (a, b) => {
	return [...a,...b].reduce((a,b)=>a+b)
}

console.log(f2(arr3, arr4))





// [1, 2, 1, 1, 3, 2] --> [1, 2, 3]

const arr5 = [1, 2, 1, 1, 3, 2]

const f3 = a => {
	return [...new Set(a)]
}

console.log(f3(arr5))



// ['0', '1', '2', '3', '4', '5'] f(7) --> '1'
arr6 = ['0', '1', '2', '3', '4', '5']

const f4 = a => {
	return arr6[a%6]
}

console.log(f4(7))



// f([1,2,'a']) == '11' (двоичная система)

const f5 = a => {
	return a.filter(x=>typeof x === 'number').reduce((a,b)=>a+b).toString(2)
}

console.log(f5([1, 2, 'a']))






// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]

const arr7 = [1, -2, 3, -4, 5]

const f6 = a => {
	return a.map(x=>-x)
}

console.log(f6(arr7))


// "Robin Singh" --> ["Robin", "Singh"]
const str = "Robin Singh"

const strToArr = a => {
	return a.split(' ')
}

console.log(strToArr(str))


// [undefined,null,false,true,true,false,null,undefined], 2
arr11 = [undefined, null, false, true, true, false, null, undefined]

const countSheeps = a => {
	return a.filter(Boolean).length
}

console.log(countSheeps(arr11))


// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [1, 3, 5, 7, 9]
arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const removeEveryOther = a => {
	return arr.filter((x,i)=>i%2===0)
}

console.log(removeEveryOther(arr12))


// [82, 15, 6, 38, 35]
// [min, max, diff]
// [6, 82, -76]

const arr14 = [82, 15, 6, 38, 35]

const differenceInAges = ages => {
 const m = Math.min(...arr14)
 const mm = Math.max(...arr14)
 return [m, mm, m-mm]
}

console.log(differenceInAges(arr14))



// [1,3,5,7,9,11,12], [1,2,3,4,5,10,12]
// [1,2,3,4,5,7,9,10,11,12]
const arr16 = [1,3,5,7,9,11,12]
const arr17 = [1,2,3,4,5,10,12]

const mergeArrays = (arr1, arr2) => {
  const a = [...new Set([...arr1,...arr2])]
  return a.sort((a,b)=>a-b)
}

console.log(mergeArrays(arr16, arr17))


// [1,2,3,4] --> 2.5
const arr18 = [1,2,3,4]

const findAverage = a => {
  return a.reduce((a,b)=>a+b)/a.length
}


console.log(findAverage(arr18))


// [1,2,3,4,5] --> 3 
const arr20 = [1,2,3,4,5]

function getAverage(a){
  return Math.floor(a.reduce((a,b)=>a+b)/a.length)
}

console.log(getAverage(arr20))


//////////// REPEAT



// ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) --> 30
// ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])  --> 10
// ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])   --> 0

arr8 = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]
arr9 = ["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]
arr10 = ["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]

const points = a => {
	return a.reduce((x,y)=> {
    return x += y[0] > y[2] ?
      3 : y[0] < y[2] ? 0 : 1
  }, 0)
}

console.log(points(arr8))
console.log(points(arr9))
console.log(points(arr10))



// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// [10, -65]
const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]


const countPositivesSumNegatives = a => {
	return a.reduce((arr,n)=> {
    if (n>0) arr[0]++
    if (n<0) arr[1]+=n
    return arr
  }, [0,0])
}

console.log(countPositivesSumNegatives(arr13))



// ['Algebra', 'history', 'Geometry', 'english']
// ['Algebra', 'english', 'Geometry', 'history']
const arr15 = ['Algebra', 'History', 'Geometry', 'English']

const sorter = a => {
	return a.sort((a,b)=> {
    const aa = a.toLowerCase()
    const bb = b.toLowerCase()
    if (aa < bb) return 1
    if (bb > aa) return -1
    return 0
  })
}

console.log(sorter(arr15))



// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

let x = 1
let n = 10

function countBy(x, n) {
  let z = [];
  for(let i =1; i<=n;i++) {
    z.push(x*i)
  }
  return z;
}

console.log(countBy(x,n))



// [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106] aeiou

const arr19 = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]

function isVow(a){
 for (let i=0; i< a.length; i++) {
   let char = String.fromCharCode(a[i])
   if ('aeiou'.indexOf(char) !== -1) {
     a[i] = char
   }
 }
   return a
}

console.log(isVow(arr19))




// [1,-4,7,12] => 1 + 7 + 12 = 20
const arr21 = [1,-4,7,12]
function positiveSum(a) {
  return a.reduce((a,b)=>a + (b>0? b : 0))
}
console.log(positiveSum(arr21))




// [1,2,3,4,5], greater_than_9) -> false
const arr22 = [1,2,3,4,5]
const ff = function(v){return v<9}
function all(a, fun ){
  return a.every(fun)
}
console.log(all(arr22,ff))


// 35231 => [1,3,2,5,3]
const Str1 = '35231'

function digitize(a) {
  return a.split('').map(Number).reverse()
}

console.log(digitize(Str1))



// [1, 2, 2] --> 9
const arr23 = [1,2,2]
function squareSum(a){
  return a.reduce((a,b)=> a + b*b)
}

console.log(squareSum(arr23))



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




// "GCAT"  =>  "GCAU"
const xx = "GCAT"

function DNAtoRNA(dna) {
  return dna.split('').map(x=>x==='T'? x='U' : x).join('')
}

function DNAtoRNA2(dna) {
  return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA(xx))
console.log(DNAtoRNA2(xx))


// '45385593107843568' --> '01011110001100111'
const str2 = '45385593107843568'
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

console.log(fakeBin(str2))

// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
const num = 2

function powersOfTwo(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}

function powersOfTwo2(n){
  var arr = [];
  
  for (var i=0; i<=n; ++i){
    arr.push(Math.pow(2, i));
  }
  
  return arr;
}

console.log(powersOfTwo(num))
console.log(powersOfTwo2(num))


// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
let num2 = 15

function oddCount(n){
   return Math.floor(n/2)
}

console.log(oddCount(num2))


// n = 11 should return 1011

let toBinary = n => +n.toString(2)






