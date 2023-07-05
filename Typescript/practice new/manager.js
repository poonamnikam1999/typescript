"use strict";
// import { Employee } from "./employee";
exports.__esModule = true;
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.mid = 1;
        this.mfname = "shital";
        this.mlname = "mane";
        this.maddress = "thane";
        this.msalary = 30000;
    }
    Manager.prototype.managerData = function () {
        // this.e.employeeData();
        console.log("Manager Data :", this.mid, this.mfname, this.mlname, this.maddress, this.msalary);
    };
    return Manager;
}());
exports.Manager = Manager;
