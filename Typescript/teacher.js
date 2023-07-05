"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.stu = new student_1.Student(12, "Poonam", "Nikam");
        this.getData();
    }
    Teacher.prototype.getData = function () {
        this.stu.showData();
    };
    return Teacher;
}());
var tea = new Teacher();
