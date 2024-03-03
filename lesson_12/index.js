/**
 * HTML DOM
 *
 * 1. element: ID, class, tag, CSS selector, HTML collection
 *  ID: .getElementById()
 *  class: .getElementsByClassName()
 *  tag: .getElementByTagName('h1')
 *  css selector: .querySelector('.box .heading-2:nth-child(3)')
 *  css selector: .querySelectorAll('.box .heading-2')
 *  html collection: ít sử dụng => document.forms['form-1']
 *
 * 2. attribute
 *  var headingElement = document.querySelector('h1');
 *  headingElement.title = 'Heading';
 *  headingElement.setAttribute('href', 'heading');
 *
 * 3. text
 *  innerText, textContent
 *
 *  var headingElement = document.querySelector('.heading');
 *  headingElement.innerText = 'New heading';
 *
 * innerHTML, outerHTML
 *
 */
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

// function render(courses) {
//   var ulElement = document.querySelector("ul");
//   for (var currentArray of courses) {
//     ulElement.innerHTML += `<li>${currentArray}</li>`;
//   }
//   return ulElement;
// }
// render(courses);
function render(courses) {
  var ulElement = document.querySelector("ul");
  for (var i in courses) {
    ulElement.innerHTML += `<li>${courses[i]}</li>`;
  }
}
render(courses);
