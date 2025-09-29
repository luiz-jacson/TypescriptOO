import { formatarMoeda } from "../utils/formatters.js";
import { formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/formatoData.js";
import Conta from "../types/conta.js";


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
const dataAcesso = document.querySelector(".block-saldo time") as HTMLElement

if(dataAcesso != null){
    dataAcesso.textContent = formatarData(Conta.getDatadeAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
}


renderizarSaldo();

export function renderizarSaldo(): void{
    if (elementoSaldo != null)
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
}


const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}


export default SaldoComponent;

