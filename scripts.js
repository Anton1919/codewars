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


const orderedCount = function (text) {

    let result = [];

    for (let i = 0; i < text.length; i++) {
        let count = 0;

        for (let j = 0; j < result.length; j++) {
            if (result[j][0] === text[i]) {
                count++;
            }
        }

        if (count === 0) {
            for (let j = i; j < text.length; j++) {
                if (text[j] === text[i]) {
                    count++;
                }
            }
            result.push([text[i], count]);
        }
    }
    return result;

}
//[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount("abracadabra"))

////////////////////////////////////////////////////////////////////



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