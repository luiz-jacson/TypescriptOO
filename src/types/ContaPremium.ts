import { ContaCorrente } from "./Conta";
import { TipoTransacao } from "./TipoTransacao";
import { Transacao } from "./Transacao";

export class ContaPremium extends ContaCorrente{

    constructor(nome:string) {
        super(nome);
    }

    registrarTransacao(transacao: Transacao): void {

        if(transacao.tipoTransacao == TipoTransacao.DEPOSITO){
            console.log("Essa conta ganha um bônus de 0,5 centavos")
            transacao.valor += 0.5
        }
        super.registrarTransacao(transacao)
    }

}
const conta = new ContaPremium("Luiz Jacson")
export default conta;