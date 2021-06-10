import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-input-output';
  arr=["one","two","three"];
  obj={fname:"durga",lname:"priya"};
  emptyvalue="";
  emptyvalue1="";
 
  receivefun(event){
    this.title=event;
  
  }
  carreceivefun(car)
  {
    this.arr=car;
    console.log(this.arr);
  }
  eventoutput(event){
    this.emptyvalue=event;
    console.log(this.emptyvalue);
    
  }
  feedbackevent(event){
    this.emptyvalue=event;
  }
  

}
