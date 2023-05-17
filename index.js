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

const titleCased = tutorials.map(function(element) {
  const words = element.split(" ");
  const capitalizer = words.map((word) => {
   return word[0].toUpperCase() + word.substring(1)
  }).join(" ");
  return capitalizer;
})

console.log(titleCased);

/*
const words = tutorials[0].split(" ");
const sample = words.map((word) => {
  return word[0].toUpperCase() + word.substring(1);
}).join(" ");
*/

/*
const titleCased = tutorials.map(function(element) {
  const words = tutorials[element].split(" ");
  words.map((word) => {
    return word[0].toUpperCase() + word.substring(1)
  }).join(" ");
})
*/

/*
const titleCased = function(collection) {
  for (const element of collection)
  return tutorials
}
*/

