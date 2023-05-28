let livro1: object = {
    nome: "Java",
    preco: 70,
    categoria: 'TI'
}
let livro2: object = {
    nome: "O silêncio da manhã",
    preco: 60,
    categoria: 'ROMANCE'
}
let livro3: object = {
    nome: "PHP",
    preco: 50,
    categoria: 'ADM'
}
const biblioteca = [livro1, livro2, livro3];

biblioteca.forEach(livro => {
    console.log(livro);
});