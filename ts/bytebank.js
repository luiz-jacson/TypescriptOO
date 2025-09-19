var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null)
    elementoSaldo.textContent = "R$ " + saldo;
var elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoFormulario != null) {
    elementoFormulario.addEventListener("submit", function (event) {
        event.preventDefault();
        if (elementoFormulario != null && !elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação");
            return;
        }
        var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        var inputValor = elementoFormulario.querySelector("#valor");
        var inputData = elementoFormulario.querySelector("#data");
        if (inputTipoTransacao != null && inputValor != null && inputData != null) {
            var tipoTransacao = inputTipoTransacao.value;
            var valor = inputValor.valueAsNumber;
            var data = new Date(inputData.value);
            if (tipoTransacao == "Depósito") {
                saldo += valor;
            }
            else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
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
                elementoSaldo.textContent = "R$ " + saldo;
            }
            var novaTransacao = {
                tipoTransacao: tipoTransacao,
                valor: valor,
                data: data,
            };
            elementoFormulario.reset();
        }
    });
}
