import studentMd, { GetMany } from "../model/student.model";
import { Student } from "../types/student";
import { Request, Response } from "express";
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: (req : any, file : any, cb : any) => {
    cb(null, './public/images');
  },
  filename: (req :any, file : any, cb : any) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req : any, file : any, cb :any) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single('avatar');

class StudentController {
  getMany(req: Request, res: Response) {
    try {
      let result: GetMany = studentMd.getManyModal();
      return res.status(200).json(result);
    } catch {
      return res.status(500).json({
        message: "Failed!",
      });
    }
  }

  deleteStudent(req: Request, res: Response) {
    try {
      let result: GetMany = studentMd.deleteModal(Number(req.params.studentId));
      return res.status(200).json(result);
    } catch {
      return res.status(500).json({
        message: "Failed!",
      });
    }
  }

  createStudent(req: Request, res: Response) {
    req.body.id = Date.now();
    req.body.avatar = "student-images/" + req.file?.filename;
    try {
      let result: GetMany = studentMd.create(req.body as Student);
      return res.status(200).json();
    } catch {
      return res.status(500).json({
        message: "Failed!",
      });
    }
  }
}
export default new StudentController();
