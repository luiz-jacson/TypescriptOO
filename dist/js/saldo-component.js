let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const dataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null)
    elementoSaldo.textContent = formatarMoeda(saldo);
if (dataAcesso != null) {
    const dataAcessoDate = new Date();
    dataAcesso.textContent = formatarData(dataAcessoDate, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
