import { json } from "express";
import db from "../../config/db.js";
import bcrypt from "bcrypt";
import {
  selectTodosUsuarios,
  selectUmUsuario,
  adicionarUsuario,
  apagarUsuario,
  atualizarUsuario,
  selectUsuarioEmail,
} from "./queriesUsuario.js";
 
export const getUsuarios = (req, res) => {
  db.query(selectTodosUsuarios, (err, result) => {
    if (err) throw err;
    if(result.length < 1){
      return res.status(500).json("Nenhum usuário cadastrado!");
    }
    res.status(200).json(result);
  });
};
 
export const getUsuarioById = (req, res) => {
  const { id } = req.params;
 
  db.query(selectUmUsuario, [id], (err, result) => {
    if (err) throw err;
    if(result.length < 1) return res.status(500).json("Nenhum usuário cadastrado com esse ID!")
 
    res.status(200).json(result);
  });
};
 
export const postUsuario = (req, res) => {
  const { email, senha } = req.body;
 
  db.query(selectUsuarioEmail, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0){
      return res.status(500).json("Usuário já cadastrado!");
    }else{
      //fazer o hash
      bcrypt.hash(senha, 10, (errBcrypt, hash) => {
        if (errBcrypt) {return res.status(500).send(`Erro ao criar o hash: ${errBcrypt}`)}
        db.query(adicionarUsuario, [email, hash], (err, result) => {
          if (err) throw err;
     
          res.status(200).json({ email, hash });
        });
      });
    }
  })
};
 
export const deleteUsuario = (req, res) => {
  let { id } = req.params;
 
  db.query(apagarUsuario, [id], (err, result) => {
    if (err) throw err;
    if(result.length < 1) return res.status(500).json("Nenhum usuário cadastrado com esse ID!")
    res.status(200).json("USUARIO DELETADO");
  });
};
 
export const putUsuario = (req, res) => {
  let { id } = req.params;
  let { email, senha } = req.body;
 
  db.query(selectUmUsuario, [id], (err, result) => {
    if (err) return err;
    //Validações
    if(result.length < 1) return res.status(500).json("Nenhum usuário cadastrado com esse ID!");
    if(email === "" || senha === "") return res.status(500).json("Email ou senha vazio");
   
    id = +id;
   
    bcrypt.hash(senha, 10, (errBcrypt, hash) => {
      if (errBcrypt) return res.status(500).json({mensagemErro: "Erro ao criar o hash da senha"});
 
      db.query(atualizarUsuario, [email, hash, id], (err, result) => {
        if (err) throw err;
        res.status(200).json({ id, email, senha });
      });
    })
  })
};