import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class HttpUtilityService {
constructor(private http:HttpClient){

}

product():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

 recieveEvents(observable: Observable<string>) {
  observable.subscribe({
  next: str => {
  console.log(`Event received: ${str}`);
  },
  complete: () => console.log("Sequence ended")
  });
 }
  sendEvents(observer: Observer<string>) {
  let count = 5;
  for (let i = 0; i < count; i++) {
     observer.next(`${i + 1} of ${count}`);
  }
  observer.complete();
 }

}
