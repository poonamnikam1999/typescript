"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(price, authorname, bookname) {
        this.price = price;
        this.authorname = authorname;
        this.bookname = bookname;
    }
    Book.prototype.showData = function () {
        console.log("Book Price :", this.price);
        console.log("Author Name :", this.authorname);
        console.log("Book Name :", this.bookname);
    };
    Book.prototype.sendData = function () {
        return this.price + " " + this.authorname + " " + this.bookname;
    };
    return Book;
}());
exports.Book = Book;
