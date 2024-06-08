import db from "../../config/db.js";

import {
  selecionarUnicoProjeto,
  selectTodosProjetos,
  adicionarNovoProjeto,
  alterarUmProjeto,
  deletarUmProjeto,
} from "./queriesProjeto.js";

//VERIFICAR E INFORMAR SE NÃO EXISTEM PROJETOS
export const getProjetos = (req, res) => {
  db.query(selectTodosProjetos, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

//VERIFICAR E INFORMAR SE NÃO EXISTE O PROJETO
export const getUmProjeto = (req, res) => {
  const { id } = req.params;

  db.query(selecionarUnicoProjeto, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

//VERIFICAR E INFORMAR SE OS DADOS SAO VALIDOS
//ARRUMAR FORMATAÇÃO DA DATA
export const adicionarProjeto = (req, res) => {
  const { nome } = req.body;
  const novaData = new Date();

  //fazer verificação de id existente
  db.query(adicionarNovoProjeto, [nome, novaData, 0], (err, result) => {
    if (err) throw err;
    res.status(200).json({ nome, novaData, saldo: 0 });
  });
};

//VERIFICAR E INFORMAR SE O ID EXISTE
export const deletarProjeto = (req, res) => {
  const { id } = req.params;

  //fazer verificação de projeto existente
  db.query(deletarUmProjeto, [id], (err, result) => {
    if (err) throw err;
    res.status(201).json(`Projeto de ID = ${id} foi DELETADO`);
  });
};

//VERIFICAR E INFORMAR SE OS DADOS SAO VALIDOS
//ASSIM COMO VERIFICAR E INFORMAR SE ID EXISTE
export const alterarProjeto = (req, res) => {
  const { id } = req.params;
  const { nome, saldo } = req.body;

  //fazer verificação de projeto existente
  db.query(alterarUmProjeto, [nome, saldo, id], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id, nome, saldo });
  });
};
