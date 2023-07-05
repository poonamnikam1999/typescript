
// HR:human resource

export class HR{
    hid:number;
    hfname:string;
    hlname:string;
    haddress:string;
    hsalary:number;

    constructor(){
        this.hid=2;
        this.hfname="mansi";
        this.hlname="divekar";
        this.haddress="navi-mumbai";
        this.hsalary=50000;
    }

    hrData(){
    

        console.log("HR Data :",this.hid,this.hfname,this.hlname,this.haddress,this.hsalary);
        
    }
}