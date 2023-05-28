export const enum CATEGORY {
    TI = "Technology",
    ADM = "Administration",
    ROMANCE = "Romance"
}

export type Book = {
    name: string,
    price: number,
    category?: CATEGORY
}

let book: Book = {
    name: "Python",
    price: 80
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
    console.log(book);
});
