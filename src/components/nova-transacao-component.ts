import Conta from "../types/conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement
let saldo: number = Conta.getSaldo();

if (elementoFormulario != null) {
    elementoFormulario.addEventListener("submit", function (event) {
        try {
            event.preventDefault();
            if (elementoFormulario != null && !elementoFormulario.checkValidity()) {
                alert("Por favor, preencha todos os campos da transação")
                return;
            }


            const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement
            const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement
            const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement

            if (inputTipoTransacao != null && inputValor != null && inputData != null) {
                let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao
                let valor: number = inputValor.valueAsNumber

                const novaTransacao: Transacao = {
                    tipoTransacao: tipoTransacao,
                    data: new Date(),
                    valor: valor
                }

                Conta.registrarTransacao(novaTransacao)
                SaldoComponent.atualizar()
                elementoFormulario.reset()
            }
        }catch(erro){
            alert(erro.message)
        }
        })
}