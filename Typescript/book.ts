 export class Book{
         price:number;
         authorname:string;
         bookname:string;

    constructor(price:number,authorname:string,bookname:string){
       this.price=price;
       this.authorname=authorname;
       this.bookname=bookname;
    }
    showData(){
        console.log("Book Price :",this.price);
        console.log("Author Name :",this.authorname);
        console.log("Book Name :",this.bookname);
        
    }

    sendData(){
        return this.price+" "+this.authorname+" "+this.bookname;
    }
}