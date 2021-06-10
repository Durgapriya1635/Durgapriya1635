import { Component, ElementRef,OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements AfterViewInit {
 
  model = {
    firstName:"",
    lastName:"",
    email:"",
    mobile:""
  }
  @ViewChild('fName') Elementrefname:ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.Elementrefname.nativeElement.focus();

  }

  onSubmit(){
    // alert(this.model);
    console.log("Form data: ", this.model)
  }

}
