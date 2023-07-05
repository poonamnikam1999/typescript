 export class Student{
  id:number;
  fname:string;
  lname:string;

  constructor(id:number,fname:string,lname:string){
    this.id=id;
    this.fname=fname;
    this.lname=lname;
  }
  showData(){
    console.log("id :",this.id);
    console.log("firstname :",this.fname);
    console.log("lastname :",this.lname);
  }
  sendData(){
    return this.id+" "+this.fname+" "+this.lname;
  }
}