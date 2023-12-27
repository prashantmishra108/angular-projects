import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CompWithHostBindingComponent } from './comp-with-host-binding.component';
import { MyInputWithAttributeDecoratorComponent } from './my-input-with-attribute-decorator.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    CompWithHostBindingComponent,
    MyInputWithAttributeDecoratorComponent,
    RxjsComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule { 

  
}
