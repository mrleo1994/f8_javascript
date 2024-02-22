// Khai bao bien
var fullName = "Pham Chi Thien";
var age = 30;
// Goi ham thong bao
// alert(fullName);
// alert(age);
// alert dung de thong bao khi load trinh duyet hien thao tac "ok"

// mot so ham built-in
// console

console.log(fullName); //.warn .error ...

//confirm
// confirm("Xac nhan ban du tuoi"); // thong bao khi load trang thao tac "ok" hoac "huy"

// prompt
// prompt("Xac nhan ban du tuoi"); // thong bao khi load trang thao tac 'dien vao o trong'

// set timeout
// setTimeout(function () {
//   alert("Thong bao");
// }, 10000); // thong bao sau 1 khoang thoi gian "10000ms" sau khi load trang

// set interval
setInterval(function () {
  console.log("1 so ngau nhien " + Math.random());
}, 3000); // thong bao sau 1 khoang thoi gian "1000ms" theo chu ky khi load trang
