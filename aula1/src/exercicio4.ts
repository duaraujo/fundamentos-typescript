import { Book } from "./exercicio2"
type Author = {
    name: string
}
let author1: Author = {
    name: "Jhon Blake"
} 
let book1: Book = {
    name: "Python",
    price: 80
}
let book2: Book = {
    name: "Java",
    price: 60
}
type key = 'author' | 'book';
type map = { [keys in key]: Author | Book };
const values: map[] = [];
let v1: map = { author: author1, book: book1 };
let v2: map = { author: author1, book: book2 };
values.push(v1);
values.push(v2);
values.forEach((key) => {
    console.log(key.book);
});