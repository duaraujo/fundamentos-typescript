import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class PessoaJuridica extends Conta {
    cnpj?: string;
    razaoSocial?: string;
    nomeFantasia?: string;

    addContaCliente(cliente: Cliente): boolean {
        this.cliente = cliente;
        return true;
    }
    sacar(valor: number): boolean {
        if (valor > this.saldo) {
            return false;
        } else {
            return true;
        }
    }
    depositar(valor: number): number {
        this.saldo = valor;
        return this.saldo;
    }
}