import { TipoTransacao } from "./TipoTransacao.js";

//Tipos Personalizados (Type Alias)
export type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}