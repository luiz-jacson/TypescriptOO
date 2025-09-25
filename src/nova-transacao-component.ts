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
            let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao
            let valor: number = inputValor.valueAsNumber
            let data: Date = new Date(inputData.value)

            if (tipoTransacao == TipoTransacao.DEPOSITO) {
                saldo += valor;
            } else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.BOLETO) {
                if (saldo - valor >= 0) {
                    saldo -= valor;
                } else {
                    alert("Saldo Insuficiente")
                }
            } else {
                alert("Transação Inválida")
                return;
            }
            if (elementoSaldo != null) {
                elementoSaldo.textContent = formatarMoeda(saldo);
            }

            const novaTransacao: Transacao = {
                tipoTransacao: tipoTransacao,
                data: new Date(),
                valor: valor
            }

            console.log(novaTransacao)

            elementoFormulario.reset()
        }
    })
}