import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  register: FormGroup;


  constructor(private fB: FormBuilder) { 
    this.register = this.fB.group({
      firstname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,20}/)]],
      lastname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,20}/)]],
      class: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]+/)]],
      year: ['', [Validators.required, Validators.pattern(/^(194[5-9]|19[5-9]\d|200\d|201[0-7])$/)]],
      percentage: ['', [Validators.required, Validators.pattern(/^100$|^[0-9]{1,2}$/)]],

  });
  }

  ngOnInit() {
      
  }

  submit(){
    console.log(this.register);
  }

}
