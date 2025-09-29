import Conta from "../types/conta.js";
import SaldoComponent from "./saldo-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
let saldo = Conta.getSaldo();
if (elementoFormulario != null) {
    elementoFormulario.addEventListener("submit", function (event) {
        try {
            event.preventDefault();
            if (elementoFormulario != null && !elementoFormulario.checkValidity()) {
                alert("Por favor, preencha todos os campos da transação");
                return;
            }
            const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
            const inputValor = elementoFormulario.querySelector("#valor");
            const inputData = elementoFormulario.querySelector("#data");
            if (inputTipoTransacao != null && inputValor != null && inputData != null) {
                let tipoTransacao = inputTipoTransacao.value;
                let valor = inputValor.valueAsNumber;
                const novaTransacao = {
                    tipoTransacao: tipoTransacao,
                    data: new Date(),
                    valor: valor
                };
                Conta.registrarTransacao(novaTransacao);
                SaldoComponent.atualizar();
                elementoFormulario.reset();
            }
        }
        catch (erro) {
            alert(erro.message);
        }
    });
}
