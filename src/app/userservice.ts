import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class UserService {
  constructor(private http:HttpClient){}
  userAddedEvent = new EventEmitter<boolean>();
  addUser(){
    this.userAddedEvent.emit(true);
  }
}
