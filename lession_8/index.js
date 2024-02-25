// Switch

var date = 2;

switch (date) {
  case 2: // ===2
    console.log("Hom nay la thu 2");
    break;
  case 3:
    console.log("Hom nay la thu 3");
    break;
  case 4:
    console.log("Hom nay la thu 4");
    break;
  case 5:
    console.log("Hom nay la thu 5");
    break;
  default:
    console.log("Khong biet");
}

// Toan tu 3 ngoi
var course = {
  name: "Javascript",
  price: 250,
};
var result = course.price > 0 ? `${course.price} tien` : "Mien phi";

console.log("🚘 ~ result:", result);
