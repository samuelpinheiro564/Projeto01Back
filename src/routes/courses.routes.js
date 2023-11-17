import { Router } from "express";
import {
    getCursos,
    createCurso,
    updateCurso,
    deleteCurso
} from "../controller/courses.controller.js"

const rotacurso = Router();

rotacurso.get("/cursos",getCursos);

rotacurso.post("/cursos",createCurso);

rotacurso.delete("/cursos/:id", deleteCurso);

rotacurso.put("/cursos/:id",updateCurso);

export default rotacurso;