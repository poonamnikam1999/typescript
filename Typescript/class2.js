"use strict";
exports.__esModule = true;
exports.Sam = exports.Book = exports.Students = void 0;
var Students = /** @class */ (function () {
    function Students() {
    }
    Students.prototype.userNames = function (fName, lName, address) {
        return fName + lName + address;
    };
    return Students;
}());
exports.Students = Students;
var r = new Students();
var s = r.userNames("poonam", "nikam", "pune");
console.log(s);
// ==================================================================================//
// export class Employee{
//     // function
//     emp(firstName:string,lastName:string){
//      return firstName+lastName;
//     }
// }
// // variable
// let e=new Employee();
// let m=e.emp("mansi","divekar")
// console.log(m);
// ==================================================================================//
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.put = function (name, price) {
        return name + price;
    };
    return Book;
}());
exports.Book = Book;
var b = new Book();
var p = b.put("wings of fire", 300);
console.log(p);
// ==================================================================================//
var Sam = /** @class */ (function () {
    function Sam() {
    }
    Sam.prototype.sai = function (fname, lname) {
        console.log(fname, lname);
    };
    return Sam;
}());
exports.Sam = Sam;
// ==================================================================================//
var Dom = /** @class */ (function () {
    function Dom() {
    }
    return Dom;
}());
