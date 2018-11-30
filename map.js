// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback){
  var result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

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

console.log(length);
console.log(upperCase);
console.log(reverse);