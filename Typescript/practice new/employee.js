"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.eid = 11;
        this.efname = "poonam";
        this.elname = "nikam";
        this.eaddress = "ghansoli";
        this.esalary = 10000;
    }
    Employee.prototype.employeeData = function () {
        console.log("Employee Data :", this.eid, this.efname, this.elname, this.eaddress, this.esalary);
    };
    return Employee;
}());
exports.Employee = Employee;
