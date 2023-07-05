class Car{
    cname:string;
   cengine:string;
   ccolor:string;
   cprice:number;
  
   constructor(){
    this.cname="bmw";
    this.cengine="petrol";
    this.ccolor="black";
    this.cprice=200000;

   }
   
   showData(){
    console.log(this.cname,this.cengine,this.ccolor,this.cprice)
   }
}
let c=new Car();
c.showData()