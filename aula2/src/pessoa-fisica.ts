import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class PessoaFisica extends Conta {
    cpf: string;
    rg: string;
    estadoCivel: string;
    
    constructor(
        nome: string,
        numero: string,
        endereco: string,
        saldo: number,
        cpf: string, 
        rg: string, 
        estadoCivel: string) {
        super(nome, numero, endereco, saldo);
        this.cpf = cpf;
        this.rg = rg;
        this.estadoCivel = estadoCivel;
    }
    
    addContaCliente(cliente: Cliente): boolean {
        this.cliente = cliente;
        return true;
    }
    sacar(valor: number): boolean {
        if (valor > this.saldo) {
            return false;
        } else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor: number): number {
        this.saldo = this.saldo + valor;
        return this.saldo;
    }
}