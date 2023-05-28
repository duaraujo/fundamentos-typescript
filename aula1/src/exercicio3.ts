import { Book, CATEGORY } from "./exercicio2"

let book: Book = {
    name: "Python",
    price: 80,
    category: CATEGORY.TI
}

let book1: Book = {
    name: "Java",
    price: 70
}
let book2: Book = {
    name: "O silêncio da manhã",
    price: 60,
    category: CATEGORY.ROMANCE
}
let book3: Book = {
    name: "Marketing Digital",
    price: 50,
    category: CATEGORY.ADM
}
const library = [book, book1, book2, book3];

library.forEach(book => {           
    let newName = book.name.split(' ').length > 1 ? book.name.toLowerCase() : book.name.toUpperCase();
    book.name = newName;
    console.log(book);
});
