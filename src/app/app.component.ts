import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { UserService } from './userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'uxtrendz';
  a:number=5;
  b:number=5;
  userAdded:false;
  promiseVal:string;
   myVarObject = {
    b: 'myProperty'
  };
  
  constructor(private userService:UserService){

  }
  ngOnInit(): void {

    this.userService.userAddedEvent.subscribe(data=>this.userAdded=data);

    let buyLaptop = new Promise(function(resolve,reject){
    if(DellAvailable()){
      //resolve(this.myVarObject);
     // resolve('promise is resolved');
    return setTimeout(()=>{
      resolve(title+' success')
    },3000)
    }
    else{
      reject('Promise is rejected');
    }
  } );

    buyLaptop.then(res=>{
      this.b=100;
      console.log('then code=>',res);
    }).catch(res=>{
      console.log('then reject please',res);
    })
    ;
//    console.log(this.DellAvailable());
var myVar = {
  b: 'myProperty'
};
myFunc(myVar);

function DellAvailable():boolean {
  console.log('inside dell'+myVar);
  return true;
}
function myFunc(a) {
  console.log(a);
  }


 }
  
}
