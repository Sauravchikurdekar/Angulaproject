import { Component, Inject } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-aplication',
  templateUrl: './book-aplication.component.html',
  styleUrls: ['./book-aplication.component.css']
})
export class BookAplicationComponent {


    title = 'bookapp';
  
  msg:string=" ";
  book: Book=new Book(1,"spring",200);
  
  
  
  books:Book[] = [];
  
  constructor(@Inject(HttpClient)private http:HttpClient){  }  //in java we use @autowire in angular we use @Inject anotation
  
    getData(){
  
      this.http.get<Book[]>("http://loalhost:8080/books",{responseType:'json'})
      .subscribe(data=>{
        this.books=data;
      })
  
    }
    oninsertClick(){
      this.http.post("http://localhost:8080/books",this.book,{responseType:'text'})
      .subscribe(data=>{
        this.msg=data
      });
    }
  
  }


