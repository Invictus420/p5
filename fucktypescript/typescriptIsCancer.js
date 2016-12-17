var http = require("http");
function getBook(IBook) {
    console.log(IBook.title);
}
var book = {
    title: "Fuck TypeScript",
    author: "This shit is so cancer",
    published: new Date(),
    pages: 420
};
getBook(book);
