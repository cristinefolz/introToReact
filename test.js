// var numbers = [1,2,3,4,5,6,7,8,9,10];

// var filteredArr = numbers.filter(function(num){
// 	return num > 5;
// });



// var words = ['hello', 'goodbye', 'stuff', 'hi', 'so'];


// var filteredWords = function(word){
// 	return word.length > 2;
// }

// var mapWords = function (word){
// 	return ('the word is: ' + word);
// }


// var filteredStrs = words.filter(filteredWords);
// var mapStrs = words.map(mapWords);

// var mapAndFilter = words.filter(filteredWords).map(mapWords) // words.filter(filteredWords) is returning an array that .map can be called on



// console.log(mapAndFilter);



var candy = [
	{ name: 'snickers', type: 'chocolate' },
	{ name: 'starburst', type: 'corn syrup'},
	{ name: 'sour patch kids', type: 'corn syrup'},
	{ name: 'hersheys', type: 'chocolate'},
	{ name: 'vines', type: 'licorice'},
	{ name: 'reeses', type: 'chocolate'},
];

var chocCandy = function(c){
	return c.type === 'chocolate';
}

var nonChocCandy = function(c) {
	return c.type !== 'chocolate';
}

var candyName = function(c){
	return c.name + ' is type: ' + c.type;
}
var chocolate = candy.filter(nonChocCandy).map(candyName);


console.log(chocolate);

