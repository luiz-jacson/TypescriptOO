import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = parseFloat(JSON.parse(localStorage.getItem("saldo"))) || 3000;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key:string, value:string) =>{
    if(key == "data"){
        return new Date(value);
    }

    return value;
}) || [];

function debitar(valor: number):void {
    if (saldo - valor >= 0) {
        saldo -= valor;
    }else{
        throw new Error("Saldo insuficiente")
    }
}

function depositar(valor: number):void{ 
    if(valor <= 0){
        throw new Error("O valor a ser depositado deve ser maior que 0")
    }
    saldo += valor;
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDatadeAcesso(): Date {
        return new Date()
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor)
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.BOLETO) {
            debitar(novaTransacao.valor)
        } else {
            throw new Error("Transação Inválida")
        }
        transacoes.push(novaTransacao)
        localStorage.setItem("transacoes", JSON.stringify(transacoes))
        localStorage.setItem("saldo", JSON.stringify(saldo))
    }

}

export default Conta;