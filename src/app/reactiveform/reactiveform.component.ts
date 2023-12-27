import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule,FormControlName } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Root } from '../root';

const URL = 'https://jsonplaceholder.typicode.com/users';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
title="angular reactive form";
users: Observable<any[]>;
ngOnInit() {
  console.log("hello");
//Fetch All Books from API
//@Params = URL: String
  this.fetchBooks(URL);
}
  constructor(private _http: HttpClient) { }
  loginForm = new FormGroup({
    user:new FormControl('aa',[Validators.required,Validators.email]),
    password:new FormControl('aa',[Validators.required,Validators.minLength(5)])
  });
  loginUser(){
    console.log("formtriggerd",this.loginForm.value);
  }
  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');//password shud match with above field name
  }

  root:Observable<Root>;
  fetchBooks(URL: string){
    console.log('before component xxxxxxxxxxx' + JSON.stringify(this.users));  
//    this._http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(result=>this.users=result);
    this._http.get<any>('https://jsonplaceholder.typicode.com/users').
    forEach(res=>console.log(res));
    this._http.get<any>('https://jsonplaceholder.typicode.com/users',{ observe: 'response' })
    .subscribe(
      response => console.log(response.body)
    );
    this._http.get<any>('https://jsonplaceholder.typicode.com/users')
    .subscribe((response) => {
      console.log(response);
      this.users=response;
    },(err) => {
      console.log(err+'errored');
    });
    this._http.get<any>('https://errorurljsonplaceholder.typicode.com/users')
    .subscribe((response) => {
      console.log(response);
    },(err) => {
      console.log(err+'error message with error url ');
    });


/*     this._http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map( response=>{
           response.JSON.Root
    }).forEach(res=>console.log(res));
     */
  

  }
}

/* pipe(map(response => ({
  name: response.name,
  birthYear: response.username,
  website: response.website,
  email: response.email
}) ) as Root ).subscribe(luke => console.log(luke+"sssssss")) */