let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const dataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null)
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
if (dataAcesso != null) {
    const dataAcesso = new Date();
    dataAcesso.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
