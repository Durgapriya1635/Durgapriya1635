import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Console } from 'console';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
userForm: FormGroup = this.fb.group({
  name: ["", [Validators.required, Validators.minLength(5)]],
  email: ["", [Validators.email, Validators.required]],
  mobile: ""
});
// studentlist=this.fb.group({
//   name:["",[Validators.required,Validators.minLength(5)]],
//   mark:["",Validators.required]
// })
// Form_builder=new FormBuilder();
// Form_builderlist=this.Form_builder.group({
//   city:"",
//   km:""
// })

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
  }

  getFormData() {
    return this.userForm;
  }


}
