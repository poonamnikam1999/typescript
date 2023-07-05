"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var manager_1 = require("./manager");
var Boss = /** @class */ (function () {
    function Boss() {
        this.mm = new manager_1.Manager("mansi", "divekar", "navi mumbai");
        this.ee = new employee_1.Employee("shital", "mane", "ghansoli");
        this.mm.managerinfo();
        var md = this.mm.mData(60000);
        console.log(md);
        this.ee.showData();
        this.ee.empSalary(70000);
    }
    return Boss;
}());
var b = new Boss();
