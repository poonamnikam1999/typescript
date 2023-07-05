import { Book } from "./book";


class Author{
    constructor(){
        this.getData();
    }
b=new Book(300,"APJ Abdul Kalam","Wings Of Fire");

getData(){
    this.b.showData();
}
}
let a=new Author();
