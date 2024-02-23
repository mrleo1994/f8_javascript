// toán tử call : call ()
// ví dụ: showDialog()
// function sum(a, b) {
//   return (sum = a + b);
// }
// console.log(sum(1, 2));

// function writeMessage(message, message2) {
//   if (message) {
//     console.log(message);
//   }
//   if (message2) {
//     console.log(message2);
//   }
// }
// writeMessage("A", "B");

function writeLog() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} + `;
  }
  console.log(myString);
}
writeLog(1, 2, 3);
