"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var employee_1 = require("./employee");
var Manager = /** @class */ (function () {
    function Manager(mf, ml, ma) {
        this.e = new employee_1.Employee("shital", "mane", "ghansoli");
        this.mfname = mf;
        this.mlname = ml;
        this.maddress = ma;
        this.e.showData();
        this.e.empSalary(40000);
    }
    Manager.prototype.managerinfo = function () {
        console.log("mfname :", this.mfname);
        console.log("mlname :", this.mlname);
        console.log("maddress :", this.maddress);
    };
    Manager.prototype.mData = function (salary) {
        return "Manager Salary :" + salary;
    };
    return Manager;
}());
exports.Manager = Manager;
// let m=new Manager("mansi","divekar","navi mumbai");
