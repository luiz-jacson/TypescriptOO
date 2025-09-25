let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
const dataAcesso = document.querySelector(".block-saldo time") as HTMLElement
if (elementoSaldo != null)
    elementoSaldo.textContent = formatarMoeda(saldo);

if(dataAcesso != null){
    const dataAcessoDate:Date = new Date();
    dataAcesso.textContent = formatarData(dataAcessoDate, FormatoData.DIA_SEMANA_DIA_MES_ANO)
}
