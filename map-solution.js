//Return Values
//
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback ){
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    result.push(callback(word));
  }

  return result;
  // callback(result);
}

// Original
var wordLengthArray = map(words, function(word) {
  return word.length;
});

console.log(wordLengthArray);

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

map(words, function(word) {
  return word.split('').reverse().join('');
});



