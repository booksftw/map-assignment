// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


var words = ["ground", "control", "to", "major", "tom"];

function map(wordsLibrary, cb) {
  var result = [];

  wordsLibrary.forEach( (word) => {
    var manipulatedWord = cb(word);
    result.push(manipulatedWord);
  });

  return result;
}

var length = map(words, function(word) {
  return word.length;
});

var upperCase = map(words, function(word) {
  return word.toUpperCase();
});

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

var random = map(words, function(word) {
  return word.length;
})

// console.log(length);
// console.log(upperCase);
// console.log(reverse);
console.log(random);

/* Why use callbacks at all?

You can use functions in other functions by passing it to another function.
This makes it dynamic! Which means that you can pass any callback to that function and get different results.

*/