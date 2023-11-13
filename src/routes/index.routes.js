import { Router } from "express";

const rotas = Router();

rotas.get("/", (req, res) => {
  return res.status(200).send(
    {
        message:`Servidor Ok`
    }
  );
    });
export default rotas;