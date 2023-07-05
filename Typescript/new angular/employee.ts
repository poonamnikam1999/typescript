export class Employee{
    fname:string;
    lname:string;
    address:string;

    constructor(fname:string,lname:string,address:string){
        this.fname=fname;
        this.lname=lname;
        this.address=address;
    }
    empSalary(salary:number){
        if(salary>=10000 && salary<20000){
             let tsalary=salary+100;
             console.log("total salary :",tsalary);
             
        }
        else if(salary>=20000 && salary<40000){
            let tsalary=salary+200;
            console.log("total salary :",tsalary);
            
        }
        else if(salary>=40000 && salary<=60000){
            let tsalary=salary+300;
            console.log("total salary :",tsalary);

        }
        else{
            console.log("not match amount");

        }

        return "Employee salary :"+salary;
    }
    showData(){
        console.log("Emp FirstName :",this.fname);
        console.log("Emp LastName :",this.lname);
        console.log("Emp Address :",this.address);

    }
}