import { Cliente } from "./cliente";

export abstract class Conta {
    nome: string;
    numero: string;
    endereco: string;
    saldo: number;
    cliente?: Cliente;
    constructor(nome: string,numero: string, endereco: string, saldo: number) {
        this.nome = nome;
        this.numero = numero;
        this.endereco = endereco;
        this.saldo = saldo;
    }
    abstract addContaCliente(dados: Cliente): boolean;
    abstract sacar(valor: number): boolean;
    abstract depositar(valor: number): number;
}