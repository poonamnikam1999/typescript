"use strict";
exports.__esModule = true;
var class2_1 = require("./class2");
var Teachers = /** @class */ (function () {
    function Teachers() {
        this.stud = new class2_1.Students();
    }
    Teachers.prototype.stu = function (fName, lName, address) {
        var s = this.stud.userNames(fName, lName, address);
        console.log(s);
    };
    return Teachers;
}());
var t = new Teachers();
t.stu("shital", "mane", "Ghansoli");
// ================================================================================================//
// class Boss{
//     empl=new Employee()
//     back(firstName:string,lastName:string){
//           let a=this.empl.emp(firstName,lastName);
//           console.log(a)
//     }
// }
// let b=new Boss();
// b.back("prajakta","chandrashekhar")
// ============================================================================================//
var Author = /** @class */ (function () {
    function Author() {
        this.bk = new class2_1.Book();
    }
    Author.prototype.out = function (name, price) {
        var o = this.bk.put(name, price);
        console.log(o);
    };
    return Author;
}());
var a = new Author();
a.out("turning points", 200);
// ======================================================================================//
var Happy = /** @class */ (function () {
    function Happy() {
        this.s = new class2_1.Sam();
    }
    Happy.prototype.sad = function (fname, lname) {
        this.s.sai(fname, lname);
    };
    return Happy;
}());
var h = new Happy();
h.sad("samarth", "nikam");
// ======================================================//
var Bom = /** @class */ (function () {
    function Bom(fname, lname, id) {
        this.fname = "p";
        this.lname = "n";
        this.id = 1;
        console.log(fname, lname, id);
    }
    return Bom;
}());
