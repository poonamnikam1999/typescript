"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var Admin = /** @class */ (function () {
    function Admin() {
        this.t = new teacher_1.Teacher("Mansi", "divekar", 21);
        this.s = new student_1.Student(11, "poonam", "nikam");
        this.t.teacherName();
        var tdata = this.t.tData("Angular", 200);
        console.log(tdata);
        this.s.showData();
        this.s.assign("angular", 78);
    }
    return Admin;
}());
var a = new Admin();
