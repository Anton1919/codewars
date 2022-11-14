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

function spoonerize(words) {
  const picking = words.split(' ')[1];
  const picking1 = picking[0]; // p
  const str = words[0]; // n
  const str2 = words.split(' ')[1][0]; // p

  const niking = picking.replace(picking1, str);

  const word1 = words.replace(str, str2).replace().split(' ')[0];

  return word1 + ' ' + niking;
}

console.log(spoonerize('nit picking'));

//'pit nicking'
