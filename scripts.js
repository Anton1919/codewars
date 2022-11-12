// function buildString(...template){
//   return `I like ${template.join(',')}!`;
// }

// console.log(buildString('Cheese','Milk','Chocolate'));

function isPalindrome(x) {
  return x.split('').reverse().join('').toLowerCase() === x.toLowerCase()
    ? true
    : false;
}

console.log(isPalindrome('Abba'));
