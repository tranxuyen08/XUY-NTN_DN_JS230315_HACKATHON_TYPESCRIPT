import React, { useState } from "react";
import "./styles.css";
import BaseAxios from "../api/BaseAxios";
import axios from "axios";

const FormStudent = () => {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [selectedFile, setSelectedFile] = useState<String | null>(null);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(event.target.value);
  };

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudentAge(event.target.value);
  };

  const handleChangeClass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudentClass(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(String(file) || null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Student Name:", studentName);
    console.log("Student Age:", studentAge);
    console.log("Student Class:", studentClass);

    const formData = new FormData();
    formData.append("name", studentName);
    formData.append("age", studentAge);
    formData.append("class", studentClass);
    if (selectedFile) {
      formData.append("avatar", String(selectedFile));
    }

    try {
      // Gọi API bằng Axios
      const response = await axios.post(
        "http://localhost:8000/api/v1/students",
        formData
      );
      console.log("Response:", response.data);
      setStudentName("");
      setStudentAge("");
      setStudentClass("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  return (
    <form
      method="POST"
      action="add-student"
      onSubmit={handleSubmit}
      className="form-student"
    >
      <div className="mb-3">
        <label className="form-label">Student Name</label>
        <input
          value={studentName}
          onChange={handleChangeName}
          className="form-control"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Student Age</label>
        <input
          value={studentAge}
          onChange={handleChangeAge}
          className="form-control"
          id="age"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Student Avatar</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="form-control"
          id="formFile"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Student Class</label>
        <input
          value={studentClass}
          onChange={handleChangeClass}
          className="form-control"
          id="class"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Tạo mới
      </button>
    </form>
  );
};

export default FormStudent;
