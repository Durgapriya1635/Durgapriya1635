import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  list=["home","contact","course","duration","experience"];
  @Output() listData=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  eventTrigger(item){
    this.listData.next(item);
  }

}
