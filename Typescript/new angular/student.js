"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    Student.prototype.assign = function (subject, marks) {
        if (marks >= 35 && marks < 40) {
            console.log("you are passed");
        }
        else if (marks < 35) {
            console.log("you are failed");
        }
        else if (marks >= 40 && marks < 60) {
            console.log("C Grade");
        }
        else if (marks >= 60 && marks < 70) {
            console.log("B Grade");
        }
        else if (marks >= 70 && marks < 90) {
            console.log("A Grade");
        }
        else if (marks >= 90 && marks < 100) {
            console.log("A++ Grade");
        }
        else {
            console.log("not valid");
        }
        return subject + " " + marks;
    };
    Student.prototype.showData = function () {
        console.log("id :", this.id);
        console.log("fname :", this.fname);
        console.log("lname :", this.lname);
    };
    return Student;
}());
exports.Student = Student;
