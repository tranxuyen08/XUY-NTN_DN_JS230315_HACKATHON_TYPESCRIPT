import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

interface students {
  name: string;
  age: any;
  class: string;
  avatar: string;
  id: number
}
const TableStudent = () => {
  const [students, setStudents] = useState<students[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/students");
      setStudents(response.data.data); // Lưu danh sách sinh viên vào state
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handeDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/students/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  return (
    <div className="table-student">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Avatar</th>
            <th scope="col">Class</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students?.map((item, index) => {
              return (
                <tr key={item?.id}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.age}</td>
                  <td>
                    {item?.avatar && (
                      <img
                        alt="Avatar"
                        src={`http://localhost:8000/${item?.avatar}`}
                      />
                    )}
                  </td>
                  <td>{item?.class}</td>
                  <td className="btn-action">
                    <button onClick={() =>handeDelete(item?.id)}>X</button>
                    <button>Update</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableStudent;
