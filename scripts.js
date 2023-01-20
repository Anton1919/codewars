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

const arr1 = [{firstName: 'Anna'}]
const arr2 = [{...arr1[0]}]
arr2[0].firstName = 'Artur'

console.log(arr1)
console.log(arr2)