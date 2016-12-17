let http = require("http");

interface IBook  {
    title: string,
    author: string,
    published: Date,
    pages: number
}

function getBook(IBook) : void{
    console.log(IBook.title)
}
var book = {
    title: "Fuck TypeScript",
    author: "This shit is so cancer",
    published : new Date(),
    pages: 420
}

getBook(book);