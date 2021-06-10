import { Component, OnInit,Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Aside1Component } from '../aside1/aside1.component';
import { CommonService } from '../common.service';
import { ReactiveComponent } from '../reactive/reactive.component';
import { TemplateFormComponent } from '../template-form/template-form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  // @ViewChild('templateForm') templateForm: TemplateFormComponent;
   @ViewChild('reactiveForm') reactiveForm: ReactiveComponent;
  @Input() carvalue;
  @Input() feedbackvalue:[];
  @Input() reasign_emtyval:"";
  public templateComponent;
  public reactiveFormData: FormGroup;
  asideVariable;
  // @ViewChild('aside1')aside1: Aside1Component
 public isFormValid = false;
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.reactiveFormData = this.reactiveForm.getFormData();
  }

  onSubmit() {
    this.isFormValid = this.reactiveFormData.valid;
  }

}
