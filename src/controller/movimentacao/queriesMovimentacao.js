export const selectTodasMovimentacoes =
  "SELECT * FROM movimentacao where projetoid = ?";

export const selectUmaMovimentacao =
  "SELECT * FROM movimentacao where projetoid = ? and id = ?";

export const pegarSaldo = "SELECT saldo FROM projeto WHERE id = ?";
export const criarMovimentacao =
  "INSERT INTO movimentacao (projetoId ,valor,dataMovimento,notaFiscal,saldo,fornecedor,documento,historico,isEntrada) VALUES (?,?,?,?,?,?,?,?, ?);";
export const atualizarSaldo = "UPDATE projeto SET saldo = ? WHERE id = ?";

export const deletarMovimentacao = "DELETE FROM movimentacao where id = ?";

export const atualizarMovimentacao =
  "UPDATE movimentacao SET valor = ?, dataMovimento = ?, notaFiscal = ?, saldo = ?, fornecedor = ?, documento = ?, historico = ?, isEntrada = ? WHERE id = ?";
