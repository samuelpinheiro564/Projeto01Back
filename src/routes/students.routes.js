import { Router } from "express";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controller/students.controller.js"

const studentRoutes = Router();

studentRoutes.get("/students",getStudents ); 

studentRoutes.post("/students",createStudent );

studentRoutes.delete("/students/:id",deleteStudent );

studentRoutes.put ("/students/:id",updateStudent);

export default studentRoutes;