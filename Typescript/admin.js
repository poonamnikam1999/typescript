"use strict";
exports.__esModule = true;
var emp_1 = require("./emp");
var Admin = /** @class */ (function () {
    function Admin() {
        this.emp = new emp_1.Employee("milind", "turerao", 10);
        this.getData();
    }
    Admin.prototype.getData = function () {
        this.emp.showData();
    };
    return Admin;
}());
var admin = new Admin();
// admin.getData();
