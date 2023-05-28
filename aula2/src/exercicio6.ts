import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { PessoaFisica } from "./pessoa-fisica";

const contaPessoaFisica1 = new PessoaFisica(
    "conta1",
    "111",
    "Centro",
    250,
    "12312312332",
    "21321231",
    "casado");

const contaPessoaFisica2 = new PessoaFisica(
    "conta2",
    "222",
    "Japiim",
    350,
    "12312312332",
    "21321231",
    "solteiro");

const c1 = new Cliente(1, "Maria", "maria@gmail.com");
const c2 = new Cliente(1, "John", "john@gmail.com");

contaPessoaFisica1.addContaCliente(c1);
contaPessoaFisica2.addContaCliente(c2);

let contas: Conta[] = [];
contas.push(contaPessoaFisica1);
contas.push(contaPessoaFisica2);

contas.forEach((conta: Conta) => {
    console.log(conta.cliente?.nome);
});