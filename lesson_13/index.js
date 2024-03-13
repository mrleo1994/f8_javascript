/**
 * JSON
 * 1. Là một định dạng dữ liệu
 * 2. JavaScript Object Notation
 * 3. JSON: Number, Boolean, Null, Array, Object, String
 * Mã hóa: JSON.stringify()
 * Giải mã: JSON.parse()
 */

// var a = "1";
// console.log(JSON.parse(a));

/**
 * Promise
 *  - Sync // chạy 1 chiều từ trên xuống
 *  - Async : setTimeout, setInterval, fetch, XMLHttpRequest, file reading, geolocation, ... // Callback
 *  - Pending
 *  - Fulfilled
 *  - Rejected-
 * 1. new Promise
 * 2. Executor
 * 3. resolve, reject
 * 4. then, catch, finally
 *
 * Chain
 *
 * 1.Promise.resolve
 * 2.Promise.reject
 * 3.Promise.all
 *
 * Thư viện: output luôn luôn là một promise
 */

// var courseApi = "http://localhost:3000/courses";

// stream
// fetch(courseApi)
//   .then(function (response) {
//     return response.json();
//     // JSON.parse: JSON -> Javascript types
//   })
//   .then(function (courses) {
//     var htmls = courses.map(function (course) {
//       return `<li>
//       <h2>${course.name}</h2>
//       <p>${course.author}</p>
//       </li>`;
//     });
//     var html = htmls.join("");
//     document.getElementById("course-block").innerHTML = html;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
var courseApi = "http://localhost:3000/courses";
function start() {
  getCourses(renderCourses);
  handleAddCourse();
}

start();

// Functions
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback)
    .catch(function (error) {
      console.log(error);
    });
}

function renderCourses(courses) {
  var listCourses = document.getElementById("list-courses");
  var htmls = courses.map(function (course) {
    return `<li>
    <h4>${course.name}</h4>
    <p>${course.author}</p>
    </li>`;
  });
  listCourses.innerHTML = htmls.join("");
}

function handleAddCourse() {
  var addBtn = document.getElementById("btn-add-course");
  addBtn.onclick = function () {
    var name = document.getElementById("name").value;
    var author = document.getElementById("author").value;
    var formData = {
      name: name,
      author: author,
    };
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(courseApi, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (course) {
        console.log(course);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
