// Сортировка пузырьком
// function sort(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//             }
//         }
//     }
//     return arr
// }
//
// console.log(sort([133, 22, 14, 2, 2, 12, 3, 5, 5, 4, 5, 33]))

// function buildString(...template){
//   return `I like ${template.join(',')}!`;
// }

// console.log(buildString('Cheese','Milk','Chocolate'));

// function isPalindrome(x) {
//   return x.split('').reverse().join('').toLowerCase() === x.toLowerCase()
//     ? true
//     : false;
// }

// console.log(isPalindrome('Abba'));

// function getAverage(marks) {
//   const sum = marks.reduce((a, b) => a + b);
//   const sum2 = Math.floor(sum / marks.length);

//   return sum2;
// }

// console.log(getAverage([2, 2, 2, 2]));

// function howManyLightsabersDoYouOwn(name) {
//   if (name === 'Zach') {
//     return 18;
//   } else {
//     return 0;
//   }
// }

// console.log(howManyLightsabersDoYouOwn('Zach'));

// function spoonerize(words) {
//   const picking = words.split(' ')[1];
//   const picking1 = picking[0]; // p
//   const str = words[0]; // n
//   const str2 = words.split(' ')[1][0]; // p

//   const niking = picking.replace(picking1, str);

//   const word1 = words.replace(str, str2).replace().split(' ')[0];

//   return word1 + ' ' + niking;
// }

// console.log(spoonerize('nit picking'));

//'pit nicking'

////////////////////////////

// const squareOfNumber = (num) => {
//   return num * num;
// };

// console.log(squareOfNumber(3));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return mpg * fuelLeft >= distanceToPump ? true : false;
// };
//
// console.log(zeroFuel(100, 50, 1));

// function bmi(weight, height) {
//   const body = weight / (height * height)
//   if(body <= 18.5) {
//    return  "Underweight"
//   } else if (body <= 25.0) {
//     return "Normal"
//   } else if (body <= 30.0) {
//     return  "Overweight"
//   } else if ( body > 30 ) {
//     return "Obese"
//   }
// }
//
// console.log(bmi(80, 1.80))
//
// // if bmi <= 18.5 return "Underweight"
// //
// // if bmi <= 25.0 return "Normal"
// //
// // if bmi <= 30.0 return "Overweight"
// //
// // if bmi > 30 return "Obese"

// function isPythagoreanTriple(integers) {
//   const c = Math.pow(Math. max(...integers), 2)
//   const a = Math.pow(integers.filter(el => el < c )[0], 2)
//   const b = Math.pow(integers.filter(el => el < c )[1], 2)
//
//   console.log(c , a, b)
//
//   return c === a + b
// }
// console.log(isPythagoreanTriple([72, 78, 30]))

// const str = () => "Hello World"
// console.log(str())

/*function saleHotdogs(n){

  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
  //
  // if(n < 5) {
  //   return n * 100
  // } else if () {
  //   return n * 95
  // } else if (n >= 10) {
  //   return n * 90
  // }
}
console.log(saleHotdogs(4))*/

/*function barTriang(p1, p2, p3){
    let x = +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4)
    let y = +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)

    return [x, y]
}

console.log(barTriang([4, 6], [12, 4], [10, 10]))*/ // [8.6667, 6.6667]
//
// function mystery() {
//     var results =
//         {sanity: 'Hello'};
//     return results;
// }
//
// console.log(mystery())

// function sumStr(a,b) {
//     return (+a + +b).toString()
// }
//
// console.log(sumStr("4","5"))

// function otherAngle(a, b) {
//     return 180 - (a + b)
// }
// console.log(otherAngle(40, 60))

// function repeatStr (n, s) {
//     return s.repeat(n)
// }
// console.log(repeatStr(3, "*"))

///////////////////////////////////////////////////////////////////////////////////
// const orderedCount = function (text) {
//
//     let result = [];
//
//     for (let i = 0; i < text.length; i++) {
//         let count = 0;
//
//         for (let j = 0; j < result.length; j++) {
//             if (result[j][0] === text[i]) {
//                 count++;
//             }
//         }
//
//         if (count === 0) {
//             for (let j = i; j < text.length; j++) {
//                 if (text[j] === text[i]) {
//                     count++;
//                 }
//             }
//             result.push([text[i], count]);
//         }
//     }
//     return result;
//
// }
//
// //[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// console.log(orderedCount("abracadabra"))

