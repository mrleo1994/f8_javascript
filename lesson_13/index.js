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

var courseApi = "http://localhost:3000/courses";

// stream
fetch(courseApi)
  .then(function (response) {
    return response.json();
    // JSON.parse: JSON -> Javascript types
  })
  .then(function (courses) {
    var htmls = courses.map(function (course) {
      return `<li>
      <h2>${course.name}</h2>
      <p>${course.author}</p>
      </li>`;
    });
    var html = htmls.join("");
    document.getElementById("course-block").innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
