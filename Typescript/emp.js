"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(fname, lname, id) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    Employee.prototype.showData = function () {
        console.log("F Name", this.fname);
        console.log("l Name", this.lname);
        console.log("id", this.id);
    };
    Employee.prototype.sendData = function () {
        return this.fname + " " + this.lname + " " + this.id;
    };
    return Employee;
}());
exports.Employee = Employee;
