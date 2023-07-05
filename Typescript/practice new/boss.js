"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var hr_1 = require("./hr");
var manager_1 = require("./manager");
var Boss = /** @class */ (function () {
    function Boss() {
        this.e1 = new employee_1.Employee();
        this.m1 = new manager_1.Manager();
        this.h1 = new hr_1.HR();
    }
    Boss.prototype.bossData = function () {
        this.e1.employeeData();
        this.m1.managerData();
        this.h1.hrData();
    };
    return Boss;
}());
var b1 = new Boss();
b1.bossData();
