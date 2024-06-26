var arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]


var originalArray = [1, 2, 3, 4, 5];
var reversedCopy = originalArray.slice().reverse();
console.log(reversedCopy); // [5, 4, 3, 2, 1]
