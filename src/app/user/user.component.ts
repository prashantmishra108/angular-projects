import { Component, OnInit ,OnDestroy, Output, EventEmitter} from '@angular/core';
import {of,timer, Observable, Subscription, Subject } from 'rxjs';
import { delay,map,tap,filter } from 'rxjs/operators';
import { HttpUtilityService } from '../httpUtility service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit,OnDestroy {
  private mysubs:Subscription;
  constructor(private httpUtility:HttpUtilityService) { }
  products=[];
  @Output() dataFromCurrentUserComponentToAppComponent = new EventEmitter<string>();
  onclick(){
    console.log("hel");
    alert('hello');
    this.dataFromCurrentUserComponentToAppComponent.emit("dataFromCurrentUserComponentToAppComponent");
  }
  ngOnInit() {
    this.httpUtility.product().subscribe(productData=>this.products=productData);    
    console.log('Hello',this.products);
    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('Promise working1');
        resolve('Promise working2');
        resolve('Promise working3');
        resolve('Promise working4');
        resolve('Promise working5');
      },5000)
    })

    promise.then(result=>console.log(result));
//observable
    const observable = new Observable(subscribe=>{
      setTimeout(()=>{
        subscribe.next('observable works1');
        subscribe.next('observable works2');
        subscribe.next('observable works3');
        subscribe.next('observable works4');
        subscribe.next('observable works5');
      },1000)
    });
    observable.subscribe(result=>console.log(result+'123'));

    this.mysubs = observable.pipe(filter(d=>d==='observable works1'))
      .subscribe(result=>console.log(result));

      let subject = new Subject<string>();
this.httpUtility.recieveEvents(subject);
this.httpUtility.sendEvents(subject);
    }

    ngOnDestroy(): void {
    this.mysubs.unsubscribe();
      }
}
 
