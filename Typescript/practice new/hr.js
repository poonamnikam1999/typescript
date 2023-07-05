"use strict";
// import { Employee } from "./employee";
// import { Manager } from "./manager";
exports.__esModule = true;
exports.HR = void 0;
// HR:human resource
var HR = /** @class */ (function () {
    function HR() {
        this.hid = 2;
        this.hfname = "mansi";
        this.hlname = "divekar";
        this.haddress = "navi-mumbai";
        this.hsalary = 50000;
    }
    HR.prototype.hrData = function () {
        // this.ee.employeeData();
        // this.mm.managerData();
        console.log("HR Data :", this.hid, this.hfname, this.hlname, this.haddress, this.hsalary);
    };
    return HR;
}());
exports.HR = HR;
