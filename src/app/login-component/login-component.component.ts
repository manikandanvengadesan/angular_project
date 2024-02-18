import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl('')
  });
  userName = 'Mani';
  password = ''
  constructor(private route:Router, private service: CommonServiceService){
    
  }

  navigateToUser() {
    if (this.loginForm.controls['userName'].value == 'Mani' && this.loginForm.controls['userPassword'].value == 'pass@123') {
      this.service.setUserName(this.loginForm.controls['userName'].value);
      this.route.navigate(['/users']);
    } else {
      alert('Worng credentials! try again...');
    }
  }
}
