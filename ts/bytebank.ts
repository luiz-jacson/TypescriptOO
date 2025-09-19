let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor")
if (elementoSaldo != null)
    elementoSaldo.textContent = "R$ " + saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement
if (elementoFormulario != null) {
    elementoFormulario.addEventListener("submit", function (event) {
        event.preventDefault();
        if (elementoFormulario != null && !elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação")
            return;
        }


        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement
        if (inputTipoTransacao != null && inputValor != null && inputData != null) {
            let tipoTransacao: string = inputTipoTransacao.value
            let valor: number = inputValor.valueAsNumber
            let data: Date = new Date(inputData.value)


            if (tipoTransacao == "Depósito") {
                saldo += valor;
            } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
                if (saldo - valor >= 0) {
                    saldo -= valor;
                } else {
                    alert("Saldo Insuficiente")
                }
            } else {
                alert("Transação Inválida")
                return;
            }
            if(elementoSaldo != null){
                elementoSaldo.textContent = "R$ " + saldo;
            }
            const novaTransacao = {
                tipoTransacao: tipoTransacao,
                valor: valor,
                data: data,
            }

            elementoFormulario.reset()
        }
    })
}
