import { FormatoData } from "../types/formatoData.js"
import { formatarData } from "../utils/formatters.js"

const extratoElement = document.querySelectorAll(".transacao-item time")

const dataHoje:Date = new Date()

for(let i = 0; i < extratoElement.length; i++){
    extratoElement[i].textContent = formatarData(dataHoje, FormatoData.DIA_MES)
}

