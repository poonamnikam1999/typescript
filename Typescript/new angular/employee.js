"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(fname, lname, address) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
    }
    Employee.prototype.empSalary = function (salary) {
        if (salary < 20000) {
            var tsalary = salary + 100;
            console.log("total salary :", tsalary);
        }
        else if (salary >= 20000 && salary < 40000) {
            var tsalary = salary + 200;
            console.log("total salary :", tsalary);
        }
        else if (salary >= 40000 && salary <= 60000) {
            var tsalary = salary + 300;
            console.log("total salary :", tsalary);
        }
        else {
            console.log("not match amount");
        }
        return "Employee salary :" + salary;
    };
    Employee.prototype.showData = function () {
        console.log("Emp FirstName :", this.fname);
        console.log("Emp LastName :", this.lname);
        console.log("Emp Address :", this.address);
    };
    return Employee;
}());
exports.Employee = Employee;
