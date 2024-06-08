import express from "express";
import {
  adicionarProjeto,
  alterarProjeto,
  deletarProjeto,
  getProjetos,
  getUmProjeto,
} from "../controller/projeto/projetoController.js";
import {
  getMovimentacoes,
  getUmaMovimentacao,
  postMovimentacao,
  deleteMovimentacao,
  putMovimentacao,
} from "../controller/movimentacao/movimentacaoController.js";

const { Router } = express;

const router = Router();

//PROJETOS
router.get("/", getProjetos);
router.get("/:id", getUmProjeto);
router.post("/", adicionarProjeto);
router.delete("/:id", deletarProjeto);
router.put("/:id", alterarProjeto);

//MOVIMENTAÇÕES
router.get("/:projetoid/movimentacoes", getMovimentacoes);
router.get("/:projetoid/movimentacoes/:id", getUmaMovimentacao);
router.post("/:projetoid/movimentacoes/", postMovimentacao);
router.delete("/:projetoid/movimentacoes/:id", deleteMovimentacao);
router.put("/:projetoid/movimentacoes/:id", putMovimentacao);
export default router;
