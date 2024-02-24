var myString = "Hoc JS tai JS F8";

// 1. length
console.log(myString.length); // .length

// 2. Find index
console.log(myString.indexOf("JS", 6)); // .indexOf
console.log(myString.lastIndexOf("JS")); // .lastIndexOf tim nguoc lai .indexOf
console.log(myString.search("JS")); // .search chi tim duoc JS dau tien

// 3. Cut string
console.log(myString.slice(4, 6)); // .slice cat theo vi tri cai dat, su dung so am vi du "(-3,-1)" de lam nguoc lai

// 4. Replace
console.log(myString.replace("JS", "Javascript")); // .replace thay de chu dau tien, su dung "/JS/g" de thay doi tat ca

// 5. Convert to upper case
console.log(myString.toUpperCase()); // doi thanh chu viet hoa

// 6. Convert to lower case
console.log(myString.toLowerCase()); // doi thanh chu viet thuong

// 7. Trim
console.log(myString.trim()); //  loai bo cac khoang trang khong can thiet ( 2 dau)

// 8. Split
var language = "Javascript, PHP, Ruby";
console.log(language.split(", ")); // tach string thanh array

// 9. Get a character by index
const myString2 = "Chi Thien";
console.log(myString2[2]); // lay 1 ky tu trong string
