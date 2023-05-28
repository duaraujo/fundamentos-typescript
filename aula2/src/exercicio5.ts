type Status = "EM_ESTOQUE" |
    "ESGOTADO";

class Produto {
    nome: string;
    categoria: string;
    preco: number;
    status: Status;
    constructor(nome: string, categoria:
        string, preco: number, status: Status) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }

    adicionar(): void {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this.nome}, categoria:
        ${this.categoria}`)
    }
    mudarStatus(status: Status): void {
        if (status === "EM_ESTOQUE") {
            this.status = "EM_ESTOQUE";
        } else {
            this.status = "ESGOTADO";
        }
    }
}

class ProdutoInfantil extends Produto {
    private _faixa_etaria: number;
    constructor(nome: string, categoria: string, preco: number, status:
        Status, faixa_etaria: number) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = faixa_etaria;
    }
}