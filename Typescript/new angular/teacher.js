"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var student_1 = require("./student");
var Teacher = /** @class */ (function () {
    function Teacher(tfn, tln, tid) {
        this.s = new student_1.Student(11, "Poonam", "Nikam");
        this.tFname = tfn;
        this.tLname = tln;
        this.tId = tid;
        this.s.showData();
        this.s.assign("Maths", 90);
    }
    Teacher.prototype.teacherName = function () {
        console.log(this.tId);
        console.log(this.tFname);
        console.log(this.tLname);
    };
    Teacher.prototype.tData = function (subject, salary) {
        return subject + " " + salary;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
//  let a=new Teacher("poonam","nikam",1)
