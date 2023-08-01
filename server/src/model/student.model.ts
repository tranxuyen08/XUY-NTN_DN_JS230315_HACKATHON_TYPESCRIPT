import path from "path";
import fs from "fs";
import { Student } from "../types/student";
// import { StudentModel } from "../model/student.model";

export interface GetMany {
  status: boolean;
  message: string;
  data: Student[];
}

export default {
  getManyModal: (): GetMany => {
    try {
      const students: Student[] = JSON.parse(
        fs.readFileSync(path.join(__dirname, "student.json"), {
          encoding: "utf8",
        })
      );
      return {
        status: true,
        message: "Get student ok!",
        data: students,
      };
    } catch (err) {
      return {
        status: false,
        message: "Get student failed!",
        data: [],
      };
    }
  },
  addStudent: (req: Request, res: Response) => {},
  deleteModal: (idStudent: number) => {
    try {
      let students: Student[] = JSON.parse(
        fs.readFileSync(path.join(__dirname, "student.json"), {
          encoding: "utf8",
        })
      );
      students = students.filter((value, index) => value.id != idStudent);
      fs.writeFileSync(
        path.join(__dirname, "student.json"),
        JSON.stringify(students)
      );
      return {
        status: true,
        message: "Delete successfully!",
        data: students,
      };
    } catch (err) {
      return {
        status: false,
        message: "Delete failed!",
        data: [],
      };
    }
  },
  create: (newStudent: Student) => {
    try {
      let students: Student[] = JSON.parse(
        fs.readFileSync(path.join(__dirname, "student.json"), {
          encoding: "utf8",
        })
      );
      students.push(newStudent);
      fs.writeFileSync(
        path.join(__dirname, "student.json"),
        JSON.stringify(students)
      );
      return {
        status: true,
        message: "Create Successfully!",
        data: students,
      };
    } catch (err) {
      return {
        status: false,
        message: "Create failed!",
        data: [],
      };
    }
  },
};
