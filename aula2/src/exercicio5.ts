type Status = "EM_ESTOQUE" |
    "ESGOTADO";

class Produto {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    status: Status;
    constructor(nome: string, categoria:
        string, preco: number, status: Status) {
        this.id = this.generateId();
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }

    // *Os metodos da classe pai deve ser acessiveis somente para clase filha
    //Gerando metodos gets e sets
    protected get getId() {
        return this.id;
    }
    protected get getNome() {
        return this.nome;
    }
    protected get getCategoria() {
        return this.categoria;
    }
    protected get getPreco() {
        return this.preco;
    }
    protected get getSatus() {
        return this.status;
    }
    protected set setNome(nome: string) {
        this.nome = nome;
    }
    protected set setCategoria(categoria: string) {
        this.categoria = categoria;
    }
    protected set setPreco(preco: number) {
        this.preco = preco;
    }
    protected set setSatus(status: Status) {
        this.status = status;
    }
    //gerando codigo pela classe
    protected generateId(): number {
        return Math.floor(Math.random() * 100);
    }
    protected adicionar(): void {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this.nome}, categoria:
        ${this.categoria}`)
    }
    protected mudarStatus(status: Status): void {
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
        this.validarFaixaEtaria(faixa_etaria);
    }
    get getFaixaEtaria() {
        return this._faixa_etaria;
    }
    set setFaixaEtaria(faixaEtaria: number) {
        this._faixa_etaria = faixaEtaria;
    }
    validarFaixaEtaria(faixaEtaria: number) {
        if(faixaEtaria > 12) {
            throw new Error("Faixa etaria inválida!");
        }
    }
}

const novoProdutoInfantil1 = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 12);
//console.log(novoProdutoInfantil.getNome);

//Erro Faixa Etaria invalida
//const novoProdutoInfantil2 = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 13);
console.log(novoProdutoInfantil1);
//console.log(novoProdutoInfantil2);