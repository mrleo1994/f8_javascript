// To string
// .toString() chuyen number thanh string
// To Fixed
// .toFixed() lam tron number
// Kiem tra kieu du lieu co phai la number hay khong (ke ca NaN)

// Cach 1:
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// Cach 2:
function isNumber1(value) {
  return typeof value === "number" && isFinite(value);
}

console.log(isNumber(999)); // true
console.log(isNumber("abc")); // false
console.log(isNumber("100")); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / "abc")); // false
