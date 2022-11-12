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

function getAverage(marks) {
  const sum = marks.reduce((a, b) => a + b);
  const sum2 = Math.floor(sum / marks.length);

  return sum2;
}

console.log(getAverage([2, 2, 2, 2]));
