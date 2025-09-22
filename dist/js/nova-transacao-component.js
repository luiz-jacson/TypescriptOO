const elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoFormulario != null) {
    elementoFormulario.addEventListener("submit", function (event) {
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
            let data = new Date(inputData.value);
            if (tipoTransacao == TipoTransacao.DEPOSITO) {
                saldo += valor;
            }
            else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.BOLETO) {
                if (saldo - valor >= 0) {
                    saldo -= valor;
                }
                else {
                    alert("Saldo Insuficiente");
                }
            }
            else {
                alert("Transação Inválida");
                return;
            }
            if (elementoSaldo != null) {
                elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
            }
            const novaTransacao = {
                tipoTransacao: tipoTransacao,
                data: new Date(),
                valor: valor
            };
            console.log(novaTransacao);
            elementoFormulario.reset();
        }
    });
}
