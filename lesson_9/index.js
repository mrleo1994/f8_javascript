/**
 * vòng lặp
 * 
 * 1.for loop
 * // For loop
for (var i=1; i <=1000; i++){
     console.log(i);
}
var getRandNumbers = function (min, max, length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    result[i] = Math.random() * (max - min) + min;
  }
  return result;
};

console.log("🚘 ~ getRandNumbers:", getRandNumbers(10, 1, 3));
 *
function getTotal(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
var myArray = [5, 2, 3];
console.log(myArray[1]);
console.log(getTotal(myArray));
// Output: 6
 * 
    For/in

    function run(object) {
    var result = [];
    for (var key in object){
        result.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    };
    return result;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

    For/of

    Break & continue
    Break thoát khỏi vòng lập
    continue quay lại đầu vòng lặp

    Nested loop
    vòng lặp lồng nhau

    Đệ quy:
    1. Xác định điểm dừng
    2.Logic handle
 */
