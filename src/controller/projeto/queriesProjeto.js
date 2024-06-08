export const selectTodosProjetos = "select * from projeto";

export const selecionarUnicoProjeto = "select * from projeto where id = ?";

export const adicionarNovoProjeto =
  "INSERT INTO projeto (nome, dataCriacao, saldo) values (?,?,?)";

export const alterarUmProjeto =
  "UPDATE projeto SET nome = ?, saldo = ? where id = ?";

export const deletarUmProjeto = `DELETE FROM projeto WHERE id = ?`;
