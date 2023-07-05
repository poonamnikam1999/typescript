"use strict";
exports.__esModule = true;
var exam_1 = require("./exam");
var student_1 = require("./student");
var Admin = /** @class */ (function () {
    function Admin() {
        this.s = new student_1.Student();
        this.e = new exam_1.Exam();
    }
    Admin.prototype.studInfo = function () {
        this.s.studentData();
        this.e.examData();
    };
    return Admin;
}());
var a = new Admin();
a.studInfo();
