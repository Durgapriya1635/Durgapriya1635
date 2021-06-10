import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside1',
  templateUrl: './aside1.component.html',
  styleUrls: ['./aside1.component.scss']
})
export class Aside1Component implements OnInit {
  list=["list1","list2","list3","list4","list5"];
   selectedlist="";
   @Output() inform=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  Onclick(item){
    this.selectedlist=item;
    this.inform.next();
    // console.log(this.selectedlist);
  }

}
