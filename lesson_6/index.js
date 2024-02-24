// kiem tra doi tuong co phai array khong
// Array.isArray(array); // true or false

// truy xuat do dai mang
// .length

/**
 * lam viec voi array
 *
 * // keyword: Javascript array methods
 *
 * 1. To String -> chuyen du lieu sang string -> .toString
 * 2. Join -> chuyen array sang string -> .join
 * 3. Pop -> xoa element cuoi cua array va tra lai array da xoa -> .pop
 * 4. Push -> them element 1 hoac nhiu vao cuoi cua array va tra lai array da them -> .push
 * 5. Shift -> nguoc lai voi pop, xoa element dau cua array -> .shift
 * 6. Unshift -> nguoc lai voi push them vao dau array -> .unshift
 * 7. Splicing -> xoa hoac thay the element vao array -> xoa .splice(1, 1) , thay the .splice(1, 1, "ABC")
 * 8. Concat -> noi 2 array voi nhau -> array1.concat(array2)
 * 9. Slicing -> cat element -> .slice(1, 2) -> cat tu index[1] toi index[2]
 */
function getFirstElement(array) {
  return (result = array.slice(0, 1));
}
// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
