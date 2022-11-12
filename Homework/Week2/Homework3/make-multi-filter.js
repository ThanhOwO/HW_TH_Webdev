
var arrayFilterer1 = MakeMultiFilter([1, 2, 3]);

// Call arrayFilterer1 (with a callback function) to filter out all the numbers
// not equal to 2.
arrayFilterer1(function (elem) {
 return elem !== 2;
}, function (currentArray) {
 // 'this' within the callback function should refer to originalArray which is [1, 2, 3]
 console.log(this); 
 console.log(currentArray); 
});

// Call arrayFilterer1 (without a callback function) to filter out all the
// elements not equal to 3.
arrayFilterer1(function (elem) {
 return elem !== 3;
});

// Calling arrayFilterer1 with no filterCriteria should return the currentArray.
var currentArray = arrayFilterer1();
console.log('currentArray', currentArray);

// Since arrayFilterer returns itself, calls can be chained
function filterTwos(elem) { return elem !== 2; }

function filterThrees(elem) { return elem !== 3; }

var arrayFilterer2 = MakeMultiFilter([1, 2, 3]);

var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();

console.log('currentArray2', currentArray2); 

// Multiple active filters at the same time
var arrayFilterer3 = MakeMultiFilter([1, 2, 3]);
var arrayFilterer4 = MakeMultiFilter([4, 5, 6]);
console.log(arrayFilterer3(filterTwos)()); 
console.log(arrayFilterer4(filterThrees)()); 
