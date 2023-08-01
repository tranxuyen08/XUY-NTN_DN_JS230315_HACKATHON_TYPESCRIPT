var greeting = "Xin chào";
function sayHello(userName) {
    return "".concat(greeting, ", ").concat(userName, "!");
}
var userName = "Rikkei";
var message = sayHello(userName);
document.getElementById("app").innerHTML = message;
//bai 2
var Sex;
(function (Sex) {
    Sex["MALE"] = "MALE";
    Sex["FEMALE"] = "FEMALE";
})(Sex || (Sex = {}));
// Array of students
var students = [];
function displayStudents() {
    var tableBody = document.getElementById("studentTableBody");
    if (!tableBody)
        return;
    tableBody.innerHTML = "";
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(student.name, "</td>\n      <td>").concat(student.age, "</td>\n      <td>").concat(student.sex, "</td>\n    ");
        tableBody.appendChild(row);
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var sexInput = document.getElementById("sex");
    var name = nameInput.value;
    var age = parseInt(ageInput.value, 10);
    var sex = sexInput.value;
    var newStudent = { name: name, age: age, sex: sex };
    students.push(newStudent);
    displayStudents();
    nameInput.value = "";
    ageInput.value = "";
    sexInput.value = Sex.MALE;
}
// Add event listener to the form
var addStudentForm = document.getElementById("addStudentForm");
addStudentForm === null || addStudentForm === void 0 ? void 0 : addStudentForm.addEventListener("submit", handleFormSubmit);
// Display initial students
displayStudents();
