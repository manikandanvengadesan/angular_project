import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  myForm = new FormGroup({
  nameField : new FormControl("",Validators.required),
  emailId : new FormControl("",[Validators.required, Validators.email])
  })
  get name(){
    return this.myForm.get('name')
  }
  get email(){
    return this.myForm.get('email')
  }
  validateForm(){
    alert('Form submit successfull')
  }
}
