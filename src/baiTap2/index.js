var Sex;
(function (Sex) {
    Sex["MALE"] = "MALE";
    Sex["FEMALE"] = "FEMALE";
})(Sex || (Sex = {}));
var students = [];
var currentStudentToUpdate = null;
function displayStudents() {
    var tableBody = document.getElementById("studentTableBody");
    if (!tableBody)
        return;
    tableBody.innerHTML = "";
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var row = document.createElement("tr");
        row.innerHTML = "\n    <td>".concat(i + 1, "</td>\n      <td>").concat(student.name, "</td>\n      <td>").concat(student.age, "</td>\n      <td>").concat(student.sex, "</td>\n      <td>\n        <button class=\"btn-edit\" onclick=\"handleEdit(").concat(i, ")\">Edit</button>\n      </td>\n    ");
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
var addStudentForm = document.getElementById("addStudentForm");
addStudentForm === null || addStudentForm === void 0 ? void 0 : addStudentForm.addEventListener("submit", handleFormSubmit);
displayStudents();
function handleEdit(index) {
    var studentToUpdate = students[index];
    var nameEdit = document.getElementById("nameEdit");
    var ageEdit = document.getElementById("ageEdit");
    var sexEdit = document.getElementById("sexEdit");
    nameEdit.value = studentToUpdate.name;
    ageEdit.value = String(studentToUpdate.age);
    sexEdit.value = studentToUpdate.sex;
    console.log(nameEdit);
    console.log(ageEdit);
    console.log(sexEdit);
    currentStudentToUpdate = studentToUpdate;
}
function handleUpdate() {
    if (!currentStudentToUpdate)
        return;
    var nameEdit = document.getElementById("nameEdit");
    var ageEdit = document.getElementById("ageEdit");
    var sexEdit = document.getElementById("sexEdit");
    var updatedName = nameEdit.value;
    var updatedAge = parseInt(ageEdit.value, 10);
    var updatedSex = sexEdit.value;
    currentStudentToUpdate.name = updatedName;
    currentStudentToUpdate.age = updatedAge;
    currentStudentToUpdate.sex = updatedSex;
    displayStudents();
    nameEdit.value = "";
    ageEdit.value = "";
    sexEdit.value = Sex.MALE;
}
function handleSort(column) {
    sortStudents(column);
}
function sortStudents(column) {
    switch (column) {
        case "name":
            students.sort(function (a, b) { return a.name.localeCompare(b.name); });
            break;
        case "age":
            students.sort(function (a, b) { return a.age - b.age; });
            break;
        case "sex":
            students.sort(function (a, b) { return a.sex.localeCompare(b.sex); });
            break;
        default:
            break;
    }
    displayStudents();
}
