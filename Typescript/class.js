"use strict";
//  class:function and statement combination..
// import/export inheritance
// 
exports.__esModule = true;
exports.Employee = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
    }
    //  fName:string="";
    //  lName:string="";
    Student.prototype.userName = function (fName, lName, address) {
        // this.fName=fName
        // this.lName=lName
        console.log(fName, lName, address);
    };
    return Student;
}());
exports.Student = Student;
// let user=new Student();
// user.userName("poonam","nikam")
// ===================== example 2 ====================
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.data = function (firstName, lastName) {
        // console.log(firstName,lastName)
        return firstName + lastName;
    };
    return Employee;
}());
exports.Employee = Employee;
