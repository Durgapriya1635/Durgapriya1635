import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @Input() passingvalue;
  @Input() arrvalue:[];
  @Input() objvalue:{fname:"",lname:""};
  Feedback=["good","better","notbad","worst"]
  car="this is my ne car"
  userData="";
  // num=100;
  @Output() sendData=new EventEmitter();
  @Output() carData=new EventEmitter();
  @Output() feedbackData=new EventEmitter();

  constructor(public commonService: CommonService) { 
   
  }

  ngOnInit(): void {
  }
  clickfunction(){
   
    this.sendData.next(this.Feedback);
    this.userData = this.commonService.getUserData();
  }
  carfunction(){
    this.carData.next(this.car);
  }
  Feedbackclick(item){
    this.feedbackData.next(item);
    // console.log()

  }

}
