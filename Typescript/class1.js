"use strict";
exports.__esModule = true;
var class_1 = require("./class");
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.Stud = new class_1.Student();
    }
    Teacher.prototype.stu = function (fName, lName, address) {
        this.Stud.userName(fName, lName, address);
    };
    return Teacher;
}());
var tea = new Teacher();
tea.stu("shital", "mane", "ghansoli");
// ======================================================================================================
//
var Boss = /** @class */ (function () {
    function Boss() {
        this.emp = new class_1.Employee();
    }
    Boss.prototype.empl = function (firstName, lastName) {
        // this.emp.data(firstName,lastName)
        var r = this.emp.data(firstName, lastName);
        console.log("poonam Nikam");
    };
    return Boss;
}());
// let b=new Boss();
// b.empl("poonam","nikam")
