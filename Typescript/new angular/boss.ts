import { Employee } from "./employee";
import { Manager } from "./manager";

class Boss{
    mm=new Manager("mansi","divekar","navi mumbai");
    ee=new Employee("shital","mane","ghansoli");

    constructor(){
         this.mm.managerinfo();
         let md=this.mm.mData(60000);
        console.log(md);
        
         this.ee.showData();
         this.ee.empSalary(70000);
    }

}
let b=new Boss();