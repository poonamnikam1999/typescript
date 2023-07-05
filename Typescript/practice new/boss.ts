import { Employee } from "./employee";
import { HR } from "./hr";
import { Manager } from "./manager";

class Boss{
    e1=new Employee();
    m1=new Manager();
    h1=new HR();

    bossData(){
        this.e1.employeeData();
        this.m1.managerData();
        this.h1.hrData();
    }
}
let b1=new Boss();
b1.bossData();