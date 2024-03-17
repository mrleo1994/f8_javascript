/**
 * 1. Let, const
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow Function
 * 5. Classes
 * 6. Default Parameter values
 * 7. Destructuring
 * 8. Rest Parameter
 * 9. Spread Operator
 * 10. Enhanced Object Literals
 * 11. Tagged Template Literals
 * 12. Modules
 */

// 1. Var/ Let, Const: Scope, Hosting
// 2. Const/ Var, Let: Assignment
function highlight([fist, ...rest], ...values) {
  return values.reduce((acc, cur) => {
    return `${acc} <span class="highlight">${cur}</span>${rest.shift()}`;
  }, fist);
}

const name = "Sanyat";
const age = 25;

const html = highlight`Hello ${name}, i'm ${age} years old`;
console.log(html);
document.body.innerHTML = html;
