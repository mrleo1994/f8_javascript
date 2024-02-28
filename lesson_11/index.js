// Callback

/**
 * 1. Là hàm
 * 2. Truyền qua đối số
 * 3. Được gọi lại (trong hàm nhận đối số)
 */

Array.prototype.myMap = function (cb) {
  var outPut = [];
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    var result = cb(this[i], i);
    outPut.push(result);
  }
  return outPut;
};
const numbers = [1, 2, 3];

console.log(
  numbers.myMap(function (number, index) {
    return number * 2;
  })
); // Output: [2, 4, 6]
