"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.sname = "Poonam";
        this.slname = "Nikam";
        this.smnumber = 5467893245;
        this.semail = "pnikam23@gmail.com";
    }
    Student.prototype.studentData = function () {
        console.log(this.sname, this.slname, this.smnumber, this.semail);
    };
    return Student;
}());
exports.Student = Student;
