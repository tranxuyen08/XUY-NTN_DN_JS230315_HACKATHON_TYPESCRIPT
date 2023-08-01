enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

interface Student {
  name: string;
  age: number;
  sex: Sex;
}

let students: Student[] = [];
let currentStudentToUpdate: Student | null = null;

function displayStudents() {
  const tableBody = document.getElementById("studentTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${i + 1}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.sex}</td>
      <td>
        <button class="btn-edit" onclick="handleEdit(${i})">Edit</button>
      </td>
    `;
    tableBody.appendChild(row);
  }
}

function handleFormSubmit(event: Event) {
  event.preventDefault();

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;
  const sexInput = document.getElementById("sex") as HTMLSelectElement;

  const name = nameInput.value;
  const age = parseInt(ageInput.value, 10);
  const sex = sexInput.value as Sex;

  const newStudent: Student = { name, age, sex };
  students.push(newStudent);
  displayStudents();

  nameInput.value = "";
  ageInput.value = "";
  sexInput.value = Sex.MALE;
}

const addStudentForm = document.getElementById("addStudentForm");
addStudentForm?.addEventListener("submit", handleFormSubmit);

displayStudents();

function handleEdit(index: number) {
  const studentToUpdate = students[index];
  const nameEdit = document.getElementById("nameEdit") as HTMLInputElement;
  const ageEdit = document.getElementById("ageEdit") as HTMLInputElement;
  const sexEdit = document.getElementById("sexEdit") as HTMLSelectElement;

  nameEdit.value = studentToUpdate.name;
  ageEdit.value = String(studentToUpdate.age);
  sexEdit.value = studentToUpdate.sex;

  console.log(nameEdit);
  console.log(ageEdit);
  console.log(sexEdit);
  currentStudentToUpdate = studentToUpdate;
}
function handleUpdate() {
  if (!currentStudentToUpdate) return;

  const nameEdit = document.getElementById("nameEdit") as HTMLInputElement;
  const ageEdit = document.getElementById("ageEdit") as HTMLInputElement;
  const sexEdit = document.getElementById("sexEdit") as HTMLSelectElement;

  const updatedName = nameEdit.value;
  const updatedAge = parseInt(ageEdit.value, 10);
  const updatedSex = sexEdit.value as Sex;

  currentStudentToUpdate.name = updatedName;
  currentStudentToUpdate.age = updatedAge;
  currentStudentToUpdate.sex = updatedSex;

  displayStudents();
  nameEdit.value = "";
  ageEdit.value = "";
  sexEdit.value = Sex.MALE;
}
function handleSort(column: string) {
  sortStudents(column);
}

function sortStudents(column: string) {
  switch (column) {
    case "name":
      students.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "age":
      students.sort((a, b) => a.age - b.age);
      break;
    case "sex":
      students.sort((a, b) => a.sex.localeCompare(b.sex));
      break;
    default:
      break;
  }
  displayStudents();
}
