import db from "../../config/db.js";
import {
  selectTodosUsuarios,
  selectUmUsuario,
  adicionarUsuario,
  apagarUsuario,
  atualizarUsuario,
} from "./queriesUsuario.js";

//VERIFICAR SE EXISTEM USUARIOS OU NAO
export const getUsuarios = (req, res) => {
  db.query(selectTodosUsuarios, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

//VERIFICAR SE ID EXISTE OU NAO
export const getUsuarioById = (req, res) => {
  const { id } = req.params;

  db.query(selectUmUsuario, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

//VERIFICAR SE CAMPOS VAZIOS OU INVALIDOS SAO ENVIADOS
export const postUsuario = (req, res) => {
  const { email, senha } = req.body;

  db.query(adicionarUsuario, [email, senha], (err, result) => {
    if (err) throw err;
    res.status(200).json({ email, senha });
  });
};

//VERIFICAR SE ID EXISTE
export const deleteUsuario = (req, res) => {
  let { id } = req.params;

  db.query(apagarUsuario, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json("USUARIO DELETADO");
  });
};

//VERIFICAR SE ID EXISTE E SE OS CAMPOS NÃO SÃO VAZIOS E SÃO VALIDOS
//ASSIM COMO VERIFICAR E INFORMAR SE ID EXISTE
export const putUsuario = (req, res) => {
  let { id } = req.params;
  let { email, senha } = req.body;

  id = +id;

  db.query(atualizarUsuario, [email, senha, id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ id, email, senha });
  });
};
