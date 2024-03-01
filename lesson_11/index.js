// Callback

/**
 * 1. Là hàm
 * 2. Truyền qua đối số
 * 3. Được gọi lại (trong hàm nhận đối số)
 */

// Array.prototype.myMap = function (cb) {
//   var outPut = [];
//   var arrayLength = this.length;
//   for (var i = 0; i < arrayLength; i++) {
//     var result = cb(this[i], i);
//     outPut.push(result);
//   }
//   return outPut;
// };
// const numbers = [1, 2, 3];

// console.log(
//   numbers.myMap(function (number, index) {
//     return number * 2;
//   })
// ); // Output: [2, 4, 6]
Array.prototype.myFilter = function (cb) {
  var op = [];
  for (var i in this) {
    if (this.hasOwnProperty(i) && cb(this[i], i, this)) {
      op.push(this[i]);
    }
  }
  return op;
};

/**
Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */
const numbers = [1, 2, 3, 4];

console.log(
  numbers.myFilter(function (number, index) {
    return index % 2 === 0;
  })
);
console.log(
  numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
  })
);
