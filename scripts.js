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