///////////////////////////////////////////////////////////////////////////////


// function hexHash(code){
//
//     var hash = 0, i = 0, len = code.length;
//     while ( i < len ) {
//         hash  = ((hash << 5) - hash + code.charCodeAt(i++)) << 0;
//     }
//     return hash;
// }
//
// console.log(hexHash('Yo')) // 113
// console.log(hexHash('Hello, World')) // 113


//
// function stray(numbers) {
//     console.log(numbers.lastIndexOf(1))
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//             return numbers[i]
//         }
//     }
// }


// function DNAStrand(dna){
//
//     let result = []
//     for (let i = 0; i < dna.length; i++) {
//         dna[i] === "A" && result.push("T")
//         dna[i] === "T" && result.push("A")
//         dna[i] === "G" && result.push("C")
//         dna[i] === "C" && result.push("G")
//
//         console.log(dna[i])
//     }
//     return result.join("")
// }
//
// console.log(DNAStrand("ATTGC"))
//"TAACG"
// function isInStrictMode() {
//  return  !this
// }
//
// console.log(isInStrictMode())

// function cockroachSpeed(s) {
//     let a = (s*1000*100) / 3600
//
//     return a.toFixed()
// }
//
//

// console.log(cockroachSpeed(1.08))

// function solution(str, ending){
//     const lengthEnding = ending.length
//
//     if (ending === "") {
//         return true
//     } else {
//         return str.slice(-lengthEnding) === ending
//     }
//
// }
// console.log(solution('abcde', 'cde')) //true
// console.log(solution('abcde', 'abc')) //false
// console.log(solution('abcde', '')) //false

// function shortcut(string) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//    return string.split('').filter(el => !vowels.includes(el)).join('')
// }
//
// console.log(shortcut('hello')) // "hll"

// function shortcut(string) {
//
//     let result = []
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     const str = string.split('')
//
//     for (let i = 0; i < str.length; i++) {
//         vowels.includes(str[i]) ? '' : result.push(str[i])
//     }
//     return result.join('')
// }
//
// console.log(shortcut('hello')) // "hll"

// console.log(shortcut("codewars")) // "cdwrs"

// a, e, i, o, u

// const flatten = (array) => {
//     return array.flat()
// }
//
// console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]])) // "cdwrs"

// const complete = str => {
//     let result = str.split('') // ['x', 'y', 'z']
//
//     const initialString = str.split('') // ['x', 'y', 'z']
//
//     const addElementIndex = str.length
//
//     for (let i = 0; i < str.length; i++) {
//
//         const copyResult = [...result]
//
//         result.splice(addElementIndex, 0, initialString.shift())
//
//         console.log(result.join(''))
//         console.log(copyResult.reverse().join(''))
//
//         // if (result.join('') === copyResult.reverse().join('')) break
//
//         console.log(result)
//
//     }
//     return result
// }


//
// //console.log(complete("a")) // "aa"
//  // console.log(complete("abab")) // "ababa"
//  //console.log(complete("Baa")) // "BaaB"
//  // console.log(complete("aOOa")) // "aOOaOOa"
// //  console.log(complete("AaaaA")) // "AaaaAaaaA"
// console.log(complete("xyz")) // "xyzyx"

// const sumTo = (num) => {
//     let result = 0
//
//     for (let i = 1; i <= num; i++) {
//         result = result + i
//         console.log({result, i})
//     }
//     return result
// }
//
// console.log(sumTo(4))

// const sumTo = (num) => {
//     // debugger
//     if (num === 1) return 1
//     else {
//        return num + sumTo(num -1)
//     }
// }
//
// console.log(sumTo(3))

// const factorial = (n) => {
//     let result = 1
//     for (let i = 1; i <= n; i++) {
//         result = result * i
//     }
//     return result
// }
//
// console.log(factorial(5))


// const factorial2 = (n) => {
//     // debugger
//    if (n === 1) return 1
//     else {
//         return n * factorial2(n - 1)
//    }
// }
//
// console.log(factorial2(4))

