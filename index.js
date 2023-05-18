const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*
const titleCased = tutorials.map(function(element) {
  const words = element.split(" ");
  const capitalizer = words.map((word) => {
   return word[0].toUpperCase() + word.substring(1)
  }).join(" ");
  return capitalizer;
})
*/

const titleCased = function(array) {
  //debugger;
  const newArr = [];
  array.map(function(element) {
    const words = element.split(" ");
    //debugger;
    const capitalizer = words.map(function(word) {
      return word[0].toUpperCase() + word.substring(1)
    }).join(" ");
    //debugger;
    newArr.push(capitalizer);
  });
  return newArr;
}

console.log(titleCased(tutorials));