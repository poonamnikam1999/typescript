export class Employee{
    fname: string;
    lname: string;
    id: number;
    
    constructor(fname:string,lname:string,id:number){
        this.id=id;
        this.fname=fname;
        this.lname=lname;
    }
    showData(){
        console.log("F Name",this.fname);
        console.log("l Name", this.lname);
        console.log("id",this.id);
        
    }
    sendData(){
        return this.fname+" "+this.lname+" "+this.id;
    }
}