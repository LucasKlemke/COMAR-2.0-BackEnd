export const selectTodosUsuarios = "SELECT * FROM usuario";

export const selectUmUsuario = "SELECT * FROM usuario WHERE id = ?";

export const adicionarUsuario =
  "INSERT INTO usuario (email,senha) VALUES (?,?)";

  export const pegarIdNovoUsuario = 
  "SELECT max(id) as id from usuario"

export const apagarUsuario = "DELETE FROM usuario WHERE id = ?";

export const atualizarUsuario =
  "UPDATE usuario SET email = ?, senha = ? WHERE id = ?";
