
export class Manager{
    mid:number;
    mfname:string;
    mlname:string;
    maddress:string;
    msalary:number;

    constructor(){
        this.mid=1;
        this.mfname="shital";
        this.mlname="mane";
        this.maddress="thane";
        this.msalary=30000;
    }
    managerData(){
        // this.e.employeeData();

        console.log("Manager Data :",this.mid,this.mfname,this.mlname,this.maddress,this.msalary);
        
    }
}