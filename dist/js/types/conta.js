import { TipoTransacao } from "./TipoTransacao.js";
let saldo = parseFloat(JSON.parse(localStorage.getItem("saldo"))) || 3000;
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    if (key == "data") {
        return new Date(value);
    }
    return value;
}) || [];
function debitar(valor) {
    if (saldo - valor >= 0) {
        saldo -= valor;
    }
    else {
        throw new Error("Saldo insuficiente");
    }
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que 0");
    }
    saldo += valor;
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDatadeAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error("Transação Inválida");
        }
        transacoes.push(novaTransacao);
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
        localStorage.setItem("saldo", JSON.stringify(saldo));
    }
};
export default Conta;
