"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var Author = /** @class */ (function () {
    function Author() {
        this.b = new book_1.Book(300, "APJ Abdul Kalam", "Wings Of Fire");
        this.getData();
    }
    Author.prototype.getData = function () {
        this.b.showData();
    };
    return Author;
}());
var a = new Author();