// function flatten(array) {
//     const res = []
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             const flat = flatten(array[i])
//             for (let j = 0; j < flat.length; j++) {
//                 res.push(flat[j])
//             }
//         } else {
//             res.push(array[i])
//         }
//     }
//     return res
// }
//
//
// console.log(flatten([[[[[[[[1]]]]]]], [[[[[[[[[2, 3]]]]]]]]], [[[4]]]])) // -> [1, 2, 3, 4]

// function descendingOrder(n){
//     const num = n.toString().split('').map(el => +el)
//
//     num.sort((a, b) => a > b ? -1 :1)
//
//      return  +num.join('')
//
// }
//
// console.log(descendingOrder(12345 ))
// console.log(descendingOrder(42145 ))

// const consonantCount = (str) => str.replace(/[aeiou]|[^a-z]/gi,'').length
//
//
// console.log(consonantCount('XaeiouX'))


// const isSquare = (n) => {
//     if (n < 0) {
//         return false
//     }
//
//     for (let i = 0; i <= n; i++) {
//         if (i * i === n) {
//             return true
//         } else if (i * i > n) {
//             return false
//         }
//     }
// }
//
// console.log(isSquare(-1))

// function trim(str, size) {
//   return  str.length <= size ? str : str.slice(0, str.length > 3 ? size -3 : size) + '...'
// }
//
// console.log(trim("Creating kata is fun", 14))

// function addToList(item, list) {
//     return list.push(item)
// }
//
// const result = addToList('apple', ['banana'])
//
// console.log(result)

// const arr1 = [{firstName: 'Anna'}]
// const arr2 = [{...arr1[0]}]
// arr2[0].firstName = 'Artur'
//
// console.log(arr1)
// console.log(arr2)


// function sumOfIntegersInString(s) {
//
// return console.log(s
//     .split(" ").map(el => Number(el)).reduce((a, b) => a + b))
//
// }
//
// console.log(sumOfIntegersInString("from 1929 to 1939.")) //18

// function makeMove(sticks) {
//     if(sticks % 4 == 0) {
//         return Math.random() * 3 +1
//     }
//     return sticks % 4
// }
//
// console.log(makeMove(21))

// function convertHashToArray(hash){
//
//     const keys = Object.keys(hash)
//     const values = Object.values(hash)
//
//     const result = []
//
//     for (let i = 0; i < keys.length; i++) {
//         result.push([keys[i], values[i] ])
//     }
//
//     return result.sort()
// }
//
// console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

// const convertHashToArray = (hash) => Object.entries(hash).sort()
//
// console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

// function covfefe(str) {
//     return str.split(' ').includes('coverage') ? str.replace(/coverage/g, "covfefe") : str + " covfefe"
// }
//
// console.log(covfefe("coverage"))
// console.log(covfefe("coverage coverage"))
// console.log(covfefe("nothing"))
// console.log(covfefe("double space "))

// function largest(n, array) {
//     return n === 0 ? [] : array.sort((a, b) => a - b).splice(-n)
// }
//
// console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]))
// console.log(largest(0, [7, 6, 5, 4, 3, 2, 1]))
// console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))


// function run() {
//     let a = Promise.resolve((Math.random() * 10).toFixed())
//     return a
// }
//
// run().then(n => console.log(n) )

// const promise = new Promise((res, rej) => {
//    setTimeout(() => res() , 3000)
// }).then((data) => console.log(data))
//
// console.log(promise)

// function solve(s){
//     let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let b = "abcdefghijklmnopqrstuvwxyz";
//     let c = '1234567890';
//     let up = 0;
//     let low = 0;
//     let num = 0;
//     let char = 0;
//     s = s.split('');
//
//     for (let i = 0; i < s.length; i++) {
//         if(a.includes(s[i])) {up++}
//         if(b.includes(s[i])) {low++}
//         if(c.includes(s[i])) {num++}
//         if (!a.includes(s[i]) && !b.includes(s[i]) && !c.includes(s[i])) char++
//     }
//
//     return [up,low,num,char];
// }
//
// console.log(solve("*'&ABCDabcde12345"))
//
// // function solve(s) {
// //
// //     let capitalsLetter = 0
// //     let lowerCasesLetter = 0
// //     let numbers = 0
// //     let symbols = 0
// //
// //     s.split('').forEach(letter => {
// //         if(/[a-z]/.test(letter)) lowerCasesLetter++
// //         else if(/[A-Z]/.test(letter)) capitalsLetter++
// //         else if(/[0-9]/.test(letter)) numbers++
// //         else symbols++
// //     })
// //
// //     return [capitalsLetter, lowerCasesLetter, numbers, symbols]
// // }
// //
// // console.log(solve("*'&ABCDabcde12345"))


