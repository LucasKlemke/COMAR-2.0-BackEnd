import express from "express";
import {
  getUsuarios,
  getUsuarioById,
  postUsuario,
  deleteUsuario,
  putUsuario,
} from "../controller/usuario/usuarioController.js";

const { Router } = express;

const router = Router();

// router.get('/', (req, res) => res.send("teste"));
router.get("/", getUsuarios);
router.get("/:id", getUsuarioById);
router.post("/", postUsuario);
router.delete("/:id", deleteUsuario);
router.put("/:id", putUsuario);

export default router;
