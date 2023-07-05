"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    Student.prototype.showData = function () {
        console.log("id :", this.id);
        console.log("firstname :", this.fname);
        console.log("lastname :", this.lname);
    };
    Student.prototype.sendData = function () {
        return this.id + " " + this.fname + " " + this.lname;
    };
    return Student;
}());
exports.Student = Student;