// function sumCubes(n){
//
//     let res = []
//
//    for (let i = 1; i <= n; i++ ) {
//
//        res.push(Math.pow(i, 3))
//    }
//
//    return res.reduce((a, b) => a + b)
// }
//
// console.log(sumCubes(3 ))

// function sumOfMinimums(arr) {
//
//     let res = []
//     for(let i = 0; i < arr.length; i++) {
//         res.push(Math.min(...arr[i]))
//     }
//
//
//     return res.reduce((a, b) => a + b)
// }
//
// console.log(sumOfMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
// ]))


// function addLength(str) {
//
//     let arr = str.split(' ')
//
//     let res = []
//
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i] + " " + arr[i].length)
//     }
//
//     return res
// }
//
// console.log(addLength("apple ban"))


// function getSumOfDigits(integer) {
//
//     return integer.toString().split('').map(e => +e).reduce((a,b) => a+b)
// }
//
// console.log(getSumOfDigits(123))

//preload variable: dict

// const makeBackronym = (string) => {
//     if (string === 'd') return 'disturbing gregarious mustache'
//     if (string === 'l') return 'literal klingon joke'
//     if (string === 'i') return 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'
//     if (string === 'c') return 'confident oscillating disturbing eager weird awesome rant stylish'
//     else {
//         const str = string.split(' ')
//
//
//         let result = []
//
//         for (let i = 0; i < str.length; i++ ) {
//              result.push(str[i][0])
//         }
//
//         return result.join('')
//     }
//
// };
//
// console.log(makeBackronym("disturbing gregarious mustache"))
// console.log(makeBackronym("d"))

// const number = (busStops) => {
//     let getOn = []
//     let getOff = []
//
//     for (let i = 0; i < busStops.length; i++) {
//         getOn.push(busStops[i][0])
//         getOff.push(busStops[i][1])
//     }
//     return getOn.reduce((a, b) => a + b) - getOff.reduce((a, b) => a + b)
// }
//
// console.log(number([[10, 0], [3, 5], [5, 8]]))

// function multiplyAll(arr) {
//     return function multiply_all (num) {
//         return arr.map(el => el * num)
//     }
// }
// console.log(multiplyAll([1, 2, 3]) (2))

// function truncateString(str, num) {
//     const string = str
//
//     if (num <= 3) {
//         return string.slice(0, num) + '...'
//     } else if (num > string.length) {
//         return string
//     } else {
//         return string.slice(0, (num -3)) + '...'
//     }
// }
//
// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 43))

// function cyclops(n) {
//
//     let binaryNum = n.toString(2).split('0');
//
//     console.log(binaryNum)
//
//     return binaryNum.length == 2 && binaryNum[0] == binaryNum[1];
// }
//
//
// console.log(cyclops(13))

// function sumNoDuplicates(numList) {
//
//
//     let res = []
//
//     for (let i = 0; i < numList.length; i++) {
//         numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i]) && res.push(numList[i])
//     }
//
//    return   res.length === 0 ? 0: res.reduce((a , b) => a + b)
//
//
// }
//
// console.log(sumNoDuplicates([3, 4, 3, 6]))
// console.log(sumNoDuplicates([]))
// console.log(sumNoDuplicates([1, 9, 9, 5, 7, 7, 6, 1, 5, 6]))

// function arithmeticSequenceElements(a, d, n) {
//     let result = [a,]
//     let num = a
//     for (let i = 0; i < n -1; i++) {
//         console.log({n})
//         num = num + d
//         result.push(num)
//     }
//     return result.join(", ")
// }
// console.log(arithmeticSequenceElements(1, 2, 5))

// function missingWord(nums) {
//
//     let sort = nums.sort((a, b) => a > b ? -1 : 1)
//
//     let result = sort.join(' ')
//
//     return result
//
// }
//
// console.log(missingWord([29, 31, 8]))

// function upperCase(str) {
//     return str.match(/[A-Z]/g)
// }
//
// console.log(upperCase("i lOvE a BeauTiFul cAr"))