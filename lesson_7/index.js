// Object Constructor

function User(firstName, lastName, avatar) {
  // var User = function()
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};

var author = new User("Thien", "Pham", "Avatar");
var user = new User("Nga", "Truong", "Avatar");

author.title = "Chia se dao tao tai f8";
user.comment = "Lieu co khoa hoc asp.net k ad";

console.log(author.getName());
console.log(user.getClassName());

// Doi tuong Date
var date = new Date();

console.log(typeof date);

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);
/**
// Math object
 * 
    Math.PI // so pi
    Math.round() // lam tron so
    Math.abs() // gia tri tuyet doi vi du (-4) -> (4)
    Math.ceil() // lam tron tren
    Math.floor() // lam tron duoi
    Math.random() // tra ve so ngau nhien nho hon 1
    //vi du:
    var random = Math.floor(Math.random() * 100);
var random5 = Math.floor(Math.random() * 2);
var bonus5 = ["Cuong hoa 5*", "Cuong hoa 4*"];
var random3 = Math.floor(Math.random() * 3);
var bonus3 = ["Cuong hoa 3*", "Cuong hoa 2*", "Cuong hoa 1*"];
var random2 = Math.floor(Math.random() * 2);
var bonus2 = ["Cuong hoa 2*", "Cuong hoa 1*"];
if (random < 10) {
  console.log(bonus5[random5]);
} else if (random >= 10 && random < 50) {
  console.log(bonus3[random3]);
} else {
  console.log(bonus2[random2]);
}
      Math.min() // tim so nho nhat
      Math.max() // tim so lon nhat
 */
