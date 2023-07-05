"use strict";
exports.__esModule = true;
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.ename = "ssc";
        this.edate = "20-3-2022";
        this.efee = 300;
        this.esub = "maths";
    }
    Exam.prototype.examData = function () {
        console.log(this.ename, this.edate, this.efee, this.esub);
    };
    return Exam;
}());
exports.Exam = Exam;
